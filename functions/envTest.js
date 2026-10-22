addEventListener("fetch", async (event) => {
    const apiUrl = new URL(event.request.url).pathname
    let res = new Response('无匹配的api')
    if (apiUrl === '/test') {
        res = await handleRequest(event.request)
    } else if (apiUrl === '/test_bind_maas') {
        res = await handleRequest2(event.request)
    } else if (apiUrl === '/test_bind_paas') {
      res = await handleRequest3(event.request)
    } else if (apiUrl === '/test_env') {
      res =  await handleRequest4();
    }
    event.respondWith(res);
});

async function handleRequest(req) {
  try {
    const { url } = req
    const apiUrl = new URL(url).pathname
    const envData = await MY_CONTAINER.select();
    console.log('envData:', envData)
    
    try {
      return await fetch(getRequest(envData, apiUrl));
    } catch (err) {
      console.log('err:', err)
      MY_CONTAINER.report(envData, { success: false });
      const retry = await MY_CONTAINER.select({ filter: { exclude: [envData] } });
      console.log('retry:', retry)
      if (retry) return await fetch(getRequest(retry, apiUrl));
      throw err;
    }
  } catch (error) {
    console.error("Container request failed:", error);
    return new Response(error?.message || JSON.stringify(error), { status: 500 });
  }
}

async function handleRequest2(req) {
  try {
    const { url } = req
    const apiUrl = new URL(url).pathname
    const envData = await MY_MAAS.select();
    console.log('envData:', envData)
    
    try {
      return await fetch(getRequest(envData, apiUrl));
    } catch (err) {
      console.log('err:', err)
      MY_MAAS.report(envData, { success: false });
      const retry = await MY_MAAS.select({ filter: { exclude: [envData] } });
      console.log('retry:', retry)
      if (retry) return await fetch(getRequest(retry, apiUrl));
      throw err;
    }
  } catch (error) {
    console.error("Container request failed:", error);
    return new Response(error?.message || JSON.stringify(error), { status: 500 });
  }
}

async function handleRequest3(req) {
  try {
    const { url } = req
    const apiUrl = new URL(url).pathname
    const envData = await MY_PAAS.select();
    console.log('envData:', envData)
    
    try {
      return await fetch(getRequest(envData, apiUrl));
    } catch (err) {
      console.log('err:', err)
      MY_PAAS.report(envData, { success: false });
      const retry = await MY_PAAS.select({ filter: { exclude: [envData] } });
      console.log('retry:', retry)
      if (retry) return await fetch(getRequest(retry, apiUrl));
      throw err;
    }
  } catch (error) {
    console.error("Container request failed:", error);
    return new Response(error?.message || JSON.stringify(error), { status: 500 });
  }
}

async function handleRequest4() {
  try {
    let env = {
      TEST: ENV.TEST,
      HOST: ENV.HOST,
      origin: JSON.stringify(ENV)
    };
    return new Response(JSON.stringify(env), { status: 200 });
  } catch (error) {
    console.error("Container request failed:", error);
    return new Response(error?.message || JSON.stringify(error), { status: 500 });
  }
}

function getRequest(envData, apiUrl) {
  return new Request(`http://${envData.host}:${envData.port}${apiUrl}`, {
      method: req.method,
      headers: req.headers,
      body: req.body,
  });
}
