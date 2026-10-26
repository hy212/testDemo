/**
 * Polyfill: some Node.js-based edge runtimes (e.g. Tencent Cloud EdgeOne /
 * cdntip) expose a global `Response` that lacks the static `Response.json()`
 * helper. The `@modelcontextprotocol/*` SDK calls `Response.json(...)` to build
 * its JSON-RPC error / result responses, so without this the handler throws
 * `Response.json is not a function`. Add the static helper if missing.
 */
// if (
//   typeof globalThis.Response !== "undefined" &&
//   typeof (globalThis.Response as { json?: unknown }).json !== "function"
// ) {
//   (globalThis.Response as unknown as { json: typeof Response.json }).json = (
//     body: BodyInit,
//     init?: ResponseInit,
//   ) =>
//     new globalThis.Response(JSON.stringify(body), {
//       ...init,
//       headers: {
//         "content-type": "application/json",
//         ...(init?.headers ?? {}),
//       },
//     });
// }

/**
 * Hosting on Hono / web-standard runtimes (Cloudflare Workers, Deno, Bun,
 * Node.js via `@hono/node-server`).
 *
 * `createMcpHandler(...).fetch` is the web-standard face: pass the raw
 * `Request` and return the `Response`. The `@modelcontextprotocol/hono`
 * package adds the same DNS-rebinding / origin protection middleware the
 * Express adapter ships.
 *
 * HTTP-only — the point is the Hono adapter; a stdio leg would bypass it.
 */
import { createMcpHonoApp } from "@modelcontextprotocol/hono";
import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";

function buildServer(): McpServer {
  const server = new McpServer({ name: "hono-example", version: "1.0.0" });
  server.registerTool(
    "greet",
    {
      title: "Greeting Tool",
      description: "A simple greeting tool",
      inputSchema: z.object({ name: z.string() }),
    },
    async ({ name }) => ({
      content: [
        {
          type: "text",
          text: `Hello, ${name}! (from Hono + createMcpHandler.fetch)`,
        },
      ],
    }),
  );
  return server;
}

const handler = createMcpHandler(buildServer);

// `createMcpHonoApp()` arms localhost host/origin validation by default,
// which rejects any Host/Origin that isn't localhost. When deployed behind
// a real domain, list the allowed host(s) and origin(s) here so the DNS
// rebinding protection still applies to the right hostnames.
const ALLOWED_HOSTS = [
  "testdemo.test-edgeless.cdntip.com",
  "localhost",
  "127.0.0.1",
];
const app = createMcpHonoApp({
  allowedHosts: ALLOWED_HOSTS,
  allowedOrigins: ALLOWED_HOSTS,
}).basePath("/honomcp");
app.get("/health", (c) => c.json({ status: "ok" }));
app.all("/mcp", async (c) => {
  try {
    return await handler.fetch(c.req.raw);
  } catch (e) {
    const message = e instanceof Error ? `${e.message}\n${e.stack}` : String(e);
    return c.json({ error: message }, 500);
  }
});
app.get("/json", async (c) => {
  try {
    let a = { test: 1 };
    // let response = new Response(JSON.stringify(a));
    return Response.json(a);
  } catch (e) {
    const message = e instanceof Error ? `${e.message}\n${e.stack}` : String(e);
    return c.json({ error: message }, 500);
  }
});

export default app;
