var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/aegis-web-sdk/lib/aegis.min.js
var require_aegis_min = __commonJS({
  "node_modules/aegis-web-sdk/lib/aegis.min.js"(exports2, module2) {
    ((e, t) => {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Aegis = t();
    })(exports2, function() {
      var _, U;
      function H(e2) {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + _ + "__", null != e2 && e2.forEach(this.add, this), _ += 1;
      }
      Array.prototype.find || Object.defineProperty(Array.prototype, "find", { configurable: true, writable: true, value: function(e2) {
        if (null === this) throw new TypeError('"this" is null or not defined');
        var t2 = Object(this), n2 = t2.length >>> 0;
        if ("function" != typeof e2) throw new TypeError("predicate must be a function");
        for (var r2 = arguments[1], i2 = 0; i2 < n2; ) {
          var o2 = t2[i2];
          if (e2.call(r2, o2, i2, t2)) return o2;
          i2 += 1;
        }
      } }), window.WeakSet || (_ = Date.now() % 1e9, H.prototype.add = function(e2) {
        var t2 = this.name;
        return e2[t2] || Object.defineProperty(e2, t2, { value: true, writable: true }), this;
      }, H.prototype.delete = function(e2) {
        return !!e2[this.name] && !(e2[this.name] = void 0);
      }, H.prototype.has = function(e2) {
        return !!e2[this.name];
      }, U = H, Object.defineProperty(window, "WeakSet", { value: function(e2) {
        return new U(e2);
      } })), Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: function(e2) {
        if (null == e2) throw new TypeError("Cannot convert first argument to object");
        for (var t2 = Object(e2), n2 = 1; n2 < arguments.length; n2++) if (null != (r2 = arguments[n2])) for (var r2 = Object(r2), i2 = Object.keys(Object(r2)), o2 = 0, a2 = i2.length; o2 < a2; o2++) {
          var s2 = i2[o2], c2 = Object.getOwnPropertyDescriptor(r2, s2);
          null != c2 && c2.enumerable && (t2[s2] = r2[s2]);
        }
        return t2;
      } });
      var D = function(e2, t2) {
        return (D = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e3, t3) {
          e3.__proto__ = t3;
        } : function(e3, t3) {
          for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
        }))(e2, t2);
      }, B = function() {
        return (B = Object.assign || function(e2) {
          for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var i2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
          return e2;
        }).apply(this, arguments);
      };
      function W(e2, a2, s2, c2) {
        return new (s2 = s2 || Promise)(function(n2, t2) {
          function r2(e3) {
            try {
              o2(c2.next(e3));
            } catch (e4) {
              t2(e4);
            }
          }
          function i2(e3) {
            try {
              o2(c2.throw(e3));
            } catch (e4) {
              t2(e4);
            }
          }
          function o2(e3) {
            var t3;
            e3.done ? n2(e3.value) : ((t3 = e3.value) instanceof s2 ? t3 : new s2(function(e4) {
              e4(t3);
            })).then(r2, i2);
          }
          o2((c2 = c2.apply(e2, a2 || [])).next());
        });
      }
      function G(r2, i2) {
        var o2, a2, s2, c2 = { label: 0, sent: function() {
          if (1 & s2[0]) throw s2[1];
          return s2[1];
        }, trys: [], ops: [] }, e2 = { next: t2(0), throw: t2(1), return: t2(2) };
        return "function" == typeof Symbol && (e2[Symbol.iterator] = function() {
          return this;
        }), e2;
        function t2(n2) {
          return function(e3) {
            var t3 = [n2, e3];
            if (o2) throw new TypeError("Generator is already executing.");
            for (; c2; ) try {
              if (o2 = 1, a2 && (s2 = 2 & t3[0] ? a2.return : t3[0] ? a2.throw || ((s2 = a2.return) && s2.call(a2), 0) : a2.next) && !(s2 = s2.call(a2, t3[1])).done) return s2;
              switch (a2 = 0, (t3 = s2 ? [2 & t3[0], s2.value] : t3)[0]) {
                case 0:
                case 1:
                  s2 = t3;
                  break;
                case 4:
                  return c2.label++, { value: t3[1], done: false };
                case 5:
                  c2.label++, a2 = t3[1], t3 = [0];
                  continue;
                case 7:
                  t3 = c2.ops.pop(), c2.trys.pop();
                  continue;
                default:
                  if (!((s2 = 0 < (s2 = c2.trys).length && s2[s2.length - 1]) || 6 !== t3[0] && 2 !== t3[0])) {
                    c2 = 0;
                    continue;
                  }
                  if (3 === t3[0] && (!s2 || t3[1] > s2[0] && t3[1] < s2[3])) c2.label = t3[1];
                  else if (6 === t3[0] && c2.label < s2[1]) c2.label = s2[1], s2 = t3;
                  else {
                    if (!(s2 && c2.label < s2[2])) {
                      s2[2] && c2.ops.pop(), c2.trys.pop();
                      continue;
                    }
                    c2.label = s2[2], c2.ops.push(t3);
                  }
              }
              t3 = i2.call(r2, c2);
            } catch (e4) {
              t3 = [6, e4], a2 = 0;
            } finally {
              o2 = s2 = 0;
            }
            if (5 & t3[0]) throw t3[1];
            return { value: t3[0] ? t3[1] : void 0, done: true };
          };
        }
      }
      function u() {
        for (var e2 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++) e2 += arguments[t2].length;
        for (var r2 = Array(e2), i2 = 0, t2 = 0; t2 < n2; t2++) for (var o2 = arguments[t2], a2 = 0, s2 = o2.length; a2 < s2; a2++, i2++) r2[i2] = o2[a2];
        return r2;
      }
      var F, m, l, M = /_?t(\d)?(imestamp)?=\d+&?/g, j = ["aegis.qq.com", "tamaegis.com", "/aegis-sdk", "rumt-", "/flog.core.min.js", "pingfore.qq.com", "pingfore.tencent.com", "zhiyan.tencent-cloud.net", "h.trace.qq.com", "btrace.qq.com", "beacon.qq.com", "dmplog.qq.com", "qq.com/report", "svibeacon.onezapp.com", "cube.weixinbridge.com", "doubleclick.net", "pcmgrmonitor.3g.qq.com", "tdm.qq.com", "report.qqweb.qq.com", "tpstelemetry.tencent.com", "galileotelemetry.tencent.com", "insight.cloud.tencent.com", "facebook.com", "facebook.net", "google", "yahoo.com", "twitter.com", "ga-audiences", "report.idqqimg.com", "arms-retcode.aliyuncs.com", "px.effirst.com", "sentry", "baidu.com", "hot-update.json", "u.c.b.r.o.w.s.e.r", "report.url.cn", "sockjs-node", "m3u8", "flv"], q = ["ResizeObserver loop limit exceeded", "ResizeObserver loop completed", "Failed to execute 'transaction'", "window.indexedDB.deleteDatabase is not a function"], X = ["ext1", "ext2", "ext3", "level", "trace", "tag", "seq", "code"], V = ["static", "fetch"], E = "unknown";
      (r = F = F || {}).INFO_ALL = "-1", r.API_RESPONSE = "1", r.INFO = "2", r.ERROR = "4", r.PROMISE_ERROR = "8", r.AJAX_ERROR = "16", r.SCRIPT_ERROR = "32", r.IMAGE_ERROR = "64", r.CSS_ERROR = "128", r.CONSOLE_ERROR = "256", r.MEDIA_ERROR = "512", r.RET_ERROR = "1024", r.PAGE_LOAD = "1025", r.SLOW_PAGE_LOAD = "1026", r.SLOW_NET_REQUEST = "1027", r.ASSERT_REQUEST = "1028", r.SLOW_ASSET_REQUEST = "1029", r.CLICK_EVENT = "1030", r.true = "1031", r.BLANK_SCREEN = "1032", r.REPORT = "2048", r.PV = "4096", r.EVENT = "8192", r.SPEED_EVENT = "8193", r.PAGE_NOT_FOUND_ERROR = "16384", r.WEBSOCKET_ERROR = "32768", r.BRIDGE_ERROR = "65536", r.LAZY_LOAD_ERROR = "131072", (r = m = m || {}).LOG = "log", r.SPEED = "speed", r.PERFORMANCE = "performance", r.OFFLINE = "offline", r.WHITE_LIST = "whiteList", r.VITALS = "vitals", r.PV = "pv", r.CUSTOM_PV = "customPV", r.EVENT = "event", r.CUSTOM = "custom", r.SDK_ERROR = "sdkError", r.SET_DATA = "setData", r.LOAD_PACKAGE = "loadPackage", (r = l = l || {}).production = "production", r.development = "development", r.gray = "gray", r.pre = "pre", r.daily = "daily", r.local = "local", r.test = "test", r.others = "others";
      e.prototype.indexOf = function(e2, t2) {
        for (var n2 = 0; n2 < e2.length; n2++) if (e2[n2].callback === t2) return n2;
        return -1;
      }, e.prototype.on = function(e2, t2, n2) {
        var r2;
        if (void 0 === n2 && (n2 = 0), this) return (r2 = this.eventsList[e2]) || (this.eventsList[e2] = [], r2 = this.eventsList[e2]), -1 === this.indexOf(r2, t2) && r2.push({ name: e2, type: n2 || 0, callback: t2 }), this;
      }, e.prototype.one = function(e2, t2) {
        this.on(e2, t2, 1);
      }, e.prototype.remove = function(e2, t2) {
        if (this) {
          var n2 = this.eventsList[e2];
          if (n2) {
            if (t2) return n2.length && (t2 = this.indexOf(n2, t2), n2.splice(t2, 1)), this;
            try {
              delete this.eventsList[e2];
            } catch (e3) {
            }
          }
          return null;
        }
      }, e.prototype.clear = function() {
        this.eventsList = {};
      };
      var n, K = e, $ = function(e2) {
        if (!e2 || 0 === e2.length) return "{}";
        e2 = Array.isArray(e2) ? e2 : [e2];
        var t2 = Array.from(new Set(e2.flatMap(function(e3) {
          return Object.keys(e3);
        }))), n2 = {};
        return t2.forEach(function(t3) {
          n2[t3] = e2.map(function(e3) {
            return e3[t3] || "";
          });
        }), n2.count = e2.length, ue(n2);
      };
      function e() {
        var a2 = this;
        this.emit = function(e2, t2) {
          if (a2) {
            var n2;
            if (null != (r2 = a2.eventsList[e2]) && r2.length) for (var r2 = r2.slice(), i2 = 0; i2 < r2.length; i2++) {
              n2 = r2[i2];
              try {
                var o2 = n2.callback.apply(a2, [t2]);
                if (1 === n2.type && a2.remove(e2, n2.callback), false === o2) break;
              } catch (e3) {
                throw e3;
              }
            }
            return a2;
          }
        }, this.eventsList = {};
      }
      (r = n = n || {})[r.number = -1] = "number", r.string = "";
      function J(e2, t2) {
        return "number" == typeof e2 || "string" == typeof e2 ? e2 : t2 ? n.string : n.number;
      }
      function R(e2, t2) {
        return "string" == typeof e2 ? e2.split("?")[t2 ? 1 : 0] || "" : e2;
      }
      function z(e2, t2) {
        return void 0 === t2 && (t2 = 2048), String(e2).replace(M, "").slice(0, t2);
      }
      function Q(e2) {
        return "string" == typeof e2 && /^\//.test(e2) ? "https:" === (null == location ? void 0 : location.protocol) : /^https/.test(e2);
      }
      function Y(e2, t2, n2) {
        var r2, i2, o2;
        try {
          if ("function" == typeof (null == t2 ? void 0 : t2.retCodeHandler)) return { code: void 0 === (o2 = (i2 = t2.retCodeHandler(e2, null == n2 ? void 0 : n2.url, null == n2 ? void 0 : n2.ctx, null == n2 ? void 0 : n2.payload) || {}).code) ? E : o2, isErr: i2.isErr };
          if (!(e2 = "string" == typeof e2 ? JSON.parse(e2) : e2)) return { code: E, isErr: false };
          "function" == typeof (null == (r2 = null == t2 ? void 0 : t2.ret) ? void 0 : r2.join) && (se = [].concat(t2.ret.map(function(e3) {
            return e3.toLowerCase();
          })));
          var a2 = Object.getOwnPropertyNames(e2).filter(function(e3) {
            return -1 !== se.indexOf(e3.toLowerCase());
          });
          return a2.length ? { code: "" + (o2 = "\u672A\u77E5" !== (o2 = e2[a2[0]]) && "" !== o2 ? o2 : E), isErr: 0 !== o2 && "0" !== o2 && o2 !== E } : { code: E, isErr: false };
        } catch (e3) {
          return { code: E, isErr: false };
        }
      }
      function Z(e2, t2, n2) {
        try {
          var r2 = "function" == typeof t2 ? t2(e2, null == n2 ? void 0 : n2.url, null == n2 ? void 0 : n2.ctx) || "" : e2;
          return le(r2).slice(0, 10240);
        } catch (e3) {
          return "";
        }
      }
      function T(t2, e2) {
        return "string" != typeof t2 || !t2 || e2 && -1 < t2.indexOf(e2) || pe.test(t2) || j.some(function(e3) {
          return -1 < t2.indexOf(e3);
        });
      }
      function ee(n2, r2) {
        var i2, o2 = [], a2 = n2.config;
        return n2.lifeCycle.on("destroy", function() {
          o2.length = 0;
        }), function(e2, t2) {
          Array.isArray(e2) ? o2 = o2.concat(e2) : o2.push(e2), r2 && o2.length >= r2 || n2.sendNow && 0 < o2.length ? (o2 = he(o2), t2(o2.splice(0, o2.length)), i2 && clearTimeout(i2)) : (i2 && clearTimeout(i2), i2 = setTimeout(function() {
            i2 = null, 0 < (o2 = he(o2)).length && t2(o2.splice(0, o2.length));
          }, a2.delay));
        };
      }
      function te(e2, t2) {
        return Array.isArray(e2) ? t2(e2.map(function(e3) {
          return t3 = B(B({}, e3), { msg: "string" == typeof e3.msg ? e3.msg : [].concat(e3.msg).map(v).join(" ") }), X.forEach(function(e4) {
            t3[e4] || delete t3[e4];
          }), t3;
          var t3;
        })) : t2([B(B({}, e2), { msg: "string" == typeof e2.msg ? e2.msg : v(e2.msg) })]);
      }
      function ne(c2, u2) {
        return function(e2, t2) {
          var n2, r2, i2, o2 = Array.isArray(e2), a2 = o2 ? e2 : [e2], s2 = (c2.lifeCycle.emit("beforeRequest", e2), c2.config.beforeRequest);
          (a2 = "function" == typeof s2 ? a2.map(function(t3) {
            try {
              var e3 = s2({ logs: t3, logType: u2 });
              return (null == e3 ? void 0 : e3.logType) === u2 && null != e3 && e3.logs ? e3.logs : false !== e3 && t3;
            } catch (e4) {
              return t3;
            }
          }).filter(function(e3) {
            return false !== e3;
          }) : a2).length && (n2 = a2, e2 = X, !Array.isArray(n2) || n2.length <= 1 || (r2 = [], i2 = [], !(i2 = "string" == typeof e2 ? [e2] : e2)) || i2.length <= 0 || (i2.forEach(function(t3) {
            n2.forEach(function(e3) {
              null != e3 && e3[t3] && r2.push(t3);
            });
          }), 0 < r2.length && (n2 = n2.map(function(e3) {
            var t3 = {};
            return r2.forEach(function(e4) {
              t3[e4] = "";
            }), B(B({}, t3), e3);
          }))), a2 = n2, t2(o2 ? a2 : a2[0]));
        };
      }
      function re(i2) {
        return function(e2, t2) {
          i2.lifeCycle.emit("modifyRequest", e2);
          var n2 = i2.config.modifyRequest;
          if ("function" == typeof n2) try {
            var r2 = n2(e2);
            "object" == typeof r2 && "url" in r2 && (e2 = r2);
          } catch (e3) {
            console.error(e3);
          }
          t2(e2);
        };
      }
      function ie(r2) {
        return function(e2, t2) {
          null != (n2 = r2.lifeCycle) && n2.emit("afterRequest", e2);
          var n2 = (r2.config || {}).afterRequest;
          "function" == typeof n2 && false === n2(e2) || t2(e2);
        };
      }
      var oe = ["application/xhtml+xml", "application/xml", "application/pdf", "application/pkcs12", "application/javascript", "application/x-javascript", "application/ecmascript", "application/vnd.mspowerpoint", "application/vnd.apple.mpegurl", "application/ogg", "text/css", "text/javascript", "image", "audio", "video", "video/mp2t"], ae = /\.(json|js|css|jpg|jpeg|png|svg|apng|webp|gif|bmp|mp4|mp3|ts|mpeg|wav|webm|ogg|flv|m3u8|ttf|woff2|otf|eot|woff|html|htm|shtml|shtm|)$/i, se = ["ret", "retcode", "code", "errcode"], ce = function() {
        var n2 = /* @__PURE__ */ new WeakSet();
        return function(e2, t2) {
          if (t2 instanceof Error) return "Error.message: " + t2.message + " \n  Error.stack: " + t2.stack;
          if ("object" == typeof t2 && null !== t2) {
            if (n2.has(t2)) return "[Circular " + (e2 || "root") + "]";
            n2.add(t2);
          }
          return t2;
        };
      }, v = function(e2) {
        if ("string" == typeof e2) return e2;
        try {
          return e2 instanceof Error ? (JSON.stringify(e2, ce(), 4) || "undefined").replace(/"/gim, "") : JSON.stringify(e2, ce(), 4) || "undefined";
        } catch (e3) {
          return "error happen when aegis stringify: \n " + e3.message + " \n " + e3.stack;
        }
      }, ue = function(e2) {
        if ("string" == typeof e2) return e2;
        try {
          return JSON.stringify(e2, ce()) || "undefined";
        } catch (e3) {
          return "error happen when aegis stringify: \n " + e3.message + " \n " + e3.stack;
        }
      }, le = function(n2, r2) {
        void 0 === r2 && (r2 = 3);
        var i2, o2, a2, s2 = "";
        return Array.isArray(n2) ? (s2 += "[", i2 = n2.length, n2.forEach(function(e2, t2) {
          s2 = (s2 += "object" == typeof e2 && 1 < r2 ? le(e2, r2 - 1) : de(e2)) + (t2 === i2 - 1 ? "" : ",");
        }), s2 += "]") : n2 instanceof Object ? (s2 = "{", o2 = Object.keys(n2), a2 = o2.length, o2.forEach(function(e2, t2) {
          "object" == typeof n2[e2] && 1 < r2 ? s2 += '"' + e2 + '":' + le(n2[e2], r2 - 1) : s2 += fe(e2, n2[e2]), s2 += t2 === a2 - 1 || t2 < a2 - 1 && void 0 === n2[o2[t2 + 1]] ? "" : ",";
        }), s2 += "}") : s2 += n2, s2;
      }, fe = function(e2, t2) {
        var n2 = typeof t2, r2 = "";
        return "string" == n2 || "object" == n2 ? r2 += '"' + e2 + '":"' + t2 + '"' : "function" == typeof t2 ? r2 += '"' + e2 + '":"function ' + t2.name + '"' : "symbol" == typeof t2 ? r2 += '"' + e2 + '":"symbol"' : "number" != typeof t2 && "boolean" != n2 || (r2 += '"' + e2 + '": ' + t2), r2;
      }, de = function(e2) {
        var t2 = typeof e2;
        return "" + ("undefined" == t2 || "symbol" == t2 || "function" == t2 ? "null" : "string" == t2 || "object" == t2 ? '"' + e2 + '"' : e2);
      }, pe = /data:(image|text|application|font)\/.*;base64/, he = function(e2) {
        return e2.filter(function(n2, r2) {
          return "static" !== n2.type || !e2.find(function(e3, t2) {
            return n2.url === e3.url && 200 === n2.status && r2 < t2;
          });
        });
      }, ge = function(e2) {
        e2.level === F.INFO_ALL && (e2.level = F.INFO);
      }, y = {}, w = {}, me = function(e2) {
        return y[e2] || (y[e2] = setTimeout(function() {
          w[e2] = {}, y[e2] = null;
        }, 6e4)), y[e2];
      }, ve = function(e2) {
        return (Array.isArray(e2) ? e2 : [e2]).map(function(n2) {
          return Object.getOwnPropertyNames(n2).reduce(function(e3, t2) {
            return "ctx" !== t2 && (e3[t2] = n2[t2]), e3;
          }, { level: F.INFO, msg: "" });
        });
      }, ye = function(r2) {
        return function(e2) {
          return r2.sendPipeline([function(e3, n2) {
            return n2({ url: r2.config.url || "", data: $(ve(e3)), method: "post", contentType: "application/json", type: m.LOG, log: e3, requestConfig: { timeout: 5e3 }, success: function() {
              var t2 = r2.config.onReport;
              "function" == typeof t2 && e3.forEach(function(e4) {
                t2(e4);
              }), "function" == typeof n2 && n2([]);
            } });
          }], m.LOG)(e2);
        };
      }, we = { generateTraceId: Ee(16), generateSpanId: Ee(8) }, be = Array(32);
      function Ee(t2) {
        return function() {
          for (var e2 = 0; e2 < 2 * t2; e2++) be[e2] = Math.floor(16 * Math.random()) + 48, 58 <= be[e2] && (be[e2] += 39);
          return String.fromCharCode.apply(null, be.slice(0, 2 * t2));
        };
      }
      function Re() {
        return ("10000000100040008000" + 1e11).replace(/[018]/g, function(e2) {
          return (e2 ^ (16 * Math.random() & 15) >> e2 / 4).toString(16);
        });
      }
      function Te() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
          var t2 = 16 * Math.random() | 0;
          return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
        });
      }
      function Se(e2) {
        for (var t2, n2, r2, i2 = "", o2 = 0, a2 = (e2 = String(e2)).length % 3; o2 < e2.length; ) {
          if (255 < (t2 = e2.charCodeAt(o2++)) || 255 < (n2 = e2.charCodeAt(o2++)) || 255 < (r2 = e2.charCodeAt(o2++))) throw new TypeError("Failed to execute 'btoa': The string to be encoded contains characters outside of the Latin1 range.");
          i2 += s.charAt((t2 = t2 << 16 | n2 << 8 | r2) >> 18 & 63) + s.charAt(t2 >> 12 & 63) + s.charAt(t2 >> 6 & 63) + s.charAt(63 & t2);
        }
        return a2 ? i2.slice(0, a2 - 3) + "===".substring(a2) : i2;
      }
      function Oe(e2) {
        if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !ke.test(e2)) throw new TypeError("Failed to execute 'atob': The string to be decoded is not correctly encoded.");
        var t2;
        e2 += "==".slice(2 - (3 & e2.length));
        for (var n2, r2, i2 = "", o2 = 0; o2 < e2.length; ) t2 = s.indexOf(e2.charAt(o2++)) << 18 | s.indexOf(e2.charAt(o2++)) << 12 | (n2 = s.indexOf(e2.charAt(o2++))) << 6 | (r2 = s.indexOf(e2.charAt(o2++))), i2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === r2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
        return i2;
      }
      function xe(e2) {
        var t2, n2 = "";
        return n2 = "object" == typeof e2 && (t2 = (e2 = ((e3, t3) => {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var r2 = t3[n3], i2 = e3[r2] || "function" == typeof e3.get && e3.get(r2);
            if (i2) return [r2, i2];
          }
          return ["", ""];
        })(e2, Object.keys(Ae)))[0]) ? Ae[t2](e2[1]) : n2;
      }
      function b(n2) {
        if (n2 && n2.reduce && n2.length) return 1 === n2.length ? function(e2, t2) {
          n2[0](e2, t2 || Ie);
        } : n2.reduce(function(n3, r2) {
          return function(e2, t2) {
            return void 0 === t2 && (t2 = Ie), n3(e2, function(e3) {
              return null == r2 ? void 0 : r2(e3, t2);
            });
          };
        });
        throw new TypeError("createPipeline need at least one function param");
      }
      function Le(t2, n2) {
        Object.getOwnPropertyNames(t2).forEach(function(e2) {
          "function" == typeof t2[e2] && "constructor" !== e2 && (n2 ? n2[e2] = "sendPipeline" === e2 ? function() {
            return function() {
            };
          } : function() {
          } : t2[e2] = function() {
          });
        });
      }
      function Pe() {
        return void 0 !== window.performance && "function" == typeof performance.getEntriesByType && "function" == typeof performance.now;
      }
      function t(e2) {
        return -1 !== De.indexOf(e2);
      }
      var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ke = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, Ce = (c.prototype.generate = function(e2, t2, n2) {
        if (void 0 === t2 && (t2 = {}), this.url = e2, !this.isUrlIgnored() && this.isUrlInTraceUrls() && this.traceType) {
          switch (this.traceType) {
            case "traceparent":
              this.traceId = this.createTraceparent();
              break;
            case "b3":
              this.traceId = this.createB3();
              break;
            case "sw8":
              this.traceId = this.createSw8(n2);
              break;
            case "sentry-trace":
              this.traceId = this.createSentryTrace();
              break;
            default:
              return console.warn("this trace key " + this.traceType + " is not supported"), void (this.traceId = "");
          }
          return t2[this.traceType] && (this.traceId = t2[this.traceType]), { name: this.traceType, value: this.traceId };
        }
      }, c.prototype.createTraceparent = function() {
        var e2 = we.generateSpanId();
        return "00-" + we.generateTraceId() + "-" + e2 + "-0" + this.traceFlag.toString(16);
      }, c.prototype.createB3 = function() {
        var e2 = we.generateSpanId();
        return we.generateTraceId() + "-" + e2 + "-" + this.traceFlag;
      }, c.prototype.createSw8 = function(e2) {
        var t2 = "function" == typeof btoa ? btoa : Se, e2 = e2 || {}, n2 = e2.host, n2 = void 0 === n2 ? "" : n2, e2 = e2.pathname, e2 = void 0 === e2 ? "" : e2, r2 = Te(), i2 = Te();
        return "1-" + String(t2(i2)) + "-" + String(t2(r2)) + "-1-" + String(t2("aegis")) + "-" + String(t2("1.41.2")) + "-" + String(t2(encodeURI(e2))) + "-" + String(t2(n2));
      }, c.prototype.createSentryTrace = function() {
        var e2 = Re().substring(16);
        return Re() + "-" + e2 + "-" + this.traceFlag;
      }, c.prototype.isUrlIgnored = function() {
        if (Array.isArray(this.ignoreUrls) && 0 !== this.ignoreUrls.length) for (var e2 = 0, t2 = this.ignoreUrls; e2 < t2.length; e2++) {
          var n2 = t2[e2];
          if (this.urlMatches(this.url, n2)) return true;
        }
        return false;
      }, c.prototype.isUrlInTraceUrls = function() {
        if (!this.urls) return true;
        if (Array.isArray(this.urls)) {
          if (0 === this.urls.length) return false;
          for (var e2 = 0, t2 = this.urls; e2 < t2.length; e2++) {
            var n2 = t2[e2];
            if (this.urlMatches(this.url, n2)) return true;
          }
        }
        return false;
      }, c.prototype.urlMatches = function(e2, t2) {
        return "string" == typeof t2 ? e2 === t2 : !!e2.match(t2);
      }, c), Ae = { sw8: function(e2) {
        var t2 = "function" == typeof atob ? atob : Oe, e2 = e2.split("-")[1];
        return e2 ? t2(e2) : "";
      }, traceparent: function(e2) {
        return e2.split("-")[1];
      }, b3: function(e2) {
        return e2.split("-")[0];
      }, "sentry-trace": function(e2) {
        return e2.split("-")[0];
      } }, Ie = function() {
      }, r = (S.use = function(e2) {
        -1 === S.installedPlugins.indexOf(e2) && e2.aegisPlugin && S.installedPlugins.push(e2);
      }, S.unuse = function(e2) {
        e2 = S.installedPlugins.indexOf(e2);
        -1 !== e2 && S.installedPlugins.splice(e2, 1);
      }, S.prototype.init = function(e2) {
        this.setConfig(e2);
        for (var t2 = 0; t2 < S.installedPlugins.length; t2++) try {
          S.installedPlugins[t2].patch(this);
        } catch (e3) {
          this.sendSDKError(e3);
        }
        this.lifeCycle.emit("onInited");
      }, S.prototype.destroy = function(e2) {
        void 0 === e2 && (e2 = false);
        var t2, n2, r2 = S.instances.indexOf(this);
        -1 !== r2 && S.instances.splice(r2, 1);
        for (var i2 = S.installedPlugins.length - 1; 0 <= i2; i2--) try {
          S.installedPlugins[i2].unpatch(this);
        } catch (e3) {
          this.sendSDKError(e3);
        }
        if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e2) t2 = this, n2 = Object.getOwnPropertyDescriptors(t2), Object.keys(n2).forEach(function(e3) {
          n2[e3].writable && (t2[e3] = null);
        }), Object.setPrototypeOf(this, null);
        else {
          for (var o2 = this; o2.constructor !== Object && Le(o2, this), o2 = Object.getPrototypeOf(o2); ) ;
          0 === S.instances.length && (r2 = Object.getPrototypeOf(this).constructor, Le(r2), Le(S));
        }
      }, S.prototype.setConfig = function(e2) {
        Object.assign(this.config, e2);
        var e2 = this.config, t2 = e2.id, n2 = e2.uin, r2 = e2.version, i2 = e2.ext1, o2 = e2.ext2, a2 = e2.ext3, s2 = e2.aid, c2 = e2.env, u2 = void 0 === c2 ? "production" : c2, c2 = e2.pageUrl, e2 = this.bean.id !== t2 || this.bean.uin !== n2 || this.bean.aid !== s2;
        return this.bean.id = t2 || "", this.bean.uin = n2 || "", this.bean.version = r2 || "1.41.2", this.bean.aid = s2 || "", this.bean.env = (() => {
          switch (u2) {
            case l.production:
            case l.development:
            case l.gray:
            case l.pre:
            case l.daily:
            case l.local:
            case l.test:
            case l.others:
              return 1;
            default:
              return;
          }
        })() ? u2 : l.others, c2 && this.extendBean("from", encodeURIComponent(c2.slice(0, 2048))), i2 && this.extendBean("ext1", encodeURIComponent(i2)), o2 && this.extendBean("ext2", encodeURIComponent(o2)), a2 && this.extendBean("ext3", encodeURIComponent(a2)), e2 && this.lifeCycle.emit("onConfigChange", this.config), this.config;
      }, S.prototype.extendBean = function(e2, t2) {
        this.bean[e2] = t2;
      }, S.prototype.send = function(e2, i2, o2) {
        var t2 = this;
        return b([re(this), function(n2, r2) {
          t2.request(n2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            r2({ isErr: false, result: e3, logType: n2.type, logs: n2.log }), null != i2 && i2.apply(void 0, e3);
          }, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            r2({ isErr: true, result: e3, logType: n2.type, logs: n2.log }), null != o2 && o2.apply(void 0, e3);
          });
        }, ie(this)])(e2);
      }, S.prototype.sendSDKError = function(e2) {
        var n2 = this;
        this.sendPipeline([function(e3, t2) {
          t2({ url: n2.config.url + "?id=1085&msg[0]=" + encodeURIComponent(v(e3)) + "&level[0]=2&from=" + n2.config.id + "&count=1&version=" + n2.config.id + "(1.41.2)", addBean: false, method: "get", type: m.SDK_ERROR, log: e3 });
        }], m.SDK_ERROR)(e2);
      }, S.prototype.sendPipeline = function(e2, t2) {
        var n2, o2 = this;
        return b(u([function(e3, t3) {
          if ("number" != typeof n2.config.random && (console.warn("random must in [0, 1], default is 1."), n2.config.random = 1), !n2.isHidden || !n2.isGetSample) if (n2.isGetSample) n2.isHidden || t3(e3);
          else {
            if (n2.isGetSample = true, Math.random() < n2.config.random) return n2.isHidden = false, t3(e3);
            n2.isHidden = true;
          }
        }, ne(n2 = this, t2)], e2, [re(this), function(r2, i2) {
          o2.request(r2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            var n3 = false;
            -1 < ("" + e3[o2.failRequestCount = 0]).indexOf("403 forbidden") && (n3 = true, o2.destroy()), i2({ isErr: n3, result: e3, logType: null == r2 ? void 0 : r2.type, logs: null == r2 ? void 0 : r2.log }), null != (n3 = null == r2 ? void 0 : r2.success) && n3.call.apply(n3, u([r2], e3));
          }, function() {
            for (var e3, t3 = [], n3 = 0; n3 < arguments.length; n3++) t3[n3] = arguments[n3];
            60 <= ++o2.failRequestCount && o2.destroy(), -1 < ("" + t3[0]).indexOf("403 forbidden") && o2.destroy(), i2({ isErr: true, result: t3, logType: null == r2 ? void 0 : r2.type, logs: null == r2 ? void 0 : r2.log }), null != (e3 = null == r2 ? void 0 : r2.fail) && e3.call.apply(e3, u([r2], t3));
          });
        }, ie(this)]));
      }, S.prototype.validateRange = function(e2) {
        return 0 <= e2 && e2 <= 127 ? e2 : -1;
      }, S.prototype.info = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: F.INFO, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, B({}, e2[0]), { level: F.INFO }), this.normalLogPipeline(n2);
      }, S.prototype.infoAll = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: F.INFO_ALL, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, B({}, e2[0]), { level: F.INFO_ALL }), this.normalLogPipeline(n2);
      }, S.prototype.report = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: F.REPORT, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, B({}, e2[0])), this.normalLogPipeline(n2);
      }, S.prototype.error = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: F.ERROR, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, B({}, e2[0]), { level: F.ERROR }), this.normalLogPipeline(n2);
      }, S.prototype.reportEvent = function(e2) {
        e2 && ((e2 = "string" == typeof e2 ? { name: e2, ext1: this.config.ext1 || "", ext2: this.config.ext2 || "", ext3: this.config.ext3 || "" } : e2).name ? ("string" != typeof e2.name && (console.warn("reportEvent params name must be string"), e2.name = String(e2.name)), this.eventPipeline(e2)) : console.warn("reportEvent params error"));
      }, S.prototype.reportT = function(e2) {
        var t2 = e2.name, n2 = e2.duration, r2 = e2.ext1, r2 = void 0 === r2 ? "" : r2, i2 = e2.ext2, i2 = void 0 === i2 ? "" : i2, o2 = e2.ext3, o2 = void 0 === o2 ? "" : o2, a2 = e2.from;
        if ("string" == typeof t2 && "number" == typeof n2 && "string" == typeof r2 && "string" == typeof i2 && "string" == typeof o2) {
          if (!(n2 < 0 || 2147483646 < n2)) return this.submitCustomTime(t2, n2, r2, i2, o2, e2.ext4, e2.ext5, e2.ext6, e2.ext7, e2.ext8, e2.ext9, e2.ext10, void 0 === a2 ? "" : a2);
          console.warn("reportTime: duration must between 0 and 2147483646");
        } else console.warn("reportTime: params error");
      }, S.prototype.reportTime = function(e2, t2) {
        if ("object" == typeof e2) return this.reportT(e2);
        "string" == typeof e2 ? "number" == typeof t2 ? t2 < 0 || 2147483646 < t2 ? console.warn("reportTime: duration must between 0 and 2147483646") : (this.submitCustomTime(e2, t2), this.normalLogPipeline({ level: F.SPEED_EVENT, msg: "key:" + e2 + "\n duration:" + t2, errorMsg: "" })) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string");
      }, S.prototype.time = function(e2) {
        "string" == typeof e2 ? this.timeMap[e2] ? console.warn("Timer " + e2 + " already exists") : this.timeMap[e2] = Date.now() : console.warn("time: first param must be a string");
      }, S.prototype.timeEnd = function(e2) {
        "string" == typeof e2 ? this.timeMap[e2] ? (this.submitCustomTime(e2, Date.now() - this.timeMap[e2]), delete this.timeMap[e2]) : console.warn("Timer " + e2 + " does not exist") : console.warn("timeEnd: first param must be a string");
      }, S.prototype.ready = function(e2, t2, n2) {
        throw new Error('You need to override "ready" method');
      }, S.prototype.request = function(e2, t2, n2) {
        throw new Error('You need to override "request" method');
      }, S.prototype.speedLogPipeline = function(e2) {
        throw new Error('You need to override "speedLogPipeline" method');
      }, Object.defineProperty(S.prototype, "__version__", { get: function() {
        return "1.41.2";
      }, enumerable: false, configurable: true }), Object.defineProperty(S.prototype, "LogType", { get: function() {
        return F;
      }, enumerable: false, configurable: true }), S.prototype.reportPv = function(e2) {
        e2 && console.warn("reportPv is deprecated, please use reportEvent");
      }, S.prototype.submitCustomTime = function(e2, t2, n2, r2, i2, o2, a2, s2, c2, u2, l2, f2, d2) {
        var p2 = this, n2 = [{ key: "ext1", value: n2 || this.config.ext1, isString: true }, { key: "ext2", value: r2 || this.config.ext2, isString: true }, { key: "ext3", value: i2 || this.config.ext3, isString: true }, { key: "ext4", value: o2 || this.config.ext4, isString: false }, { key: "ext5", value: a2 || this.config.ext5, isString: false }, { key: "ext6", value: s2 || this.config.ext6, isString: false }, { key: "ext7", value: c2 || this.config.ext7, isString: false }, { key: "ext8", value: u2 || this.config.ext8, isString: false }, { key: "ext9", value: l2 || this.config.ext9, isString: false }, { key: "ext10", value: f2 || this.config.ext10, isString: false }], h2 = { name: e2, duration: t2 };
        n2.forEach(function(e3) {
          var t3 = e3.key, n3 = e3.value;
          void 0 !== n3 && (h2[t3] = e3.isString ? null == (t3 = String(n3)) ? void 0 : t3.slice(0, 1024) : String(p2.validateRange(n3)));
        }), d2 && (h2.from = d2), this.customTimePipeline(h2);
      }, S.version = "1.41.2", S.instances = [], S.logType = F, S.environment = l, S.installedPlugins = [], S), i = (a.prototype.patch = function(e2) {
        this.canUse(e2) && this.exist(e2) && (this.instances.push(e2), this.triggerInit(e2), this.triggerOnNewAegis(e2));
      }, a.prototype.unpatch = function(e2) {
        var t2 = this.instances.indexOf(e2);
        -1 !== t2 && (this.instances.splice(t2, 1), 0 === this.instances.length) && this.uninstall(e2);
      }, a.prototype.countInstance = function() {
        return this.instances.length;
      }, a.prototype.uninstall = function(e2) {
        var t2;
        null != (t2 = null == (t2 = this.option) ? void 0 : t2.destroy) && t2.apply(this, [e2]);
      }, a.prototype.walk = function(n2) {
        var r2 = this;
        this.instances.forEach(function(e2) {
          var t2 = r2.canUse(e2);
          t2 && n2(e2, t2);
        });
      }, a.prototype.canUse = function(e2) {
        e2 = this.getConfig(e2);
        return !(!e2 || "object" != typeof e2) || !!e2;
      }, a.prototype.getConfig = function(e2) {
        return null == (e2 = e2.config) ? void 0 : e2[this.name];
      }, a.prototype.exist = function(e2) {
        return -1 === this.instances.indexOf(e2);
      }, a.prototype.triggerInit = function(e2) {
        var t2;
        this.inited || (this.inited = true, null == (t2 = null == (t2 = this.option) ? void 0 : t2.init)) || t2.call(this.option, this.getConfig(e2));
      }, a.prototype.triggerOnNewAegis = function(e2) {
        var t2;
        null != (t2 = null == (t2 = this.option) ? void 0 : t2.onNewAegis) && t2.call(this.option, e2, this.getConfig(e2));
      }, a), Ne = new i({ name: "aid", aid: "", init: function(e2) {
        try {
          var t2 = true !== e2 && e2 || window.localStorage.getItem("AEGIS_ID");
          t2 || (t2 = Te(), window.localStorage.setItem("AEGIS_ID", t2)), this.aid = t2;
        } catch (e3) {
        }
      }, onNewAegis: function(e2) {
        e2.bean.aid = this.aid, e2.config.aid = this.aid;
      } }), _e = function(t2) {
        var n2;
        return t2.payload ? (n2 = {}, Object.keys(t2).forEach(function(e2) {
          "payload" !== e2 && (n2[e2] = t2[e2]);
        }), n2) : t2;
      }, Ue = new i({ name: "reportAssetSpeed" }), He = Ue = new i({ name: "reportAssetSpeed", collectCur: 0, collectEntryType: "resource", ASSETS_INITIATOR_TYPE: ["img", "css", "script", "link", "audio", "video"], onNewAegis: function(e2) {
        var t2 = this;
        Pe() && (setTimeout(function() {
          t2.collectSuccessLog(e2), t2.collectFailLog(e2);
        }, 5e3), performance.onresourcetimingbufferfull = function() {
          "function" == typeof performance.clearResourceTimings && (t2.collectCur = 0, performance.clearResourceTimings());
        });
      }, processLog: function(e2, t2) {
        var n2 = t2.duration || 0, r2 = t2.transferSize || 0, i2 = 1e3 < n2, t2 = ["ASSET_REQUEST: " + t2.url, "status: " + t2.status, "duration: " + n2 + "ms", "type: " + t2.type, "domainLookup: " + t2.domainLookup + "ms", "connectTime: " + t2.connectTime + "ms", "transferSize: " + (0 < r2 ? r2 + "bytes" : "unknown")].filter(Boolean).join("\n\n"), r2 = e2.isWhiteList && e2.config.assetLog, o2 = e2.config.slowAssetLog && i2, i2 = { level: i2 ? e2.LogType.SLOW_ASSET_REQUEST : e2.LogType.ASSERT_REQUEST, msg: t2, ext1: n2.toString() || "", errorMsg: "" };
        (r2 || o2) && e2.normalLogPipeline(i2);
      }, publish: function(t2, n2) {
        var r2 = this;
        this.$walk(function(e2) {
          e2 === n2 && (e2.speedLogPipeline(t2), Array.isArray(t2) ? t2.forEach(r2.processLog) : r2.processLog(n2, t2));
        });
      }, publishMany: function(e2, t2) {
        for (var n2 = t2.config, r2 = 0, i2 = e2.length; r2 < i2; r2++) {
          var o2 = e2[r2];
          -1 === this.ASSETS_INITIATOR_TYPE.indexOf(o2.initiatorType) || T(o2.name, n2.hostUrl) || this.publish(this.generateLog(o2, n2), t2);
        }
      }, collectSuccessLog: function(n2) {
        var e2, t2, r2 = this;
        "function" == typeof window.PerformanceObserver ? (this.publishMany(performance.getEntriesByType(this.collectEntryType), n2), (e2 = new window.PerformanceObserver(function(e3) {
          r2.publishMany(e3.getEntries(), n2);
        })).observe({ entryTypes: [this.collectEntryType] }), n2.lifeCycle.on("destroy", function() {
          0 === Ue.countInstance() && e2.disconnect();
        })) : (t2 = setInterval(function() {
          var e3 = performance.getEntriesByType(r2.collectEntryType), t3 = e3.slice(r2.collectCur);
          r2.collectCur = e3.length, r2.publishMany(t3, n2);
        }, 3e3), n2.lifeCycle.on("destroy", function() {
          0 === Ue.countInstance() && clearInterval(t2);
        }));
      }, collectFailLog: function(r2) {
        function e2(e3) {
          var t2, n2;
          e3 && (e3 = e3.target || e3.srcElement, !(t2 = (null == e3 ? void 0 : e3.src) || (null == e3 ? void 0 : e3.href)) || "string" != typeof t2 || -1 < window.location.href.indexOf(t2) || (e3 = "function" == typeof (null == (e3 = o2.api) ? void 0 : e3.resourceTypeHandler) ? null == (e3 = o2.api) ? void 0 : e3.resourceTypeHandler(t2) : "", n2 = performance.getEntriesByType(i2.collectEntryType).find(function(e4) {
            return e4.name === t2;
          }), T(t2, o2.hostUrl)) || (n2 = { url: z(t2), status: 400, duration: Number(((null == n2 ? void 0 : n2.duration) || 0).toFixed(2)), method: "get", type: e3 || "static", isHttps: Q(t2), urlQuery: R(t2, true), nextHopProtocol: "", domainLookup: 0, connectTime: 0 }, i2.publish(n2, r2)));
        }
        var i2 = this, o2 = r2.config;
        window.document.addEventListener("error", e2, true), r2.lifeCycle.on("destroy", function() {
          0 === Ue.countInstance() && window.document.removeEventListener("error", e2, true);
        });
      }, generateLog: function(e2, t2) {
        var t2 = "function" == typeof (null == (n2 = t2.api) ? void 0 : n2.resourceTypeHandler) ? null == (n2 = t2.api) ? void 0 : n2.resourceTypeHandler(e2.name) : "", n2 = e2.transferSize;
        return { url: z(e2.name), method: "get", duration: Number(e2.duration.toFixed(2)), status: 200, type: t2 || "static", isHttps: Q(e2.name), nextHopProtocol: e2.nextHopProtocol || "", urlQuery: R(e2.name, true), domainLookup: J(e2.domainLookupEnd - e2.domainLookupStart), connectTime: J(e2.connectEnd - e2.connectStart), transferSize: 0 < n2 ? n2 : -1 };
      }, collectNotReportedLog: function(e2) {
        var t2, n2;
        Pe() && (t2 = (n2 = performance.getEntriesByType(this.collectEntryType)).length, "function" != typeof window.PerformanceObserver) && this.collectCur !== t2 && (n2 = n2.slice(this.collectCur), this.collectCur = t2, this.publishMany(n2, e2, true));
      }, destroy: function() {
        this.option.publish = function() {
        };
      } }), De = window.navigator.userAgent.toLowerCase(), o = {};
      function a(e2) {
        this.aegisPlugin = true, this.name = "", this.instances = [], this.inited = false, e2.$walk = this.walk.bind(this), e2.$getConfig = this.getConfig.bind(this), this.option = e2, this.name = e2.name;
      }
      function S(e2) {
        var n2, t2, r2, i2, a2, o2, s2, c2, u2, l2, f2, d2, p2, h2, g2 = this;
        this.isGetSample = false, this.isHidden = false, this.config = { version: 0, delay: 1e3, onError: true, repeat: 60, random: 1, aid: true, device: true, pagePerformance: true, webVitals: true, speedSample: true, onClose: true, reportLoadPackageSpeed: true, hostUrl: "https://rumt-zh.com", env: "production", url: "", offlineUrl: "", whiteListUrl: "", pvUrl: "", speedUrl: "", customTimeUrl: "", performanceUrl: "", performanceUrlForHippy: "", webVitalsUrl: "", eventUrl: "", setDataReportUrl: "", reportImmediately: true }, this.isWhiteList = false, this.lifeCycle = new K(), this.bean = {}, this.normalLogPipeline = b([ee(this, 5), te, function(e3, t3) {
          var r3 = n2.config;
          t3(e3 = e3.map(function(e4) {
            var t4, n3 = r3.maxLength || 10240;
            try {
              if (!e4.msg || e4.msg.length <= n3) return e4;
              e4.msg = null == (t4 = e4.msg) ? void 0 : t4.substring(0, n3);
            } catch (t5) {
              e4.msg = v(e4.msg).substring(0, r3.maxLength);
            }
            return e4;
          }));
        }, (h2 = (n2 = this).config, function(e3, t3) {
          var n3 = "number" == typeof h2.repeat ? h2.repeat : 60;
          if (n3 <= 0) return t3(e3);
          var r3 = (null == h2 ? void 0 : h2.id) + "_error", i3 = w[r3] || {};
          t3(e3.filter(function(e4) {
            if (e4.level === F.ERROR || e4.level === F.PROMISE_ERROR || e4.level === F.AJAX_ERROR || e4.level === F.SCRIPT_ERROR || e4.level === F.IMAGE_ERROR || e4.level === F.CSS_ERROR || e4.level === F.MEDIA_ERROR || e4.level === F.RET_ERROR || e4.level === F.BRIDGE_ERROR || e4.level === F.PAGE_NOT_FOUND_ERROR || e4.level === F.WEBSOCKET_ERROR || e4.level === F.LAZY_LOAD_ERROR) {
              e4 = e4.msg.slice(0, 200);
              if (i3[e4] > n3) return y[r3] || me(r3), false;
              i3[e4] = 1 + ~~i3[e4], w[r3] = i3;
            }
            return true;
          }));
        }), (d2 = this.lifeCycle.emit, p2 = this.config, function(e3, t3) {
          var n3, r3 = p2.logCreated;
          return "function" == typeof r3 ? (n3 = e3.filter(function(e4) {
            return false !== r3(e4);
          }), d2("beforeWrite", n3), t3(n3)) : (d2("beforeWrite", e3), t3(e3));
        }), (f2 = this, setTimeout(function() {
          var e3 = f2.config, t3 = e3.pvUrl, n3 = void 0 === t3 ? "" : t3, t3 = e3.spa, e3 = -1 < ["web-sdk", "mp-sdk"].indexOf("web-sdk");
          n3 && (e3 && !t3 || !e3) && f2.sendPipeline([function(e4, t4) {
            t4({ url: n3, type: m.PV });
          }], m.PV)(null);
        }, 100), function(e3, t3) {
          t3(e3);
        }), (u2 = c2 = s2 = false, l2 = [], (a2 = this).lifeCycle.on("onConfigChange", function() {
          o2 && clearTimeout(o2), o2 = setTimeout(function() {
            var e3, n3;
            !u2 && a2.config && (u2 = true, e3 = a2.config.whiteListUrl, (n3 = void 0 === e3 ? "" : e3) && a2.sendPipeline([function(e4, t3) {
              t3({ url: n3, type: m.WHITE_LIST, success: function(e5) {
                c2 = true;
                try {
                  var t4 = e5.data || JSON.parse(e5), n4 = t4.retcode, r3 = t4.result, i3 = void 0 === r3 ? {} : r3, o3 = (0 === n4 && (s2 = i3.is_in_white_list, a2.isWhiteList = s2, 0 <= i3.rate) && i3.rate <= 1 && (a2.config.random = i3.rate, a2.isGetSample = false), a2.isWhiteList && l2.length ? ye(a2)(l2.splice(0), function() {
                  }) : !a2.isWhiteList && l2.length && (l2.length = 0), a2.config.onWhitelist);
                  "function" == typeof o3 && o3(s2);
                } catch (e6) {
                }
              }, fail: function() {
                c2 = true;
              } });
            }], m.WHITE_LIST)(null), u2 = false);
          }, a2.config.uin ? 50 : 500);
        }), a2.lifeCycle.on("destroy", function() {
          l2.length = 0;
        }), function(e3, t3) {
          var n3;
          s2 || null != (n3 = null == (n3 = a2.config) ? void 0 : n3.api) && n3.reportRequest ? t3(e3.concat(l2.splice(0)).map(function(e4) {
            return ge(e4), e4;
          })) : (n3 = e3.filter(function(e4) {
            return e4.level !== F.INFO && e4.level !== F.API_RESPONSE ? (ge(e4), true) : (c2 || (l2.push(e4), 200 <= l2.length && (l2.length = 200)), false);
          })).length && t3(n3);
        }), function(e3, t3) {
          try {
            var n3 = e3.filter(function(e4) {
              return [F.ERROR, F.PROMISE_ERROR, F.AJAX_ERROR, F.SCRIPT_ERROR, F.IMAGE_ERROR, F.CSS_ERROR, F.MEDIA_ERROR, F.WEBSOCKET_ERROR, F.BRIDGE_ERROR, F.BLANK_SCREEN, F.RET_ERROR, F.PAGE_NOT_FOUND_ERROR, F.LAZY_LOAD_ERROR].includes(e4.level);
            }), r3 = (n3.length && g2.lifeCycle.emit("errorOccurred", n3), e3.forEach(function(n4) {
              ["ext1", "ext2", "ext3"].forEach(function(e4) {
                n4[e4] && "string" == typeof n4[e4] && (n4[e4] = n4[e4].slice(0, 1024));
              }), ["ext4", "ext5", "ext6", "ext7", "ext8", "ext9", "ext10"].forEach(function(e4) {
                var t4;
                n4[e4] && (t4 = Number(n4[e4]), n4[e4] = isNaN(t4) ? "-1" : String(g2.validateRange(t4)));
              });
            }), JSON.parse(JSON.stringify(e3))), i3 = (g2.lifeCycle.emit("beforeReport", r3), g2.config.beforeReport);
            (e3 = "function" == typeof i3 ? e3.filter(function(e4) {
              return false !== i3(e4);
            }) : e3).length && t3(e3);
          } catch (e4) {
          }
        }, ye(this)]), this.eventPipeline = b([ee(this, 10), (i2 = this, function(e3) {
          i2.sendPipeline([function(e4, t3) {
            var n3 = e4.map(function(e5) {
              var t4 = { name: e5.name, ext1: String(e5.ext1 || i2.config.ext1 || "").slice(0, 1024), ext2: String(e5.ext2 || i2.config.ext2 || "").slice(0, 1024), ext3: String(e5.ext3 || i2.config.ext3 || "").slice(0, 1024) };
              return (e5.ext4 || i2.config.ext4) && (t4.ext4 = e5.ext4 && i2.validateRange(e5.ext4) || i2.config.ext4 && i2.validateRange(i2.config.ext4)), (e5.ext5 || i2.config.ext5) && (t4.ext5 = e5.ext5 && i2.validateRange(e5.ext5) || i2.config.ext5 && i2.validateRange(i2.config.ext5)), (e5.ext6 || i2.config.ext6) && (t4.ext6 = e5.ext6 && i2.validateRange(e5.ext6) || i2.config.ext6 && i2.validateRange(i2.config.ext6)), (e5.ext7 || i2.config.ext7) && (t4.ext7 = e5.ext7 && i2.validateRange(e5.ext7) || i2.config.ext7 && i2.validateRange(i2.config.ext7)), (e5.ext8 || i2.config.ext8) && (t4.ext8 = e5.ext8 && i2.validateRange(e5.ext8) || i2.config.ext8 && i2.validateRange(i2.config.ext8)), (e5.ext9 || i2.config.ext9) && (t4.ext9 = e5.ext9 && i2.validateRange(e5.ext9) || i2.config.ext9 && i2.validateRange(i2.config.ext9)), (e5.ext10 || i2.config.ext10) && (t4.ext10 = e5.ext10 && i2.validateRange(e5.ext10) || i2.config.ext10 && i2.validateRange(i2.config.ext10)), t4;
            });
            t3({ url: i2.config.eventUrl + "?payload=" + encodeURIComponent(JSON.stringify(n3)), type: m.EVENT, log: e4 });
          }], m.EVENT)(e3);
        })]), this.customTimePipeline = b([ee(this, 10), (r2 = this, function(e3) {
          return r2.sendPipeline([function(e4, t3) {
            t3({ url: r2.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({ custom: e4 })), type: m.CUSTOM, log: e4 });
          }], m.CUSTOM)(e3);
        })]), this.timeMap = {}, this.failRequestCount = 0, this.config = (t2 = this.config, "string" != typeof (e2 = void 0 === (e2 = e2.hostUrl) ? "https://rumt-zh.com" : e2) && (e2 = "https://rumt-zh.com"), t2.url = t2.url || e2 + "/collect", t2.offlineUrl = t2.offlineUrl || e2 + "/offline", t2.whiteListUrl = t2.whiteListUrl || e2 + "/collect/whitelist", t2.pvUrl = t2.pvUrl || e2 + "/collect/pv", t2.eventUrl = t2.eventUrl || e2 + "/collect/events", t2.speedUrl = t2.speedUrl || e2 + "/speed", t2.customTimeUrl = t2.customTimeUrl || e2 + "/speed/custom", t2.performanceUrl = t2.performanceUrl || e2 + "/speed/performance", t2.performanceUrlForHippy = t2.performanceUrlForHippy || e2 + "/speed/hippyPerformance", t2.webVitalsUrl = t2.webVitalsUrl || e2 + "/speed/webvitals", t2.setDataReportUrl = t2.SetDataReportUrl || e2 + "/speed/miniProgramData", t2), S.instances.push(this);
      }
      function c(e2, t2, n2, r2) {
        void 0 === n2 && (n2 = null), this.traceType = e2, this.ignoreUrls = t2, this.urls = n2, this.traceFlag = null == r2 ? 1 : Number(!!r2);
      }
      o.macos = function() {
        return t("mac");
      }, o.ios = function() {
        return o.iphone() || o.ipod() || o.ipad();
      }, o.iphone = function() {
        return !o.windows() && t("iphone");
      }, o.ipod = function() {
        return t("ipod");
      }, o.ipad = function() {
        var e2 = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
        return t("ipad") || e2;
      }, o.android = function() {
        return !o.windows() && t("android");
      }, o.androidPhone = function() {
        return o.android() && t("mobile");
      }, o.androidTablet = function() {
        return o.android() && !t("mobile");
      }, o.blackberry = function() {
        return t("blackberry") || t("bb10");
      }, o.blackberryPhone = function() {
        return o.blackberry() && !t("tablet");
      }, o.blackberryTablet = function() {
        return o.blackberry() && t("tablet");
      }, o.windows = function() {
        return t("windows");
      }, o.windowsPhone = function() {
        return o.windows() && t("phone");
      }, o.windowsTablet = function() {
        return o.windows() && t("touch") && !o.windowsPhone();
      }, o.fxos = function() {
        return (t("(mobile") || t("(tablet")) && t(" rv:");
      }, o.fxosPhone = function() {
        return o.fxos() && t("mobile");
      }, o.fxosTablet = function() {
        return o.fxos() && t("tablet");
      }, o.meego = function() {
        return t("meego");
      }, o.cordova = function() {
        return window.cordova && "file:" === location.protocol;
      }, o.nodeWebkit = function() {
        return "object" == typeof window.process;
      }, o.mobile = function() {
        return o.androidPhone() || o.iphone() || o.ipod() || o.windowsPhone() || o.blackberryPhone() || o.fxosPhone() || o.meego();
      }, o.tablet = function() {
        return o.ipad() || o.androidTablet() || o.blackberryTablet() || o.windowsTablet() || o.fxosTablet();
      }, o.desktop = function() {
        return !o.tablet() && !o.mobile();
      };
      function Me() {
        return { host: new URL(location.href).host, pathname: location.pathname };
      }
      function je(r2, e2, i2) {
        return null != e2 && e2.length && "object" == typeof r2 ? e2.reduce(function(e3, t2) {
          var n2 = window.Headers && r2 instanceof Headers ? r2.get(t2) : r2[t2];
          return n2 ? e3 + ("" === e3 ? "" : "\n\n") + i2 + " header " + t2 + ": " + n2 : e3;
        }, "") : "";
      }
      function qe(e2, t2) {
        return e2 && -1 === ["null", "undefined"].indexOf(e2) ? t2 + ": " + e2 : "";
      }
      function Be(e2, t2, n2) {
        void 0 === t2 && (t2 = "");
        var r2, i2, e2 = "function" == typeof (null == (i2 = e2.api) ? void 0 : i2.resourceTypeHandler) ? null == (i2 = e2.api) ? void 0 : i2.resourceTypeHandler(n2) : "";
        return -1 === V.indexOf(e2) && (r2 = void 0 === t2 ? "" : t2, i2 = (void 0 === n2 ? "" : n2).split("?")[0], e2 = ae.test(i2) || oe.some(function(e3) {
          return -1 !== String(r2).indexOf(e3);
        }) ? "static" : "fetch"), e2;
      }
      function Fe(e2, t2) {
        return e2 ? F.AJAX_ERROR : t2 ? F.RET_ERROR : F.API_RESPONSE;
      }
      function We(e2) {
        return !!e2 && 1e3 < e2;
      }
      function Ge(e2, t2) {
        if (null != (e2 = e2.api) && e2.usePerformanceTiming && "string" == typeof t2.url) {
          e2 = null == (e2 = performance.getEntriesByName(t2.url)) ? void 0 : e2.pop();
          if (e2) return { url: t2.url, isHttps: Q(t2.url), method: t2.method, type: t2.type, status: t2.status, duration: Number(e2.duration.toFixed(2)), nextHopProtocol: e2.nextHopProtocol || "", domainLookup: J(e2.domainLookupEnd - e2.domainLookupStart), connectTime: J(e2.connectEnd - e2.connectStart) };
        }
        return { url: t2.url, isHttps: Q(t2.url), method: t2.method, type: t2.type, status: t2.status, duration: Number(t2.duration.toFixed(2)), nextHopProtocol: "", domainLookup: n.number, connectTime: n.number };
      }
      function Xe() {
        return window.location.href;
      }
      function Ve(e2) {
        return (e2 = ((e3) => {
          var t2 = "", n2 = e3.nodeType;
          if (1 === n2 || 9 === n2 || 11 === n2) {
            if ("string" == typeof e3.textContent) return e3.textContent;
            for (var r2 = e3.firstChild; r2; r2 = r2.nextSibling) t2 += Tt(e3);
          } else if (3 === n2 || 4 === n2) return e3.nodeValue;
          return t2;
        })(e2)) ? e2.replace(/^\s+|\s+$/g, "") : "";
      }
      var Ke, $e, Je, ze, f, Qe, Ye, d, Ze, et, tt, nt, rt, it, ot, at, st, ct, ut = !(o.isIE = function() {
        return "ActiveXObject" in window;
      }), p = [], lt = /^\/[^/]/, ft = false, h = [], dt = (new i({ name: "reportApiSpeed" }), new i({ name: "reportApiSpeed", override: false, onNewAegis: function(e2) {
        var t2, n2;
        this.override || (this.override = true, null != (n2 = e2.config.api) && n2.injectTraceHeader && (this.traceRequestHeader = new Ce(n2.injectTraceHeader, null != (t2 = null == n2 ? void 0 : n2.injectTraceIgnoreUrls) ? t2 : [], null == n2 ? void 0 : n2.injectTraceUrls, null == n2 ? void 0 : n2.traceFlag)), this.overrideFetch(e2.config, e2), this.overrideXhr(e2.config, e2));
      }, overrideFetch: function(y2, w2) {
        var b2 = this, e2 = y2.api, e2 = { name: this.name, traceRequestHeader: null != e2 && e2.injectTraceHeader ? this.traceRequestHeader : null, then: function(d2, p2, h2, g2, m2) {
          var e3, v2;
          T(h2, y2.hostUrl) || (e3 = d2.headers ? d2.headers.get("content-type") : "", "fetch" === (v2 = Be(y2, e3 || "", h2)) ? d2.clone().text().then(function(r2) {
            var e4, i2 = d2.status <= 0 || 400 <= d2.status, t2 = (null == (t2 = y2.api) ? void 0 : t2.reqHeaders) || [], o2 = je(null == g2 ? void 0 : g2.headers, t2, "req"), t2 = (null == (t2 = y2.api) ? void 0 : t2.resHeaders) || [], a2 = je(d2.headers, t2, "res"), s2 = xe(null == g2 ? void 0 : g2.headers), t2 = Y(r2, y2.api, { url: h2, ctx: d2, payload: null == g2 ? void 0 : g2.body }), c2 = t2.code, u2 = t2.isErr, t2 = null == (t2 = y2.api) ? void 0 : t2.apiDetail, l3 = t2 ? Z(null == g2 ? void 0 : g2.body, null == (e4 = y2.api) ? void 0 : e4.reqParamHandler, { url: h2 }) : "", f3 = t2 ? Z(r2, null == (e4 = y2.api) ? void 0 : e4.resBodyHandler, { url: h2, ctx: d2 }) : "";
            setTimeout(function() {
              var e5 = Ge(y2, { url: h2, duration: p2, type: v2, status: d2.status || 0, method: (null == g2 ? void 0 : g2.method) || "get" }), t3 = [i2 ? "FETCH_ERROR: " + r2 : "", "fetch req url: " + h2, "res status: " + (e5.status || 0), "res duration: " + e5.duration + "ms", "res startTime: " + m2, o2, a2, "req method: " + (e5.method || "GET"), "res retcode: " + c2, qe(l3, "req param"), qe(f3, "res data")].filter(function(e6) {
                return e6;
              }).join("\n\n"), t3 = (e5.payload = null == g2 ? void 0 : g2.body, e5.ret = c2, e5.isErr = +u2, { msg: t3, code: c2, trace: s2, errorMsg: "", level: F.API_RESPONSE }), n2 = y2.slowApiLog && We(null == e5 ? void 0 : e5.duration);
              t3.level = n2 ? F.SLOW_NET_REQUEST : Fe(i2, u2), !n2 && t3.level === F.API_RESPONSE || b2.publishNormalLog(t3, w2), b2.publishSpeed(e5, w2);
            }, 0);
          }).catch(function(e4) {
            console.info("ignore something error when process resp " + e4);
          }) : setTimeout(function() {
            var e4 = Ge(y2, { url: h2, duration: p2, type: v2, status: d2.status || 0, method: (null == g2 ? void 0 : g2.method) || "get" });
            e4.type = "static", e4.urlQuery = R(h2, true), b2.publishSpeed(e4, w2);
          }, 0));
        }, catch: function(t2, n2, r2, i2, o2) {
          var a2, e3, s2, c2, u2;
          throw T(r2, y2.hostUrl) || (a2 = Be(y2, "", r2), e3 = (null == (e3 = y2.api) ? void 0 : e3.reqHeaders) || [], s2 = je(null == i2 ? void 0 : i2.headers, e3, "req"), c2 = xe(null == i2 ? void 0 : i2.headers), u2 = null != (e3 = y2.api) && e3.apiDetail ? Z(null == i2 ? void 0 : i2.body, null == (e3 = y2.api) ? void 0 : e3.reqParamHandler, { url: r2 }) : "", setTimeout(function() {
            var e4 = Ge(y2, { url: r2, duration: n2, type: a2, status: 0, method: (null == i2 ? void 0 : i2.method) || "get" }), e4 = (b2.publishSpeed(e4, w2), "AJAX_ERROR: " + t2 + "\n                          \nreq url: " + r2 + "\n                          \nres status: 0\n                          \nres duration: " + e4.duration + "ms\n                          \nreq method: " + ((null == i2 ? void 0 : i2.method) || "get") + "\n                          \nreq param: " + u2 + "\n                          \nres startTime: " + o2 + "\n                          \n" + s2);
            b2.publishNormalLog({ msg: e4, level: F.AJAX_ERROR, code: -400, trace: c2, errorMsg: "" }, w2);
          }, 0)), t2;
        } }, l2 = (this.hackFetchOptions = e2, this.hackFetchOptions), f2 = null == (e2 = y2.api) ? void 0 : e2.ignoreHackReg;
        if (void 0 === f2 && (f2 = /\.flv(\?|$)/i), h.find(function(e3) {
          return e3.name === l2.name;
        })) throw new Error("name '" + l2.name + "' is already in hackFetch option list");
        h.push(l2), !ft && window.fetch && (ft = true, ze = window.fetch, window.fetch = function(e3, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = "string" == typeof e3 ? e3 : null == e3 ? void 0 : e3.url;
          if (null != (a2 = null == f2 ? void 0 : f2.test) && a2.call(f2, o2)) return ze(o2, i2);
          lt.test(o2) && (o2 = "" + location.origin + o2);
          var t2, n2, r2, a2 = (l2 || {}).traceRequestHeader;
          a2 && (t2 = void 0 === (t2 = (i2 || {}).headers) ? {} : t2, n2 = (r2 = Me()).host, n2 = (a2 = a2.generate(o2, t2, { host: n2, pathname: r2.pathname }) || {}).name, r2 = a2.value) && n2 && (i2.headers = Object.assign(t2, ((a2 = {})[n2] = r2, a2)));
          for (var s2 = 0; s2 < h.length; s2++) {
            var c2 = h[s2];
            try {
              "function" == typeof c2.beforeFetch && c2.beforeFetch(o2, i2);
            } catch (e4) {
            }
          }
          var u2 = Date.now();
          return ze(e3, i2).then(function(e4) {
            for (var t3 = e4.clone(), n3 = 0; n3 < h.length; n3++) {
              var r3 = h[n3];
              try {
                "function" == typeof r3.then && r3.then(t3, Date.now() - u2, o2, i2, u2);
              } catch (e5) {
              }
            }
            return t3;
          }).catch(function(e4) {
            for (var t3 = 0; t3 < h.length; t3++) {
              var n3 = h[t3];
              try {
                "function" == typeof n3.catch && n3.catch(e4, Date.now() - u2, o2, i2, u2);
              } catch (e5) {
              }
            }
            throw e4;
          });
        });
      }, overrideXhr: function(y2, w2) {
        var i2, b2 = this, e2 = { name: this.name, ignoreHackReg: null == (e2 = y2.api) ? void 0 : e2.ignoreHackReg, traceRequestHeader: null != (e2 = y2.api) && e2.injectTraceHeader ? this.traceRequestHeader : null, send: function(d2, p2) {
          var e3, t2, h2 = Date.now(), g2 = (((null == y2 ? void 0 : y2.api) || {}).injectTraceHeader && (t2 = (e3 = Me()).host, e3 = (t2 = b2.traceRequestHeader.generate(d2.aegisUrl, {}, { host: t2, pathname: e3.pathname }) || {}).name, t2 = t2.value, e3) && t2 && d2.setRequestHeader(e3, t2), d2.addEventListener("loadend", function() {
            var u2, n2, e4, l2, f2 = d2.aegisUrl || "";
            T(f2, y2.hostUrl) || "abort" === d2.failType || (u2 = "", (d2.failType || !d2.status || 400 <= d2.status) && (u2 = d2.failType || "failed"), n2 = Date.now() - h2, e4 = d2.getResponseHeader("content-type") || "", l2 = Be(y2, e4, f2), setTimeout(function() {
              var r2 = Ge(y2, { url: f2, duration: n2, type: l2, status: d2.status, method: d2.aegisMethod || "get" });
              if ("fetch" === l2) {
                var e5 = (null == (e5 = y2.api) ? void 0 : e5.reqHeaders) || [], i3 = je(d2.aegisXhrReqHeader, e5, "req"), e5 = (null == (e5 = y2.api) ? void 0 : e5.resHeaders) || [], t3 = d2.getAllResponseHeaders().split("\r\n").reduce(function(e6, t4) {
                  t4 = t4.split(": ");
                  return t4[0] && t4[1] && (e6[t4[0]] = t4[1]), e6;
                }, {}), o2 = je(t3, e5, "res"), a2 = xe(d2.aegisXhrReqHeader), e5 = null == (t3 = y2.api) ? void 0 : t3.apiDetail, s2 = e5 ? Z(p2, null == (t3 = y2.api) ? void 0 : t3.reqParamHandler, { url: f2 }) : "", c2 = e5 ? Z(d2.response, null == (t3 = y2.api) ? void 0 : t3.resBodyHandler, { url: f2 }) : "";
                try {
                  ((e6, t4, n3, r3) => {
                    var i4, o3, a3;
                    try {
                      if ("function" == typeof (null == t4 ? void 0 : t4.retCodeHandlerAsync)) return t4.retCodeHandlerAsync(e6, null == n3 ? void 0 : n3.url, null == n3 ? void 0 : n3.ctx, function(e7) {
                        var t5 = e7.code;
                        null != r3 && r3({ code: void 0 === t5 ? E : t5, isErr: e7.isErr });
                      });
                      if ("function" == typeof (null == t4 ? void 0 : t4.retCodeHandler)) return a3 = (o3 = t4.retCodeHandler(e6, null == n3 ? void 0 : n3.url, null == n3 ? void 0 : n3.ctx, null == n3 ? void 0 : n3.payload) || {}).code, null != r3 && r3({ code: void 0 === a3 ? E : a3, isErr: o3.isErr });
                      if (!(e6 = "string" == typeof e6 ? JSON.parse(e6) : e6)) return null != r3 && r3({ code: E, isErr: false });
                      "function" == typeof (null == (i4 = null == t4 ? void 0 : t4.ret) ? void 0 : i4.join) && (se = [].concat(t4.ret.map(function(e7) {
                        return e7.toLowerCase();
                      })));
                      var s3 = Object.getOwnPropertyNames(e6).filter(function(e7) {
                        return -1 !== se.indexOf(e7.toLowerCase());
                      });
                      if (s3.length) return "\u672A\u77E5" !== (a3 = e6[s3[0]]) && "" !== a3 || (a3 = E), null != r3 && r3({ code: "" + a3, isErr: 0 !== a3 && "0" !== a3 && a3 !== E });
                      null != r3 && r3({ code: E, isErr: false });
                    } catch (e7) {
                      null != r3 && r3({ code: E, isErr: false });
                    }
                  })(d2.response, y2.api, { url: f2, ctx: d2, payload: p2 }, function(e6) {
                    var t4 = e6.code, e6 = e6.isErr, n3 = [u2 ? "AJAX_ERROR: request " + u2 : "", "fetch req url: " + f2, "res status: " + (r2.status || 0), "res duration: " + r2.duration + "ms", "res startTime: " + h2, i3, o2, "req method: " + (r2.method || "GET"), "res retcode: " + t4, qe(s2, "req param"), qe(c2, "res data")].filter(function(e7) {
                      return e7;
                    }).join("\n\n");
                    r2.ret = t4, r2.isErr = +e6, r2.payload = p2, y2.slowApiLog && We(null == r2 ? void 0 : r2.duration) ? b2.publishNormalLog({ msg: n3, level: F.SLOW_NET_REQUEST, code: t4, trace: a2, errorMsg: "" }, w2) : b2.publishNormalLog({ msg: n3, level: Fe(!!u2, e6), code: t4, trace: a2, errorMsg: "" }, w2), b2.publishSpeed(r2, w2);
                  });
                } catch (e6) {
                  r2.ret = E, b2.publishSpeed(r2, w2);
                }
              } else r2.type = "static", r2.urlQuery = R(f2, true), b2.publishSpeed(r2, w2);
              d2.removeEventListener("abort", g2), d2.removeEventListener("error", m2), d2.removeEventListener("timeout", v2);
            }, 0));
          }), function() {
            d2.failType = "abort";
          }), m2 = function() {
            d2.failType = "error";
          }, v2 = function() {
            d2.failType = "timeout";
          };
          d2.addEventListener("abort", g2), d2.addEventListener("error", m2), d2.addEventListener("timeout", v2);
        } };
        this.hackXHROptions = e2, i2 = this.hackXHROptions, p.find(function(e3) {
          return e3.name === i2.name;
        }) || (p.push(i2), !ut && window.XMLHttpRequest && (Ke = window.XMLHttpRequest.prototype.send, $e = window.XMLHttpRequest.prototype.open, Je = window.XMLHttpRequest.prototype.setRequestHeader, ut = true, window.XMLHttpRequest.prototype.open = function() {
          this.aegisMethod = arguments[0];
          var e3, t2 = arguments[1];
          if (lt.test(t2) && (t2 = "" + location.origin + t2), this.aegisUrl = t2, null == (t2 = null == (e3 = i2.ignoreHackReg) ? void 0 : e3.test) || !t2.call(e3, this.aegisUrl)) if (this.aegisXhrStartTime = Date.now(), this.sendByAegis) o.isIE() || (this.timeout = 5e3);
          else for (var n2 = 0; n2 < p.length; n2++) {
            var r2 = p[n2];
            try {
              "function" == typeof r2.open && r2.open(this);
            } catch (e4) {
            }
          }
          return $e.apply(this, arguments);
        }, window.XMLHttpRequest.prototype.setRequestHeader = function() {
          var e3, t2, n2;
          return null != (t2 = null == (n2 = i2.ignoreHackReg) ? void 0 : n2.test) && t2.call(n2, this.aegisUrl) ? Je.apply(this, arguments) : (t2 = arguments[0], n2 = arguments[1], this.aegisXhrReqHeader = null != (e3 = this.aegisXhrReqHeader) ? e3 : {}, null != i2 && i2.traceRequestHeader && -1 < ["traceparent", "b3", "sw8", "sentry-trace"].indexOf(t2) && (this.aegisXhrReqHeader[t2] || (arguments[1] = n2), this.aegisXhrReqHeader[t2]) ? void 0 : (this.aegisXhrReqHeader[t2] = arguments[1], Je.apply(this, arguments)));
        }, window.XMLHttpRequest.prototype.send = function() {
          var e3, t2;
          if (!(null != (t2 = null == (e3 = i2.ignoreHackReg) ? void 0 : e3.test) && t2.call(e3, this.aegisUrl) || this.sendByAegis)) for (var n2 = 0; n2 < p.length; n2++) {
            var r2 = p[n2];
            try {
              "function" == typeof r2.send && r2.send(this, arguments[0]);
            } catch (e4) {
            }
          }
          return Ke.apply(this, arguments);
        }));
      }, publishSpeed: function(n2) {
        var r2 = this;
        this.$walk(function(e2) {
          var t2 = r2.$getConfig(e2);
          "fetch" !== n2.type || "function" != typeof (null == t2 ? void 0 : t2.urlHandler) ? (n2.url = R(n2.url), e2.speedLogPipeline(n2)) : e2.speedLogPipeline(B(B({}, n2), { url: R(t2.urlHandler(n2.url, n2.payload)) }));
        });
      }, publishNormalLog: function(t2) {
        this.$walk(function(e2) {
          e2.normalLogPipeline(t2);
        });
      }, destroy: function() {
        var t2, n2, e2;
        this.option.publishSpeed = function() {
        }, this.option.publishNormalLog = function() {
        }, this.option.hackXHROptions && (t2 = this.option.hackXHROptions, -1 !== (e2 = p.findIndex(function(e3) {
          return e3.name === t2.name;
        }))) && p.splice(e2, 1), this.option.hackFetchOptions && (n2 = this.option.hackFetchOptions, -1 !== (e2 = h.findIndex(function(e3) {
          return e3.name === n2.name;
        }))) && h.splice(e2, 1), this.option.override = false;
      } })), pt = {}, ht = new i({ name: "reportBridgeSpeed", override: false, onNewAegis: function(e2) {
        this.override || (this.override = true, this.overrideBridge(e2));
      }, publishSpeed: function(t2, n2) {
        this.$walk(function(e2) {
          e2 === n2 && e2.speedLogPipeline(t2);
        });
      }, overrideBridge: function(c2) {
        var u2 = this, l2 = c2.config;
        l2.reportBridgeSpeed && l2.h5Bridge && l2.h5BridgeFunc.length && l2.h5BridgeFunc.forEach(function(e2) {
          var s2 = l2.h5Bridge[e2];
          pt[e2] = s2, l2.h5Bridge[e2] = function() {
            for (var e3 = [], t2 = 0; t2 < arguments.length; t2++) e3[t2] = arguments[t2];
            var r2 = e3[0], i2 = e3[1], n2 = e3[2], o2 = e3[3], a2 = Date.now();
            s2(r2, i2, n2, function(e4) {
              var t3 = Y(e4, l2.api), n3 = t3.code, t3 = t3.isErr, n3 = { url: r2 + "-" + i2, name: r2 + "-" + i2, duration: Date.now() - a2, type: "bridge", ret: n3, isErr: +t3 };
              u2.publishSpeed(n3, c2), o2(e4);
            });
          };
        });
      }, unHackBridge: function(t2) {
        Object.keys(pt).forEach(function(e2) {
          pt[e2] && (t2.config.h5Bridge[e2] = pt[e2]);
        }), pt = {};
      }, destroy: function(e2) {
        this.option.publishSpeed = function() {
        }, this.option.unHackBridge(e2), this.option.override = false;
      } }), g = ((g = f = f || {})[g.unknown = 100] = "unknown", g[g.wifi = 1] = "wifi", g[g.net2g = 2] = "net2g", g[g.net3g = 3] = "net3g", g[g.net4g = 4] = "net4g", g[g.net5g = 5] = "net5g", g[g.net6g = 6] = "net6g", (g = Qe = Qe || {})[g.android = 1] = "android", g[g.ios = 2] = "ios", g[g.windows = 3] = "windows", g[g.macos = 4] = "macos", g[g.linux = 5] = "linux", g[g.other = 100] = "other", (g = Ye = Ye || {})[g.unknown = 100] = "unknown", g[g.normal = 0] = "normal", g[g.weak = 1] = "weak", g[g.disconnected = 2] = "disconnected", new i({ name: "device", onNewAegis: function(e2) {
        e2.extendBean("platform", this.getPlatform()), e2.extendBean("netType", f.unknown), this.getDpi(e2), this.refreshNetworkTypeToBean(e2), this.refreshNetworkStatusToBean(e2);
      }, getDpi: function(e2) {
        e2.extendBean("vp", Math.round(window.innerWidth) + " * " + Math.round(window.innerHeight)), window.screen && e2.extendBean("sr", Math.round(window.screen.width) + " * " + Math.round(window.screen.height));
      }, getPlatform: function() {
        var t2 = { android: /\bAndroid\s*([^;]+)/, ios: /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/, windows: /\b(Windows NT)/, macos: /\b(Mac OS)/, linux: /\b(Linux)/i }, e2 = Object.keys(t2).find(function(e3) {
          return t2[e3].test(navigator.userAgent);
        });
        return e2 ? Qe[e2] : Qe.other;
      }, refreshNetworkTypeToBean: function(t2) {
        var n2 = this, e2 = t2.config;
        e2 && ("function" == typeof e2.getNetworkType ? e2.getNetworkType : gt)(function(e3) {
          f[e3] || (e3 = f.unknown), t2.extendBean("netType", e3), n2.NetworkRefreshTimer = setTimeout(function() {
            n2.refreshNetworkTypeToBean(t2), clearTimeout(n2.NetworkRefreshTimer);
          }, 1e4);
        });
      }, refreshNetworkStatusToBean: function(t2) {
        var e2, n2 = this, r2 = t2.config;
        r2 && null != (e2 = "function" == typeof r2.getNetworkStatus ? r2.getNetworkStatus : e2) && e2(function(e3) {
          void 0 === Ye[e3] && (e3 = Ye.unknown), t2.extendBean("netStatus", e3), n2.NetworkStatusRefreshTimer = setTimeout(function() {
            n2.refreshNetworkStatusToBean(t2), clearTimeout(n2.NetworkStatusRefreshTimer);
          }, 1e4);
        });
      } })), gt = function(e2) {
        var t2 = "", n2 = navigator.userAgent.match(/NetType\/(\w+)/);
        n2 ? t2 = n2[1] : navigator.connection && (t2 = navigator.connection.effectiveType || navigator.connection.type), e2((n2 = t2 = t2 || E, 0 <= (n2 = String(n2).toLowerCase()).indexOf("4g") ? f.net4g : 0 <= n2.indexOf("wifi") ? f.wifi : 0 <= n2.indexOf("5g") ? f.net5g : 0 <= n2.indexOf("6g") ? f.net6g : 0 <= n2.indexOf("3g") ? f.net3g : 0 <= n2.indexOf("2g") ? f.net2g : f.unknown));
      }, mt = window.WebSocket, O = [], vt = { construct: function(e2, t2) {
        var r2 = new e2(t2[0], t2[1]);
        return r2.originSend = r2.send, r2.addEventListener("error", function(e3) {
          var e3 = (null == e3 ? void 0 : e3.currentTarget) || {}, t3 = e3.url, n2 = e3.readyState;
          null != O && O.forEach(function(e4) {
            e4 = e4.onErr;
            null != e4 && e4({ msg: "\u65E0\u6CD5\u83B7\u77E5\u5177\u4F53\u9519\u8BEF\u4FE1\u606F\uFF0C\u9700\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u67E5\u770B\uFF01", readyState: n2, connectUrl: t3 });
          });
        }), Object.defineProperty(r2, "send", { get: function() {
          return function(e3) {
            null != (t3 = r2.originSend) && t3.call(r2, e3);
            var t3 = r2.readyState;
            if (t3 !== WebSocket.OPEN) {
              var n2 = { readyState: t3, connectUrl: r2.url };
              switch (t3) {
                case WebSocket.CLOSED:
                  O.forEach(function(e4) {
                    e4 = e4.sendErr;
                    null != e4 && e4(B({ msg: "\u6D88\u606F\u53D1\u9001\u5931\u8D25\uFF0C\u8FDE\u63A5\u5DF2\u5173\u95ED\uFF01" }, n2));
                  });
                  break;
                case WebSocket.CONNECTING:
                  O.forEach(function(e4) {
                    (0, e4.sendErr)(B({ msg: "\u6D88\u606F\u53D1\u9001\u5931\u8D25\uFF0C\u6B63\u5728\u8FDE\u63A5\u4E2D\uFF01" }, n2));
                  });
                  break;
                case WebSocket.CLOSING:
                  O.forEach(function(e4) {
                    (0, e4.sendErr)(B({ msg: "\u6D88\u606F\u53D1\u9001\u5931\u8D25\uFF0C\u8FDE\u63A5\u6B63\u5728\u5173\u95ED\uFF01" }, n2));
                  });
              }
            }
          };
        } }), r2;
      } }, yt = new i({ name: "onError" }), wt = yt = new i({ name: "onError", onNewAegis: function(e2) {
        this.startListen(e2);
      }, startListen: function(i2) {
        function e2(e3) {
          var t3, n3 = e3 && v(e3.reason);
          n3 && s2.publishErrorLog({ msg: "PROMISE_ERROR: " + n3, errorMsg: null == (t3 = null == (e3 = (null == (t3 = e3.reason) ? void 0 : t3.message) || (null == (t3 = e3.reason) ? void 0 : t3.errMsg) || n3) ? void 0 : e3.slice) ? void 0 : t3.call(e3, 0, 150), level: F.PROMISE_ERROR }, i2);
        }
        function t2(e3) {
          var t3;
          if (e3 = (null == e3 ? void 0 : e3.target) || (null == e3 ? void 0 : e3.srcElement)) {
            var n3 = e3.src || e3.href || "", e3 = e3.tagName, e3 = void 0 === e3 ? "script" : e3;
            if (!(T(t3 = n3, i2.config.hostUrl) || -1 < window.location.href.indexOf(t3))) {
              var r3 = { msg: e3 + " load fail: " + n3, level: F.INFO };
              if (/\.js$/.test(n3)) r3.level = F.SCRIPT_ERROR;
              else if (/\.css$/.test(n3)) r3.level = F.CSS_ERROR;
              else switch (e3.toLowerCase()) {
                case "script":
                  r3.level = F.SCRIPT_ERROR;
                  break;
                case "link":
                  r3.level = F.CSS_ERROR;
                  break;
                case "img":
                  r3.level = F.IMAGE_ERROR;
                  break;
                case "audio":
                case "video":
                  r3.level = F.MEDIA_ERROR;
                  break;
                default:
                  return;
              }
              s2.publishErrorLog(r3, i2);
            }
          }
        }
        var n2, r2, o2, a2, s2 = this, c2 = window.onerror;
        window.onerror = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          var n3, r3 = v(e3[0]);
          "string" != typeof (n3 = r3) || !n3 || q.some(function(e4) {
            return -1 < n3.indexOf(e4);
          }) || j.some(function(e4) {
            return -1 < n3.indexOf(e4);
          }) || s2.publishErrorLog({ msg: (r3 || "") + " @ (" + (v(e3[1]) || "") + ":" + (e3[2] || 0) + ":" + (e3[3] || 0) + ")\n          \n" + v(e3[4] || ""), level: F.ERROR }, i2), null != c2 && c2.call.apply(c2, u([window], e3));
        }, window.addEventListener("unhandledrejection", e2);
        window.document.addEventListener("error", t2, true), i2.lifeCycle.on("destroy", function() {
          0 === yt.countInstance() && (window.document.removeEventListener("unhandledrejection", e2), window.document.removeEventListener("error", t2, true));
        }), i2.config.websocketHack && (n2 = { key: i2.config.id + "-" + this.name, onErr: function(e3) {
          var t3;
          null != (t3 = s2.publishWsErrorLog) && t3.call(s2, e3, i2);
        }, sendErr: function(e3) {
          var t3;
          null != (t3 = s2.publishWsErrorLog) && t3.call(s2, e3, i2);
        } }, this.hackWebsocketConfig = n2, n2 = this.hackWebsocketConfig, window.Proxy) && window.WebSocket && (r2 = window.WebSocket, window && !r2.isHack && (o2 = new Proxy(WebSocket, vt), r2.isHack = true, window.WebSocket = o2), a2 = n2, O.find(function(e3) {
          return e3.key === a2.key;
        }) || a2 && O.push(a2));
      }, publishErrorLog: function(t2, n2) {
        this.$walk(function(e2) {
          e2 === n2 && e2.normalLogPipeline(t2);
        });
      }, publishWsErrorLog: function(e2, t2) {
        var n2 = e2.connectUrl;
        this.publishErrorLog({ msg: "WEBSOCKET_ERROR: \n              connect: " + n2 + "\n              readyState: " + e2.readyState + "\n              msg: " + e2.msg, level: F.WEBSOCKET_ERROR }, t2);
      }, destroy: function() {
        var t2, e2;
        this.option.publishErrorLog = function() {
        }, this.option.hackWebsocketConfig && (t2 = this.option.hackWebsocketConfig, window.WebSocket = mt, -1 !== (e2 = O.findIndex(function(e3) {
          return e3.key === t2.key;
        }))) && O.splice(e2, 1);
      } }), bt = (new i({ name: "clickElementLog" }), function(e2) {
        if ("" !== e2.id && e2.id) return 'id("' + e2.id + '")';
        if (e2 === document.body) return e2.tagName;
        if (e2 instanceof Document) return "document";
        var t2 = 0;
        if (e2.parentNode) for (var n2 = e2.parentNode.childNodes, r2 = 0; r2 < n2.length; r2 += 1) {
          var i2 = n2[r2];
          if (i2 === e2) return bt(e2.parentNode) + "/" + e2.tagName + "[" + (t2 + 1) + "]";
          1 === i2.nodeType && i2.tagName === e2.tagName && (t2 += 1);
        }
        return 0;
      }), Et = function(e2) {
        return e2 instanceof Array ? new Map(e2.map(function(e3) {
          return [e3, true];
        })) : /* @__PURE__ */ new Map();
      }, Rt = function(e2, t2) {
        return "string" == typeof e2 ? e2.split(t2) : [];
      }, Tt = function(e2) {
        if (3 === e2.nodeType || 4 === e2.nodeType) return e2.nodeValue || "";
        if (1 !== e2.nodeType) return "";
        if ("string" == typeof e2.textContent) return e2.textContent;
        for (var t2 = "", n2 = e2.firstChild; n2; n2 = n2.nextSibling) t2 += Tt(n2);
        return t2;
      }, St = new i({ name: "clickElementLog", listeners: [], onNewAegis: function(e2) {
        this.startListen(e2);
      }, startListen: function(a2) {
        for (var e2 = function(o2) {
          t2.listeners.push(((e3, t3, n3, r3) => {
            function i2(e4) {
              var t4 = document.documentElement;
              t4 && n3.call(t4, e4, e4.target);
            }
            return void 0 === r3 && (r3 = true), e3.addEventListener(t3, i2, r3), { destroy: function() {
              e3.removeEventListener(t3, i2, r3);
            } };
          })(document, o2, function(e3, t3) {
            var n3, r3, i2;
            t3 && !((e4, t4) => {
              n4 = Et((null == (n4 = (e4 = e4).ignoreElements) ? void 0 : n4.ignoreClasses) || []) || /* @__PURE__ */ new Map();
              for (var n4, r4 = (e4 = { ignoreIds: Et((null == (e4 = e4.ignoreElements) ? void 0 : e4.ignoreIds) || []) || /* @__PURE__ */ new Map(), ignoreClasses: n4 }).ignoreClasses, i3 = e4.ignoreIds, o3 = !(0 === i3.size && 0 === r4.size), a3 = t4, s2 = (Rt(t4.getAttribute("id") || "", " "), Rt(t4.getAttribute("class") || "", ""), 0), c2 = false; a3 && o3 && a3.getAttribute; ) {
                if (c2) return true;
                if (10 <= s2) break;
                for (var u2 = Rt(a3.getAttribute("id") || "", " "), l2 = Rt(a3.getAttribute("class") || "", ""), f2 = 0, d2 = u2; f2 < d2.length; f2++) {
                  var p2 = d2[f2];
                  if (i3.has(p2)) {
                    c2 = true;
                    break;
                  }
                }
                for (var h2 = 0, g2 = l2; h2 < g2.length; h2++) {
                  var m2 = g2[h2];
                  if (r4.has(m2)) {
                    c2 = true;
                    break;
                  }
                }
                s2 += 1, a3 = a3.parentNode || a3.parentElement;
              }
              return false;
            })(a2.config, t3) && (n3 = bt(t3), r3 = Ve(t3), i2 = t3.getBoundingClientRect && t3.getBoundingClientRect(), t3 = { op: o2, view_type: (null == t3 ? void 0 : t3.nodeName) || "", view_text: r3.slice(0, 127), view_tag: n3, page: Xe(), page_id: Xe(), view_pos: { p0: (parseInt(String(i2.left), 10) || -1) + "," + (parseInt(String(i2.top), 10) || -1), p1: (parseInt(String(i2.left + window.scrollX), 10) || -1) + "," + (parseInt(String(i2.top + window.scrollY), 10) || -1) } }, a2.normalLogPipeline({ msg: t3, level: F.CLICK_EVENT, errorMsg: "" }));
          }, true));
        }, t2 = this, n2 = 0, r2 = Object.entries({ click: 1, longpress: 2 }); n2 < r2.length; n2++) e2(r2[n2][0]);
      }, destroy: function() {
        this.listeners.forEach(function(e2) {
          return e2.destroy();
        }), this.listeners = [];
      } }), Ot = (new i({ name: "consoleLog" }), { log: console.log, error: console.error, warn: console.warn, info: console.info, debug: console.debug, trace: console.trace }), xt = new i({ name: "consoleLog", onNewAegis: function(e2) {
        this.startListen(e2);
      }, startListen: function(e2) {
        var o2;
        o2 = e2, ["log", "error", "warn", "info", "debug", "trace"].forEach(function(r2) {
          var i2 = Ot[r2];
          console[r2] = function() {
            for (var e3, t2 = [], n2 = 0; n2 < arguments.length; n2++) t2[n2] = arguments[n2];
            try {
              i2.apply(console, t2), !o2.isWhiteList && ["log", "info", "debug", "trace"].includes(r2) || (e3 = t2.map(function(e4) {
                if ("object" == typeof e4) try {
                  return JSON.stringify(e4);
                } catch (e5) {
                }
                return String(e4);
              }).join(" "), o2.normalLogPipeline({ msg: "method: console." + r2 + "\nmessage: " + e3, level: F.true, errorMsg: "" }));
            } catch (e4) {
              Ot.error("Console hook error:", e4);
            }
          };
        });
      }, destroy: function() {
        Object.keys(Ot).forEach(function(e2) {
          console[e2] = Ot[e2];
        });
      } });
      function Lt() {
        tt = [], Ze = -1, d = null, st(addEventListener);
      }
      nt = { passive: true, capture: true }, rt = /* @__PURE__ */ new Date(), it = function(e2, t2) {
        d || (d = t2, Ze = e2, et = /* @__PURE__ */ new Date(), st(removeEventListener), ot());
      }, ot = function() {
        var t2;
        0 <= Ze && Ze < et - rt && (t2 = { entryType: "first-input", name: d.type, target: d.target, cancelable: d.cancelable, startTime: d.timeStamp, processingStart: d.timeStamp + Ze }, tt.forEach(function(e2) {
          e2(t2);
        }), tt = []);
      }, at = function(e2) {
        var t2, n2, r2, i2, o2, a2;
        e2.cancelable && (t2 = (1e12 < e2.timeStamp ? /* @__PURE__ */ new Date() : performance.now()) - e2.timeStamp, "pointerdown" == e2.type ? (n2 = t2, r2 = e2, i2 = function() {
          it(n2, r2), a2();
        }, o2 = function() {
          a2();
        }, a2 = function() {
          removeEventListener("pointerup", i2, nt), removeEventListener("pointercancel", o2, nt);
        }, addEventListener("pointerup", i2, nt), addEventListener("pointercancel", o2, nt)) : it(t2, e2));
      }, st = function(t2) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e2) {
          return t2(e2, at, nt);
        });
      }, ct = "hidden" === document.visibilityState ? 0 : 1 / 0, addEventListener("visibilitychange", function e2(t2) {
        "hidden" === document.visibilityState && (ct = t2.timeStamp, removeEventListener("visibilitychange", e2, true));
      }, true), Lt(), self.webVitals = { firstInputPolyfill: function(e2) {
        tt.push(e2), ot();
      }, resetFirstInputPolyfill: Lt, get firstHiddenTime() {
        return ct;
      } };
      function x(e2, t2) {
        var n2 = zt(), r2 = "navigate";
        return 0 <= $t ? r2 = "back-forward-cache" : n2 && (document.prerendering || 0 < Qt() ? r2 = "prerender" : document.wasDiscarded ? r2 = "restore" : n2.type && (r2 = n2.type.replace(/_/g, "-"))), { name: e2, value: void 0 === t2 ? -1 : t2, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r2 };
      }
      function Pt(e2, t2, n2) {
        try {
          var r2;
          if (PerformanceObserver.supportedEntryTypes.includes(e2)) return (r2 = new PerformanceObserver(function(e3) {
            Promise.resolve().then(function() {
              t2(e3.getEntries());
            });
          })).observe(Object.assign({ type: e2, buffered: true }, n2 || {})), r2;
        } catch (e3) {
        }
      }
      function L(t2, n2, r2, i2) {
        var o2, a2;
        return function(e2) {
          0 <= n2.value && (e2 || i2) && ((a2 = n2.value - (o2 || 0)) || void 0 === o2) && (o2 = n2.value, n2.delta = a2, n2.rating = (e2 = n2.value) > r2[1] ? "poor" : e2 > r2[0] ? "needs-improvement" : "good", t2(n2));
        };
      }
      function kt(e2) {
        requestAnimationFrame(function() {
          return requestAnimationFrame(function() {
            return e2();
          });
        });
      }
      function Ct(t2) {
        function e2(e3) {
          "pagehide" !== e3.type && "hidden" !== document.visibilityState || t2(e3);
        }
        addEventListener("visibilitychange", e2, true), addEventListener("pagehide", e2, true);
      }
      function At(t2) {
        var n2 = false;
        return function(e2) {
          n2 || (t2(e2), n2 = true);
        };
      }
      function It() {
        return Yt < 0 && (Yt = Zt(), tn(), Jt(function() {
          setTimeout(function() {
            Yt = Zt(), tn();
          }, 0);
        })), { get firstHiddenTime() {
          return Yt;
        } };
      }
      function Nt(e2) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
          return e2();
        }, true) : e2();
      }
      function _t(o2, a2) {
        a2 = a2 || {}, Nt(function() {
          var t2, n2 = It(), r2 = x("FCP"), i2 = Pt("paint", function(e2) {
            e2.forEach(function(e3) {
              "first-contentful-paint" === e3.name && (i2.disconnect(), e3.startTime < n2.firstHiddenTime) && (r2.value = Math.max(e3.startTime - Qt(), 0), r2.entries.push(e3), t2(true));
            });
          });
          i2 && (t2 = L(o2, r2, rn, a2.reportAllChanges), Jt(function(e2) {
            r2 = x("FCP"), t2 = L(o2, r2, rn, a2.reportAllChanges), kt(function() {
              r2.value = performance.now() - e2.timeStamp, t2(true);
            });
          }));
        });
      }
      function Ut(e2) {
        var t2, n2, r2, i2, o2, a2;
        e2.cancelable && (t2 = (1e12 < e2.timeStamp ? /* @__PURE__ */ new Date() : performance.now()) - e2.timeStamp, "pointerdown" == e2.type ? (n2 = t2, r2 = e2, i2 = function() {
          cn(n2, r2), a2();
        }, o2 = function() {
          a2();
        }, a2 = function() {
          removeEventListener("pointerup", i2, an), removeEventListener("pointercancel", o2, an);
        }, addEventListener("pointerup", i2, an), addEventListener("pointercancel", o2, an)) : cn(t2, e2));
      }
      function Ht(e2) {
        e2.forEach(function(e3) {
          e3.interactionId && (pn = Math.min(pn, e3.interactionId), hn = Math.max(hn, e3.interactionId), dn = hn ? (hn - pn) / 7 + 1 : 0);
        });
      }
      function Dt() {
        return gn() - vn;
      }
      function Mt(e2) {
        var t2 = C[C.length - 1], n2 = yn[e2.interactionId];
        (n2 || C.length < 10 || e2.duration > t2.latency) && (n2 ? (n2.entries.push(e2), n2.latency = Math.max(n2.latency, e2.duration)) : (t2 = { id: e2.interactionId, latency: e2.duration, entries: [e2] }, yn[t2.id] = t2, C.push(t2)), C.sort(function(e3, t3) {
          return t3.latency - e3.latency;
        }), C.splice(10).forEach(function(e3) {
          delete yn[e3.id];
        }));
      }
      function jt(e2, t2) {
        function n2(t3, n3, r3, i2) {
          function o2(e3) {
            "visibilitychange" === t3 && "hidden" !== document.visibilityState || (i2 ? setTimeout(function() {
              return n3(e3);
            }, i2) : n3(e3), r3 && removeEventListener(t3, o2, true));
          }
          addEventListener(t3, o2, true);
        }
        var r2;
        n2("visibilitychange", e2, null == t2 ? void 0 : t2.once, null == (r2 = null == t2 ? void 0 : t2.delay) ? void 0 : r2.visibilitychange), n2("pagehide", e2, null == t2 ? void 0 : t2.once, null == (r2 = null == t2 ? void 0 : t2.delay) ? void 0 : r2.pagehide);
      }
      function qt(e2) {
        var t2 = e2.name;
        0 < (e2 = e2.value) && (Rn[t2] = e2);
      }
      function P(e2, t2, n2, r2) {
        return void 0 === n2 && (n2 = 15e3), void 0 === r2 && (r2 = 0), (t2 = void 0 === t2 ? 0 : t2) <= e2 && e2 <= n2 ? e2 : r2;
      }
      var k, Bt, Ft, Wt, Gt, Xt, Vt, Kt, $t = -1, Jt = function(t2) {
        addEventListener("pageshow", function(e2) {
          e2.persisted && ($t = e2.timeStamp, t2(e2));
        }, true);
      }, zt = function() {
        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
      }, Qt = function() {
        var e2 = zt();
        return e2 && e2.activationStart || 0;
      }, Yt = -1, Zt = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
      }, en = function(e2) {
        "hidden" === document.visibilityState && -1 < Yt && (Yt = "visibilitychange" === e2.type ? e2.timeStamp : 0, nn());
      }, tn = function() {
        addEventListener("visibilitychange", en, true), addEventListener("prerenderingchange", en, true);
      }, nn = function() {
        removeEventListener("visibilitychange", en, true), removeEventListener("prerenderingchange", en, true);
      }, rn = [1800, 3e3], on = [0.1, 0.25], an = { passive: true, capture: true }, sn = /* @__PURE__ */ new Date(), cn = function(e2, t2) {
        k || (k = t2, Bt = e2, Ft = /* @__PURE__ */ new Date(), ln(removeEventListener), un());
      }, un = function() {
        var t2;
        0 <= Bt && Bt < Ft - sn && (t2 = { entryType: "first-input", name: k.type, target: k.target, cancelable: k.cancelable, startTime: k.timeStamp, processingStart: k.timeStamp + Bt }, Wt.forEach(function(e2) {
          e2(t2);
        }), Wt = []);
      }, ln = function(t2) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e2) {
          return t2(e2, Ut, an);
        });
      }, fn = [100, 300], dn = 0, pn = 1 / 0, hn = 0, gn = function() {
        return Gt ? dn : performance.interactionCount || 0;
      }, mn = [200, 500], vn = 0, C = [], yn = {}, wn = [2500, 4e3], bn = {}, En = (I.prototype.start = function() {
        var t2 = this, n2 = new PerformanceObserver(function(e2) {
          e2 = e2.getEntriesByName("first-contentful-paint");
          0 < e2.length && (t2.fcp = e2[0].startTime, t2.slientWindowStartTime = t2.fcp, n2.disconnect(), setTimeout(function() {
            t2.checkTTI();
          }, Math.max(t2.slienceTimeInterval - (performance.now() - t2.fcp) + 20, 1)));
        });
        n2.observe({ entryTypes: ["paint"] }), this.longtaskObserver = new PerformanceObserver(function(e2) {
          e2 = e2.getEntries();
          t2.longTaskEntries = t2.longTaskEntries.concat(e2);
        }), this.longtaskObserver.observe({ entryTypes: ["longtask"] }), this.resourceObserver = new PerformanceObserver(function(e2) {
          e2 = e2.getEntries();
          t2.resourceEntries = t2.resourceEntries.concat(e2);
        }), this.resourceObserver.observe({ entryTypes: ["resource"] });
      }, I.prototype.checkTTI = function() {
        var e2 = this;
        this.hasSlientWindow() ? (this.calculateTTI(), this.longtaskObserver.disconnect(), this.resourceObserver.disconnect()) : setTimeout(function() {
          e2.checkTTI();
        }, this.checkInterval);
      }, I.prototype.hasSlientWindow = function() {
        var e2, t2 = performance.now();
        return !(t2 - this.slientWindowStartTime < 5e3 || ((e2 = this.getLastLongTaskEndTime()) > this.slientWindowStartTime ? (this.slientWindowStartTime = e2, this.resourceEntries = []) : this.getRequestCount(this.slientWindowStartTime, t2) <= 2 ? (this.lastLongtaskEndTime = e2, 0) : (t2 = this.resourceEntries.sort(function(e3, t3) {
          return e3.startTime - t3.startTime;
        }), this.slientWindowStartTime = t2[this.resourceEntries.length - 2].startTime, 1)));
      }, I.prototype.getLastLongTaskEndTime = function() {
        var t2;
        return 0 === this.longTaskEntries.length ? -1 : (t2 = 0, this.longTaskEntries.forEach(function(e2) {
          e2.startTime + e2.duration > t2 && (t2 = e2.startTime + e2.duration);
        }), t2);
      }, I.prototype.getRequestCount = function(t2, n2) {
        var r2 = 0;
        return this.resourceEntries.forEach(function(e2) {
          e2.startTime >= t2 && e2.startTime + e2.duration <= n2 && (r2 += 1);
        }), r2;
      }, I.prototype.calculateTTI = function() {
        var e2 = -1 === this.lastLongtaskEndTime ? this.slientWindowStartTime : this.lastLongtaskEndTime, t2 = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart, e2 = Math.max(t2, e2);
        this.onTTICallback(e2);
      }, I), Rn = (new i({ name: "webVitals" }), { FCP: -1, LCP: -1, FID: -1, CLS: -1, INP: -1, TTI: -1 }), Tn = new i({ name: "webVitals", onNewAegis: function(e2) {
        var t2, o2, a2, s2, c2, u2, l2, f2, d2;
        if (Pe() && "function" == typeof window.PerformanceObserver && "function" == typeof performance.getEntriesByName) try {
          _t(qt), f2 = qt, d2 = {}, Nt(function() {
            function e3(e4) {
              (e4 = e4[e4.length - 1]) && e4.startTime < r2.firstHiddenTime && (i2.value = Math.max(e4.startTime - Qt(), 0), i2.entries = [e4], t3());
            }
            var t3, n2, r2 = It(), i2 = x("LCP"), o3 = Pt("largest-contentful-paint", e3);
            o3 && (t3 = L(f2, i2, wn, d2.reportAllChanges), n2 = At(function() {
              bn[i2.id] || (e3(o3.takeRecords()), o3.disconnect(), bn[i2.id] = true, t3(true));
            }), ["keydown", "click"].forEach(function(e4) {
              addEventListener(e4, function() {
                return setTimeout(n2, 0);
              }, true);
            }), Ct(n2), Jt(function(e4) {
              i2 = x("LCP"), t3 = L(f2, i2, wn, d2.reportAllChanges), kt(function() {
                i2.value = performance.now() - e4.timeStamp, bn[i2.id] = true, t3(true);
              });
            }));
          }), u2 = qt, l2 = {}, Nt(function() {
            function t3(e4) {
              e4.startTime < n2.firstHiddenTime && (r2.value = e4.processingStart - e4.startTime, r2.entries.push(e4), o3(true));
            }
            function e3(e4) {
              e4.forEach(t3);
            }
            var n2 = It(), r2 = x("FID"), i2 = Pt("first-input", e3), o3 = L(u2, r2, fn, l2.reportAllChanges);
            i2 && Ct(At(function() {
              e3(i2.takeRecords()), i2.disconnect();
            })), i2 && Jt(function() {
              r2 = x("FID"), o3 = L(u2, r2, fn, l2.reportAllChanges), Wt = [], Bt = -1, k = null, ln(addEventListener), Wt.push(t3), un();
            });
          }), s2 = qt, c2 = {}, _t(At(function() {
            function e3(e4) {
              e4.forEach(function(e5) {
                var t4, n3;
                e5.hadRecentInput || (t4 = i2[0], n3 = i2[i2.length - 1], r2 && e5.startTime - n3.startTime < 1e3 && e5.startTime - t4.startTime < 5e3 ? (r2 += e5.value, i2.push(e5)) : (r2 = e5.value, i2 = [e5]));
              }), r2 > n2.value && (n2.value = r2, n2.entries = i2, t3());
            }
            var t3, n2 = x("CLS", 0), r2 = 0, i2 = [], o3 = Pt("layout-shift", e3);
            o3 && (t3 = L(s2, n2, on, c2.reportAllChanges), Ct(function() {
              e3(o3.takeRecords()), t3(true);
            }), Jt(function() {
              n2 = x("CLS", r2 = 0), t3 = L(s2, n2, on, c2.reportAllChanges), kt(function() {
                return t3();
              });
            }), setTimeout(t3, 0));
          })), o2 = qt, a2 = {}, Nt(function() {
            var e3;
            "interactionCount" in performance || (Gt = Gt || Pt("event", Ht, { type: "event", buffered: true, durationThreshold: 0 }));
            function t3(e4) {
              e4.forEach(function(t4) {
                t4.interactionId && Mt(t4), "first-input" !== t4.entryType || C.some(function(e5) {
                  return e5.entries.some(function(e6) {
                    return t4.duration === e6.duration && t4.startTime === e6.startTime;
                  });
                }) || Mt(t4);
              }), e4 = Math.min(C.length - 1, Math.floor(Dt() / 50)), (e4 = C[e4]) && e4.latency !== n2.value && (n2.value = e4.latency, n2.entries = e4.entries, i2());
            }
            var n2 = x("INP"), r2 = Pt("event", t3, { durationThreshold: null != (e3 = a2.durationThreshold) ? e3 : 40 }), i2 = L(o2, n2, mn, a2.reportAllChanges);
            r2 && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && r2.observe({ type: "first-input", buffered: true }), Ct(function() {
              t3(r2.takeRecords()), n2.value < 0 && 0 < Dt() && (n2.value = 0, n2.entries = []), i2(true);
            }), Jt(function() {
              C = [], vn = gn(), n2 = x("INP"), i2 = L(o2, n2, mn, a2.reportAllChanges);
            }));
          }), t2 = function(e3) {
            qt({ name: "TTI", value: e3 });
          }, Pe() && new En(t2).start(), jt(this.publish.bind(this, e2), { once: true, delay: { visibilitychange: 10 } });
        } catch (e3) {
        }
      }, publish: function(t2) {
        this.$walk(function(o2) {
          var e2;
          o2 === t2 && null != (e2 = o2.sendPipeline) && e2.call(o2, [function(e3, t3) {
            var n2, r2 = [];
            for (n2 in e3) r2.push(n2 + "=" + e3[n2]);
            var i2 = -1 === (null == (i2 = null == (i2 = o2.config) ? void 0 : i2.performanceUrl) ? void 0 : i2.indexOf("?")) ? "?" : "&";
            t3({ url: o2.config.webVitalsUrl + i2 + r2.join("&"), type: m.VITALS, log: e3, sendBeacon: true });
          }], m.VITALS)(B({}, Rn));
        });
      }, destroy: function() {
        this.option.publish = function() {
        };
      } }), Sn = (new i({ name: "pagePerformance" }), 3), On = new i({ name: "pagePerformance", performanceMap: {}, onNewAegis: function(e2) {
        Pe() && (Xt ? this.publish(Xt, e2) : this.startCalcPerformance(e2));
      }, publish: function(i2, o2) {
        var s2 = this;
        this.$walk(function(a2) {
          a2 === o2 && (a2.sendPipeline([function(e2, t2) {
            var n2, r2 = [];
            for (n2 in e2) r2.push(n2 + "=" + e2[n2]);
            var i3, o3 = s2.$getConfig(a2);
            if (o3) return i3 = -1 === (null == (i3 = a2.config.performanceUrl) ? void 0 : i3.indexOf("?")) ? "?" : "&", "function" == typeof o3.urlHandler ? t2({ url: a2.config.performanceUrl + i3 + r2.join("&") + "&from=" + (encodeURIComponent(o3.urlHandler()) || window.location.href), beanFilter: ["from"], type: m.PERFORMANCE, log: e2 }) : t2({ url: a2.config.performanceUrl + i3 + r2.join("&"), type: m.PERFORMANCE, log: e2 });
          }], m.PERFORMANCE)(B({}, i2)), setTimeout(function() {
            var e2 = ["duration: " + (i2.dnsLookup + i2.tcp + i2.ssl + i2.ttfb + i2.contentDownload + i2.domParse + i2.resourceDownload) + "ms", "firstScreenTiming: " + i2.firstScreenTiming + "ms", "dnsLookup: " + i2.dnsLookup + "ms", "tcp: " + i2.tcp + "ms", "ssl: " + i2.ssl + "ms", "ttfb: " + i2.ttfb + "ms", "contentDownload: " + i2.contentDownload + "ms", "domParse: " + i2.domParse + "ms", "resourceDownload: " + i2.resourceDownload + "ms", "lcp: " + Rn.LCP + "ms", "fid: " + Rn.FID + "ms", "cls: " + Rn.CLS + "ms", "fcp: " + Rn.FCP + "ms", i2.engineInit ? "engineInit: " + i2.engineInit + "ms" : "", i2.bundleLoad ? "bundleLoad: " + i2.bundleLoad + "ms" : ""].filter(function(e3) {
              return e3;
            }).join("\n\n"), t2 = 1e3 < i2.firstScreenTiming, n2 = o2.config.pageLoadLog, r2 = o2.config.slowPageLoadLog && t2, e2 = { msg: e2, ext1: (null == (e2 = i2.firstScreenTiming) ? void 0 : e2.toString()) || "", level: t2 ? F.SLOW_PAGE_LOAD : F.PAGE_LOAD, errorMsg: "" };
            (n2 || r2) && a2.normalLogPipeline(e2);
          }, 3e3));
        });
      }, startCalcPerformance: function(n2) {
        var r2 = this;
        try {
          this.getFirstScreenTiming(n2, function(e2) {
            var t2 = performance.timing;
            t2 && (Xt = { dnsLookup: P(t2.domainLookupEnd - t2.domainLookupStart), tcp: P(t2.connectEnd - t2.connectStart), ssl: P(0 === t2.secureConnectionStart ? 0 : t2.requestStart - t2.secureConnectionStart), ttfb: P(t2.responseStart - t2.requestStart), contentDownload: P(t2.responseEnd - t2.responseStart), domParse: P(t2.domInteractive - t2.domLoading, 0, 15e3, 1070), resourceDownload: P(t2.loadEventStart - t2.domInteractive, 0, 15e3, 1070), firstScreenTiming: P(Math.floor(e2), 0, 15e3, 15e3) }, (t2 = n2.config).extraPerformanceData && "{}" !== JSON.stringify(t2.extraPerformanceData) && (t2 = (e2 = t2.extraPerformanceData).engineInit, e2 = e2.bundleLoad, Xt = B(B({}, Xt), { engineInit: P(t2, 0, 1e4), bundleLoad: P(e2, 0, 1e4) })), r2.publish(Xt, n2));
          });
        } catch (n3) {
        }
      }, getFirstScreenTiming: function(s2, c2) {
        var u2 = this;
        s2.lifeCycle.on("destroy", function() {
          m2 && clearTimeout(m2);
        });
        var l2, f2 = this, n2 = ["script", "style", "link", "br"], d2 = [], p2 = {}, h2 = (-1 < (null == (e2 = null == (e2 = window.PerformanceObserver) ? void 0 : e2.supportedEntryTypes) ? void 0 : e2.indexOf("paint")) && (l2 = new PerformanceObserver(function(e3) {
          e3.getEntries().forEach(function(e4) {
            var t2;
            "paint" === e4.entryType && "first-contentful-paint" === e4.name && 0 < (t2 = document.querySelectorAll("[AEGIS-FIRST-SCREEN-TIMING]")).length && s2.config.id && !u2.performanceMap[s2.config.id] && (u2.setFirstScreenInfo(s2, e4.startTime, t2[0], t2), null != c2 && c2(e4.startTime), h2.disconnect(), l2.disconnect(), m2) && clearTimeout(m2);
          });
        })).observe({ entryTypes: ["paint"] }), new MutationObserver(function(e3) {
          var t2 = { roots: [], ignores: [], rootsDomNum: [], time: performance.now() };
          e3.forEach(function(e4) {
            e4 && e4.addedNodes && Array.prototype.slice.call(e4.addedNodes).forEach(function(e5) {
              f2.isEleInArray(e5, t2.ignores) ? t2.ignores.push(e5) : 1 === e5.nodeType && e5.hasAttribute("AEGIS-FIRST-SCREEN-TIMING") ? (Object.prototype.hasOwnProperty.apply(p2, [t2.time]) || (p2[t2.time] = []), p2[t2.time].push(e5)) : 1 === e5.nodeType && (f2.hasAncestorOrSelfWithAttribute(e5, "AEGIS-IGNORE-FIRST-SCREEN-TIMING") ? t2.ignores.push(e5) : -1 !== n2.indexOf(e5.nodeName.toLocaleLowerCase()) || f2.isEleInArray(e5, t2.roots) || (t2.roots.push(e5), t2.rootsDomNum.push(f2.walkAndCount(e5) || 0)));
            });
          }), t2.roots.length && d2.push(t2);
        }));
        h2.observe(document, { childList: true, subtree: true });
        var e2, g2 = function(n3) {
          (n3 = void 0 === n3 ? 0 : n3) || (r2 = 0, (e3 = Object.keys(p2)).length ? (n3 = Math.max.apply(null, e3), u2.setFirstScreenInfo(s2, n3, null == (e3 = p2[n3]) ? void 0 : e3[0], p2)) : d2.forEach(function(e4) {
            for (var t3 = 0; t3 < e4.roots.length; t3++) e4.rootsDomNum[t3] > r2 && f2.isInFirstScreen(e4.roots[t3]) && (r2 = e4.rootsDomNum[t3], n3 = e4.time, u2.setFirstScreenInfo(s2, n3, e4.roots[t3]));
          }), d2.length = 0, Object.keys(p2).forEach(function(e4) {
            p2[e4] = p2[e4].map(function(e5) {
              var t3 = { tagName: e5.tagName }, n4 = e5.attributes;
              if (!n4) return e5;
              for (var r3 = 0; r3 < n4.length; r3++) {
                var i3 = n4[r3];
                i3.name && (t3[i3.name] = e5.getAttribute(i3.name));
              }
              return t3;
            });
          }));
          var r2, e3 = performance.timing, t2 = e3.domInteractive - e3.domLoading, i2 = n3;
          m2 = null;
          for (var o2 = 0, a2 = [t2, e3.loadEventStart - e3.domInteractive, i2]; o2 < a2.length; o2++) if (a2[o2] <= 0 && 0 < Sn) {
            m2 = setTimeout(function() {
              return g2(i2);
            }, 3e3);
            break;
          }
          m2 ? --Sn : (h2.disconnect(), null != l2 && l2.disconnect(), null != c2 && c2(n3));
        }, m2 = setTimeout(function() {
          return g2();
        }, 3e3);
      }, setFirstScreenInfo: function(e2, t2, n2, r2) {
        var i2;
        e2.config.id && this.performanceMap[e2.config.id] || (e2.config.id && (this.performanceMap[e2.config.id] = true), ("object" != typeof (null == (i2 = e2.config) ? void 0 : i2.pagePerformance) || null != (i2 = e2.config.pagePerformance) && i2.firstScreenInfo) && (e2.firstScreenInfo = { element: n2, timing: t2, markDoms: r2 }));
      }, isEleInArray: function(e2, t2) {
        return !(!e2 || e2 === document.documentElement) && (-1 !== t2.indexOf(e2) || this.isEleInArray(e2.parentElement, t2));
      }, isInFirstScreen: function(e2) {
        var t2;
        return !(!e2 || "function" != typeof e2.getBoundingClientRect) && (e2 = e2.getBoundingClientRect(), t2 = window.innerHeight, 0 <= e2.left) && e2.left < window.innerWidth && 0 <= e2.top && e2.top < t2 && 0 < e2.width && 0 < e2.height;
      }, walkAndCount: function(e2) {
        var t2 = 0;
        if (e2 && 1 === e2.nodeType) {
          t2 += 1;
          var n2 = e2.children;
          if (null != n2 && n2.length) for (var r2 = 0; r2 < n2.length; r2++) 1 === n2[r2].nodeType && n2[r2].hasAttribute("AEGIS-IGNORE-FIRST-SCREEN-TIMING") || (t2 += this.walkAndCount(n2[r2]));
        }
        return t2;
      }, hasAncestorOrSelfWithAttribute: function(e2, t2) {
        for (var n2 = e2; n2 && n2 !== document.body; ) {
          if (n2.hasAttribute(t2)) return true;
          n2 = n2.parentElement;
        }
        return false;
      } }), xn = (new i({ name: "spa" }), ["replaceState", "pushState", "popstate", "hashchange"]), Ln = new i({ name: "spa", originFireUrl: "", onNewAegis: function(t2) {
        var n2 = this;
        history.pushState = this.wr("pushState") || history.pushState, history.replaceState = this.wr("replaceState") || history.replaceState, this.sendPv = this.sendPv.bind(this), t2.config.spa && this.sendPv(t2), xn.forEach(function(e2) {
          return window.addEventListener(e2, function() {
            return n2.sendPv.call(n2, t2);
          });
        });
      }, wr: function(n2) {
        var r2 = history[n2], e2 = "__" + n2 + "__hasWrittenByTamSpa";
        return "function" == typeof r2 && !history[e2] && (Object.defineProperty(history, e2, { value: true, enumerable: false }), function() {
          var e3 = r2.apply(this, arguments), t2 = null;
          return "function" == typeof Event ? t2 = new Event(n2) : (t2 = document.createEvent("HTMLEvents")).initEvent(n2, false, true), window.dispatchEvent(t2), e3;
        });
      }, sendPv: function(r2) {
        var i2 = this;
        setTimeout(function() {
          var t2 = location.pathname + location.hash + r2.config.id;
          i2.$walk(function(e2) {
            var n2;
            e2 === r2 && (n2 = e2.config.pvUrl) && t2 && t2 !== i2.originFireUrl && (e2.sendPipeline([function(e3, t3) {
              t3({ url: "" + n2, type: m.PV });
            }], m.PV)(null), i2.originFireUrl = t2);
          });
        }, 0);
      }, destroy: function() {
        this.option.sendPv = function() {
        };
      } }), r = (D(Kt = A, r = Vt = r), Kt.prototype = null === r ? Object.create(r) : (Pn.prototype = r.prototype, new Pn()), A.prototype.addExtBean = function(e2, t2) {
        t2 && this.extendBean(e2, encodeURIComponent("string" == typeof t2 ? t2.slice(0, 1024) : this.validateRange(t2)));
      }, A.prototype.getBean = function(t2) {
        var n2 = this;
        return void 0 === t2 && (t2 = []), "" + Object.getOwnPropertyNames(this.bean).filter(function(e2) {
          return -1 === t2.indexOf(e2);
        }).map(function(e2) {
          return "from" === e2 ? "from=" + n2.getCurrentPageUrl() : e2 + "=" + n2.bean[e2];
        }).join("&");
      }, A.prototype.getCurrentPageUrl = function() {
        var e2 = this.config.pageUrl || location.href, e2 = (e2 = "function" == typeof this.config.urlHandler ? this.config.urlHandler() || location.href : e2).slice(0, 2048);
        return encodeURIComponent(e2);
      }, A.prototype.ready = function() {
        function o2() {
          var e2, n2, r2, i2;
          t2.reportRequestQueue.length && (e2 = t2.reportRequestQueue.splice(0, 1)[0], n2 = e2.options, r2 = e2.success, i2 = e2.fail, t2.$request(n2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            try {
              return null == r2 ? void 0 : r2.apply(n2, e3);
            } finally {
              o2();
            }
          }, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            try {
              return null == i2 ? void 0 : i2.apply(n2, e3);
            } finally {
              o2();
            }
          }));
        }
        var t2 = this;
        o2(), this.isReportReady = true;
      }, A.prototype.request = function(e2, t2, n2) {
        this.config.reportImmediately || this.isReportReady ? this.$request(e2, t2, n2) : this.reportRequestQueue.push({ options: e2, success: t2, fail: n2 });
      }, A.prototype.$request = function(s2, e2, t2) {
        var n2, r2, i2, o2;
        if (s2 && "string" == typeof s2.url && "" !== s2.url && this.bean.id) return o2 = s2.url, false !== s2.addBean && (o2 = ((e3, t3) => {
          var n3, r3, i3, o3 = e3, a2 = s2.beanFilter || [];
          for (n3 in t3) -1 === a2.indexOf(n3) && ((i3 = (r3 = new RegExp("([?&])" + n3 + "(=([^&]*))?(?=&|$)")).exec(o3)) ? i3[2] && "" !== i3[3] && "undefined" !== i3[3] || (o3 = o3.replace(r3, "$1" + n3 + "=" + t3[n3])) : (i3 = -1 < o3.indexOf("?") ? "&" : "?", o3 += i3 + n3 + "=" + t3[n3]));
          return o3;
        })(o2, B(B({}, this.bean), { from: this.getCurrentPageUrl() }))), s2.url = o2, o2 = s2.method || "get", r2 = this.config.onBeforeRequest, (s2 = r2 ? r2(s2, this) : s2) ? s2.url ? void ((null != s2 && s2.sendBeacon || this.sendNow) && "function" == typeof (null == navigator ? void 0 : navigator.sendBeacon) ? navigator.sendBeacon(s2.url, s2.data) : ((n2 = new XMLHttpRequest()).sendByAegis = true, n2.addEventListener("readystatechange", function() {
          4 === n2.readyState && (400 <= n2.status || 0 === n2.status ? null != t2 && t2(n2.response) : null != e2 && e2(n2.response));
        }), "get" === o2.toLocaleLowerCase() ? (n2.open("get", (r2 = s2.url, i2 = s2.data, "string" != typeof r2 ? "" : "object" == typeof i2 && i2 ? (o2 = Object.getOwnPropertyNames(i2).map(function(e3) {
          var t3 = i2[e3];
          return e3 + "=" + ("string" == typeof t3 ? encodeURIComponent(t3) : encodeURIComponent(JSON.stringify(t3)));
        }).join("&").replace(/eval/gi, "evaI"), r2 + (-1 === r2.indexOf("?") ? "?" : "&") + o2) : r2)), n2.send()) : (n2.open("post", s2.url), s2.contentType && n2.setRequestHeader("Content-Type", s2.contentType), "string" == typeof s2.data && (s2.data = s2.data.replace(/eval/gi, "evaI")), n2.send(s2.data)))) : console.warn("Please handle the parameters reasonably, options.url is necessary") : console.warn("Sending request blocked");
      }, A.prototype.publishPluginsLogs = function() {
        var e2 = A.installedPlugins.find(function(e3) {
          return "reportAssetSpeed" === e3.name;
        });
        null != e2 && e2.option.collectNotReportedLog(this);
      }, A.prototype.uploadLogs = function(e2, t2) {
        var n2;
        void 0 === e2 && (e2 = {}), void 0 === t2 && (t2 = {}), null != (n2 = this.lifeCycle) && n2.emit("uploadLogs", e2, t2);
      }, A.sessionID = "session-" + Date.now(), A);
      function A(e2) {
        var t2, n2, r2, a2, s2 = Vt.call(this, e2) || this;
        s2.sendNow = false, s2.isReportReady = false, s2.reportRequestQueue = [], s2.speedLogPipeline = b([ee(s2), (a2 = s2.config, function(e3, t3) {
          var n3, r3, i3, o2 = "number" == typeof a2.repeat ? a2.repeat : 60;
          !a2.speedSample || o2 <= 0 ? t3(e3) : (n3 = (null == a2 ? void 0 : a2.id) || "0", r3 = w[n3] || {}, Array.isArray(e3) ? (i3 = e3.filter(function(e4) {
            var t4 = !r3[e4.url] || r3[e4.url] < o2;
            return t4 ? (r3[e4.url] = 1 + ~~r3[e4.url], w[n3] = r3) : y[n3] || me(n3), t4;
          })).length && t3(i3) : !r3[e3.url] || r3[e3.url] < o2 ? (r3[e3.url] = 1 + ~~r3[e3.url], w[n3] = r3, t3(e3)) : y[n3] || me(n3));
        }), (r2 = s2, function(t3, n3) {
          gt(function(e3) {
            r2.extendBean("netType", e3), n3(t3);
          });
        }), function(e3, t3) {
          null != (n3 = s2.lifeCycle) && n3.emit("beforeReportSpeed", e3);
          var n3, r3 = s2.config.beforeReportSpeed;
          if ((e3 = "function" == typeof r3 ? e3.filter(function(e4) {
            return false !== r3(e4);
          }) : e3).length) return t3(e3);
        }, function(e3, t3) {
          t3(e3.map(function(e4) {
            return void 0 !== e4.payload && delete e4.payload, e4;
          }));
        }, function(e3) {
          return s2.sendPipeline([function(e4, t3) {
            var n3, r3, i3, o2;
            t3({ type: m.SPEED, url: "" + s2.config.speedUrl, method: "post", data: (t3 = e4, n3 = B(B({}, s2.bean), { from: s2.getCurrentPageUrl() }), i3 = { fetch: [], static: [], bridge: [] }, o2 = new FormData(), Array.isArray(t3) ? t3.forEach(function(e5) {
              var t4 = _e(e5);
              i3[e5.type].push(t4);
            }) : (r3 = _e(t3), i3[t3.type].push(r3)), o2.append("payload", ue(B({ duration: i3 }, n3))), o2), log: e4 });
          }], m.SPEED)(e3);
        }]), e2.asyncPlugin = true;
        try {
          "undefined" != typeof document && (e2.uin = e2.uin || (null != (t2 = document.cookie.match(/\buin=\D+(\d*)/)) ? t2 : [])[1] || (null != (n2 = document.cookie.match(/\bilive_uin=\D*(\d+)/)) ? n2 : [])[1] || ""), s2.init(e2), s2.extendBean("sessionId", A.sessionID), s2.extendBean("from", s2.getCurrentPageUrl()), "undefined" != typeof document && s2.extendBean("referer", encodeURIComponent(document.referrer || ""));
          for (var i2 = 1; i2 <= 10; i2++) s2.addExtBean("ext" + i2, e2["ext" + i2]);
        } catch (e3) {
          console.warn(e3), console.log("%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.\nIt is recommended that you contact us for feedback and thank you for your support.", "color: red"), s2.sendSDKError(e3);
        }
        return s2;
      }
      function Pn() {
        this.constructor = Kt;
      }
      function I(e2) {
        this.slienceTimeInterval = 5e3, this.checkInterval = 100, this.fcp = 0, this.longTaskEntries = [], this.resourceEntries = [], this.slientWindowStartTime = performance.now(), this.onTTICallback = e2;
      }
      new i({ name: "ie" }), new i({ name: "onClose" });
      var kn = new i({ name: "onClose", onNewAegis: function(n2) {
        var r2, i2 = this;
        o.desktop() ? (r2 = window.onunload, window.onunload = function() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
          i2.publishNotReportedLog(n2), null != r2 && r2.call.apply(r2, u([window], e2));
        }) : jt(this.publishNotReportedLog.bind(this, n2), { once: true });
      }, publishNotReportedLog: function(t2) {
        var n2 = this;
        this.$walk(function(e2) {
          e2 === t2 && (e2.sendNow = true, e2.publishPluginsLogs(), n2.publishThrottlePipeLogs(e2));
        });
      }, publishThrottlePipeLogs: function(e2) {
        null != e2 && e2.speedLogPipeline([]), null != e2 && e2.eventPipeline([]), null != e2 && e2.customTimePipeline([]), null != e2 && e2.normalLogPipeline([]);
      } });
      new i({ name: "aid" });
      function Cn(e2, t2, n2) {
        var r2 = (e2 = e2.map(function(e3) {
          return Hn(e3);
        }))[0];
        return r2 ? (t2 = t2.some(function(e3) {
          return r2.includes(e3);
        }), n2 = !n2.some(function(e3) {
          return r2.includes(e3);
        }), { isWhitePoint: t2 && n2, selectorPointers: e2 }) : { isWhitePoint: false, selectorPointers: e2 };
      }
      function An(e2) {
        try {
          var t2 = e2.config.blankScreen;
          return true === t2 ? _n : Dn(_n, t2);
        } catch (e3) {
          return _n;
        }
      }
      function In(n2, r2) {
        function i2(e3) {
          var t2 = e3[0];
          return t2 && null !== t2.shadowRoot && (t2 = (null == (t2 = null == t2 ? void 0 : t2.shadowRoot) ? void 0 : t2.elementsFromPoint(n2, r2)) || []).length > e3.length ? i2(t2 || []) : e3;
        }
        var e2 = document.elementsFromPoint(n2, r2);
        return i2(e2);
      }
      var Nn, _n = { containers: ["body", "html", "#app", "#root"], ignoreContainers: [], detectStartPosition: { x: 0, y: 0 }, emptyElementsPercent: 70, sameElementsPercent: 70, debounceDuration: 2e3, everySideSampleNumber: 9, disableSameElementsCheck: true, ignoreElesWhenDomChange: [], reDetectInterval: 2e3, samePointDepth: 5, customBlankScreenDector: null }, Un = ["canvas", "img", "svg", "iframe"], Hn = ((N = Nn = Nn || {})[N.UNKNOWN = 0] = "UNKNOWN", N[N.ERROR = 1] = "ERROR", N[N.DOM_CHANGE = 2] = "DOM_CHANGE", function(e2) {
        var t2 = e2.nodeName.toLowerCase();
        return e2.id ? t2 + "#" + e2.id : e2.className && "string" == typeof e2.className ? t2 + "." + e2.className.split(" ").filter(function(e3) {
          return !!e3;
        }).join(".") : t2;
      }), Dn = function(e2) {
        for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
        if (!t2.length) return e2;
        var r2, i2 = t2.shift();
        for (r2 in i2) "object" == typeof i2[r2] && null !== i2[r2] && e2.hasOwnProperty(r2) && "object" == typeof e2[r2] && null !== e2[r2] ? Dn(e2[r2], i2[r2]) : e2[r2] = i2[r2];
        return Dn.apply(void 0, u([e2], t2));
      }, N = new i({ name: "blankScreen", onNewAegis: function(x2) {
        var L2, P2, e2, k2, t2, C2, A2, I2, n2, N2, _2, U2, r2, H2, D2, i2, M2, j2, o2, a2, q2, s2, c2, u2, l2, f2, d2, p2, h2, g2, m2, v2, y2, w2 = this;
        document.elementFromPoint && (e2 = An(x2), k2 = e2.everySideSampleNumber, t2 = e2.sameElementsPercent, C2 = e2.containers, A2 = e2.ignoreContainers, I2 = e2.detectStartPosition, n2 = e2.ignoreElesWhenDomChange, N2 = e2.reDetectInterval, _2 = e2.disableSameElementsCheck, U2 = e2.samePointDepth, r2 = 4 * k2 - 3, H2 = Math.floor(r2 * e2.emptyElementsPercent / 100), D2 = Math.floor(r2 * t2 / 100), i2 = Nn.UNKNOWN, j2 = null, o2 = M2 = false, a2 = function() {
          return W(w2, void 0, void 0, function() {
            var i3, o3, a3, s3, c3, u3, l3, f3, d3, p3, h3, g3, m3, v3, y3, w3, b2, E2, R2, T2, S2, O2 = this;
            return G(this, function(e3) {
              if (i3 = window.innerHeight, o3 = window.innerWidth, a3 = I2.x, s3 = I2.y, !(o3 <= a3 || i3 <= s3)) {
                for (c3 = a3 + (o3 - a3) / 2, u3 = s3 + (i3 - s3) / 2, l3 = [], f3 = k2 + 1, d3 = 0, p3 = 1; p3 < f3; p3++) m3 = s3 + (i3 - s3) * p3 / f3, y3 = In(h3 = a3 + (o3 - a3) * p3 / f3, u3), g3 = In(c3, m3), v3 = In(h3, m3), h3 = In(h3, i3 - m3), m3 = Cn(y3, C2, A2), m3.isWhitePoint && (d3 += 1), l3.push(m3.selectorPointers), p3 !== f3 / 2 && (y3 = Cn(g3, C2, A2), m3 = y3.isWhitePoint, g3 = y3.selectorPointers, m3 && (d3 += 1), y3 = Cn(v3, C2, A2), m3 = y3.isWhitePoint, v3 = y3.selectorPointers, m3 && (d3 += 1), y3 = Cn(h3, C2, A2), y3.isWhitePoint && (d3 += 1), l3.push(g3, v3, y3.selectorPointers));
                w3 = H2 <= d3, b2 = false, E2 = { samePointerMap: {}, maximumSamePointer: {} }, _2 || (T2 = l3.map(function(e4) {
                  return e4.slice(0, U2);
                }), t3 = T2.map(function(e4) {
                  return e4.join(" < ");
                }).reduce(function(e4, t4) {
                  return e4[t4] = e4[t4] ? e4[t4] + 1 : 1, e4;
                }, {}), n3 = Object.keys(t3).map(function(e4) {
                  return [e4, t3[e4]];
                }).sort(function(e4, t4) {
                  return t4[1] - e4[1];
                })[0], r3 = n3[0], T2 = { samePointerMap: t3, maximumSamePointerClass: r3, maximumSamePointerCounter: n3[1] }, E2 = { samePointerMap: T2.samePointerMap, maximumSamePointer: ((S2 = {})[R2 = T2.maximumSamePointerClass] = T2 = T2.maximumSamePointerCounter, S2) }, S2 = Un.some(function(e4) {
                  return R2.startsWith(e4);
                }), b2 = D2 <= T2 && !S2), w3 || b2 ? M2 ? (T2 = { msg: "decect blankscreen whitePointCount: " + (null == j2 ? void 0 : j2.whitePointCount) + " whitePointerThreshold: " + H2 + " reDetectInterval: " + N2, level: F.BLANK_SCREEN }, x2.normalLogPipeline(T2), M2 = false, j2 = null) : (j2 = B(B({ msg: "blank_screen", level: F.BLANK_SCREEN, whitePointCount: d3 }, E2), L2 ? { linkLogType: null == L2 ? void 0 : L2.type, linkLogLevel: null == L2 ? void 0 : L2.level, linkErrorMsg: null == L2 ? void 0 : L2.errorMsg } : {}), M2 = true, P2 = setTimeout(function() {
                  return W(O2, void 0, void 0, function() {
                    return G(this, function(e4) {
                      switch (e4.label) {
                        case 0:
                          return [4, q2()];
                        case 1:
                          return e4.sent(), [2];
                      }
                    });
                  });
                }, N2)) : (M2 = false, j2 = null);
              }
              return [2];
              var t3, n3, r3;
            });
          });
        }, q2 = function() {
          return W(w2, void 0, void 0, function() {
            var n3 = this;
            return G(this, function(e3) {
              switch (e3.label) {
                case 0:
                  return "requestIdleCallback" in window ? (window.requestIdleCallback(function(t3) {
                    return W(n3, void 0, void 0, function() {
                      return G(this, function(e4) {
                        switch (e4.label) {
                          case 0:
                            return 0 < t3.timeRemaining() ? [4, a2()] : [3, 2];
                          case 1:
                            e4.sent(), e4.label = 2;
                          case 2:
                            return [2];
                        }
                      });
                    });
                  }), [3, 3]) : [3, 1];
                case 1:
                  return [4, a2()];
                case 2:
                  e3.sent(), e3.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        }, s2 = function() {
          var e3;
          M2 || i2 === Nn.ERROR && !L2 || (i2 = L2 ? Nn.ERROR : Nn.DOM_CHANGE, clearTimeout(P2), e3 = An(x2).debounceDuration, P2 = setTimeout(function() {
            return W(w2, void 0, void 0, function() {
              return G(this, function(e4) {
                switch (e4.label) {
                  case 0:
                    return clearTimeout(P2), [4, q2()];
                  case 1:
                    return e4.sent(), [2];
                }
              });
            });
          }, e3));
        }, x2.lifeCycle.on("errorOccurred", c2 = function(e3) {
          e3 = e3.filter(function(e4) {
            return e4.level !== F.BLANK_SCREEN;
          });
          0 < e3.length && (L2 = e3[e3.length - 1], s2());
        }), u2 = null, window.MutationObserver && (g2 = m2 = null, l2 = window.cancelAnimationFrame || function(e3) {
          clearTimeout(e3);
        }, f2 = window.requestAnimationFrame || function(e3) {
          return setTimeout(e3, 1e3 / 60);
        }, d2 = function() {
          (u2 = new MutationObserver(function(e3) {
            var t3 = n2.includes(Hn(e3[0].target));
            1 === e3.length && t3 || s2();
          })).observe(document.body, { childList: true, subtree: true });
        }, p2 = function() {
          m2 && (clearTimeout(m2), m2 = null), g2 && (l2(g2), g2 = null);
        }, document.body ? d2() : (g2 = f2(h2 = function() {
          document.body ? (p2(), d2()) : g2 = f2(h2);
        }), m2 = setTimeout(function() {
          p2();
        }, 1e4))), v2 = function() {
          o2 && (o2 = true, M2) && (clearTimeout(P2), a2());
        }, y2 = function() {
          "visible" === document.visibilityState && (o2 = false), "hidden" === document.visibilityState && v2();
        }, window.addEventListener("pagehide", v2), window.addEventListener("beforeunload", v2), window.addEventListener("visibilitychange", y2), this.destroyBlanckScreenDetect = function() {
          window.removeEventListener("pagehide", v2), window.removeEventListener("beforeunload", v2), window.removeEventListener("visibilitychange", y2), x2.lifeCycle.remove("errorOccurred", c2), null != u2 && u2.disconnect();
        });
      }, destroy: function() {
        this.destroyBlanckScreenDetect();
      } });
      return r.use(wt), r.use(dt), r.use(He), r.use(On), r.use(Tn), r.use(Ne), r.use(g), r.use(Ln), r.use(kn), r.use(St), r.use(xt), r.use(ht), r.use(N), r;
    });
  }
});

// src/common/reportLog.js
var import_aegis_web_sdk = __toESM(require_aegis_min(), 1);
var aegis = new import_aegis_web_sdk.default({
  id: "pGUVFTCZyewxxxxx",
  // 项目上报id
  uin: "xxx",
  // 用户唯一标识（可选）
  reportApiSpeed: true,
  // 接口测速
  reportAssetSpeed: true,
  // 静态资源测速
  hostUrl: "https://aegis.qq.com",
  // 上报域名，中国大陆 rumt-zh.com
  spa: true
  // spa 页面需要开启，页面切换的时候上报pv
});

// src/api/index.js
addEventListener("fetch", async (event) => {
  const res = await handleRequest(event.request);
  event.respondWith(res);
});
async function handleRequest(req) {
  try {
    console.error("\u62A5\u9519\u4FE1\u606F\u6253\u5370 error---");
    console.log("\u62A5\u9519\u4FE1\u606F\u6253\u5370---log", AI);
    return new Response("111", {
      status: 200
    });
  } catch (e) {
    return new Response("\u62A5\u9519\u4E86", {
      status: 500
    });
  }
}
