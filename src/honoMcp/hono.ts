/**
 * Polyfill: some Node.js-based edge runtimes (e.g. Tencent Cloud EdgeOne /
 * cdntip) expose a global `Response` that lacks the static `Response.json()`
 * helper. The `@modelcontextprotocol/*` SDK calls `Response.json(...)` to build
 * its JSON-RPC error / result responses, so without this the handler throws
 * `Response.json is not a function`. Add the static helper if missing.
 */
if (
  typeof globalThis.Response !== "undefined" &&
  typeof (globalThis.Response as { json?: unknown }).json !== "function"
) {
  (globalThis.Response as unknown as { json: typeof Response.json }).json = (
    body: BodyInit,
    init?: ResponseInit,
  ) =>
    new globalThis.Response(JSON.stringify(body), {
      ...init,
      headers: {
        "content-type": "application/json",
        ...(init?.headers ?? {}),
      },
    });
}

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
    "get_weather",
    {
      title: "Weather Query Tool",
      description:
        "Query current weather on using the wttr.in service. " +
        "Location can be a city name (e.g. 'Beijing'), an airport code, or a geographic coordinate.",
      inputSchema: z.object({
        location: z
          .string()
          .describe("City name, airport code, or 'lat,lon' coordinate"),
        lang: z
          .string()
          .optional()
          .describe(
            "Optional language code, e.g. 'en', 'zh'. Defaults to 'zh'.",
          ),
      }),
    },
    async ({ location, lang }) => {
      console.log("location", location);
      console.log("lang", lang);
      const encoded = encodeURIComponent(location);
      const url = `https://wttr.in/${encoded}?format=j1&lang=${lang ?? "zh"}`;
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": "hono-mcp-weather/1.0" },
        });
        if (!res.ok) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `wttr.in returned HTTP ${res.status} for "${location}"`,
              },
            ],
          };
        }
        const data = (await res.json()) as {
          current_condition?: Array<{
            temp_C?: string;
            temp_F?: string;
            FeelsLikeC?: string;
            humidity?: string;
            windspeedKmph?: string;
            winddir16Point?: string;
            weatherDesc?: Array<{ value: string }>;
            lang_zh?: Array<{ value: string }>;
          }>;
          nearest_area?: Array<{
            areaName?: Array<{ value: string }>;
            country?: Array<{ value: string }>;
            region?: Array<{ value: string }>;
          }>;
        };

        console.log("data", data);
        const cur = data.current_condition?.[0];
        const area = data.nearest_area?.[0];
        if (!cur) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `No weather data available for "${location}".`,
              },
            ],
          };
        }
        const desc =
          (lang === "zh" && cur.lang_zh?.[0]?.value) ||
          cur.weatherDesc?.[0]?.value ||
          "n/a";
        const place =
          [
            area?.areaName?.[0]?.value,
            area?.region?.[0]?.value,
            area?.country?.[0]?.value,
          ]
            .filter(Boolean)
            .join(", ") || location;
        const summary =
          `Weather for ${place}:\n` +
          `- Condition: ${desc}\n` +
          `- Temperature: ${cur.temp_C}°C (${cur.temp_F}°F), feels like ${cur.FeelsLikeC}°C\n` +
          `- Humidity: ${cur.humidity}%\n` +
          `- Wind: ${cur.windspeedKmph} km/h ${cur.winddir16Point ?? ""}`.trim();
        return {
          content: [
            { type: "text", text: summary },
            { type: "text", text: JSON.stringify(cur) },
          ],
        };
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        return {
          isError: true,
          content: [
            { type: "text", text: `Failed to fetch weather: ${message}` },
          ],
        };
      }
    },
  );
  return server;
}

const handler = createMcpHandler(buildServer);

// Disable DNS-rebinding / Origin validation entirely so the template can be
// deployed to any domain without code changes.
//
// `createMcpHonoApp()` only installs Host/Origin validation middleware when
// either `allowedHosts` / `allowedOrigins` is provided, OR when `host` is a
// localhost variant (127.0.0.1 / localhost / ::1). By passing `host: "0.0.0.0"`
// and omitting the allow-lists, no validation middleware is installed and the
// server accepts whatever hostname the platform assigns (EdgeOne / Workers /
// etc.).
const app = createMcpHonoApp({ host: "0.0.0.0" }).basePath("/honomcp");
app.get("/health", (c) => c.json({ status: "ok" }));
app.all("/mcp", async (c) => {
  try {
    return await handler.fetch(c.req.raw);
  } catch (e) {
    const message = e instanceof Error ? `${e.message}\n${e.stack}` : String(e);
    return c.json({ error: message }, 500);
  }
});

export default app;
