/**
 * 说明：
 * 1. #{MODEL_ID} 是动态占位符，实际运行时会被替换为具体的模型ID
 * 2. AI 是自定义模型服务实例变量
 * 3. 支持JSON、表单和纯文本等多种请求参数格式
 */

addEventListener('fetch', async (event) => {
    const res = await handleRequest(event.request);
    event.respondWith(res);
});

async function handleRequest(req) {
    try {
        const { method } = req;
        if (method === 'POST') {
            const reqArgs = await getQueryArgs(req);
            const model = reqArgs.model;
            delete reqArgs.model;
            const rsp = await AI.run(model, reqArgs);
            // const rsp = await AI.run('#{MODEL_ID}', reqArgs);

            // return new Response('1111');
            const response = getResponseContent(rsp);
            return new Response(response.body, {
                headers: {
                    'Content-Type': response.contentType,
                }
            });
            // return new Response(JSON.stringify(rsp));
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


// 获取请求内容类型，解析请求参数
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
        // 遍历表单字段，保留文件二进制数据
        for (const [key, value] of formData.entries()) {
            try{
                // 如果是文件类型，保留为ArrayBuffer
                const buffer = await value.arrayBuffer()
                reqArgs[key] = [...new Uint8Array(buffer)];
            }catch (e) {
                // 普通字段保持原样
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


// 根据AI.run返回的数据类型自动处理响应格式
function getResponseContent(rsp) {

    let responseBody, resContentType;
    if (rsp instanceof ArrayBuffer || rsp instanceof Blob) {
        // 处理二进制数据
        responseBody = rsp;
        resContentType = 'application/octet-stream';
    } else if (rsp instanceof ReadableStream) {
        // 处理流数据
        responseBody = rsp;
        resContentType = 'application/octet-stream';
    }else if (ArrayBuffer.isView(rsp)) {
        // 处理ArrayBufferView类型(Uint8Array等)
        responseBody = rsp.buffer;
        resContentType = 'application/octet-stream';
    } else if (rsp instanceof FormData) {
        // 处理FormData类型
        responseBody = new Response(rsp).body;
        resContentType = 'multipart/form-data';
    } else if (typeof rsp === 'object' && rsp !== null) {
        // 处理JSON对象
        // responseBody = JSON.stringify(rsp);
        // resContentType = 'application/json';
        // 检查对象中是否包含ArrayBuffer类型的值
        // const hasArrayBuffer = Object.values(rsp).some(
        //     value => value instanceof ArrayBuffer || value instanceof Array
        // );
        // //
        // if (hasArrayBuffer) {
        // //     // 如果包含ArrayBuffer，保持原结构返回
        //     rsp.aaa=1
        //     responseBody = rsp;
        //     resContentType = 'application/json';
        // } else {
        //     // 普通对象转为JSON字符串
        //     rsp.aaa=2
            responseBody = JSON.stringify(rsp);
            resContentType = 'application/json';
        // }
    } else if (typeof rsp === 'string') {
        // 处理字符串
        responseBody = rsp;
        resContentType = rsp.startsWith('<') ? 'text/html' : 'text/plain';
    } else {
        // 其他类型转为字符串
        responseBody = String(rsp);
        resContentType = 'text/plain';
    }
    return {
        body: responseBody,
        contentType: resContentType,
    }
}