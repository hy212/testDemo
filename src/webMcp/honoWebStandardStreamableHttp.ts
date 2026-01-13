/**
 * Example MCP server using Hono with WebStandardStreamableHTTPServerTransport
 *
 * This example demonstrates using the Web Standard transport directly with Hono,
 * which works on any runtime: Node.js, Cloudflare Workers, Deno, Bun, etc.
 *
 * Run with: pnpm tsx src/honoWebStandardStreamableHttp.ts
 */

import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { Hono } from "hono";
import { cors } from "hono/cors";
import * as z from "zod/v4";

// Create the MCP server
const server = new McpServer({
  name: "hono-webstandard-mcp-server",
  version: "1.0.0",
});

// Register a simple greeting tool
server.registerTool(
  "greet",
  {
    title: "Greeting Tool",
    description: "A simple greeting tool",
    inputSchema: { name: z.string().describe("Name to greet") },
  },
  async ({ name }): Promise<CallToolResult> => {
    return {
      content: [
        {
          type: "text",
          text: `Hello, ${name}! (from Hono + WebStandard transport)`,
        },
      ],
    };
  },
);

// Create a stateless transport (no options = no session management)
const transport = new WebStandardStreamableHTTPServerTransport();

// Create the Hono app
const BASE_URL = "/webmcpserver";
const app = new Hono().basePath(BASE_URL);

// Enable CORS for all origins
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowHeaders: [
      "Content-Type",
      "mcp-session-id",
      "Last-Event-ID",
      "mcp-protocol-version",
    ],
    exposeHeaders: ["mcp-session-id", "mcp-protocol-version"],
  }),
);

// Health check endpoint
app.get("/health", (c) => c.json({ status: "ok" }));

// MCP endpoint
app.all("/mcp", (c) => transport.handleRequest(c.req.raw));

export { app, server, transport };
