var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// worker/common/constants.js
var constants_exports = {};
__export(constants_exports, {
  ResponseText: () => ResponseText
});
var ResponseText;
var init_constants = __esm({
  "worker/common/constants.js"() {
    ResponseText = "Hello World";
  }
});

// worker/api/index.js
var { ResponseText: ResponseText2 } = (init_constants(), __toCommonJS(constants_exports));
addEventListener("fetch", (event) => {
  const response = new Response(ResponseText2);
  event.respondWith(response);
});
