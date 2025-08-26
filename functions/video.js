/**
 * * 说明：
 *  * 1、AI - AI服务实例（可在应用详情-边缘服务-边缘AI中查看已绑定的服务）
 *  * 2、支持的请求方式：POST (访问的url路径要与服务调度配置的路径一致)
 *  * 3、支持的请求参数格式：application/json (JSON格式)
 *  * 4、支持的响应格式：（可根据实际情况调整）
 *  * - JSON
 *  * - 二进制/流数据(图片/文件等)
 *  * - HTML/纯文本
 */

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
  try {
    // let ai = new AI(ai_binding)
    // const res = await fetch("https://vjs.zencdn.net/v/oceans.mp4");
    // const blob = await res.arrayBuffer();
    // const response = await ai.run("@less/chauncyhu/video-trans", {
    //     video: [...new Uint8Array(blob)],
    // })
    // return new Response(response.video, {
    //     headers: {
    //         'Content-Type': 'video/mp4',
    //     }
    // })
    const { method, url } = req;
    const apiUrl = new URL(url).pathname;

    let reqArgs = {};
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      reqArgs = await req.json();
    }

    const res = await fetch(
      "https://9da6c3ee-4bd4-4f0a-8a69-e962b857144f.mdnplay.dev/shared-assets/videos/flower.mp4",
    );
    const blob = await res.clone().arrayBuffer();
    // const rsp = await AI.run(`@less/chauncyhu/video-trans/vt/`, {video: [...new Uint8Array(blob)]});

    return new Response(res.body, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Length": res.headers.get("Content-Length"),
      },
    });
    // const response = getResponseContent(rsp);
    // return new Response(response.body, {
    // headers: {
    //     'Content-Type': response.contentType,
    // },
    // });
  } catch (e) {
    const rsp = {
      msg: e?.message || JSON.stringify(e),
    };
    return new Response(JSON.stringify(rsp), { status: 500 });
  }
}

/**
 * 根据推理服务返回的数据类型转换成默认的HTTP响应格式（可根据实际情况进行调整）
 * @param {*} rsp - 推理服务返回的原始数据
 * @returns {Object} 包含响应体和Content-Type的对象
 *
 * 支持的数据类型：
 * - ArrayBuffer/Blob/ReadableStream (二进制/流数据)
 * - JSON
 * - HTML/纯文本
 */
function getResponseContent(rsp) {
  let body, contentType;
  if (
    rsp instanceof ArrayBuffer ||
    rsp instanceof Blob ||
    rsp instanceof ReadableStream
  ) {
    body = rsp;
    contentType = "application/octet-stream";
  } else if (typeof rsp === "object" && rsp !== null) {
    body = JSON.stringify(rsp);
    contentType = "application/json";
  } else if (typeof rsp === "string") {
    body = rsp;
    contentType = rsp.startsWith("<") ? "text/html" : "text/plain";
  } else {
    body = String(rsp);
    contentType = "text/plain";
  }
  return {
    body,
    contentType,
  };
}
