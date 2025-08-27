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
    const res = await fetch("https://www.w3schools.com/html/movie.mp4");
    return new Response("111", {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
  } catch (e) {
    const rsp = {
      msg: e?.message || JSON.stringify(e),
    };
    return new Response(JSON.stringify(rsp), { status: 500 });
  }
}
