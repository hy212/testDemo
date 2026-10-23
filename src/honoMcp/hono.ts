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
// Pass the body already parsed by createMcpHonoApp's middleware via
// `parsedBody` so the handler does NOT re-read / clone `c.req.raw` (which
// would fail with "Request body already used" and surface as a 500 on /mcp).
// Requests without a JSON body leave `parsedBody` undefined, which the SDK
// handles fine (e.g. GET/DELETE session ops, the initialize preflight).
app.all("/mcp", async (c) => {
  // `parsedBody` is set by createMcpHonoApp's internal JSON middleware; the
  // Hono context type does not declare it, hence the cast.
  const parsedBody = (c as unknown as { get(key: string): unknown }).get("parsedBody");
  return handler.fetch(c.req.raw, parsedBody !== undefined ? { parsedBody } : undefined);
});

export default app;
