import esbuild from "esbuild";
import { globSync } from "glob";
const entryFiles = globSync("src/api/*.js", {
  ignore: [],
});
console.log(entryFiles);
const res = await esbuild.build({
  // entryPoints: entryFiles,
  entryPoints: ["src/webMcp/build.ts"],
  // outdir: "./functions",
  bundle: true, // 打包所有依赖（包括 node_modules）
  treeShaking: true,
  format: "cjs",
  // sourcemap: true,
  platform: "node", // 指定 Node.js 环境
  target: "node16", // 指定 Node.js 版本
  outfile: "./functions/webmcpserver.js",
});
