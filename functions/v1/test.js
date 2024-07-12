"use strict";var e=async(e,s=Object.create(null))=>{const{all:n=!1,dot:a=!1}=s,o=(e instanceof w?e.raw.headers:e.headers).get("Content-Type");return null!==o&&o.startsWith("multipart/form-data")||null!==o&&o.startsWith("application/x-www-form-urlencoded")?async function(e,s){const n=await e.formData();if(n)return function(e,s){const n=Object.create(null);e.forEach(((e,r)=>{s.all||r.endsWith("[]")?t(n,r,e):n[r]=e})),s.dot&&Object.entries(n).forEach((([e,t])=>{e.includes(".")&&(r(n,e,t),delete n[e])}));return n}(n,s);return{}}(e,{all:n,dot:a}):{}};var t=(e,t,r)=>{void 0!==e[t]?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:e[t]=r},r=(e,t,r)=>{let s=e;const n=t.split(".");n.forEach(((e,t)=>{t===n.length-1?s[e]=r:((!s[e]||"object"!=typeof s[e]||Array.isArray(s[e])||s[e]instanceof File)&&(s[e]=Object.create(null)),s=s[e])}))},s=e=>{const t=e.split("/");return""===t[0]&&t.shift(),t},n=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,((e,r)=>{const s=`@${r}`;return t.push([s,e]),s})),{groups:t,path:e}},a=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[s]=t[r];for(let n=e.length-1;n>=0;n--)if(e[n].includes(s)){e[n]=e[n].replace(s,t[r][1]);break}}return e},o={},h=e=>{if("*"===e)return"*";const t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);return t?(o[e]||(t[2]?o[e]=[e,t[1],new RegExp("^"+t[2]+"$")]:o[e]=[e,t[1],!0]),o[e]):null},i=e=>{try{return decodeURI(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,(e=>{try{return decodeURI(e)}catch{return e}}))}},c=e=>{const t=e.url,r=t.indexOf("/",8);let s=r;for(;s<t.length;s++){const e=t.charCodeAt(s);if(37===e){const e=t.indexOf("?",s),n=t.slice(r,-1===e?void 0:e);return i(n.includes("%25")?n.replace(/%25/g,"%2525"):n)}if(63===e)break}return t.slice(r,s)},d=e=>{const t=c(e);return t.length>1&&"/"===t[t.length-1]?t.slice(0,-1):t},l=(...e)=>{let t="",r=!1;for(let s of e)"/"===t[t.length-1]&&(t=t.slice(0,-1),r=!0),"/"!==s[0]&&(s=`/${s}`),"/"===s&&r?t=`${t}/`:"/"!==s&&(t=`${t}${s}`),"/"===s&&""===t&&(t="/");return t},u=e=>{if(!e.match(/\:.+\?$/))return null;const t=e.split("/"),r=[];let s="";return t.forEach((e=>{if(""===e||/\:/.test(e)){if(/\:/.test(e))if(/\?/.test(e)){0===r.length&&""===s?r.push("/"):r.push(s);const t=e.replace("?","");s+="/"+t,r.push(s)}else s+="/"+e}else s+="/"+e})),r.filter(((e,t,r)=>r.indexOf(e)===t))},p=e=>/[%+]/.test(e)?(-1!==e.indexOf("+")&&(e=e.replace(/\+/g," ")),/%/.test(e)?g(e):e):e,f=(e,t,r)=>{let s;if(!r&&t&&!/[%+]/.test(t)){let r=e.indexOf(`?${t}`,8);for(-1===r&&(r=e.indexOf(`&${t}`,8));-1!==r;){const s=e.charCodeAt(r+t.length+1);if(61===s){const s=r+t.length+2,n=e.indexOf("&",s);return p(e.slice(s,-1===n?void 0:n))}if(38==s||isNaN(s))return"";r=e.indexOf(`&${t}`,r+1)}if(s=/[%+]/.test(e),!s)return}const n={};s??=/[%+]/.test(e);let a=e.indexOf("?",8);for(;-1!==a;){const t=e.indexOf("&",a+1);let o=e.indexOf("=",a);o>t&&-1!==t&&(o=-1);let h,i=e.slice(a+1,-1===o?-1===t?void 0:t:o);(s&&(i=p(i)),a=t,""!==i)&&(-1===o?h="":(h=e.slice(o+1,-1===t?void 0:t),s&&(h=p(h))),r?(n[i]&&Array.isArray(n[i])||(n[i]=[]),n[i].push(h)):n[i]??=h)}return t?n[t]:n},m=f,g=decodeURIComponent,w=class{raw;#e;#t;routeIndex=0;path;bodyCache={};constructor(e,t="/",r=[[]]){this.raw=e,this.path=t,this.#t=r,this.#e={}}param(e){return e?this.getDecodedParam(e):this.getAllDecodedParams()}getDecodedParam(e){const t=this.#t[0][this.routeIndex][1][e],r=this.getParamValue(t);return r?/\%/.test(r)?g(r):r:void 0}getAllDecodedParams(){const e={},t=Object.keys(this.#t[0][this.routeIndex][1]);for(const r of t){const t=this.getParamValue(this.#t[0][this.routeIndex][1][r]);t&&"string"==typeof t&&(e[r]=/\%/.test(t)?g(t):t)}return e}getParamValue(e){return this.#t[1]?this.#t[1][e]:e}query(e){return m(this.url,e)}queries(e){return((e,t)=>f(e,t,!0))(this.url,e)}header(e){if(e)return this.raw.headers.get(e.toLowerCase())??void 0;const t={};return this.raw.headers.forEach(((e,r)=>{t[r]=e})),t}async parseBody(t){return this.bodyCache.parsedBody??=await e(this,t)}cachedBody=e=>{const{bodyCache:t,raw:r}=this,s=t[e];if(s)return s;const n=Object.keys(t)[0];return n?t[n].then((t=>("json"===n&&(t=JSON.stringify(t)),new Response(t)[e]()))):t[e]=r[e]()};json(){return this.cachedBody("json")}text(){return this.cachedBody("text")}arrayBuffer(){return this.cachedBody("arrayBuffer")}blob(){return this.cachedBody("blob")}formData(){return this.cachedBody("formData")}addValidatedData(e,t){this.#e[e]=t}valid(e){return this.#e[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return this.#t[0].map((([[,e]])=>e))}get routePath(){return this.#t[0].map((([[,e]])=>e))[this.routeIndex].path}},b=1,y=async(e,t,r,s,n)=>{const a=e.callbacks;if(!a?.length)return Promise.resolve(e);n?n[0]+=e:n=[e];return Promise.all(a.map((e=>e({phase:t,buffer:n,context:s})))).then((e=>Promise.all(e.filter(Boolean).map((e=>y(e,t,!1,s,n)))).then((()=>n[0]))))},x=(e,t={})=>(Object.entries(t).forEach((([t,r])=>e.set(t,r))),e),R=class{#r;#s;env={};#n;finalized=!1;error;#a=200;#o;#h;#i;#c;#d=!0;#l;#u;#p;#t;#f;constructor(e,t){this.#r=e,t&&(this.#o=t.executionCtx,this.env=t.env,this.#p=t.notFoundHandler,this.#f=t.path,this.#t=t.matchResult)}get req(){return this.#s??=new w(this.#r,this.#f,this.#t),this.#s}get event(){if(this.#o&&"respondWith"in this.#o)return this.#o;throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#o)return this.#o;throw Error("This context has no ExecutionContext")}get res(){return this.#d=!1,this.#c||=new Response("404 Not Found",{status:404})}set res(e){if(this.#d=!1,this.#c&&e){this.#c.headers.delete("content-type");for(const[t,r]of this.#c.headers.entries())if("set-cookie"===t){const t=this.#c.headers.getSetCookie();e.headers.delete("set-cookie");for(const r of t)e.headers.append("set-cookie",r)}else e.headers.set(t,r)}this.#c=e,this.finalized=!0}render=(...e)=>(this.#u??=e=>this.html(e),this.#u(...e));setLayout=e=>this.#l=e;getLayout=()=>this.#l;setRenderer=e=>{this.#u=e};header=(e,t,r)=>{if(void 0===t)return this.#h?this.#h.delete(e):this.#i&&delete this.#i[e.toLocaleLowerCase()],void(this.finalized&&this.res.headers.delete(e));r?.append?(this.#h||(this.#d=!1,this.#h=new Headers(this.#i),this.#i={}),this.#h.append(e,t)):this.#h?this.#h.set(e,t):(this.#i??={},this.#i[e.toLowerCase()]=t),this.finalized&&(r?.append?this.res.headers.append(e,t):this.res.headers.set(e,t))};status=e=>{this.#d=!1,this.#a=e};set=(e,t)=>{this.#n??={},this.#n[e]=t};get=e=>this.#n?this.#n[e]:void 0;get var(){return{...this.#n}}newResponse=(e,t,r)=>{if(this.#d&&!r&&!t&&200===this.#a)return new Response(e,{headers:this.#i});if(t&&"number"!=typeof t){const r=new Headers(t.headers);this.#h&&this.#h.forEach(((e,t)=>{"set-cookie"===t?r.append(t,e):r.set(t,e)}));const s=x(r,this.#i);return new Response(e,{headers:s,status:t.status??this.#a})}const s="number"==typeof t?t:this.#a;this.#i??={},this.#h??=new Headers,x(this.#h,this.#i),this.#c&&(this.#c.headers.forEach(((e,t)=>{"set-cookie"===t?this.#h?.append(t,e):this.#h?.set(t,e)})),x(this.#h,this.#i)),r??={};for(const[e,t]of Object.entries(r))if("string"==typeof t)this.#h.set(e,t);else{this.#h.delete(e);for(const r of t)this.#h.append(e,r)}return new Response(e,{status:s,headers:this.#h})};body=(e,t,r)=>"number"==typeof t?this.newResponse(e,t,r):this.newResponse(e,t);text=(e,t,r)=>{if(!this.#i){if(this.#d&&!r&&!t)return new Response(e);this.#i={}}return this.#i["content-type"]="text/plain; charset=UTF-8","number"==typeof t?this.newResponse(e,t,r):this.newResponse(e,t)};json=(e,t,r)=>{const s=JSON.stringify(e);return this.#i??={},this.#i["content-type"]="application/json; charset=UTF-8","number"==typeof t?this.newResponse(s,t,r):this.newResponse(s,t)};html=(e,t,r)=>(this.#i??={},this.#i["content-type"]="text/html; charset=UTF-8","object"==typeof e&&(e instanceof Promise||(e=e.toString()),e instanceof Promise)?e.then((e=>y(e,b,!1,{}))).then((e=>"number"==typeof t?this.newResponse(e,t,r):this.newResponse(e,t))):"number"==typeof t?this.newResponse(e,t,r):this.newResponse(e,t));redirect=(e,t)=>(this.#h??=new Headers,this.#h.set("Location",e),this.newResponse(null,t??302));notFound=()=>(this.#p??=()=>new Response,this.#p(this))},O=(e,t,r)=>(s,n)=>{let a=-1;return async function o(h){if(h<=a)throw new Error("next() called multiple times");let i;a=h;let c,d=!1;e[h]?(c=e[h][0][0],s instanceof R&&(s.req.routeIndex=h)):c=h===e.length&&n||void 0;if(c)try{i=await c(s,(()=>o(h+1)))}catch(e){if(!(e instanceof Error&&s instanceof R&&t))throw e;s.error=e,i=await t(e,s),d=!0}else s instanceof R&&!1===s.finalized&&r&&(i=await r(s));i&&(!1===s.finalized||d)&&(s.res=i);return s}(0)},j="ALL",v=["get","post","put","delete","options","patch"],E="Can not add a route since the matcher is already built.",H=class extends Error{},$=Symbol("composedHandler"),F=e=>e.text("404 Not Found",404),k=(e,t)=>"getResponse"in e?e.getResponse():t.text("Internal Server Error",500),C=class{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#f="/";routes=[];constructor(e={}){[...v,"all"].forEach((e=>{this[e]=(t,...r)=>("string"==typeof t?this.#f=t:this.addRoute(e,this.#f,t),r.forEach((t=>{"string"!=typeof t&&this.addRoute(e,this.#f,t)})),this)})),this.on=(e,t,...r)=>{for(const s of[t].flat()){this.#f=s;for(const t of[e].flat())r.map((e=>{this.addRoute(t.toUpperCase(),this.#f,e)}))}return this},this.use=(e,...t)=>("string"==typeof e?this.#f=e:(this.#f="*",t.unshift(e)),t.forEach((e=>{this.addRoute(j,this.#f,e)})),this);const t=e.strict??!0;delete e.strict,Object.assign(this,e),this.getPath=t?e.getPath??c:d}clone(){const e=new C({router:this.router,getPath:this.getPath});return e.routes=this.routes,e}notFoundHandler=F;errorHandler=k;route(e,t){const r=this.basePath(e);return t.routes.map((e=>{let s;t.errorHandler===k?s=e.handler:(s=async(r,s)=>(await O([],t.errorHandler)(r,(()=>e.handler(r,s)))).res,s[$]=e.handler),r.addRoute(e.method,e.path,s)})),this}basePath(e){const t=this.clone();return t._basePath=l(this._basePath,e),t}onError=e=>(this.errorHandler=e,this);notFound=e=>(this.notFoundHandler=e,this);mount(e,t,r){let s,n;r&&("function"==typeof r?n=r:(n=r.optionHandler,s=r.replaceRequest));const a=n?e=>{const t=n(e);return Array.isArray(t)?t:[t]}:e=>{let t;try{t=e.executionCtx}catch{}return[e.env,t]};s||=(()=>{const t=l(this._basePath,e),r="/"===t?0:t.length;return e=>{const t=new URL(e.url);return t.pathname=t.pathname.slice(r)||"/",new Request(t,e)}})();return this.addRoute(j,l(e,"*"),(async(e,r)=>{const n=await t(s(e.req.raw),...a(e));if(n)return n;await r()})),this}addRoute(e,t,r){e=e.toUpperCase();const s={path:t=l(this._basePath,t),method:e,handler:r};this.router.add(e,t,[r,s]),this.routes.push(s)}matchRoute(e,t){return this.router.match(e,t)}handleError(e,t){if(e instanceof Error)return this.errorHandler(e,t);throw e}dispatch(e,t,r,s){if("HEAD"===s)return(async()=>new Response(null,await this.dispatch(e,t,r,"GET")))();const n=this.getPath(e,{env:r}),a=this.matchRoute(s,n),o=new R(e,{path:n,matchResult:a,env:r,executionCtx:t,notFoundHandler:this.notFoundHandler});if(1===a[0].length){let e;try{e=a[0][0][0][0](o,(async()=>{o.res=await this.notFoundHandler(o)}))}catch(e){return this.handleError(e,o)}return e instanceof Promise?e.then((e=>e||(o.finalized?o.res:this.notFoundHandler(o)))).catch((e=>this.handleError(e,o))):e??this.notFoundHandler(o)}const h=O(a[0],this.errorHandler,this.notFoundHandler);return(async()=>{try{const e=await h(o);if(!e.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return e.res}catch(e){return this.handleError(e,o)}})()}fetch=(e,...t)=>this.dispatch(e,t[1],t[0],e.method);request=(e,t,r,s)=>{if(e instanceof Request)return void 0!==t&&(e=new Request(e,t)),this.fetch(e,r,s);e=e.toString();const n=/^https?:\/\//.test(e)?e:`http://localhost${l("/",e)}`,a=new Request(n,t);return this.fetch(a,r,s)};fire=()=>{addEventListener("fetch",(e=>{e.respondWith(this.dispatch(e.request,e,void 0,e.request.method))}))}},P="[^/]+",q=".*",S="(?:|/.*)",A=Symbol(),I=new Set(".\\+*[^]$()");function D(e,t){return 1===e.length?1===t.length?e<t?-1:1:-1:1===t.length||e===q||e===S?1:t===q||t===S?-1:e===P?1:t===P?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var B=class{index;varIndex;children=Object.create(null);insert(e,t,r,s,n){if(0===e.length){if(void 0!==this.index)throw A;if(n)return;return void(this.index=t)}const[a,...o]=e,h="*"===a?0===o.length?["","",q]:["","",P]:"/*"===a?["","",S]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let i;if(h){const e=h[1];let t=h[2]||P;if(e&&h[2]&&(t=t.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(t)))throw A;if(i=this.children[t],!i){if(Object.keys(this.children).some((e=>e!==q&&e!==S)))throw A;if(n)return;i=this.children[t]=new B,""!==e&&(i.varIndex=s.varIndex++)}n||""===e||r.push([e,i.varIndex])}else if(i=this.children[a],!i){if(Object.keys(this.children).some((e=>e.length>1&&e!==q&&e!==S)))throw A;if(n)return;i=this.children[a]=new B}i.insert(o,t,r,s,n)}buildRegExpStr(){const e=Object.keys(this.children).sort(D).map((e=>{const t=this.children[e];return("number"==typeof t.varIndex?`(${e})@${t.varIndex}`:I.has(e)?`\\${e}`:e)+t.buildRegExpStr()}));return"number"==typeof this.index&&e.unshift(`#${this.index}`),0===e.length?"":1===e.length?e[0]:"(?:"+e.join("|")+")"}},L=class{context={varIndex:0};root=new B;insert(e,t,r){const s=[],n=[];for(let t=0;;){let r=!1;if(e=e.replace(/\{[^}]+\}/g,(e=>{const s=`@\\${t}`;return n[t]=[s,e],t++,r=!0,s})),!r)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let e=n.length-1;e>=0;e--){const[t]=n[e];for(let r=a.length-1;r>=0;r--)if(-1!==a[r].indexOf(t)){a[r]=a[r].replace(t,n[e][1]);break}}return this.root.insert(a,t,s,this.context,r),s}buildRegExp(){let e=this.root.buildRegExpStr();if(""===e)return[/^$/,[],[]];let t=0;const r=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,((e,n,a)=>void 0!==n?(r[++t]=Number(n),"$()"):void 0!==a?(s[Number(a)]=++t,""):"")),[new RegExp(`^${e}`),r,s]}},N=[],z=[/^$/,[],Object.create(null)],U=Object.create(null);function T(e){return U[e]??=new RegExp("*"===e?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,((e,t)=>t?`\\${t}`:"(?:|/.*)"))}$`)}function M(e,t){if(e)for(const r of Object.keys(e).sort(((e,t)=>t.length-e.length)))if(T(r).test(t))return[...e[r]]}var W=class{name="RegExpRouter";middleware;routes;constructor(){this.middleware={[j]:Object.create(null)},this.routes={[j]:Object.create(null)}}add(e,t,r){const{middleware:s,routes:n}=this;if(!s||!n)throw new Error(E);s[e]||[s,n].forEach((t=>{t[e]=Object.create(null),Object.keys(t[j]).forEach((r=>{t[e][r]=[...t[j][r]]}))})),"/*"===t&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=T(t);return e===j?Object.keys(s).forEach((e=>{s[e][t]||=M(s[e],t)||M(s[j],t)||[]})):s[e][t]||=M(s[e],t)||M(s[j],t)||[],Object.keys(s).forEach((t=>{e!==j&&e!==t||Object.keys(s[t]).forEach((e=>{o.test(e)&&s[t][e].push([r,a])}))})),void Object.keys(n).forEach((t=>{e!==j&&e!==t||Object.keys(n[t]).forEach((e=>o.test(e)&&n[t][e].push([r,a])))}))}const o=u(t)||[t];for(let t=0,h=o.length;t<h;t++){const i=o[t];Object.keys(n).forEach((o=>{e!==j&&e!==o||(n[o][i]||=[...M(s[o],i)||M(s[j],i)||[]],n[o][i].push([r,a-h+t+1]))}))}}match(e,t){U=Object.create(null);const r=this.buildAllMatchers();return this.match=(e,t)=>{const s=r[e]||r[j],n=s[2][t];if(n)return n;const a=t.match(s[0]);if(!a)return[[],N];const o=a.indexOf("",1);return[s[1][o],a]},this.match(e,t)}buildAllMatchers(){const e=Object.create(null);return[...Object.keys(this.routes),...Object.keys(this.middleware)].forEach((t=>{e[t]||=this.buildMatcher(t)})),this.middleware=this.routes=void 0,e}buildMatcher(e){const t=[];let r=e===j;return[this.middleware,this.routes].forEach((s=>{const n=s[e]?Object.keys(s[e]).map((t=>[t,s[e][t]])):[];0!==n.length?(r||=!0,t.push(...n)):e!==j&&t.push(...Object.keys(s[j]).map((e=>[e,s[j][e]])))})),r?function(e){const t=new L,r=[];if(0===e.length)return z;const s=e.map((e=>[!/\*|\/:/.test(e[0]),...e])).sort((([e,t],[r,s])=>e?1:r?-1:t.length-s.length)),n=Object.create(null);for(let e=0,a=-1,o=s.length;e<o;e++){const[o,h,i]=s[e];let c;o?n[h]=[i.map((([e])=>[e,Object.create(null)])),N]:a++;try{c=t.insert(h,a,o)}catch(e){throw e===A?new H(h):e}o||(r[a]=i.map((([e,t])=>{const r=Object.create(null);for(t-=1;t>=0;t--){const[e,s]=c[t];r[e]=s}return[e,r]})))}const[a,o,h]=t.buildRegExp();for(let e=0,t=r.length;e<t;e++)for(let t=0,s=r[e].length;t<s;t++){const s=r[e][t]?.[1];if(!s)continue;const n=Object.keys(s);for(let e=0,t=n.length;e<t;e++)s[n[e]]=h[s[n[e]]]}const i=[];for(const e in o)i[e]=r[o[e]];return[a,i,n]}(t):null}},_=class{name="SmartRouter";routers=[];routes=[];constructor(e){Object.assign(this,e)}add(e,t,r){if(!this.routes)throw new Error(E);this.routes.push([e,t,r])}match(e,t){if(!this.routes)throw new Error("Fatal error");const{routers:r,routes:s}=this,n=r.length;let a,o=0;for(;o<n;o++){const n=r[o];try{s.forEach((e=>{n.add(...e)})),a=n.match(e,t)}catch(e){if(e instanceof H)continue;throw e}this.match=n.match.bind(n),this.routers=[n],this.routes=void 0;break}if(o===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(this.routes||1!==this.routers.length)throw new Error("No active router has been determined yet.");return this.routers[0]}},V=class{methods;children;patterns;order=0;name;params=Object.create(null);constructor(e,t,r){if(this.children=r||Object.create(null),this.methods=[],this.name="",e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0,name:this.name},this.methods=[r]}this.patterns=[]}insert(e,t,r){this.name=`${e} ${t}`,this.order=++this.order;let o=this;const i=(e=>{const{groups:t,path:r}=n(e),o=s(r);return a(o,t)})(t),c=[];for(let e=0,t=i.length;e<t;e++){const t=i[e];if(Object.keys(o.children).includes(t)){o=o.children[t];const e=h(t);e&&c.push(e[1]);continue}o.children[t]=new V;const r=h(t);r&&(o.patterns.push(r),c.push(r[1])),o=o.children[t]}o.methods.length||(o.methods=[]);const d=Object.create(null),l={handler:r,possibleKeys:c.filter(((e,t,r)=>r.indexOf(e)===t)),name:this.name,score:this.order};return d[e]=l,o.methods.push(d),o}gHSets(e,t,r,s){const n=[];for(let a=0,o=e.methods.length;a<o;a++){const o=e.methods[a],h=o[t]||o[j],i=Object.create(null);void 0!==h&&(h.params=Object.create(null),h.possibleKeys.forEach((e=>{const t=i[h.name];h.params[e]=s[e]&&!t?s[e]:r[e]??s[e],i[h.name]=!0})),n.push(h))}return n}search(e,t){const r=[];this.params=Object.create(null);let n=[this];const a=s(t);for(let t=0,s=a.length;t<s;t++){const o=a[t],h=t===s-1,i=[];for(let s=0,c=n.length;s<c;s++){const c=n[s],d=c.children[o];d&&(d.params=c.params,!0===h?(d.children["*"]&&r.push(...this.gHSets(d.children["*"],e,c.params,Object.create(null))),r.push(...this.gHSets(d,e,c.params,Object.create(null)))):i.push(d));for(let s=0,n=c.patterns.length;s<n;s++){const n=c.patterns[s],d={...c.params};if("*"===n){const t=c.children["*"];t&&(r.push(...this.gHSets(t,e,c.params,Object.create(null))),i.push(t));continue}if(""===o)continue;const[l,u,p]=n,f=c.children[l],m=a.slice(t).join("/");p instanceof RegExp&&p.test(m)?(d[u]=m,r.push(...this.gHSets(f,e,c.params,d))):(!0===p||p instanceof RegExp&&p.test(o))&&"string"==typeof l&&(d[u]=o,!0===h?(r.push(...this.gHSets(f,e,d,c.params)),f.children["*"]&&r.push(...this.gHSets(f.children["*"],e,d,c.params))):(f.params=d,i.push(f)))}}n=i}return[r.sort(((e,t)=>e.score-t.score)).map((({handler:e,params:t})=>[e,t]))]}},K=class{name="TrieRouter";node;constructor(){this.node=new V}add(e,t,r){const s=u(t);if(s)for(const t of s)this.node.insert(e,t,r);else this.node.insert(e,t,r)}match(e,t){return this.node.search(e,t)}},J=class extends C{constructor(e={}){super(e),this.router=e.router??new _({routers:[new W,new K]})}};const G=new J;G.get("/",(e=>e.text("Hello Hono index!"))).get("/test",(e=>e.text("Hello Hono!"))).all("*",(e=>(console.log({method:e.req.method,path:e.req.url}),e.json({message:"Not Found 找不到"},404))));const Q=new J;Q.use("*",(async(e,t)=>{await t()})),Q.onError(((e,t)=>(console.error(`${e}`),t.text("Custom Error Message",400)))),Q.basePath("/v1/").route("/elasticsearch/",G),Q.fire();
