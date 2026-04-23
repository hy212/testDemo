"use strict";
function reportLog(reqUrl, e) {
  const { host, pathname: url } = new URL(reqUrl);
  const httpCode = e?.httpCode;
  const msgData = {
    // js层报错信息
    name: e.name,
    message: e.message,
  };
  if (httpCode !== void 0) {
    msgData.httpCode = httpCode;
  }
  const queryArgs = {
    topic: "sdk-cce19ccdcee273db",
    host,
    data: [
      {
        timestamp: Date.now(),
        message: JSON.stringify(msgData),
        fields: {
          url,
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
const API_PREFIX = `/api`;
const API_URL_MAP = {
  createSession: `${API_PREFIX}/alloc_instance`,
  releaseSession: `${API_PREFIX}/release_instance`,
};
const BUZ_API_PREFIX = "http://9.238.141.203:32767/cloudrender/cloudgame";
const BUZ_API_URL_MAP = {
  createSession: `${BUZ_API_PREFIX}/alloc_instance?business_id=8300`,
  releaseSession: `${BUZ_API_PREFIX}/release_instance?business_id=8300`,
};
const ApiMethodMap = {
  POST: {
    [API_URL_MAP.createSession]: createSession,
    [API_URL_MAP.releaseSession]: releaseSession,
  },
};
addEventListener("fetch", async (event) => {
  const res = await handleRequest(event.request);
  event.respondWith(res);
});
async function handleRequest(req) {
  const { method, url } = req;
  const apiUrl = new URL(url).pathname;
  try {
    if (ApiMethodMap[method] && ApiMethodMap[method][apiUrl]) {
      return await ApiMethodMap[method][apiUrl](req, apiUrl);
    }
    return new Response("404", {
      status: 404,
    });
  } catch (e) {
    reportLog(req.url, e);
    return new Response(e?.message || JSON.stringify(e), {
      status: 500,
    });
  }
}
async function createSession(req) {
  try {
    return await fetch(BUZ_API_URL_MAP.createSession, {
      method: req.method,
      headers: req.headers,
      body: req.body,
    });
  } catch (e) {
    throw e;
  }
}
async function releaseSession(req) {
  try {
    return await fetch(BUZ_API_URL_MAP.releaseSession, {
      method: req.method,
      headers: req.headers,
      body: req.body,
    });
  } catch (e) {
    throw e;
  }
}
