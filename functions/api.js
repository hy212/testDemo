"use strict";
const API_PREFIX = `/api`;
const LLM_API_URL = `${API_PREFIX}/v1/llm`;
const ASR_MODEL = `@less/dengyideng/step-audio-2-mini-v3`;
const TTS_MODEL = `@less/dengyideng/cosyvoice`;
const ASR_API_URL = `${API_PREFIX}/v1/asr`;
const TTS_API_URL = `${API_PREFIX}/v1/tts`;
const API_URL_MODEL_MAP = {
  [ASR_API_URL]: ASR_MODEL,
  [TTS_API_URL]: TTS_MODEL
};
const ApiMethodMap = {
  POST: {
    [ASR_API_URL]: asrGenerate,
    [`${LLM_API_URL}`]: llmGenerate,
    [TTS_API_URL]: ttsGenerate
  }
};
addEventListener("fetch", async (event) => {
  const { url } = event.request;
  const apiUrl = new URL(url).pathname;
  if (apiUrl === LLM_API_URL) {
    event.request.headers.delete("Accept-Encoding");
  }
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
      status: 404
    });
  } catch (e) {
    const httpCode = e?.httpCode;
    const msgData = {
      // js层报错信息
      name: e.name,
      message: e.message,
      url: `${API_URL_MODEL_MAP[apiUrl]}${apiUrl}`
    };
    if (httpCode !== void 0) {
      msgData.httpCode = httpCode;
    }
    return new Response(JSON.stringify(msgData), { status: 500 });
  }
}
async function asrGenerate(req, apiUrl) {
  const reqArgs = await req.formData();
  const file = reqArgs.get("file");
  const buffer = await file.arrayBuffer();
  const input = {
    audio: [...new Uint8Array(buffer)]
  };
  const startTime = Date.now();
  const res = await runnerEvent(`${API_URL_MODEL_MAP[apiUrl]}${apiUrl}`, input);
  const endTime = Date.now();
  return new Response(res, {
    headers: {
      reasoningTime: `${endTime - startTime}`
    }
  });
}
async function llmGenerate(req) {
  const reqArgs = await req.clone().json();
  const modelName = reqArgs.model;
  const reasoning = reqArgs.reasoning;
  if (!modelName) {
    return {
      code: -1,
      msg: "缺失模型参数",
      data: {
        ...req
      }
    };
  }
  const model = modelName.substring(modelName.lastIndexOf("/") + 1);
  const apiUrl = `${modelName}/v1/chat/completions`;
  const input = {
    messages: reqArgs.messages,
    stream: true,
    model,
    reasoning
  };
  const startTime = Date.now();
  const res = await runnerEvent(apiUrl, input);
  const endTime = Date.now();
  return new Response(res, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      reasoningTime: `${endTime - startTime}`
    }
  });
}
async function ttsGenerate(req, apiUrl) {
  const reqArgs = await req.formData();
  const prompt = reqArgs.get("prompt");
  const input = {
    input: prompt || ""
  };
  const startTime = Date.now();
  const res = await runnerEvent(`${API_URL_MODEL_MAP[apiUrl]}${apiUrl}`, input);
  const endTime = Date.now();
  return new Response(res, {
    headers: {
      "Content-Type": "application/octet-stream",
      reasoningTime: `${endTime - startTime}`
    }
  });
}
async function runnerEvent(apiUrl, input) {
  return await AI.run(apiUrl, JSON.stringify(input));
}
