/**
 * * 说明：
 *  * 1、AI - 预定义的AI服务实例，提供模型运行能力（可在应用详情-边缘服务-边缘AI中查看已绑定的服务）
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
    const { method, url } = req;

    const apiUrl = new URL(url).pathname
    let path = `@less/xyinghu/hyTest-2${apiUrl}`
    let reqArgs = {};
    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
        reqArgs = await req.json();
    }
    const model = reqArgs.model;
    if (model) {
        path = model
    }
    delete reqArgs.model;
    try {

        if (method === 'POST') {


            const rsp = await AI.run(path, model ? reqArgs : JSON.stringify(reqArgs));

            const response = getResponseContent(rsp.image);
            return new Response(response.body, {
                headers: {
                    'Content-Type': response.contentType,
                },
            });
        }
        return new Response(`暂不支持${method}请求，请使用POST请求`, {
            status: 404,
        });
    } catch (e) {
        const rsp = {
            msg: e?.message || JSON.stringify(e),
            url,
            path,
            reqArgs
        };
        return new Response(JSON.stringify(rsp), { status: 500 });
    }
}

/**
 * 根据推理服务返回的数据类型转换成默认的HTTP响应格式（可根据实际情况进行调整）
 * @param {*} rsp - AI模型返回的原始数据
 * @returns {Object} 包含响应体和Content-Type的对象
 *
 * 支持的数据类型：
 * - ArrayBuffer/Blob/ReadableStream (二进制/流数据)
 * - Object (JSON数据)
 * - String (HTML/纯文本)
 * - 其他类型 (转为文本)
 */
function getResponseContent(rsp) {
    let body, contentType;
    if (
        rsp instanceof ArrayBuffer ||
        rsp instanceof Blob ||
        rsp instanceof ReadableStream
    ) {
        body = rsp;
        contentType = 'application/octet-stream';
    } else if (typeof rsp === 'object' && rsp !== null) {
        body = JSON.stringify(rsp);
        contentType = 'application/json';
    } else if (typeof rsp === 'string') {
        body = rsp;
        contentType = rsp.startsWith('<') ? 'text/html' : 'text/plain';
    } else {
        body = String(rsp);
        contentType = 'text/plain';
    }
    return {
        body,
        contentType,
    };
}
