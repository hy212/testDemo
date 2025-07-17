const API_PREFIX = `/image`;
const Text2textApiUrl = `${API_PREFIX}/text2text`;
const ApiMethodMap = {
  [`${API_PREFIX}/get`]: getImageHandler, // 获取图片API路径
  [`${API_PREFIX}/update`]: updateImageHandler, // 更新图片API路径
};

/**
 * 主请求监听器
 * 监听fetch事件并处理所有传入请求
 * @param {FetchEvent} event - fetch事件对象
 */
addEventListener("fetch", async (event) => {
  const res = await handleRequest(event.request);
  event.respondWith(res);
});

/**
 * 请求处理主函数
 * 处理HTTP请求并返回响应
 * @param {Request} req - 传入的HTTP请求对象
 * @returns {Response} 处理后的HTTP响应
 */
async function handleRequest(req) {
  const { method, url } = req;
  const apiUrl = new URL(url).pathname;
  try {
    if (ApiMethodMap && ApiMethodMap[apiUrl]) {
      if (method !== "GET") {
        return new Response(`暂不支持${method}请求，请使用GET请求`, {
          status: 405,
        });
      }
      const params = new URL(req.url).searchParams;
      const path = params.get("path") || "";
      if (!path) {
        return new Response("参数path不能为空", {
          status: 400,
        });
      }
      const rsp = await ApiMethodMap[apiUrl](path);
      return rsp;
    }
    return new Response("404", {
      status: 404,
    });
  } catch (e) {
    const rsp = {
      msg: e?.message || JSON.stringify(e),
    };
    return new Response(JSON.stringify(rsp), { status: 500 });
  }
}

/** 获取图片逻辑：KV中不存在图片的话，请求图片，再存到KV中，否则直接返回KV中的图片 **/
async function getImageHandler(path) {
  const kvImage = await KV.get(path, "stream");
  if (kvImage) {
    return new Response(kvImage, {
      // headers: {
      //   "Content-Type": "image/jpeg",
      // },
    });
  }
  const res = await fetch(`http://${path}`);
  await KV.put(path, res.body);
  return res;
}

/** 更新图片逻辑 **/

async function updateImageHandler(path) {
  const res = await fetch(`http://${path}`);
  return res;
}
/** 发送json数据 **/
function sendJsonRes(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
  });
}
