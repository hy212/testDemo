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
 * 报错情况：
 * 1、未 return new Response() 会报 500 （ScriptDebugInfo:Uncaught TypeError: Param's Type Invalid）
 */
async function handleRequest(req) {
  try {
    console.error("报错信息打印 error---");
    console.log("报错信息打印---log", AI);
    const a = await req.json();
    return new Response("111", {
      status: 200,
    });
  } catch (e) {
    const errorData = {
      host: new URL(req.url).host,
      msg: e?.message || JSON.stringify(e),
      url: new URL(req.url).pathname,
    };
    reportLog(errorData);
    return new Response(`报错了: ${errorData.msg}`, {
      status: 500,
    });
  }
}

function reportLog(errorData) {
  const { host, msg, url } = errorData;
  const queryArgs = {
    topic: "sdk-cce19ccdcee273db",
    host: host,
    data: [
      {
        timestamp: Date.now(),
        message: msg,
        fields: {
          url,
        },
      },
    ],
  };
  fetch(`https://publiclog.zhiyan.tencent-cloud.net/collect`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(queryArgs),
  }).then((res) => res.json());
}
