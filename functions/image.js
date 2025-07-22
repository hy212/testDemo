const API_PREFIX = `/image`;

const ApiMethodMap = {
  [`${API_PREFIX}/get`]: getImageHandler, // 获取图片API路径
  [`${API_PREFIX}/update`]: updateImageHandler, // 更新图片API路径
};

const Authed_Hosts = ["shp.qlogo.cn", "pic.kg.qq.com"];

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

      const imageHost = path.split("/")[0];
      if (!Authed_Hosts.includes(imageHost)) {
        return new Response("图片地址域名无效", {
          status: 403,
        });
      }

      return await ApiMethodMap[apiUrl](path);
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

/** 获取图片逻辑：KV中不存在图片的话，请求path图片，再存到KV中，否则直接返回KV中的图片 **/
async function getImageHandler(path) {
  const kvImage = await KV.get(path, "stream");
  if (kvImage) {
    return new Response(kvImage, {
      headers: {
        "Content-Type": "image/jpeg",
        "Use-KV": "true",
      },
    });
  }
  const res = await requestPathImage(path);
  if (res.status === 200) {
    await storeImageKVData(path, res);
  }
  return res;
}

/** 更新图片逻辑：get请求设置请求头['If-Modified-Since'] = KV中存储的lastModifiedTime值，远程图片服务器判断如果未修改会返回状态码304（无响应体），如果资源被修改会返回状态码200 & 图片数据，再将数据存储到KV中 **/
async function updateImageHandler(path) {
  // 取KV中图片的修改时间
  const kvImageMetadata = await KV.get(`metadata_${path}`, { type: "json" });
  const kvImageLastModifiedTime = kvImageMetadata
    ? kvImageMetadata.lastModifiedTime
    : "";

  const res = await requestPathImage(path, {
    "If-Modified-Since": kvImageLastModifiedTime,
  });

  if (res.status === 304) {
    // 图片未修改
    return res;
  }

  if (res.status === 200) {
    // 图片被修改
    await storeImageKVData(path, res);

    return new Response("更新成功", {
      headers: {
        created: !kvImageLastModifiedTime,
      },
    });
  }
  // 其他情况透传结果
  return res;
}

/** 请求外部链接图片 **/
async function requestPathImage(path, headers = {}) {
  return await fetch(`http://${path}`, {
    method: "get",
    headers,
  });
}

/** 将图片、图片修改时间存储到KV **/
async function storeImageKVData(path, res) {
  const lastModifiedTime = res.headers.get("Last-Modified");
  // 图片数据和最后修改时间字段存储到KV中（分两个key存储）
  const bodyClone = await res.clone().arrayBuffer();
  await KV.put(path, bodyClone);
  const metadata = { lastModifiedTime };
  await KV.put(`metadata_${path}`, JSON.stringify(metadata));
}
