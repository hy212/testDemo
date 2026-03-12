addEventListener("fetch", async (event) => {
  await reportLog();
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
  await fetch(`https://publiclog.zhiyan.tencent-cloud.net/collect`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(queryArgs),
  });
}

// reportLog();
