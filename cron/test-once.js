addEventListener("fetch", async (event) => {
  const res = await reportLog();
  event.respondWith(res);
});

/** 错误日志上报智研 **/
async function reportLog() {
  let isSuccess = false;
  try {
    const queryArgs = {
      topic: "sdk-cce19ccdcee273db",
      host: "cron-test-once",
      data: [
        {
          timestamp: Date.now(),
          message: "一次性任务执行成功",
          fields: {
            url: "/cron/test-once",
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
    isSuccess = true;
  } catch (e) {}
  return new Response(isSuccess ? "访问成功" : "访问失败");
}
