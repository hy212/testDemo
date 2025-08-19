// 不能运行，包含node内置模块
// import Aegis from "@tencent/aegis-node-sdk";
//
// const aegis = new Aegis({
//   id: "pGUVFTCZyewxxxxx", // 项目上报ID
//   uin: "xxx", // 用户唯一 ID（可选）
// });

// // aegis-mp-sdk 是针对微信小程序和QQ小程序开发的数据收集和上报 SDK。
// import Aegis from "aegis-mp-sdk";
//
// const aegis = new Aegis({
//   id: "pGUVFTCZyewxxxxx", // 项目上报ID
//   uin: "xxx", // 用户唯一 ID（可选）
//   reportApiSpeed: true, // 接口测速
//   reportAssetSpeed: true, // 静态资源测速
//   hostUrl: "https://aegis.qq.com", // 上报域名，中国大陆 rumt-zh.com
//   spa: true, // spa 页面需要开启，页面切换的时候上报pv
// });

// 只能在浏览器环境使用
import Aegis from "aegis-web-sdk";
const aegis = new Aegis({
  id: "pGUVFTCZyewxxxxx", // 项目上报id
  uin: "xxx", // 用户唯一标识（可选）
  reportApiSpeed: true, // 接口测速
  reportAssetSpeed: true, // 静态资源测速
  hostUrl: "https://aegis.qq.com", // 上报域名，中国大陆 rumt-zh.com
  spa: true, // spa 页面需要开启，页面切换的时候上报pv
});
