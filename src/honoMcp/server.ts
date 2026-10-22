import { serve } from "@hono/node-server";
import app from "./hono";

const port = 8000;
serve({ fetch: app.fetch, port }, () => {
  console.error(`[server] listening on http://127.0.0.1:${port}/mcp`);
});
