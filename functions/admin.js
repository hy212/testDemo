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
        const { method } = req;
        if (method !== "POST") {
            // 暂不支持${method}请求，请使用POST请求
            return new Response(null, {
                status: 405,
            });
        }
        const apiUrl = new URL(req.url).pathname;
        const reqArgs = await req.json();

        const paramsArr = apiUrl.split('/').slice(1);

        const params = {
            username: paramsArr[2],
            kvNamespace: paramsArr[4],
            action: paramsArr[5], // update & delete
        }

        // TODO 鉴权逻辑

        if (params.action === "update") {
            await KV.put(reqArgs.key, reqArgs.value);
        } else if (params.action === "delete") {
            await KV.delete(reqArgs.key);
        }

        return new Response(`操作成功`);
    } catch (e) {
        const msgData = {
            name: e.name,
            message: e.message,
        };
        return new Response(JSON.stringify(msgData), { status: 500 });
    }
}
