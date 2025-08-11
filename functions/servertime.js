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
    const a = API.test();
    return new Response("111", {
      status: 200,
    });
  } catch (e) {
    return new Response("报错了", {
      status: 500,
    });
  }
}
