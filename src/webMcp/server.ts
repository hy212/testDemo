import { serve } from "@hono/node-server";
import {
  app,
  server,
  transport,
  baseUrl,
} from "./honoWebStandardStreamableHttp";
// Start the server
const PORT = process.env.MCP_PORT ? parseInt(process.env.MCP_PORT, 10) : 9000;

server.connect(transport).then(() => {
  console.log(`Starting Hono MCP server on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}${baseUrl}/health`);
  console.log(`MCP endpoint: http://localhost:${PORT}${baseUrl}/mcp`);
  console.log(`Geo endpoint: http://localhost:${PORT}${baseUrl}/geo`);

  serve({
    fetch: app.fetch,
    port: PORT,
  });
});
