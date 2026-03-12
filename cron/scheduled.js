async function handleRequest(request) {
  return new Response("Hello");
}

addEventListener("scheduled", (event) => {
  event.respondWith(handleRequest(event.request));
});
