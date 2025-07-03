/**
 * * 主要功能：
 *  * 1. 接收HTTP请求并路由到AI模型服务
 *  * 2. 自动处理多种请求/响应格式转换
 *
 * * 配置说明：
 *  * 1. #{MODEL_ID} - 动态模型ID占位符，创建应用时自动替换为模型ID
 *  * 2. AI - 预定义的AI服务实例，提供模型运行能力
 *  *
 *  * 支持的请求格式：
 *  * - application/json (JSON格式)
 *  * - application/x-www-form-urlencoded (表单格式)
 *  * - multipart/form-data (文件上传表单)
 *  * - text/plain (纯文本)
 *
 *   * 支持的响应格式：
 *  * - JSON
 *  * - 二进制数据(图片/文件等)
 *  * - 流数据
 *  * - FormData
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
 * 处理所有HTTP请求并返回响应
 * @param {Request} req - 传入的HTTP请求对象
 * @returns {Response} 处理后的HTTP响应
 */
async function handleRequest(req) {
    try {
        const { method } = req;
        if (method === 'POST') {
            const reqArgs = await getQueryArgs(req);
            const model = reqArgs.model;
            delete reqArgs.model;
            const rsp = await AI.run(model, reqArgs);
            // const rsp = await AI.run('#{MODEL_ID}', reqArgs);

            const response = getResponseContent(rsp);
            return new Response(response.body, {
                headers: {
                    'Content-Type': response.contentType,
                }
            });
        }
        return new Response(`暂不支持${method}请求，请使用POST请求`, {
            status: 404,
        });
    } catch (e) {
        const rsp = {
            msg: e?.message || JSON.stringify(e),
        };
        return new Response(JSON.stringify(rsp), { status: 500 });
    }
}


/**
 * 解析请求参数
 * 根据Content-Type自动解析不同格式的请求体
 * @param {Request} req - HTTP请求对象
 * @returns {Object} 解析后的请求参数对象
 */
async function getQueryArgs(req) {
    const contentType = req.headers.get('content-type') || '';

    let reqArgs;
    if (contentType.includes('application/json')) {
        reqArgs = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
        // 普通表单格式
        const formData = await req.formData();
        reqArgs = Object.fromEntries(formData.entries());
    } else if (contentType.includes('multipart/form-data')) {
        // 文件上传表单格式
        const formData = await req.formData();
        reqArgs = {};
        for (const [key, value] of formData.entries()) {
            try{
                // 如果是文件类型，保留为ArrayBuffer
                const buffer = await value.arrayBuffer()
                reqArgs[key] = [...new Uint8Array(buffer)];
            }catch (e) {
                reqArgs[key] = value;
            }
        }
    }else {
        // 解析文本处理
        const text = await req.text();
        try {
            reqArgs = text ? JSON.parse(text) : {};
        } catch {
            reqArgs = { rawData: text };
        }
    }
    return reqArgs
}


/**
 * 响应内容格式化
 * 根据AI.run()返回的数据类型自动转换为合适的HTTP响应格式
 * @param {*} rsp - AI模型返回的原始数据
 * @returns {Object} 包含响应体和Content-Type的对象
 *
 * 支持的数据类型：
 * - ArrayBuffer/Blob/ReadableStream (二进制数据)
 * - ArrayBufferView (Uint8Array等)
 * - FormData (多部分表单数据)
 * - Object (JSON数据)
 * - String (HTML/纯文本)
 * - 其他类型 (转为文本)
 */
function getResponseContent(rsp) {

    let body, contentType;
    if (rsp instanceof ArrayBuffer || rsp instanceof Blob || rsp instanceof ReadableStream) {
        // 处理二进制数据、流数据
        body = rsp;
        contentType = 'application/octet-stream';
    } else if (ArrayBuffer.isView(rsp)) {
        // 处理ArrayBufferView类型(Uint8Array等)
        body = rsp.buffer;
        contentType = 'application/octet-stream';
    } else if (rsp instanceof FormData) {
        body = new Response(rsp).body;
        contentType = 'multipart/form-data';
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
    }
}