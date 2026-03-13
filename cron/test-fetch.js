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
          message: "任务执行成功",
          fields: {
            url: "/cron/test-fetch",
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
  } catch (e) {
    reportErrorLog(e);
  }
  return new Response(isSuccess ? "访问成功" : "访问失败");
}

/** 错误日志上报智研 **/
export function reportErrorLog(e) {
  const httpCode = e?.httpCode;
  const msgData = {
    // js层报错信息
    name: e.name,
    message: e.message,
  };
  if (httpCode !== undefined) {
    // 容器服务http状态码
    msgData.httpCode = httpCode;
  }

  const queryArgs = {
    topic: "sdk-cce19ccdcee273db",
    host: "cron-test-once",
    data: [
      {
        timestamp: Date.now(),
        message: JSON.stringify(msgData),
        fields: {
          url: '"/cron/test-fetch',
        },
      },
    ],
  };
  fetch(`https://publiclog.zhiyan.tencent-cloud.net/collect`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(queryArgs),
  }).then((res) => res.json());
}
