/**
 * 管理员接口说明：
 * 1、更新KV： /admin/$USRENAME/kv/$NAMESPACE/update
 * 请求参数：
 *  {
 *   "key": "test",
 *   "value": "test"
 *  }
 *
 * 2、删除KV: /admin/$USRENAME/kv/$NAMESPACE/delete
 * 请求参数：
 *  {
 *   "key": "test"
 *  }
 */

const API_ACTIONS = ["update", "delete"];

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
      return new Response(`暂不支持${method}请求，请使用POST请求`, {
        status: 405,
      });
    }

    const apiUrl = new URL(req.url).pathname;
    const paramsArr = apiUrl.split("/").slice(1);
    if (paramsArr.length !== 5) {
      return new Response("请检查接口路径是否正确", {
        status: 400,
      });
    }
    const params = {
      username: paramsArr[1],
      kvNamespace: paramsArr[3],
      action: paramsArr[4], // update & delete
    };
    if (!API_ACTIONS.includes(params.action)) {
      return new Response("请检查接口路径是否正确", {
        status: 400,
      });
    }

    const reqArgs = await req.json();
    if (!reqArgs.key) {
      return new Response("key不能为空", {
        status: 400,
      });
    }

    // TODO 鉴权逻辑

    if (params.action === "update") {
      await KV.put(reqArgs.key, reqArgs.value);
      return new Response(
        `更新成功，key: ${reqArgs.key}, value: ${reqArgs.value}`,
      );
    } else if (params.action === "delete") {
      await KV.delete(reqArgs.key);
      return new Response(`删除成功，key: ${reqArgs.key}`);
    }
    return new Response(`暂不支持${params.action}操作`, {
      status: 400,
    });
  } catch (e) {
    const msgData = {
      name: e.name,
      message: e.message,
    };
    return new Response(JSON.stringify(msgData), { status: 500 });
  }
}
