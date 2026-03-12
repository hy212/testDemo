async function handleRequest(request) {
  return new Response("Hello");
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
