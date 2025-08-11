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

// node_modules/aegis-mp-sdk/lib/aegis.min.js
var require_aegis_min = __commonJS({
  "node_modules/aegis-mp-sdk/lib/aegis.min.js"(exports2, module2) {
    !function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Aegis = t();
    }(exports2, function() {
      "use strict";
      var j = function(e2, t2) {
        return (j = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e3, t3) {
          e3.__proto__ = t3;
        } : function(e3, t3) {
          for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
        }))(e2, t2);
      };
      function e(e2, t2) {
        function n2() {
          this.constructor = e2;
        }
        j(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
      }
      var p = function() {
        return (p = Object.assign || function(e2) {
          for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var o2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
          return e2;
        }).apply(this, arguments);
      };
      function H(r2, o2) {
        var i2, a2, s2, l2 = { label: 0, sent: function() {
          if (1 & s2[0]) throw s2[1];
          return s2[1];
        }, trys: [], ops: [] }, e2 = { next: t2(0), throw: t2(1), return: t2(2) };
        return "function" == typeof Symbol && (e2[Symbol.iterator] = function() {
          return this;
        }), e2;
        function t2(n2) {
          return function(e3) {
            var t3 = [n2, e3];
            if (i2) throw new TypeError("Generator is already executing.");
            for (; l2; ) try {
              if (i2 = 1, a2 && (s2 = 2 & t3[0] ? a2.return : t3[0] ? a2.throw || ((s2 = a2.return) && s2.call(a2), 0) : a2.next) && !(s2 = s2.call(a2, t3[1])).done) return s2;
              switch (a2 = 0, (t3 = s2 ? [2 & t3[0], s2.value] : t3)[0]) {
                case 0:
                case 1:
                  s2 = t3;
                  break;
                case 4:
                  return l2.label++, { value: t3[1], done: false };
                case 5:
                  l2.label++, a2 = t3[1], t3 = [0];
                  continue;
                case 7:
                  t3 = l2.ops.pop(), l2.trys.pop();
                  continue;
                default:
                  if (!((s2 = 0 < (s2 = l2.trys).length && s2[s2.length - 1]) || 6 !== t3[0] && 2 !== t3[0])) {
                    l2 = 0;
                    continue;
                  }
                  if (3 === t3[0] && (!s2 || t3[1] > s2[0] && t3[1] < s2[3])) l2.label = t3[1];
                  else if (6 === t3[0] && l2.label < s2[1]) l2.label = s2[1], s2 = t3;
                  else {
                    if (!(s2 && l2.label < s2[2])) {
                      s2[2] && l2.ops.pop(), l2.trys.pop();
                      continue;
                    }
                    l2.label = s2[2], l2.ops.push(t3);
                  }
              }
              t3 = o2.call(r2, l2);
            } catch (e4) {
              t3 = [6, e4], a2 = 0;
            } finally {
              i2 = s2 = 0;
            }
            if (5 & t3[0]) throw t3[1];
            return { value: t3[0] ? t3[1] : void 0, done: true };
          };
        }
      }
      function _() {
        for (var e2 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++) e2 += arguments[t2].length;
        for (var r2 = Array(e2), o2 = 0, t2 = 0; t2 < n2; t2++) for (var i2 = arguments[t2], a2 = 0, s2 = i2.length; a2 < s2; a2++, o2++) r2[o2] = i2[a2];
        return r2;
      }
      Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: function(e2) {
        if (null == e2) throw new TypeError("Cannot convert first argument to object");
        for (var t2 = Object(e2), n2 = 1; n2 < arguments.length; n2++) if (null != (r2 = arguments[n2])) for (var r2 = Object(r2), o2 = Object.keys(Object(r2)), i2 = 0, a2 = o2.length; i2 < a2; i2++) {
          var s2 = o2[i2], l2 = Object.getOwnPropertyDescriptor(r2, s2);
          null != l2 && l2.enumerable && (t2[s2] = r2[s2]);
        }
        return t2;
      } });
      var M = /_?t(\d)?(imestamp)?=\d+&?/g, D = ["aegis.qq.com", "tamaegis.com", "/aegis-sdk", "rumt-", "/flog.core.min.js", "pingfore.qq.com", "pingfore.tencent.com", "zhiyan.tencent-cloud.net", "h.trace.qq.com", "btrace.qq.com", "beacon.qq.com", "dmplog.qq.com", "qq.com/report", "svibeacon.onezapp.com", "cube.weixinbridge.com", "doubleclick.net", "pcmgrmonitor.3g.qq.com", "tdm.qq.com", "report.qqweb.qq.com", "tpstelemetry.tencent.com", "insight.cloud.tencent.com", "facebook.com", "facebook.net", "google", "yahoo.com", "twitter.com", "ga-audiences", "report.idqqimg.com", "arms-retcode.aliyuncs.com", "px.effirst.com", "sentry", "baidu.com", "hot-update.json", "u.c.b.r.o.w.s.e.r", "report.url.cn", "sockjs-node", "m3u8"], F = ["ext1", "ext2", "ext3", "level", "trace", "tag", "seq", "code"], B = (r.prototype.indexOf = function(e2, t2) {
        for (var n2 = 0; n2 < e2.length; n2++) if (e2[n2].callback === t2) return n2;
        return -1;
      }, r.prototype.on = function(e2, t2, n2) {
        var r2;
        if (void 0 === n2 && (n2 = 0), this) return (r2 = this.eventsList[e2]) || (this.eventsList[e2] = [], r2 = this.eventsList[e2]), -1 === this.indexOf(r2, t2) && r2.push({ name: e2, type: n2 || 0, callback: t2 }), this;
      }, r.prototype.one = function(e2, t2) {
        this.on(e2, t2, 1);
      }, r.prototype.remove = function(e2, t2) {
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
      }, r.prototype.clear = function() {
        this.eventsList = {};
      }, r), t = { generateTraceId: W(16), generateSpanId: W(8) }, n = Array(32);
      function r() {
        var a2 = this;
        this.emit = function(e2, t2) {
          if (a2) {
            var n2;
            if (null != (r2 = a2.eventsList[e2]) && r2.length) for (var r2 = r2.slice(), o2 = 0; o2 < r2.length; o2++) {
              n2 = r2[o2];
              try {
                var i2 = n2.callback.apply(a2, [t2]);
                if (1 === n2.type && a2.remove(e2, n2.callback), false === i2) break;
              } catch (e3) {
                throw e3;
              }
            }
            return a2;
          }
        }, this.eventsList = {};
      }
      function W(t2) {
        return function() {
          for (var e2 = 0; e2 < 2 * t2; e2++) n[e2] = Math.floor(16 * Math.random()) + 48, 58 <= n[e2] && (n[e2] += 39);
          return String.fromCharCode.apply(null, n.slice(0, 2 * t2));
        };
      }
      function V() {
        return ("10000000100040008000" + 1e11).replace(/[018]/g, function(e2) {
          return (e2 ^ (16 * Math.random() & 15) >> e2 / 4).toString(16);
        });
      }
      function G() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
          var t2 = 16 * Math.random() | 0;
          return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
        });
      }
      function J(e2) {
        for (var t2, n2, r2, o2 = "", i2 = 0, a2 = (e2 = String(e2)).length % 3; i2 < e2.length; ) {
          if (255 < (t2 = e2.charCodeAt(i2++)) || 255 < (n2 = e2.charCodeAt(i2++)) || 255 < (r2 = e2.charCodeAt(i2++))) throw new TypeError("Failed to execute 'btoa': The string to be encoded contains characters outside of the Latin1 range.");
          o2 += s.charAt((t2 = t2 << 16 | n2 << 8 | r2) >> 18 & 63) + s.charAt(t2 >> 12 & 63) + s.charAt(t2 >> 6 & 63) + s.charAt(63 & t2);
        }
        return a2 ? o2.slice(0, a2 - 3) + "===".substring(a2) : o2;
      }
      function z(e2) {
        if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !$.test(e2)) throw new TypeError("Failed to execute 'atob': The string to be decoded is not correctly encoded.");
        var t2;
        e2 += "==".slice(2 - (3 & e2.length));
        for (var n2, r2, o2 = "", i2 = 0; i2 < e2.length; ) t2 = s.indexOf(e2.charAt(i2++)) << 18 | s.indexOf(e2.charAt(i2++)) << 12 | (n2 = s.indexOf(e2.charAt(i2++))) << 6 | (r2 = s.indexOf(e2.charAt(i2++))), o2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === r2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
        return o2;
      }
      function K(e2) {
        var t2, n2 = "";
        return n2 = "object" == typeof e2 && (t2 = (e2 = function(e3, t3) {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var r2 = t3[n3], o2 = e3[r2] || "function" == typeof e3.get && e3.get(r2);
            if (o2) return [r2, o2];
          }
          return ["", ""];
        }(e2, Object.keys(Y)))[0], e2 = e2[1], t2) ? Y[t2](e2) : n2;
      }
      var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", $ = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, Z = (o.prototype.generate = function(e2, t2, n2) {
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
      }, o.prototype.createTraceparent = function() {
        var e2 = t.generateSpanId();
        return "00-" + t.generateTraceId() + "-" + e2 + "-0" + Number(1).toString(16);
      }, o.prototype.createB3 = function() {
        var e2 = t.generateSpanId();
        return t.generateTraceId() + "-" + e2 + "-1";
      }, o.prototype.createSw8 = function(e2) {
        var t2 = "function" == typeof btoa ? btoa : J, e2 = e2 || {}, n2 = e2.host, n2 = void 0 === n2 ? "" : n2, e2 = e2.pathname, e2 = void 0 === e2 ? "" : e2, r2 = G(), o2 = G();
        return "1-" + String(t2(o2)) + "-" + String(t2(r2)) + "-1-" + String(t2("aegis")) + "-" + String(t2("1.39.1")) + "-" + String(t2(encodeURI(e2))) + "-" + String(t2(n2));
      }, o.prototype.createSentryTrace = function() {
        var e2 = V().substring(16);
        return V() + "-" + e2 + "-1";
      }, o.prototype.isUrlIgnored = function() {
        if (Array.isArray(this.ignoreUrls) && 0 !== this.ignoreUrls.length) for (var e2 = 0, t2 = this.ignoreUrls; e2 < t2.length; e2++) {
          var n2 = t2[e2];
          if (this.urlMatches(this.url, n2)) return true;
        }
        return false;
      }, o.prototype.isUrlInTraceUrls = function() {
        if (!this.urls) return true;
        if (Array.isArray(this.urls)) {
          if (0 === this.urls.length) return false;
          for (var e2 = 0, t2 = this.urls; e2 < t2.length; e2++) {
            var n2 = t2[e2];
            if (this.urlMatches(this.url, n2)) return true;
          }
        }
        return false;
      }, o.prototype.urlMatches = function(e2, t2) {
        return "string" == typeof t2 ? e2 === t2 : !!e2.match(t2);
      }, o), Y = { sw8: function(e2) {
        var t2 = "function" == typeof atob ? atob : z, e2 = e2.split("-")[1];
        return e2 ? t2(e2) : "";
      }, traceparent: function(e2) {
        return e2.split("-")[1];
      }, b3: function(e2) {
        return e2.split("-")[0];
      }, "sentry-trace": function(e2) {
        return e2.split("-")[0];
      } }, Q = function(e2) {
        if (!e2 || 0 === e2.length) return "{}";
        e2 = Array.isArray(e2) ? e2 : [e2];
        var t2 = Object.keys(e2[0]), n2 = {}, r2 = (t2.forEach(function(t3) {
          n2[t3] = e2.map(function(e3) {
            return e3[t3];
          });
        }), n2.count = e2.length, n2);
        if ("string" == typeof r2) return r2;
        try {
          return JSON.stringify(r2, ve()) || "undefined";
        } catch (r3) {
          return "error happen when aegis stringify: \n " + r3.message + " \n " + r3.stack;
        }
      };
      function o(e2, t2, n2) {
        void 0 === n2 && (n2 = null), this.traceType = e2, this.ignoreUrls = t2, this.urls = n2;
      }
      function X(e2, t2) {
        return "string" == typeof e2 ? e2.split("?")[t2 ? 1 : 0] || "" : e2;
      }
      function ee(e2) {
        return "string" == typeof e2 && /^\//.test(e2) ? "https:" === (null === location || void 0 === location ? void 0 : location.protocol) : /^https/.test(e2);
      }
      function te(e2, t2, n2) {
        var r2, o2;
        try {
          if ("function" == typeof (null == t2 ? void 0 : t2.retCodeHandler)) return { code: void 0 === (i2 = (o2 = t2.retCodeHandler(e2, null == n2 ? void 0 : n2.url, null == n2 ? void 0 : n2.ctx, null == n2 ? void 0 : n2.payload) || {}).code) ? "unknown" : i2, isErr: o2.isErr };
          if (!(e2 = "string" == typeof e2 ? JSON.parse(e2) : e2)) return { code: "unknown", isErr: false };
          "function" == typeof (null == (r2 = null == t2 ? void 0 : t2.ret) ? void 0 : r2.join) && (ye = [].concat(t2.ret.map(function(e3) {
            return e3.toLowerCase();
          })));
          var i2, a2 = Object.getOwnPropertyNames(e2).filter(function(e3) {
            return -1 !== ye.indexOf(e3.toLowerCase());
          });
          return a2.length ? { code: "" + (i2 = "\u672A\u77E5" !== (i2 = e2[a2[0]]) && "" !== i2 ? i2 : "unknown"), isErr: 0 !== i2 && "0" !== i2 && "unknown" !== i2 } : { code: "unknown", isErr: false };
        } catch (e3) {
          return { code: "unknown", isErr: false };
        }
      }
      function d(e2, t2, n2) {
        try {
          var r2 = "function" == typeof t2 ? t2(e2, null == n2 ? void 0 : n2.url) || "" : e2;
          return be(r2).slice(0, 102400);
        } catch (e3) {
          return "";
        }
      }
      function h(t2, e2) {
        return "string" != typeof t2 || !t2 || e2 && -1 < t2.indexOf(e2) || Re.test(t2) || D.some(function(e3) {
          return -1 < t2.indexOf(e3);
        });
      }
      function m(n2, r2) {
        var o2, i2 = [], a2 = n2.config;
        return n2.lifeCycle.on("destroy", function() {
          i2.length = 0;
        }), function(e2, t2) {
          Array.isArray(e2) ? i2 = i2.concat(e2) : i2.push(e2), r2 && i2.length >= r2 || n2.sendNow && 0 < i2.length ? (i2 = we(i2), t2(i2.splice(0, i2.length)), o2 && clearTimeout(o2)) : (o2 && clearTimeout(o2), o2 = setTimeout(function() {
            o2 = null, 0 < (i2 = we(i2)).length && t2(i2.splice(0, i2.length));
          }, a2.delay));
        };
      }
      function ne(e2, t2) {
        return Array.isArray(e2) ? t2(e2.map(function(e3) {
          return t3 = p(p({}, e3), { msg: "string" == typeof e3.msg ? e3.msg : [].concat(e3.msg).map(E).join(" ") }), F.forEach(function(e4) {
            t3[e4] || delete t3[e4];
          }), t3;
          var t3;
        })) : t2([p(p({}, e2), { msg: "string" == typeof e2.msg ? e2.msg : E(e2.msg) })]);
      }
      function re(l2, c2) {
        return function(e2, t2) {
          var n2, r2, o2, i2 = Array.isArray(e2), a2 = i2 ? e2 : [e2], s2 = (l2.lifeCycle.emit("beforeRequest", e2), l2.config.beforeRequest);
          (a2 = "function" == typeof s2 ? a2.map(function(t3) {
            try {
              var e3 = s2({ logs: t3, logType: c2 });
              return (null == e3 ? void 0 : e3.logType) === c2 && null != e3 && e3.logs ? e3.logs : false !== e3 && t3;
            } catch (e4) {
              return t3;
            }
          }).filter(function(e3) {
            return false !== e3;
          }) : a2).length && (n2 = a2, e2 = F, !Array.isArray(n2) || n2.length <= 1 || (r2 = [], o2 = [], !(o2 = "string" == typeof e2 ? [e2] : e2)) || o2.length <= 0 || (o2.forEach(function(t3) {
            n2.forEach(function(e3) {
              null != e3 && e3[t3] && r2.push(t3);
            });
          }), 0 < r2.length && (n2 = n2.map(function(e3) {
            var t3 = {};
            return r2.forEach(function(e4) {
              t3[e4] = "";
            }), p(p({}, t3), e3);
          }))), a2 = n2, t2(i2 ? a2 : a2[0]));
        };
      }
      function oe(o2) {
        return function(e2, t2) {
          o2.lifeCycle.emit("modifyRequest", e2);
          var n2 = o2.config.modifyRequest;
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
      function y(n2) {
        if (n2 && n2.reduce && n2.length) return 1 === n2.length ? function(e2, t2) {
          n2[0](e2, t2 || ke);
        } : n2.reduce(function(n3, r2) {
          return function(e2, t2) {
            return void 0 === t2 && (t2 = ke), n3(e2, function(e3) {
              return null == r2 ? void 0 : r2(e3, t2);
            });
          };
        });
        throw new TypeError("createPipeline need at least one function param");
      }
      function ae(t2, n2) {
        Object.getOwnPropertyNames(t2).forEach(function(e2) {
          "function" == typeof t2[e2] && "constructor" !== e2 && (n2 ? n2[e2] = "sendPipeline" === e2 ? function() {
            return function() {
            };
          } : function() {
          } : t2[e2] = function() {
          });
        });
      }
      function se(e2) {
        try {
          var t2, n2, r2, o2 = "";
          return o2 = e2.pageUrl || (n2 = (t2 = getCurrentPages())[t2.length - 1] || {}, i2 = n2.options, r2 = Object.keys(i2).length ? "?" + Object.keys(i2).map(function(e3) {
            return e3 + "=" + i2[e3];
          }).join("&") : "", n2.route ? n2.route + r2 : ""), (o2 = "function" == typeof e2.urlHandler ? e2.urlHandler() : o2).slice(0, 2048);
        } catch (e3) {
          return "";
        }
        var i2;
      }
      function le(e2, t2) {
        if ("string" == typeof e2 && "string" == typeof t2) {
          if (e2 === t2) return 1;
          for (var n2 = e2.split("."), r2 = t2.split("."), o2 = Math.max(n2.length, r2.length), i2 = 0; i2 < o2; i2++) {
            var a2 = ~~n2[i2], s2 = ~~r2[i2];
            if (a2 < s2) return;
            if (s2 < a2) return 1;
          }
        }
      }
      function ce(e2, t2) {
        var n2 = this;
        this.taskQueue = [], this.count = 1, this.maxCount = 2, this.addTask = function(e3) {
          n2.taskQueue.push(e3);
        }, this.fireTask = function() {
          var e3 = n2.taskQueue.length;
          n2.count > n2.maxCount || 0 === e3 || (n2.count = n2.count + 1, (e3 = n2.taskQueue.shift()) && n2.sendRequest(e3.options, null == e3 ? void 0 : e3.success, null == e3 ? void 0 : e3.fail));
        }, this.complete = function() {
          1 < n2.count && (n2.count = n2.count - 1), n2.fireTask();
        }, t2 && (this.maxCount = t2), this.sendRequest = e2;
      }
      function i(e2) {
        return Ce = Ce || g.getSystemInfoSync().SDKVersion, le(Ce, "1.1.1") && g.canIUse ? g.canIUse(e2) : !!g[e2];
      }
      function ue(e2) {
        for (var t2, n2 = { unknown: /unknown|none/i, wifi: /wifi/i, net2g: /2g/i, net3g: /3g/i, net4g: /4g/i, net5g: /5g/i, net6g: /6g/i }, r2 = l.unknown, o2 = 0; o2 < Object.keys(n2).length; o2++) {
          var i2 = Object.keys(n2)[o2];
          if (null != (t2 = n2[i2]) && t2.test(e2)) {
            r2 = l[i2];
            break;
          }
        }
        return r2;
      }
      function fe(e2) {
        var t2 = e2.apiName, n2 = S[t2];
        n2 ? n2.hackCloudReq.addCallback(e2) : (n2 = x.cloud[t2], S[t2] = { hackCloudReq: new qe(e2), originApi: n2 }), S[t2];
      }
      function pe(e2) {
        var t2 = e2.apiName, n2 = T[t2];
        n2 ? n2.hackReq.addCallback(e2) : (n2 = wx[t2], T[t2] = { hackReq: new Ie(e2), originApi: n2 }), T[t2];
      }
      var v, a, l, b, u, de, he, ge, me, ye = ["ret", "retcode", "code", "errcode"], ve = function() {
        var n2 = /* @__PURE__ */ new WeakSet();
        return function(e2, t2) {
          if (t2 instanceof Error) return "Error.message: " + t2.message + " \n  Error.stack: " + t2.stack;
          if ("object" == typeof t2 && null !== t2) {
            if (n2.has(t2)) return "[Circular " + (e2 || "root") + "]";
            n2.add(t2);
          }
          return t2;
        };
      }, E = function(e2) {
        if ("string" == typeof e2) return e2;
        try {
          return e2 instanceof Error ? (JSON.stringify(e2, ve(), 4) || "undefined").replace(/"/gim, "") : JSON.stringify(e2, ve(), 4) || "undefined";
        } catch (e3) {
          return "error happen when aegis stringify: \n " + e3.message + " \n " + e3.stack;
        }
      }, be = function(n2, r2) {
        void 0 === r2 && (r2 = 3);
        var o2, i2, a2, s2 = "";
        return Array.isArray(n2) ? (s2 += "[", o2 = n2.length, n2.forEach(function(e2, t2) {
          s2 = (s2 += "object" == typeof e2 && 1 < r2 ? be(e2, r2 - 1) : Oe(e2)) + (t2 === o2 - 1 ? "" : ",");
        }), s2 += "]") : n2 instanceof Object ? (s2 = "{", i2 = Object.keys(n2), a2 = i2.length, i2.forEach(function(e2, t2) {
          "object" == typeof n2[e2] && 1 < r2 ? s2 += '"' + e2 + '":' + be(n2[e2], r2 - 1) : s2 += Ee(e2, n2[e2]), s2 += t2 === a2 - 1 || t2 < a2 - 1 && void 0 === n2[i2[t2 + 1]] ? "" : ",";
        }), s2 += "}") : s2 += n2, s2;
      }, Ee = function(e2, t2) {
        var n2 = typeof t2, r2 = "";
        return "string" == n2 || "object" == n2 ? r2 += '"' + e2 + '":"' + t2 + '"' : "function" == typeof t2 ? r2 += '"' + e2 + '":"function ' + t2.name + '"' : "symbol" == typeof t2 ? r2 += '"' + e2 + '":"symbol"' : "number" != typeof t2 && "boolean" != n2 || (r2 += '"' + e2 + '": ' + t2), r2;
      }, Oe = function(e2) {
        var t2 = typeof e2;
        return "" + ("undefined" == t2 || "symbol" == t2 || "function" == t2 ? "null" : "string" == t2 || "object" == t2 ? '"' + e2 + '"' : e2);
      }, Re = /data:(image|text|application|font)\/.*;base64/, we = ((c = v = v || {}).INFO_ALL = "-1", c.API_RESPONSE = "1", c.INFO = "2", c.ERROR = "4", c.PROMISE_ERROR = "8", c.AJAX_ERROR = "16", c.SCRIPT_ERROR = "32", c.IMAGE_ERROR = "64", c.CSS_ERROR = "128", c.CONSOLE_ERROR = "256", c.MEDIA_ERROR = "512", c.RET_ERROR = "1024", c.REPORT = "2048", c.PV = "4096", c.EVENT = "8192", c.PAGE_NOT_FOUND_ERROR = "16384", c.WEBSOCKET_ERROR = "32768", c.BRIDGE_ERROR = "65536", c.LAZY_LOAD_ERROR = "131072", (c = a = a || {})[c.android = 1] = "android", c[c.ios = 2] = "ios", c[c.windows = 3] = "windows", c[c.macos = 4] = "macos", c[c.linux = 5] = "linux", c[c.devtools = 6] = "devtools", c[c.other = 100] = "other", (c = l = l || {})[c.unknown = 100] = "unknown", c[c.wifi = 1] = "wifi", c[c.net2g = 2] = "net2g", c[c.net3g = 3] = "net3g", c[c.net4g = 4] = "net4g", c[c.net5g = 5] = "net5g", c[c.net6g = 6] = "net6g", (c = b = b || {}).LOG = "log", c.SPEED = "speed", c.PERFORMANCE = "performance", c.OFFLINE = "offline", c.WHITE_LIST = "whiteList", c.VITALS = "vitals", c.PV = "pv", c.CUSTOM_PV = "customPV", c.EVENT = "event", c.CUSTOM = "custom", c.SDK_ERROR = "sdkError", c.SET_DATA = "setData", c.LOAD_PACKAGE = "loadPackage", (c = u = u || {}).production = "production", c.development = "development", c.gray = "gray", c.pre = "pre", c.daily = "daily", c.local = "local", c.test = "test", c.others = "others", function(e2) {
        return e2.filter(function(n2, r2) {
          return "static" !== n2.type || !e2.find(function(e3, t2) {
            return n2.url === e3.url && 200 === n2.status && r2 < t2;
          });
        });
      }), xe = function(e2) {
        e2.level === v.INFO_ALL && (e2.level = v.INFO);
      }, O = {}, R = {}, Se = function(e2) {
        return O[e2] || (O[e2] = setTimeout(function() {
          R[e2] = {}, O[e2] = null;
        }, 6e4)), O[e2];
      }, Te = function(e2) {
        return (Array.isArray(e2) ? e2 : [e2]).map(function(n2) {
          return Object.getOwnPropertyNames(n2).reduce(function(e3, t2) {
            return "ctx" !== t2 && (e3[t2] = n2[t2]), e3;
          }, { level: v.INFO, msg: "" });
        });
      }, Pe = function(r2) {
        return function(e2) {
          return r2.sendPipeline([function(e3, n2) {
            return n2({ url: r2.config.url || "", data: Q(Te(e3)), method: "post", contentType: "application/json", type: b.LOG, log: e3, requestConfig: { timeout: 5e3 }, success: function() {
              var t2 = r2.config.onReport;
              "function" == typeof t2 && e3.forEach(function(e4) {
                t2(e4);
              }), "function" == typeof n2 && n2([]);
            } });
          }], b.LOG)(e2);
        };
      }, ke = function() {
      }, c = (L.use = function(e2) {
        -1 === L.installedPlugins.indexOf(e2) && e2.aegisPlugin && L.installedPlugins.push(e2);
      }, L.unuse = function(e2) {
        e2 = L.installedPlugins.indexOf(e2);
        -1 !== e2 && L.installedPlugins.splice(e2, 1);
      }, L.prototype.init = function(e2) {
        this.setConfig(e2);
        for (var t2 = 0; t2 < L.installedPlugins.length; t2++) try {
          L.installedPlugins[t2].patch(this);
        } catch (e3) {
          this.sendSDKError(e3);
        }
        this.lifeCycle.emit("onInited");
      }, L.prototype.destroy = function(e2) {
        void 0 === e2 && (e2 = false);
        var t2, n2, r2 = L.instances.indexOf(this);
        -1 !== r2 && L.instances.splice(r2, 1);
        for (var o2 = L.installedPlugins.length - 1; 0 <= o2; o2--) try {
          L.installedPlugins[o2].unpatch(this);
        } catch (e3) {
          this.sendSDKError(e3);
        }
        if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e2) t2 = this, n2 = Object.getOwnPropertyDescriptors(t2), Object.keys(n2).forEach(function(e3) {
          n2[e3].writable && (t2[e3] = null);
        }), Object.setPrototypeOf(this, null);
        else {
          for (var i2 = this; i2.constructor !== Object && ae(i2, this), i2 = Object.getPrototypeOf(i2); ) ;
          0 === L.instances.length && (r2 = Object.getPrototypeOf(this).constructor, ae(r2), ae(L));
        }
      }, L.prototype.setConfig = function(e2) {
        Object.assign(this.config, e2);
        var e2 = this.config, t2 = e2.id, n2 = e2.uin, r2 = e2.version, o2 = e2.ext1, i2 = e2.ext2, a2 = e2.ext3, s2 = e2.aid, l2 = e2.env, c2 = void 0 === l2 ? "production" : l2, l2 = e2.pageUrl, e2 = this.bean.id !== t2 || this.bean.uin !== n2 || this.bean.aid !== s2;
        return this.bean.id = t2 || "", this.bean.uin = n2 || "", this.bean.version = r2 || "1.39.1", this.bean.aid = s2 || "", this.bean.env = function() {
          switch (c2) {
            case u.production:
            case u.development:
            case u.gray:
            case u.pre:
            case u.daily:
            case u.local:
            case u.test:
            case u.others:
              return 1;
            default:
              return;
          }
        }() ? c2 : u.others, l2 && this.extendBean("from", encodeURIComponent(l2.slice(0, 2048))), o2 && this.extendBean("ext1", encodeURIComponent(o2)), i2 && this.extendBean("ext2", encodeURIComponent(i2)), a2 && this.extendBean("ext3", encodeURIComponent(a2)), e2 && this.lifeCycle.emit("onConfigChange", this.config), this.config;
      }, L.prototype.extendBean = function(e2, t2) {
        this.bean[e2] = t2;
      }, L.prototype.send = function(e2, o2, i2) {
        var t2 = this;
        return y([oe(this), function(n2, r2) {
          t2.request(n2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            r2({ isErr: false, result: e3, logType: n2.type, logs: n2.log }), null != o2 && o2.apply(void 0, e3);
          }, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            r2({ isErr: true, result: e3, logType: n2.type, logs: n2.log }), null != i2 && i2.apply(void 0, e3);
          });
        }, ie(this)])(e2);
      }, L.prototype.sendSDKError = function(e2) {
        var n2 = this;
        this.sendPipeline([function(e3, t2) {
          t2({ url: n2.config.url + "?id=1085&msg[0]=" + encodeURIComponent(E(e3)) + "&level[0]=2&from=" + n2.config.id + "&count=1&version=" + n2.config.id + "(1.39.1)", addBean: false, method: "get", type: b.SDK_ERROR, log: e3 });
        }], b.SDK_ERROR)(e2);
      }, L.prototype.sendPipeline = function(e2, t2) {
        var n2, i2 = this;
        return y(_([function(e3, t3) {
          if ("number" != typeof n2.config.random && (console.warn("random must in [0, 1], default is 1."), n2.config.random = 1), !n2.isHidden || !n2.isGetSample) if (n2.isGetSample) n2.isHidden || t3(e3);
          else {
            if (n2.isGetSample = true, Math.random() < n2.config.random) return n2.isHidden = false, t3(e3);
            n2.isHidden = true;
          }
        }, re(n2 = this, t2)], e2, [oe(this), function(r2, o2) {
          i2.request(r2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
            var n3 = false;
            -1 < ("" + e3[i2.failRequestCount = 0]).indexOf("403 forbidden") && (n3 = true, i2.destroy()), o2({ isErr: n3, result: e3, logType: null == r2 ? void 0 : r2.type, logs: null == r2 ? void 0 : r2.log }), null != (n3 = null == r2 ? void 0 : r2.success) && n3.call.apply(n3, _([r2], e3));
          }, function() {
            for (var e3, t3 = [], n3 = 0; n3 < arguments.length; n3++) t3[n3] = arguments[n3];
            60 <= ++i2.failRequestCount && i2.destroy(), -1 < ("" + t3[0]).indexOf("403 forbidden") && i2.destroy(), o2({ isErr: true, result: t3, logType: null == r2 ? void 0 : r2.type, logs: null == r2 ? void 0 : r2.log }), null != (e3 = null == r2 ? void 0 : r2.fail) && e3.call.apply(e3, _([r2], t3));
          });
        }, ie(this)]));
      }, L.prototype.info = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: v.INFO, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, p({}, e2[0]), { level: v.INFO }), this.normalLogPipeline(n2);
      }, L.prototype.infoAll = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: v.INFO_ALL, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, p({}, e2[0]), { level: v.INFO_ALL }), this.normalLogPipeline(n2);
      }, L.prototype.report = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: v.REPORT, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, p({}, e2[0])), this.normalLogPipeline(n2);
      }, L.prototype.error = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
        var n2 = { level: v.ERROR, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, p({}, e2[0]), { level: v.ERROR }), this.normalLogPipeline(n2);
      }, L.prototype.reportEvent = function(e2) {
        e2 && ((e2 = "string" == typeof e2 ? { name: e2, ext1: this.config.ext1 || "", ext2: this.config.ext2 || "", ext3: this.config.ext3 || "" } : e2).name ? ("string" != typeof e2.name && (console.warn("reportEvent params name must be string"), e2.name = String(e2.name)), this.eventPipeline(e2)) : console.warn("reportEvent params error"));
      }, L.prototype.reportT = function(e2) {
        var t2 = e2.name, n2 = e2.duration, r2 = e2.ext1, r2 = void 0 === r2 ? "" : r2, o2 = e2.ext2, o2 = void 0 === o2 ? "" : o2, i2 = e2.ext3, i2 = void 0 === i2 ? "" : i2, e2 = e2.from;
        if ("string" == typeof t2 && "number" == typeof n2 && "string" == typeof r2 && "string" == typeof o2 && "string" == typeof i2) {
          if (!(n2 < 0 || 6e4 < n2)) return this.submitCustomTime(t2, n2, r2, o2, i2, void 0 === e2 ? "" : e2);
          console.warn("reportTime: duration must between 0 and 60000");
        } else console.warn("reportTime: params error");
      }, L.prototype.reportTime = function(e2, t2) {
        if ("object" == typeof e2) return this.reportT(e2);
        "string" == typeof e2 ? "number" == typeof t2 ? t2 < 0 || 6e4 < t2 ? console.warn("reportTime: duration must between 0 and 60000") : this.submitCustomTime(e2, t2) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string");
      }, L.prototype.time = function(e2) {
        "string" == typeof e2 ? this.timeMap[e2] ? console.warn("Timer " + e2 + " already exists") : this.timeMap[e2] = Date.now() : console.warn("time: first param must be a string");
      }, L.prototype.timeEnd = function(e2) {
        "string" == typeof e2 ? this.timeMap[e2] ? (this.submitCustomTime(e2, Date.now() - this.timeMap[e2]), delete this.timeMap[e2]) : console.warn("Timer " + e2 + " does not exist") : console.warn("timeEnd: first param must be a string");
      }, L.prototype.ready = function(e2, t2, n2) {
        throw new Error('You need to override "ready" method');
      }, L.prototype.request = function(e2, t2, n2) {
        throw new Error('You need to override "request" method');
      }, L.prototype.speedLogPipeline = function(e2) {
        throw new Error('You need to override "speedLogPipeline" method');
      }, Object.defineProperty(L.prototype, "__version__", { get: function() {
        return "1.39.1";
      }, enumerable: false, configurable: true }), Object.defineProperty(L.prototype, "LogType", { get: function() {
        return v;
      }, enumerable: false, configurable: true }), L.prototype.reportPv = function(e2) {
        e2 && console.warn("reportPv is deprecated, please use reportEvent");
      }, L.prototype.submitCustomTime = function(e2, t2, n2, r2, o2, i2) {
        this.customTimePipeline({ name: e2, duration: t2, ext1: n2 || this.config.ext1, ext2: r2 || this.config.ext2, ext3: o2 || this.config.ext3, from: i2 || void 0 });
      }, L.version = "1.39.1", L.instances = [], L.logType = v, L.environment = u, L.installedPlugins = [], L), f = (A.prototype.patch = function(e2) {
        this.canUse(e2) && this.exist(e2) && (this.instances.push(e2), this.triggerInit(e2), this.triggerOnNewAegis(e2));
      }, A.prototype.unpatch = function(e2) {
        var t2 = this.instances.indexOf(e2);
        -1 !== t2 && (this.instances.splice(t2, 1), 0 === this.instances.length) && this.uninstall(e2);
      }, A.prototype.countInstance = function() {
        return this.instances.length;
      }, A.prototype.uninstall = function(e2) {
        var t2;
        null != (t2 = null == (t2 = this.option) ? void 0 : t2.destroy) && t2.apply(this, [e2]);
      }, A.prototype.walk = function(n2) {
        var r2 = this;
        this.instances.forEach(function(e2) {
          var t2 = r2.canUse(e2);
          t2 && n2(e2, t2);
        });
      }, A.prototype.canUse = function(e2) {
        e2 = this.getConfig(e2);
        return !(!e2 || "object" != typeof e2) || !!e2;
      }, A.prototype.getConfig = function(e2) {
        return null == (e2 = e2.config) ? void 0 : e2[this.name];
      }, A.prototype.exist = function(e2) {
        return -1 === this.instances.indexOf(e2);
      }, A.prototype.triggerInit = function(e2) {
        var t2;
        this.inited || (this.inited = true, null == (t2 = null == (t2 = this.option) ? void 0 : t2.init)) || t2.call(this.option, this.getConfig(e2));
      }, A.prototype.triggerOnNewAegis = function(e2) {
        var t2;
        null != (t2 = null == (t2 = this.option) ? void 0 : t2.onNewAegis) && t2.call(this.option, e2, this.getConfig(e2));
      }, A), g = wx || qq, Ce = "", Ne = new f({ name: "device", onNewAegis: function(t2) {
        return e2 = this, l2 = function() {
          return H(this, function(e3) {
            return this.setSystemInfo(t2), this.setNetworkType(t2), this.setNetworkChange(t2), [2];
          });
        }, new (s2 = (s2 = a2 = void 0) || Promise)(function(n2, t3) {
          function r2(e3) {
            try {
              i2(l2.next(e3));
            } catch (e4) {
              t3(e4);
            }
          }
          function o2(e3) {
            try {
              i2(l2.throw(e3));
            } catch (e4) {
              t3(e4);
            }
          }
          function i2(e3) {
            var t4;
            e3.done ? n2(e3.value) : ((t4 = e3.value) instanceof s2 ? t4 : new s2(function(e4) {
              e4(t4);
            })).then(r2, o2);
          }
          i2((l2 = l2.apply(e2, a2 || [])).next());
        });
        var e2, a2, s2, l2;
      }, setSystemInfo: function(a2) {
        var s2 = this;
        try {
          i("getSystemInfo") && g.getSystemInfo({ success: function(e2) {
            var t2 = e2.platform, n2 = e2.model, r2 = e2.windowHeight, o2 = e2.windowWidth, i2 = e2.screenWidth, i2 = void 0 === i2 ? 0 : i2, e2 = e2.screenHeight, e2 = void 0 === e2 ? 0 : e2;
            a2.extendBean("platform", s2.getPlatFormType(t2)), a2.extendBean("model", n2), a2.extendBean("vp", Math.round(o2) + " * " + Math.round(r2)), a2.extendBean("sr", Math.round(i2) + " * " + Math.round(e2));
          } });
        } catch (a3) {
        }
      }, getPlatFormType: function(e2) {
        for (var t2, n2 = { android: /android/i, ios: /ios/i, windows: /windows/i, macos: /mac/i, devtools: /devtools/i }, r2 = a.other, o2 = 0; o2 < Object.keys(n2).length; o2++) {
          var i2 = Object.keys(n2)[o2];
          if (null != (t2 = n2[i2]) && t2.test(e2)) {
            r2 = a[i2];
            break;
          }
        }
        return r2;
      }, setNetworkChange: function(t2) {
        i("onNetworkStatusChange") && g.onNetworkStatusChange(function(e2) {
          e2 = ue(e2.networkType);
          t2.extendBean("netType", e2);
        });
      }, setNetworkType: function(t2) {
        i("getNetworkType") && g.getNetworkType({ success: function(e2) {
          e2 = ue(e2.networkType);
          t2.extendBean("netType", e2);
        } });
      } }), Ae = g.request, c = (e(N, ge = c), Object.defineProperty(N.prototype, "getBean", { get: function() {
        var t2 = this;
        return this.bean ? Object.getOwnPropertyNames(this.bean).map(function(e2) {
          return e2 + "=" + t2.bean[e2];
        }).join("&") + "&from=" + encodeURIComponent(se(this.config)) : "from=" + encodeURIComponent(se(this.config));
      }, enumerable: false, configurable: true }), N.prototype.initRequestSchedule = function() {
        this.requestSchedule = new ce(this.sendRequest);
      }, N.prototype.uploadLogs = function(e2, t2) {
        this.lifeCycle.emit("uploadLogs", e2 = void 0 === e2 ? {} : e2, t2 = void 0 === t2 ? {} : t2);
      }, N.prototype.reportPv = function(e2) {
        var t2, n2 = this;
        e2 && (t2 = Object.getOwnPropertyNames(this.bean).filter(function(e3) {
          return "id" !== e3;
        }).map(function(e3) {
          return e3 + "=" + n2.bean[e3];
        }).join("&") + "&from=" + encodeURIComponent(se(this.config)), this.send({ url: this.config.url + "/" + e2 + "?" + t2, addBean: false, type: b.CUSTOM_PV, log: b.CUSTOM_PV }, function() {
        }, function() {
        }));
      }, N.sessionID = "session-" + Date.now(), N.asyncPluginIndex = 0, N), Le = new f({ name: "aid", onNewAegis: function(t2) {
        this.initAid(function(e2) {
          t2.bean.aid = e2, t2.config.aid = e2;
        });
      }, initAid: function(t2) {
        g.getStorage({ key: "AEGIS_ID", success: function(e2) {
          t2(e2.data);
        }, fail: function() {
          var e2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
            var t3 = 16 * Math.random() | 0;
            return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
          });
          g.setStorage({ key: "AEGIS_ID", data: e2, success: function() {
            t2(e2);
          } });
        } });
      } }), w = (C.prototype.addCallback = function(e2) {
        e2 && this.callbacks.push(e2);
      }, C.prototype.prefixHandler = function(e2) {
        return p(p({}, e2), { aegisRequestStartTime: +/* @__PURE__ */ new Date() });
      }, C.prototype.onStartHandler = function(n2) {
        var e2;
        this.callbacks.forEach(function(e3) {
          var t2;
          try {
            null != (t2 = e3.onStart) && t2.call(e3, n2);
          } catch (e4) {
          }
        }), null != (e2 = n2.onStart) && e2.call(n2, n2);
      }, C.prototype.successHandler = function(n2, r2) {
        var e2;
        this.callbacks.forEach(function(e3) {
          var t2;
          try {
            null != (t2 = e3.success) && t2.call(e3, n2, r2);
          } catch (e4) {
          }
        }), null != (e2 = r2.success) && e2.call(r2, n2, r2);
      }, C.prototype.failHandler = function(n2, r2) {
        var e2;
        this.callbacks.forEach(function(e3) {
          var t2;
          try {
            null != (t2 = e3.fail) && t2.call(e3, n2, r2);
          } catch (e4) {
          }
        }), null != (e2 = r2.fail) && e2.call(r2, n2, r2);
      }, C.prototype.completeHandler = function(n2, r2) {
        var e2;
        this.callbacks.forEach(function(e3) {
          var t2;
          try {
            null != (t2 = e3.complete) && t2.call(e3, n2, r2);
          } catch (e4) {
          }
        }), null != (e2 = r2.complete) && e2.call(r2, n2, r2);
      }, C.prototype.override = function() {
        try {
          this.defineApiProperty();
        } catch (e2) {
          console.warn("cannot override `" + this.apiName + "`, error is: " + e2);
        } finally {
          this.isOverride = true;
        }
      }, C), x = wx || qq, S = {}, qe = (e(k, he = w), k.prototype.defineApiProperty = function() {
        var e2 = this;
        x.cloud && x.cloud[this.apiName] && Object.defineProperty(x.cloud, this.apiName, { get: function() {
          return e2.hackHandler.bind(e2);
        } });
      }, k.prototype.hackHandler = function(e2) {
        var r2 = this, o2 = this.prefixHandler(e2);
        return new Promise(function(t2, n2) {
          var e3 = null == (e3 = S[r2.apiName]) ? void 0 : e3.originApi;
          null != e3 && e3(p(p({}, o2), { success: function(e4) {
            r2.successHandler(e4, o2), t2(e4);
          }, fail: function(e4) {
            r2.failHandler(e4, o2), n2(e4);
          }, complete: function(e4) {
            r2.completeHandler(e4, o2);
          } }));
        });
      }, k), Ue = wx || qq, T = {}, Ie = (e(P, de = w), P.prototype.defineApiProperty = function() {
        var e2 = this;
        Object.defineProperty(Ue, this.apiName, { get: function() {
          return e2.hackHandler.bind(e2);
        } });
      }, P.prototype.hackHandler = function(e2) {
        var t2 = this, n2 = this.prefixHandler(e2), e2 = (this.onStartHandler(n2), null == (e2 = T[this.apiName]) ? void 0 : e2.originApi);
        return null == e2 ? void 0 : e2(p(p({}, n2), { success: function(e3) {
          t2.successHandler(e3, n2);
        }, fail: function(e3) {
          t2.failHandler(e3, n2);
        }, complete: function(e3) {
          t2.completeHandler(e3, n2);
        } }));
      }, P), je = wx || qq, He = je.request;
      function P() {
        return null !== de && de.apply(this, arguments) || this;
      }
      function k() {
        return null !== he && he.apply(this, arguments) || this;
      }
      function C(e2) {
        this.callbacks = [], this.isOverride = false;
        var t2 = e2.apiName;
        this.apiName = t2, this.isOverride || this.override(), this.callbacks.push(e2);
      }
      function N(e2) {
        var r2, a2, u2 = ge.call(this, e2) || this;
        u2.originRequest = Ae, u2.speedLogPipeline = y([(a2 = u2.config, function(e3, t2) {
          var n2, r3, o2, i2 = "number" == typeof a2.repeat ? a2.repeat : 60;
          !a2.speedSample || i2 <= 0 ? t2(e3) : (n2 = (null == a2 ? void 0 : a2.id) || "0", r3 = R[n2] || {}, Array.isArray(e3) ? (o2 = e3.filter(function(e4) {
            var t3 = !r3[e4.url] || r3[e4.url] < i2;
            return t3 ? (r3[e4.url] = 1 + ~~r3[e4.url], R[n2] = r3) : O[n2] || Se(n2), t3;
          })).length && t2(o2) : !r3[e3.url] || r3[e3.url] < i2 ? (r3[e3.url] = 1 + ~~r3[e3.url], R[n2] = r3, t2(e3)) : O[n2] || Se(n2));
        }), m(u2), function(t2, n2) {
          i("getNetworkType") ? g.getNetworkType({ success: function(e3) {
            e3 = ue(e3.networkType);
            r2.extendBean("netType", e3), n2(t2);
          } }) : n2(t2);
        }, function(e3, t2) {
          u2.lifeCycle.emit("beforeReportSpeed", e3);
          var n2 = u2.config.beforeReportSpeed;
          if ((e3 = "function" == typeof n2 ? e3.filter(function(e4) {
            return false !== n2(e4);
          }) : e3).length) return t2(e3);
        }, re(r2 = u2, b.SPEED), function(e3, t2) {
          t2(e3.map(function(e4) {
            return void 0 !== e4.payload && delete e4.payload, e4;
          }));
        }, function(e3) {
          var t2, n2, r3, o2;
          u2.send({ url: "" + u2.config.speedUrl, method: "post", data: (e3 = e3, t2 = u2.bean, r3 = { fetch: [], static: [], bridge: [] }, o2 = {}, Array.isArray(e3) ? e3.forEach(function(e4) {
            var t3;
            null != (t3 = r3[e4.type]) && t3.push(e4);
          }) : null != (n2 = r3[e3.type]) && n2.push(e3), o2.payload = JSON.stringify(p({ duration: r3 }, t2)), o2) });
        }]), u2.request = function(e3, t2, n2) {
          e3.url && u2.bean.id && (!/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(String(u2.bean.aid)) || i("getNetworkType") && void 0 === u2.bean.netType ? u2.requestSchedule.addTask({ options: e3, success: t2, fail: n2 }) : (u2.requestSchedule.addTask({ options: e3, success: t2, fail: n2 }), u2.requestSchedule.fireTask()));
        }, u2.sendRequest = function(e3, t2, n2) {
          var r3, o2, i2, a3 = e3.url, s2 = (u2.config.whiteListUrl === a3 && (r3 = t2, t2 = function(e4) {
            null != r3 && r3(JSON.stringify(e4.data));
          }), e3.method), s2 = void 0 === s2 ? "get" : s2, l2 = (false !== e3.addBean && (a3 = a3 + (-1 === (null == a3 ? void 0 : a3.indexOf("?")) ? "?" : "&") + u2.getBean), e3), c2 = u2.config.onBeforeRequest;
          return (l2 = c2 ? c2(e3, u2) : l2) && l2.url ? (c2 = u2.config.enableHttp2 || false, "get" === s2 ? (s2 = a3, o2 = l2.data, a3 = "string" != typeof s2 ? "" : "object" == typeof o2 && o2 ? (i2 = Object.getOwnPropertyNames(o2).map(function(e4) {
            var t3 = o2[e4];
            return e4 + "=" + ("string" == typeof t3 ? encodeURIComponent(t3) : encodeURIComponent(JSON.stringify(t3)));
          }).join("&").replace(/eval/gi, "evaI"), s2 + (-1 === s2.indexOf("?") ? "?" : "&") + i2) : s2, u2.originRequest(p({ url: a3, enableHttp2: c2, success: t2, fail: n2, complete: u2.requestSchedule.complete }, e3.requestConfig))) : ("string" == typeof l2.data && (l2.data = l2.data.replace(/eval/gi, "evaI")), u2.originRequest(p({ url: a3, enableHttp2: c2, header: l2.contentType ? { "content-type": l2.contentType } : void 0, method: "POST", data: l2.data, success: t2, fail: n2, complete: u2.requestSchedule.complete }, e3.requestConfig))), true) : (i2 = "", l2 && l2.url || (i2 = "Sending request blocked. Please handle the parameters reasonably, options.url is necessary", console.log(i2)), null != n2 && n2(i2), u2.requestSchedule.complete(), false);
        };
        try {
          u2.initRequestSchedule(), u2.init(e2), u2.extendBean("sessionId", N.sessionID), u2.extendBean("referer", (i("getLaunchOptionsSync") ? g.getLaunchOptionsSync() : { scene: "" }).scene || "");
        } catch (e3) {
          console.warn(e3), console.log("%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.\nIt is recommended that you contact us for feedback and thank you for your support.", "color: red"), u2.sendSDKError(e3);
        }
        return u2;
      }
      function A(e2) {
        this.aegisPlugin = true, this.name = "", this.instances = [], this.inited = false, e2.$walk = this.walk.bind(this), e2.$getConfig = this.getConfig.bind(this), this.option = e2, this.name = e2.name;
      }
      function L(e2) {
        var n2, t2, r2, o2, a2, i2, s2, l2, c2, u2, f2, p2, d2, h2, g2 = this;
        this.isGetSample = false, this.isHidden = false, this.config = { version: 0, delay: 1e3, onError: true, repeat: 60, random: 1, aid: true, device: true, pagePerformance: true, webVitals: true, speedSample: true, onClose: true, reportLoadPackageSpeed: true, hostUrl: "https://aegis.qq.com", env: "production", url: "", offlineUrl: "", whiteListUrl: "", pvUrl: "", speedUrl: "", customTimeUrl: "", performanceUrl: "", performanceUrlForHippy: "", webVitalsUrl: "", eventUrl: "", setDataReportUrl: "", reportImmediately: true }, this.isWhiteList = false, this.lifeCycle = new B(), this.bean = {}, this.normalLogPipeline = y([m(this, 5), ne, function(e3, t3) {
          var r3 = n2.config;
          t3(e3 = e3.map(function(e4) {
            var t4, n3 = r3.maxLength || 102400;
            try {
              if (!e4.msg || e4.msg.length <= n3) return e4;
              e4.msg = null == (t4 = e4.msg) ? void 0 : t4.substring(0, n3);
            } catch (t5) {
              e4.msg = E(e4.msg).substring(0, r3.maxLength);
            }
            return e4;
          }));
        }, (h2 = (n2 = this).config, function(e3, t3) {
          var n3 = "number" == typeof h2.repeat ? h2.repeat : 60;
          if (n3 <= 0) return t3(e3);
          var r3 = (null == h2 ? void 0 : h2.id) + "_error", o3 = R[r3] || {};
          t3(e3.filter(function(e4) {
            if (e4.level === v.ERROR || e4.level === v.PROMISE_ERROR || e4.level === v.AJAX_ERROR || e4.level === v.SCRIPT_ERROR || e4.level === v.IMAGE_ERROR || e4.level === v.CSS_ERROR || e4.level === v.MEDIA_ERROR || e4.level === v.RET_ERROR || e4.level === v.BRIDGE_ERROR || e4.level === v.PAGE_NOT_FOUND_ERROR || e4.level === v.WEBSOCKET_ERROR || e4.level === v.LAZY_LOAD_ERROR) {
              e4 = e4.msg.slice(0, 200);
              if (o3[e4] > n3) return O[r3] || Se(r3), false;
              o3[e4] = 1 + ~~o3[e4], R[r3] = o3;
            }
            return true;
          }));
        }), (p2 = this.lifeCycle.emit, d2 = this.config, function(e3, t3) {
          var n3, r3 = d2.logCreated;
          return "function" == typeof r3 ? (n3 = e3.filter(function(e4) {
            return false !== r3(e4);
          }), p2("beforeWrite", n3), t3(n3)) : (p2("beforeWrite", e3), t3(e3));
        }), (f2 = this, setTimeout(function() {
          var e3 = f2.config, t3 = e3.pvUrl, n3 = void 0 === t3 ? "" : t3, t3 = e3.spa, e3 = -1 < ["web-sdk", "mp-sdk"].indexOf("mp-sdk");
          n3 && (e3 && !t3 || !e3) && f2.sendPipeline([function(e4, t4) {
            t4({ url: n3, type: b.PV });
          }], b.PV)(null);
        }, 100), function(e3, t3) {
          t3(e3);
        }), (c2 = l2 = s2 = false, u2 = [], (a2 = this).lifeCycle.on("onConfigChange", function() {
          i2 && clearTimeout(i2), i2 = setTimeout(function() {
            var e3, n3;
            !c2 && a2.config && (c2 = true, e3 = a2.config.whiteListUrl, (n3 = void 0 === e3 ? "" : e3) && a2.sendPipeline([function(e4, t3) {
              t3({ url: n3, type: b.WHITE_LIST, success: function(e5) {
                l2 = true;
                try {
                  var t4 = e5.data || JSON.parse(e5), n4 = t4.retcode, r3 = t4.result, o3 = void 0 === r3 ? {} : r3, i3 = (0 === n4 && (s2 = o3.is_in_white_list, a2.isWhiteList = s2, 0 <= o3.rate) && o3.rate <= 1 && (a2.config.random = o3.rate, a2.isGetSample = false), a2.isWhiteList && u2.length ? Pe(a2)(u2.splice(0), function() {
                  }) : !a2.isWhiteList && u2.length && (u2.length = 0), a2.config.onWhitelist);
                  "function" == typeof i3 && i3(s2);
                } catch (e6) {
                }
              }, fail: function() {
                l2 = true;
              } });
            }], b.WHITE_LIST)(null), c2 = false);
          }, a2.config.uin ? 50 : 500);
        }), a2.lifeCycle.on("destroy", function() {
          u2.length = 0;
        }), function(e3, t3) {
          var n3;
          s2 || null != (n3 = null == (n3 = a2.config) ? void 0 : n3.api) && n3.reportRequest ? t3(e3.concat(u2.splice(0)).map(function(e4) {
            return xe(e4), e4;
          })) : (n3 = e3.filter(function(e4) {
            return e4.level !== v.INFO && e4.level !== v.API_RESPONSE ? (xe(e4), true) : (l2 || (u2.push(e4), 200 <= u2.length && (u2.length = 200)), false);
          })).length && t3(n3);
        }), function(e3, t3) {
          try {
            var n3 = JSON.parse(JSON.stringify(e3)), r3 = (g2.lifeCycle.emit("beforeReport", n3), g2.config.beforeReport);
            (e3 = "function" == typeof r3 ? e3.filter(function(e4) {
              return false !== r3(e4);
            }) : e3).length && t3(e3);
          } catch (e4) {
          }
        }, Pe(this)]), this.eventPipeline = y([m(this, 10), (o2 = this, function(e3) {
          o2.sendPipeline([function(e4, t3) {
            var n3 = e4.map(function(e5) {
              return { name: e5.name, ext1: e5.ext1 || o2.config.ext1 || "", ext2: e5.ext2 || o2.config.ext2 || "", ext3: e5.ext3 || o2.config.ext3 || "" };
            });
            t3({ url: o2.config.eventUrl + "?payload=" + encodeURIComponent(JSON.stringify(n3)), type: b.EVENT, log: e4 });
          }], b.EVENT)(e3);
        })]), this.customTimePipeline = y([m(this, 10), (r2 = this, function(e3) {
          return r2.sendPipeline([function(e4, t3) {
            t3({ url: r2.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({ custom: e4 })), type: b.CUSTOM, log: e4 });
          }], b.CUSTOM)(e3);
        })]), this.timeMap = {}, this.failRequestCount = 0, this.config = (t2 = this.config, void 0 === (e2 = e2.hostUrl) && (e2 = "https://aegis.qq.com"), t2.url = t2.url || e2 + "/collect", t2.offlineUrl = t2.offlineUrl || e2 + "/offline", t2.whiteListUrl = t2.whiteListUrl || e2 + "/collect/whitelist", t2.pvUrl = t2.pvUrl || e2 + "/collect/pv", t2.eventUrl = t2.eventUrl || e2 + "/collect/events", t2.speedUrl = t2.speedUrl || e2 + "/speed", t2.customTimeUrl = t2.customTimeUrl || e2 + "/speed/custom", t2.performanceUrl = t2.performanceUrl || e2 + "/speed/performance", t2.performanceUrlForHippy = t2.performanceUrlForHippy || e2 + "/speed/hippyPerformance", t2.webVitalsUrl = t2.webVitalsUrl || e2 + "/speed/webvitals", t2.setDataReportUrl = t2.SetDataReportUrl || e2 + "/speed/miniProgramData", t2), L.instances.push(this);
      }
      function _e() {
        return null !== me && me.apply(this, arguments) || this;
      }
      e(_e, me = w), _e.prototype.defineApiProperty = function() {
        var e2 = this;
        Object.defineProperty(je, "request", { get: function() {
          return e2.hackHandler.bind(e2);
        } });
      };
      function q(r2, e2, o2) {
        return null != e2 && e2.length && "object" == typeof r2 ? e2.reduce(function(e3, t2) {
          var n2 = r2[t2];
          return n2 ? e3 + ("" === e3 ? "\n" : "\n\n") + o2 + " header " + t2 + ": " + n2 : e3;
        }, "") : "";
      }
      var U, Me, De = new f({ name: "reportApiSpeed", override: !(_e.prototype.hackHandler = function(e2) {
        var t2 = this, n2 = this.prefixHandler(e2);
        return this.onStartHandler(n2), He(p(p({}, n2), { success: function(e3) {
          t2.successHandler(e3, n2);
        }, fail: function(e3) {
          t2.failHandler(e3, n2);
        }, complete: function(e3) {
          t2.completeHandler(e3, n2);
        } }));
      }), onNewAegis: function(e2) {
        var t2, n2;
        this.override || (null != (n2 = (e2.config || {}).api) && n2.injectTraceHeader && (this.traceRequestHeader = new Z(n2.injectTraceHeader, null != (t2 = null == n2 ? void 0 : n2.injectTraceIgnoreUrls) ? t2 : [], null == n2 ? void 0 : n2.injectTraceUrls)), this.override = true, this.hackRequest(e2.config), this.overrideCallFunction(e2.config), this.overrideCallContainer(e2.config));
      }, hackRequest: function(u2) {
        var f2 = this;
        pe({ apiName: "request", onStart: function(e2) {
          var t2 = ((null == u2 ? void 0 : u2.api) || {}).injectTraceHeader, n2 = (e2 || {}).url;
          t2 && (t2 = { host: ((t2 = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(t2 = n2) || [])[1], t2[2], [t2[3], t2[4], t2[5]][0]), pathname: (t2 = getCurrentPages()).length ? t2[t2.length - 1].route : "" }, t2 = (n2 = f2.traceRequestHeader.generate(n2, {}, { host: t2.host, pathname: t2.pathname }) || {}).name, n2 = n2.value, t2) && n2 && e2 && (e2.header = p(p({}, e2.header), ((e2 = {})[t2] = n2, e2)));
        }, success: function(e2, t2) {
          var n2, r2, o2, i2, a2, s2, l2, c2;
          h(t2.url, u2.hostUrl) || (n2 = { method: t2.method || "get", url: X(t2.url), duration: Date.now() - t2.aegisRequestStartTime, status: e2.statusCode || 0, nextHopProtocol: "", isHttps: ee(t2.url), type: "fetch" }, i2 = null == (i2 = u2.api) ? void 0 : i2.apiDetail, r2 = (o2 = te(e2.data, u2.api, { url: t2.url, ctx: e2, payload: t2.data }) || {}).code, o2 = o2.isErr, c2 = i2 ? d(t2.data, null == (c2 = u2.api) ? void 0 : c2.reqParamHandler, { url: t2.url }) : "", i2 = i2 ? d(e2.data, null == (i2 = u2.api) ? void 0 : i2.resBodyHandler, { url: t2.url }) : "", a2 = (null == (a2 = u2.api) ? void 0 : a2.reqHeaders) || [], a2 = q(null == t2 ? void 0 : t2.header, a2, "req"), s2 = (null == (s2 = u2.api) ? void 0 : s2.resHeaders) || [], s2 = q(null == e2 ? void 0 : e2.header, s2, "res"), l2 = K(null == t2 ? void 0 : t2.header), c2 = "req url: " + n2.url + " \n                        \nres status: " + (e2.statusCode || 0) + " \n                        \nres duration: " + n2.duration + "ms \n                        \nreq method: " + n2.method + " \n                        \nreq param: " + c2 + "  \n                        \nres retcode: " + r2 + " \n                        \nres data: " + i2 + "\n                        " + a2 + "\n                        " + s2, n2.ret = r2, n2.isErr = +o2, n2.payload = t2.data, f2.publishNormalLog({ msg: c2, level: o2 ? v.RET_ERROR : v.API_RESPONSE, ctx: e2, trace: l2 }), f2.publishSpeedLog(n2));
        }, fail: function(e2, t2) {
          h(t2.url, u2.hostUrl) || (t2 = { method: t2.method || "get", url: X(t2.url), duration: Date.now() - t2.aegisRequestStartTime, status: 0, nextHopProtocol: "", isHttps: ee(t2.url), type: "fetch" }, f2.publishSpeedLog(t2));
        } });
      }, overrideCallFunction: function(n2) {
        var r2 = this;
        fe({ apiName: "callFunction", success: function(e2, t2) {
          r2.cloudSuccessCallback(n2, t2, e2, "callFunction");
        }, fail: function(e2, t2) {
          t2 = { method: "call", url: "wx.cloud.callFunction." + t2.name, duration: Date.now() - t2.aegisRequestStartTime, status: 0, nextHopProtocol: "", type: "fetch", errMsg: e2.errMsg, isHttps: true };
          r2.publishSpeedLog(t2);
        } });
      }, overrideCallContainer: function(n2) {
        var r2 = this;
        fe({ apiName: "callContainer", success: function(e2, t2) {
          r2.cloudSuccessCallback(n2, t2, e2, "callContainer");
        }, fail: function(e2, t2) {
          t2 = { method: "call", url: "wx.cloud.callContainer." + t2.path, duration: Date.now() - t2.aegisRequestStartTime, status: 0, nextHopProtocol: "", type: "fetch", errMsg: e2.errMsg, isHttps: true };
          r2.publishSpeedLog(t2);
        } });
      }, cloudSuccessCallback: function(e2, n2, t2, r2) {
        var o2 = "callFunction" === r2 ? n2.name : n2.path, i2 = "callFunction" === r2 ? t2.result : t2.data, o2 = { method: "call", url: "wx.cloud." + r2 + "." + o2, duration: Date.now() - n2.aegisRequestStartTime, status: 200, nextHopProtocol: "", type: "fetch", isHttps: true }, a2 = ["apiName", "aegisRequestStartTime", "config", "success", "fail", "complete"], s2 = Object.keys(n2).reduce(function(e3, t3) {
          return a2.includes(t3) || (e3[t3] = n2[t3]), e3;
        }, {}), r2 = "callFunction" === r2 ? (null == (r2 = t2.data) ? void 0 : r2.code) || 0 : t2.statusCode, l2 = te(i2, e2.api, { url: o2.url, ctx: t2, payload: s2 }) || {}, c2 = l2.code, l2 = l2.isErr, l2 = void 0 !== l2 && l2, c2 = (o2.ret = c2, o2.isErr = +l2, o2.payload = s2, null == (c2 = e2.api) ? void 0 : c2.apiDetail), s2 = c2 ? d(s2, null == (s2 = e2.api) ? void 0 : s2.reqParamHandler, { url: o2.url }) : "", i2 = c2 ? d(i2, null == (c2 = e2.api) ? void 0 : c2.resBodyHandler, { url: o2.url }) : "", c2 = (null == (c2 = e2.api) ? void 0 : c2.reqHeaders) || [], c2 = q(null == n2 ? void 0 : n2.header, c2, "req"), e2 = (null == (e2 = e2.api) ? void 0 : e2.resHeaders) || [], e2 = q(null == t2 ? void 0 : t2.header, e2, "res"), u2 = K(null == n2 ? void 0 : n2.header), r2 = "req url: " + o2.url + "\n                    \nres status: " + r2 + "\n                    \nres duration: " + o2.duration + "ms \n                    \nreq type: " + o2.type + "\n                    \nreq params: " + s2 + "\n                    \nres retcode: " + o2.ret + "\n                    \nres data: " + i2 + "\n                    " + c2 + "\n                    " + e2;
        this.publishNormalLog({ msg: r2, level: l2 ? v.RET_ERROR : v.API_RESPONSE, ctx: t2, trace: u2 }), this.publishSpeedLog(o2);
      }, publishSpeedLog: function(t2) {
        this.$walk(function(e2) {
          e2.speedLogPipeline(t2);
        });
      }, publishNormalLog: function(t2) {
        this.$walk(function(e2) {
          e2.normalLogPipeline(t2);
        });
      } }), Fe = wx || qq, Be = Fe.connectSocket, We = (Ke.prototype.addConfig = function(e2) {
        var t2 = e2.send, e2 = e2.onError;
        t2 && this.sends.push(t2), e2 && this.onErrors.push(e2);
      }, Ke.prototype.toHack = function(t2) {
        var o2 = this, n2 = (this.onErrors.forEach(function(e2) {
          t2.onError(e2);
        }), t2.send);
        return Object.defineProperty(t2, "send", { get: function() {
          return function(r2) {
            return new Promise(function(e2) {
              n2.call(t2, p(p({}, r2), { fail: function(n3) {
                o2.sends.forEach(function(e3) {
                  var t3;
                  null != (t3 = e3.fail) && t3.call(e3, n3, r2);
                }), e2(n3);
              } }));
            });
          };
        } }), t2;
      }, Ke), Ve = (e(I, Me = w), I.prototype.addTaskConf = function(e2) {
        this.taskHack.addConfig(e2);
      }, I.prototype.defineApiProperty = function() {
        var e2 = this;
        Object.defineProperty(Fe, "connectSocket", { get: function() {
          return e2.hackHandler.bind(e2);
        } });
      }, I.prototype.hackHandler = function(e2) {
        var t2 = this, n2 = this.prefixHandler(e2), e2 = Be(p(p({}, n2), { success: function(e3) {
          t2.successHandler(e3, n2);
        }, fail: function(e3) {
          t2.failHandler(e3, n2);
        }, complete: function(e3) {
          t2.completeHandler(e3, n2);
        } }));
        return this.taskHack.toHack(e2), e2;
      }, I), w = new f({ name: "onError", onNewAegis: function(e2) {
        var t2 = g.getSystemInfoSync().SDKVersion;
        this.listenError(), this.hackNetWork(e2), this.hackCloud(e2), e2.config.websocketHack && le(t2, "1.7.0") && this.hackWsConnect();
      }, listenError: function() {
        var n2 = this;
        "function" == typeof g.onError && g.onError(function(e2) {
          e2 && n2.publishErrorLog({ msg: e2, level: v.ERROR });
        }), i("onUnhandledRejection") && g.onUnhandledRejection(function(e2) {
          var t2, e2 = e2.reason;
          !e2 || -1 < JSON.stringify(e2).indexOf("request:fail") || n2.publishErrorLog({ msg: e2, errorMsg: null == (t2 = null == (e2 = (null == e2 ? void 0 : e2.message) || (null == e2 ? void 0 : e2.errMsg) || E(e2)) ? void 0 : e2.slice) ? void 0 : t2.call(e2, 0, 150), level: v.PROMISE_ERROR });
        }), i("onPageNotFound") && g.onPageNotFound(function(e2) {
          e2 && n2.publishErrorLog({ msg: e2, level: v.PAGE_NOT_FOUND_ERROR });
        }), i("onLazyLoadError") && g.onLazyLoadError(function(e2) {
          e2 && n2.publishErrorLog({ msg: e2, level: v.LAZY_LOAD_ERROR });
        });
      }, publishErrorLog: function(t2) {
        this.$walk(function(e2) {
          e2.normalLogPipeline(t2);
        });
      }, hackNetWork: function(e2) {
        for (var n2 = this, r2 = e2.config, t2 = 0, o2 = [{ apiName: "request", complete: function(e3, t3) {
          return n2.requestCompleteError(e3, t3, r2);
        } }, { apiName: "uploadFile", complete: function(e3, t3) {
          return n2.uploadFileCompleteError(e3, t3, r2);
        } }, { apiName: "downloadFile", complete: function(e3, t3) {
          return n2.downloadFileCompleteError(e3, t3, r2);
        } }]; t2 < o2.length; t2++) {
          var i2 = o2[t2], a2 = i2.apiName, i2 = i2.complete;
          pe({ apiName: a2, complete: i2 });
        }
      }, requestCompleteError: function(e2, t2, n2) {
        var r2 = e2.errMsg, o2 = e2.statusCode;
        h(t2.url, n2.hostUrl) || (r2 = this.getErrorType({ errMsg: r2, statusCode: o2 })) && this.publishNetWorkError({ apiName: "request", opts: t2, res: e2, config: n2, type: r2 });
      }, downloadFileCompleteError: function(e2, t2, n2) {
        var r2 = e2.errMsg, o2 = e2.statusCode, i2 = e2.filePath, a2 = e2.tempFilePath, r2 = this.getErrorType({ errMsg: r2, statusCode: o2 });
        r2 && this.publishNetWorkError({ apiName: "downloadFile", opts: t2, res: e2, config: n2, type: r2 }, { extraInfo: "\nres filePath: " + i2 + "\nres tempFilePath: " + a2 });
      }, uploadFileCompleteError: function(e2, t2, n2) {
        var r2 = e2.errMsg, o2 = e2.statusCode, r2 = this.getErrorType({ errMsg: r2, statusCode: o2 });
        r2 && this.publishNetWorkError({ apiName: "uploadFile", opts: t2, res: e2, config: n2, type: r2 });
      }, hackCloud: function(e2) {
        for (var n2 = this, r2 = e2.config, t2 = 0, o2 = [{ apiName: "callFunction", complete: function(e3, t3) {
          return n2.callFunctionCompleteError(e3, t3, r2);
        } }, { apiName: "callContainer", complete: function(e3, t3) {
          return n2.callContainerCompleteError(e3, t3, r2);
        } }]; t2 < o2.length; t2++) {
          var i2 = o2[t2], a2 = i2.apiName, i2 = i2.complete;
          fe({ apiName: a2, complete: i2 });
        }
      }, callFunctionCompleteError: function(e2, t2, n2) {
        var r2 = e2.errMsg, r2 = this.getErrorType({ errMsg: r2 });
        r2 && this.publishNetWorkError({ apiName: "cloud.callFunction", opts: t2, res: e2, config: n2, type: r2 });
      }, callContainerCompleteError: function(e2, t2, n2) {
        var r2 = e2.errMsg, o2 = e2.statusCode, r2 = this.getErrorType({ errMsg: r2, statusCode: o2 });
        r2 && this.publishNetWorkError({ apiName: "cloud.callContainer", opts: t2, res: e2, config: n2, type: r2 });
      }, publishNetWorkError: function(e2, t2) {
        var t2 = (null == t2 ? void 0 : t2.extraInfo) || "", n2 = e2.apiName, r2 = e2.opts, o2 = e2.res, i2 = e2.config, e2 = e2.type, a2 = o2.errMsg, s2 = o2.statusCode, l2 = o2.data, c2 = r2.url, u2 = te(l2, i2.api, { url: c2, ctx: o2, payload: r2.data }).code, f2 = null == (f2 = i2.api) ? void 0 : f2.apiDetail, p2 = f2 ? d(r2.data, null == (p2 = i2.api) ? void 0 : p2.reqParamHandler, { url: c2 }) : "", l2 = f2 ? d(l2, null == (f2 = i2.api) ? void 0 : f2.resBodyHandler, { url: c2 }) : "", c2 = (null == (f2 = i2.api) ? void 0 : f2.reqHeaders) || [], f2 = q(null == r2 ? void 0 : r2.header, c2, "req"), i2 = (null == (c2 = i2.api) ? void 0 : c2.resHeaders) || [], c2 = q(null == o2 ? void 0 : o2.header, i2, "res"), o2 = K(null == r2 ? void 0 : r2.header);
        this.publishErrorLog({ msg: "AJAX_ERROR: " + n2 + " " + e2 + "\n                  \nreq url: " + r2.url + "\n                  \nres status: " + (s2 || 0) + "\n                  \nres duration: " + (Date.now() - r2.aegisRequestStartTime) + "ms\n                  \nreq method: " + (r2.method || "get") + "\n                  \nreq param: " + p2 + "\n                  \nres retcode: " + u2 + "\n                  \nres data: " + l2 + "\n                  \nerrMsg: " + a2.slice(0, 1e3) + "\n                  " + t2 + "\n                  " + f2 + "\n                  " + c2, level: v.AJAX_ERROR, trace: o2 });
      }, getErrorType: function(e2) {
        var t2 = e2.errMsg, e2 = e2.statusCode, n2 = "", r2 = t2;
        return ["timeout", "time out", "ERR_CONNECTION_TIMED_OUT", "ERR_TIMED_OUT", "\u8D85\u65F6"].some(function(e3) {
          return String(r2 || "").includes(e3);
        }) ? n2 = "timeout" : 400 <= e2 ? n2 = "error" : (-1 < t2.indexOf("fail") || !e2 || e2 < 0) && (n2 = "failed"), n2;
      }, hackWsConnect: function() {
        var e2, t2, n2 = this;
        pe({ apiName: "sendSocketMessage", fail: function(e3) {
          n2.publishSocketError(e3);
        } }), e2 = (t2 = { connectCallback: { fail: function(e3) {
          n2.publishSocketError(e3);
        } }, taskOpt: { onError: function(e3) {
          n2.publishSocketError(e3);
        }, send: { fail: function(e3) {
          n2.publishSocketError(e3);
        } } } }).connectCallback, t2 = t2.taskOpt, U ? U.addCallback(e2) : U = new Ve(e2), t2 && U.addTaskConf(t2);
      }, publishSocketError: function(e2) {
        e2 && this.publishErrorLog({ msg: e2.errMsg, level: v.WEBSOCKET_ERROR });
      } }), Ge = new f({ name: "reportAssetSpeed", isStart: false, onNewAegis: function(e2) {
        this.isStart || (this.isStart = true, this.start(e2));
      }, start: function(t2) {
        var e2, n2 = this;
        g.getPerformance && "function" == typeof (e2 = g.getPerformance()).createObserver && e2.createObserver(function(e3) {
          e3 = e3.getEntries();
          null != e3 && e3.forEach(function(e4) {
            h(e4.uri, t2.config.hostUrl) || "number" != typeof e4.duration || e4.duration <= 0 || n2.publishAssetLog(e4);
          });
        }).observe({ entryTypes: ["resource"] });
      }, generateLog: function(e2) {
        var t2, n2, r2 = e2.transferSize;
        return { url: (t2 = e2.uri, void 0 === n2 && (n2 = 2048), String(t2).replace(M, "").slice(0, n2)), method: "get", duration: Math.round(100 * e2.duration) / 100, status: 200, type: "static", isHttps: true, urlQuery: X(e2.uri, true), nextHopProtocol: "", domainLookup: 0, connectTime: 0, transferSize: 0 < r2 ? r2 : -1 };
      }, publishAssetLog: function(t2) {
        var n2 = this;
        this.$walk(function(e2) {
          e2.speedLogPipeline(n2.generateLog(t2));
        });
      } }), Je = ["onLaunch", "onHide", "onError", "onLoad", "onReady", "onShow", "onUnload"], ze = new f({ name: "pagePerformance", pageNavigationStartTime: {}, onNewAegis: function(e2) {
        try {
          i("getPerformance") && this.reportPerformance(e2), this.setPagePV(e2), this.reportSetDataTiming(e2);
        } catch (e3) {
        }
      }, reportPerformance: function(f2) {
        var p2 = this, e2 = g.getPerformance();
        "function" == typeof e2.createObserver && null != (e2 = null == e2 ? void 0 : e2.createObserver(function(e3) {
          var t2 = {}, n2 = null == (n2 = e3.getEntriesByName("appLaunch")) ? void 0 : n2[0], r2 = null == (r2 = e3.getEntriesByName("firstRender")) ? void 0 : r2[0], o2 = null == (o2 = e3.getEntriesByName("evaluateScript")) ? void 0 : o2[0], i2 = null == (i2 = e3.getEntriesByName("route")) ? void 0 : i2[0], a2 = null == (a2 = null == (a2 = e3.getEntriesByName("firstPaint")) ? void 0 : a2[0]) ? void 0 : a2.startTime, s2 = null == (s2 = null == (s2 = e3.getEntriesByName("largestContentfulPaint")) ? void 0 : s2[0]) ? void 0 : s2.startTime, l2 = null == (l2 = null == (l2 = e3.getEntriesByName("firstContentfulPaint")) ? void 0 : l2[0]) ? void 0 : l2.startTime, c2 = null == (c2 = (null == (c2 = e3.getEntriesByName("firstPaint")) ? void 0 : c2[0]) || (null == (c2 = e3.getEntriesByName("route")) ? void 0 : c2[0]) || (null == (c2 = e3.getEntriesByName("appLaunch")) ? void 0 : c2[0])) ? void 0 : c2.pageId, u2 = null == (e3 = (null == (u2 = e3.getEntriesByName("route")) ? void 0 : u2[0]) || (null == (u2 = e3.getEntriesByName("appLaunch")) ? void 0 : u2[0])) ? void 0 : e3.startTime;
          c2 && (p2.pageNavigationStartTime[c2] = null, u2) && (p2.pageNavigationStartTime[c2] = u2), n2 && (t2.appLaunch = n2.duration || -1), r2 && (t2.firstScreenTiming = r2.duration || -1), o2 && (t2.scriptEvaluateTiming = o2.duration || -1), i2 && (t2.pageRouteTiming = i2.duration || -1), a2 && u2 ? t2.firstPaintTiming = Math.max(a2 - u2, -1) : a2 && p2.pageNavigationStartTime[c2] && (t2.firstPaintTiming = Math.max(a2 - p2.pageNavigationStartTime[c2], -1)), s2 && u2 ? t2.LCP = Math.max(s2 - u2, -1) : s2 && p2.pageNavigationStartTime[c2] && (t2.LCP = Math.max(s2 - p2.pageNavigationStartTime[c2], -1)), l2 && u2 ? t2.FCP = Math.max(l2 - u2, -1) : l2 && p2.pageNavigationStartTime[c2] && (t2.FCP = Math.max(l2 - p2.pageNavigationStartTime[c2], -1)), 0 < Object.keys(t2).length && p2.publish(t2, f2);
        })) && e2.observe({ entryTypes: ["navigation", "render", "script"] });
      }, publish: function(t2, n2) {
        var e2, r2, o2, i2 = [], a2 = n2.config, s2 = -1 === (null == (e2 = n2.config.performanceUrl) ? void 0 : e2.indexOf("?")) ? "?" : "&";
        for (r2 in t2) i2.push(r2 + "=" + t2[r2]);
        "function" == typeof a2.urlHandler ? (o2 = a2.urlHandler() || window.location.href, this.$walk(function(e3) {
          e3.send({ url: n2.config.performanceUrl + s2 + i2.join("&") + "&from=" + encodeURIComponent(o2), beanFilter: ["from"], type: b.PERFORMANCE, log: t2 });
        })) : this.$walk(function(e3) {
          e3.send({ url: n2.config.performanceUrl + s2 + i2.join("&"), type: b.PERFORMANCE, log: t2 });
        });
      }, setPagePV: function(t2) {
        var n2 = this;
        g.onAppRoute && g.onAppRoute(function(e2) {
          "appLaunch" === e2.openType && !t2.config.spa || (n2.$walk(function(e3) {
            e3.send({ url: "" + e3.config.pvUrl, type: b.PV });
          }), n2.reportPageLoaded(e2));
        });
      }, reportPageLoaded: function(e2) {
        e2 = "infoType: behaviorBacktracking\ndataType: pageLoadAndRoute\npageLoadedPath: " + e2.path + "\nopenType: " + e2.openType;
        this.publishNormalLog({ msg: e2, level: v.INFO });
      }, publishNormalLog: function(t2) {
        this.$walk(function(e2) {
          e2.normalLogPipeline(t2);
        });
      }, reportSetDataTiming: function(t2) {
        var e2, o2, s2, l2, n2, i2, a2, c2, u2 = this, r2 = t2.config.setDataReportConfig, r2 = void 0 === r2 ? {} : r2;
        true !== r2.disabled && (e2 = r2.timeThreshold, o2 = false !== r2.withDataPaths, s2 = e2 && 0 < +e2 ? +e2 : 30, l2 = y([m(t2, 10), function(e3) {
          e3 = e3.map(function(e4) {
            return { type: b.SET_DATA, component: e4.from, duration: e4.duration, fields: e4.dataPaths && e4.dataPaths.length ? e4.dataPaths.sort().join(";") : void 0, size: e4.size };
          });
          t2.send({ url: t2.config.setDataReportUrl + "?payload=" + encodeURIComponent(JSON.stringify({ miniProgramData: e3 })), type: b.SET_DATA, log: e3 });
        }]), n2 = Page, i2 = Component, a2 = function(e3, t3) {
          var i3, a3, n3 = t3.updateStartTimestamp, r3 = t3.updateEndTimestamp, t3 = t3.dataPaths, t3 = void 0 === t3 ? [] : t3, r3 = r3 - n3;
          isNaN(r3) || r3 < s2 || (n3 = { from: e3.is, duration: r3 }, o2 && 0 < t3.length && Object.assign(n3, { dataPaths: t3.slice(0, 30), size: (r3 = t3, a3 = 0, null != (i3 = e3) && i3.data ? (r3.forEach(function(e4) {
            for (var t4 = i3.data[e4[0]], n4 = 1, r4 = e4.length; n4 < r4; n4++) t4[e4[n4]] && (t4 = t4[e4[n4]]);
            var o3 = "";
            try {
              o3 = JSON.stringify(t4);
            } catch (e5) {
              o3 = "";
            }
            a3 += 2 * (void 0 === o3 ? "" : o3).replace(/[\u4e00-\u9fa5]/g, "aa").length;
          }), a3 = Math.min(a3, 10485760)) : a3) }), l2(n3));
        }, c2 = function(r3) {
          var e3 = "infoType: behaviorBacktracking\ndataType: tapEvent" + Object.keys(r3[0]).reduce(function(e4, t3) {
            var n3 = "";
            try {
              n3 = t3 + ": " + JSON.stringify(r3[0][t3]);
            } catch (e5) {
              n3 = "";
            }
            return e4 + "\n" + n3;
          }, "");
          u2.publishNormalLog({ msg: e3, level: v.INFO });
        }, Page = function(t3) {
          var e3 = t3.onReady;
          return t3.onReady = function() {
            var t4 = this;
            return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({ withDataPaths: o2 }, function(e4) {
              a2(t4, e4);
            }), null == e3 ? void 0 : e3.call(this);
          }, Object.keys(t3).forEach(function(e4) {
            var n3;
            "function" != typeof t3[e4] || Je.includes(e4) || (n3 = t3[e4], t3[e4] = function() {
              for (var e5 = [], t4 = 0; t4 < arguments.length; t4++) e5[t4] = arguments[t4];
              return null != e5 && e5[0] && "tap" === e5[0].type && c2(e5), null == n3 ? void 0 : n3.apply(this, e5);
            });
          }), n2(t3);
        }, Component = function(e3) {
          e3.lifetimes && e3.lifetimes.attached ? (n3 = e3.lifetimes.attached, e3.lifetimes.attached = function() {
            var t4 = this;
            return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({ withDataPaths: o2 }, function(e4) {
              a2(t4, e4);
            }), null == n3 ? void 0 : n3.call(this);
          }) : (r3 = e3.attached, e3.attached = function() {
            var t4 = this;
            return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({ withDataPaths: o2 }, function(e4) {
              a2(t4, e4);
            }), null == r3 ? void 0 : r3.call(this);
          });
          var n3, r3, t3 = e3.methods;
          return t3 && "[object Object]" === Object.prototype.toString.call(t3) && Object.keys(t3).forEach(function(e4) {
            var n4;
            "function" == typeof t3[e4] && (n4 = t3[e4], t3[e4] = function() {
              for (var e5 = [], t4 = 0; t4 < arguments.length; t4++) e5[t4] = arguments[t4];
              return null != e5 && e5[0] && "tap" === e5[0].type && c2(e5), null == n4 ? void 0 : n4.apply(this, e5);
            });
          }), i2(e3);
        });
      } }), f = new f({ name: "reportLoadPackageSpeed", isLoaded: false, onNewAegis: function(e2) {
        this.isLoaded || (this.isLoaded = true, this.start(e2));
      }, start: function() {
        var e2, t2 = this;
        g.getPerformance && "function" == typeof (e2 = g.getPerformance()).createObserver && e2.createObserver(function(e3) {
          e3 = e3.getEntries();
          null != e3 && e3.forEach(function(e4) {
            "number" != typeof e4.duration || e4.duration <= 0 || t2.publishPackageLog(e4);
          });
        }).observe({ entryTypes: ["loadPackage"] });
      }, generateLog: function(e2) {
        return [{ type: b.LOAD_PACKAGE, packageName: e2.packageName, size: Math.round(100 * e2.packageSize) / 100, duration: Math.round(100 * e2.duration) / 100 }];
      }, publishPackageLog: function(n2) {
        var r2 = this;
        this.$walk(function(e2) {
          var t2 = r2.generateLog(n2);
          e2.send({ url: e2.config.setDataReportUrl + "?payload=" + encodeURIComponent(JSON.stringify({ miniProgramData: t2 })), type: b.LOAD_PACKAGE, log: t2 });
        });
      } });
      function I(e2) {
        e2 = Me.call(this, e2) || this;
        return e2.taskHack = new We(), e2;
      }
      function Ke() {
        this.onErrors = [], this.sends = [];
      }
      return c.use(w), c.use(De), c.use(Le), c.use(Ge), c.use(ze), c.use(f), c.use(Ne), c;
    });
  }
});

// src/common/reportLog.js
var import_aegis_mp_sdk = __toESM(require_aegis_min(), 1);
var aegis = new import_aegis_mp_sdk.default({
  id: "pGUVFTCZyewxxxxx",
  // 项目上报ID
  uin: "xxx",
  // 用户唯一 ID（可选）
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
