/**
 * 主请求监听器
 * 监听fetch事件并处理所有传入请求
 * @param {FetchEvent} event - fetch事件对象
 */
addEventListener('fetch', async (event) => {
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
    const { method } = req;

    if (method !== 'POST' && method !== 'GET') {
      return new Response(`暂不支持${method}请求，请使用POST、GET请求`, {
        status: 404,
      });
    }
    let reqArgs = {};
    if (method === 'POST') {
      reqArgs = await req.json();
    } else if (method === 'GET') {
      const params = Object.fromEntries(new URL(req.url).searchParams);
      reqArgs = reqArgs.name ? atob(params.name) : {};
    }
    // const rsp = await AI.run(
    //   '@less/sealtan/video-compsoer-pic-render',
    //   reqArgs
    // );
    return new Response(JSON.stringify(reqArgs));
  } catch (e) {
    const rsp = {
      msg: e?.message || JSON.stringify(e),
    };
    return new Response(JSON.stringify(rsp), { status: 500 });
  }
}
