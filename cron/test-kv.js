async function handleRequest(request) {
  await KV.put("test", "test_" + new Date().getTime());
  return new Response("Hello");
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
