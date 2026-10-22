import esbuild from "esbuild";
import { globSync } from "glob";
const entryFiles = globSync("src/api/*.js", {
  ignore: [],
});
console.log(entryFiles);
// 公共配置
const commonOptions = {
  bundle: true, // 打包所有依赖（包括 node_modules）
  treeShaking: true,
  format: "cjs",
  platform: "node", // 指定 Node.js 环境
  target: "node16", // 指定 Node.js 版本
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
