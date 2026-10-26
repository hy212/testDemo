import esbuild from "esbuild";
import { globSync } from "glob";
const entryFiles = globSync("src/api/*.js", {
  ignore: [],
});
console.log(entryFiles);
// 公共配置：与现有正常 Service Worker 入口（functions/module.js 等）保持一致
// 的打包形态（platform: node + format: cjs + app.fire() 全局入口）。
// 关键改动：target 从 node16 提升到 node20，对齐部署运行时（Node >= 18.20
// 才原生提供静态 Response.json，SDK 内部依赖它构造 JSON-RPC 响应）。
const commonOptions = {
  bundle: true, // 打包所有依赖（包括 node_modules）
  treeShaking: true,
  format: "cjs",
  platform: "node", // 指定 Node.js 环境（与 Service Worker 入口兼容）
  target: "node20", // 对齐部署 Node 版本，提供 Response.json 等 Web 标准 API
};

// 分别构建两个入口，各自指定 outfile 避免重名冲突
await esbuild.build({
  ...commonOptions,
  entryPoints: ["src/webMcp/build.ts"],
  outfile: "./functions/webmcpserver.js",
});

await esbuild.build({
  ...commonOptions,
  entryPoints: ["src/honoMcp/build.ts"],
  outfile: "./functions/honomcpserver.js",
});
