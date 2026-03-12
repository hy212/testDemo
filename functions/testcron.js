addEventListener("fetch", async (event) => {
  // 使用非阻塞方式上报日志，避免阻塞响应
  reportLog().catch(error => {
    console.error("日志上报失败:", error);
  });
  
  event.respondWith(new Response("访问成功"));
});

/** 错误日志上报智研 **/
async function reportLog() {
  const queryArgs = {
    topic: "sdk-cce19ccdcee273db",
    host: "cron-test-function",
    data: [
      {
        timestamp: Date.now(),
        message: "边缘函数执行成功",
        fields: {
          url: "/functions/testcron",
        },
      },
    ],
  };
  
  // 移除await，改为返回Promise，让调用方决定是否等待
  return fetch(`https://publiclog.zhiyan.tencent-cloud.net/collect`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(queryArgs),
  });
}

// reportLog();
