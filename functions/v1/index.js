var e=1,t=async(e,r,s,n,a)=>{const o=e.callbacks;if(!o?.length)return Promise.resolve(e);a?a[0]+=e:a=[e];return Promise.all(o.map((e=>e({phase:r,buffer:a,context:n})))).then((e=>Promise.all(e.filter(Boolean).map((e=>t(e,r,!1,n,a)))).then((()=>a[0]))))},r=(e,t={})=>(Object.entries(t).forEach((([t,r])=>e.set(t,r))),e),s=class{req;env={};_var={};finalized=!1;error=void 0;#e=200;#t;#r=void 0;#s=void 0;#n;#a=!0;layout=void 0;renderer=e=>this.html(e);notFoundHandler=()=>new Response;constructor(e,t){this.req=e,t&&(this.#t=t.executionCtx,this.env=t.env,t.notFoundHandler&&(this.notFoundHandler=t.notFoundHandler))}get event(){if(this.#t&&"respondWith"in this.#t)return this.#t;throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#t)return this.#t;throw Error("This context has no ExecutionContext")}get res(){return this.#a=!1,this.#n||=new Response("404 Not Found",{status:404})}set res(e){if(this.#a=!1,this.#n&&e){this.#n.headers.delete("content-type");for(const[t,r]of this.#n.headers.entries())if("set-cookie"===t){const t=this.#n.headers.getSetCookie();e.headers.delete("set-cookie");for(const r of t)e.headers.append("set-cookie",r)}else e.headers.set(t,r)}this.#n=e,this.finalized=!0}render=(...e)=>this.renderer(...e);setLayout=e=>this.layout=e;getLayout=()=>this.layout;setRenderer=e=>{this.renderer=e};header=(e,t,r)=>{if(void 0===t)return this.#r?this.#r.delete(e):this.#s&&delete this.#s[e.toLocaleLowerCase()],void(this.finalized&&this.res.headers.delete(e));r?.append?(this.#r||(this.#a=!1,this.#r=new Headers(this.#s),this.#s={}),this.#r.append(e,t)):this.#r?this.#r.set(e,t):(this.#s??={},this.#s[e.toLowerCase()]=t),this.finalized&&(r?.append?this.res.headers.append(e,t):this.res.headers.set(e,t))};status=e=>{this.#a=!1,this.#e=e};set=(e,t)=>{this._var??={},this._var[e]=t};get=e=>this._var?this._var[e]:void 0;get var(){return{...this._var}}newResponse=(e,t,s)=>{if(this.#a&&!s&&!t&&200===this.#e)return new Response(e,{headers:this.#s});if(t&&"number"!=typeof t){const s=new Headers(t.headers);this.#r&&this.#r.forEach(((e,t)=>{"set-cookie"===t?s.append(t,e):s.set(t,e)}));const n=r(s,this.#s);return new Response(e,{headers:n,status:t.status??this.#e})}const n="number"==typeof t?t:this.#e;this.#s??={},this.#r??=new Headers,r(this.#r,this.#s),this.#n&&(this.#n.headers.forEach(((e,t)=>{"set-cookie"===t?this.#r?.append(t,e):this.#r?.set(t,e)})),r(this.#r,this.#s)),s??={};for(const[e,t]of Object.entries(s))if("string"==typeof t)this.#r.set(e,t);else{this.#r.delete(e);for(const r of t)this.#r.append(e,r)}return new Response(e,{status:n,headers:this.#r})};body=(e,t,r)=>"number"==typeof t?this.newResponse(e,t,r):this.newResponse(e,t);text=(e,t,r)=>{if(!this.#s){if(this.#a&&!r&&!t)return new Response(e);this.#s={}}return this.#s["content-type"]="text/plain; charset=UTF-8","number"==typeof t?this.newResponse(e,t,r):this.newResponse(e,t)};json=(e,t,r)=>{const s=JSON.stringify(e);return this.#s??={},this.#s["content-type"]="application/json; charset=UTF-8","number"==typeof t?this.newResponse(s,t,r):this.newResponse(s,t)};html=(r,s,n)=>(this.#s??={},this.#s["content-type"]="text/html; charset=UTF-8","object"==typeof r&&(r instanceof Promise||(r=r.toString()),r instanceof Promise)?r.then((r=>t(r,e,!1,{}))).then((e=>"number"==typeof s?this.newResponse(e,s,n):this.newResponse(e,s))):"number"==typeof s?this.newResponse(r,s,n):this.newResponse(r,s));redirect=(e,t=302)=>(this.#r??=new Headers,this.#r.set("Location",e),this.newResponse(null,t));notFound=()=>this.notFoundHandler(this)},n=(e,t,r)=>(n,a)=>{let o=-1;return async function i(h){if(h<=o)throw new Error("next() called multiple times");let c;o=h;let d,u=!1;e[h]?(d=e[h][0][0],n instanceof s&&(n.req.routeIndex=h)):d=h===e.length&&a||void 0;if(d)try{c=await d(n,(()=>i(h+1)))}catch(e){if(!(e instanceof Error&&n instanceof s&&t))throw e;n.error=e,c=await t(e,n),u=!0}else n instanceof s&&!1===n.finalized&&r&&(c=await r(n));c&&(!1===n.finalized||u)&&(n.res=c);return n}(0)},a=class extends Error{res;status;constructor(e=500,t){super(t?.message,{cause:t?.cause}),this.res=t?.res,this.status=e}getResponse(){if(this.res){return new Response(this.res.body,{status:this.status,headers:this.res.headers})}return new Response(this.message,{status:this.status})}},o=async(e,t={all:!1})=>{const r=(e instanceof v?e.raw.headers:e.headers).get("Content-Type");return null!==r&&r.startsWith("multipart/form-data")||null!==r&&r.startsWith("application/x-www-form-urlencoded")?async function(e,t){const r=await e.formData();if(r)return function(e,t){const r={};return e.forEach(((e,s)=>{t.all||s.endsWith("[]")?i(r,s,e):r[s]=e})),r}(r,t);return{}}(e,t):{}};var i=(e,t,r)=>{const s=e[t];s&&Array.isArray(s)?e[t].push(r):e[t]=s?[s,r]:r},h=e=>{const t=e.split("/");return""===t[0]&&t.shift(),t},c=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,((e,r)=>{const s=`@${r}`;return t.push([s,e]),s})),{groups:t,path:e}},d=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[s]=t[r];for(let n=e.length-1;n>=0;n--)if(e[n].includes(s)){e[n]=e[n].replace(s,t[r][1]);break}}return e},u={},l=e=>{if("*"===e)return"*";const t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);return t?(u[e]||(t[2]?u[e]=[e,t[1],new RegExp("^"+t[2]+"$")]:u[e]=[e,t[1],!0]),u[e]):null},p=e=>{const t=e.url,r=t.indexOf("?",8);return t.slice(t.indexOf("/",8),-1===r?void 0:r)},f=e=>{const t=p(e);return t.length>1&&"/"===t[t.length-1]?t.slice(0,-1):t},m=(...e)=>{let t="",r=!1;for(let s of e)"/"===t[t.length-1]&&(t=t.slice(0,-1),r=!0),"/"!==s[0]&&(s=`/${s}`),"/"===s&&r?t=`${t}/`:"/"!==s&&(t=`${t}${s}`),"/"===s&&""===t&&(t="/");return t},g=e=>{if(!e.match(/\:.+\?$/))return null;const t=e.split("/"),r=[];let s="";return t.forEach((e=>{if(""===e||/\:/.test(e)){if(/\:/.test(e))if(/\?/.test(e)){0===r.length&&""===s?r.push("/"):r.push(s);const t=e.replace("?","");s+="/"+t,r.push(s)}else s+="/"+e}else s+="/"+e})),r.filter(((e,t,r)=>r.indexOf(e)===t))},w=e=>/[%+]/.test(e)?(-1!==e.indexOf("+")&&(e=e.replace(/\+/g," ")),/%/.test(e)?x(e):e):e,y=(e,t,r)=>{let s;if(!r&&t&&!/[%+]/.test(t)){let r=e.indexOf(`?${t}`,8);for(-1===r&&(r=e.indexOf(`&${t}`,8));-1!==r;){const s=e.charCodeAt(r+t.length+1);if(61===s){const s=r+t.length+2,n=e.indexOf("&",s);return w(e.slice(s,-1===n?void 0:n))}if(38==s||isNaN(s))return"";r=e.indexOf(`&${t}`,r+1)}if(s=/[%+]/.test(e),!s)return}const n={};s??=/[%+]/.test(e);let a=e.indexOf("?",8);for(;-1!==a;){const t=e.indexOf("&",a+1);let o=e.indexOf("=",a);o>t&&-1!==t&&(o=-1);let i,h=e.slice(a+1,-1===o?-1===t?void 0:t:o);(s&&(h=w(h)),a=t,""!==h)&&(-1===o?i="":(i=e.slice(o+1,-1===t?void 0:t),s&&(i=w(i))),r?(n[h]&&Array.isArray(n[h])||(n[h]=[]),n[h].push(i)):n[h]??=i)}return t?n[t]:n},b=y,x=decodeURIComponent,v=class{raw;#o;#i;routeIndex=0;path;bodyCache={};constructor(e,t="/",r=[[]]){this.raw=e,this.path=t,this.#i=r,this.#o={}}param(e){return e?this.getDecodedParam(e):this.getAllDecodedParams()}getDecodedParam(e){const t=this.#i[0][this.routeIndex][1][e],r=this.getParamValue(t);return r?/\%/.test(r)?x(r):r:void 0}getAllDecodedParams(){const e={},t=Object.keys(this.#i[0][this.routeIndex][1]);for(const r of t){const t=this.getParamValue(this.#i[0][this.routeIndex][1][r]);t&&"string"==typeof t&&(e[r]=/\%/.test(t)?x(t):t)}return e}getParamValue(e){return this.#i[1]?this.#i[1][e]:e}query(e){return b(this.url,e)}queries(e){return((e,t)=>y(e,t,!0))(this.url,e)}header(e){if(e)return this.raw.headers.get(e.toLowerCase())??void 0;const t={};return this.raw.headers.forEach(((e,r)=>{t[r]=e})),t}async parseBody(e){if(this.bodyCache.parsedBody)return this.bodyCache.parsedBody;const t=await o(this,e);return this.bodyCache.parsedBody=t,t}cachedBody=e=>{const{bodyCache:t,raw:r}=this,s=t[e];if(s)return s;if(!t[e])for(const r of Object.keys(t))if("parsedBody"!==r)return(async()=>{let s=await t[r];return"json"===r&&(s=JSON.stringify(s)),await new Response(s)[e]()})();return t[e]=r[e]()};json(){return this.cachedBody("json")}text(){return this.cachedBody("text")}arrayBuffer(){return this.cachedBody("arrayBuffer")}blob(){return this.cachedBody("blob")}formData(){return this.cachedBody("formData")}addValidatedData(e,t){this.#o[e]=t}valid(e){return this.#o[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return this.#i[0].map((([[,e]])=>e))}get routePath(){return this.#i[0].map((([[,e]])=>e))[this.routeIndex].path}},R="ALL",O=["get","post","put","delete","options","patch"],j="Can not add a route since the matcher is already built.",E=class extends Error{},H=Symbol("composedHandler");var _=e=>e.text("404 Not Found",404),k=(e,t)=>e instanceof a?e.getResponse():t.text("Internal Server Error",500),$=class extends class{}{router;getPath;_basePath="/";#h="/";routes=[];constructor(e={}){super();[...O,"all"].forEach((e=>{this[e]=(t,...r)=>("string"==typeof t?this.#h=t:this.addRoute(e,this.#h,t),r.forEach((t=>{"string"!=typeof t&&this.addRoute(e,this.#h,t)})),this)})),this.on=(e,t,...r)=>{if(!e)return this;for(const s of[t].flat()){this.#h=s;for(const t of[e].flat())r.map((e=>{this.addRoute(t.toUpperCase(),this.#h,e)}))}return this},this.use=(e,...t)=>("string"==typeof e?this.#h=e:(this.#h="*",t.unshift(e)),t.forEach((e=>{this.addRoute(R,this.#h,e)})),this);const t=e.strict??!0;delete e.strict,Object.assign(this,e),this.getPath=t?e.getPath??p:f}clone(){const e=new $({router:this.router,getPath:this.getPath});return e.routes=this.routes,e}notFoundHandler=_;errorHandler=k;route(e,t){const r=this.basePath(e);return t?(t.routes.map((e=>{let s;t.errorHandler===k?s=e.handler:(s=async(r,s)=>(await n([],t.errorHandler)(r,(()=>e.handler(r,s)))).res,s[H]=e.handler),r.addRoute(e.method,e.path,s)})),this):r}basePath(e){const t=this.clone();return t._basePath=m(this._basePath,e),t}onError=e=>(this.errorHandler=e,this);notFound=e=>(this.notFoundHandler=e,this);mount(e,t,r){const s=m(this._basePath,e),n="/"===s?0:s.length;return this.addRoute(R,m(e,"*"),(async(e,s)=>{let a;try{a=e.executionCtx}catch{}const o=r?r(e):[e.env,a],i=Array.isArray(o)?o:[o],h=(e=>{const t=e.indexOf("?",8);return-1===t?"":"?"+e.slice(t+1)})(e.req.url),c=await t(new Request(new URL((e.req.path.slice(n)||"/")+h,e.req.url),e.req.raw),...i);if(c)return c;await s()})),this}addRoute(e,t,r){e=e.toUpperCase();const s={path:t=m(this._basePath,t),method:e,handler:r};this.router.add(e,t,[r,s]),this.routes.push(s)}matchRoute(e,t){return this.router.match(e,t)}handleError(e,t){if(e instanceof Error)return this.errorHandler(e,t);throw e}dispatch(e,t,r,a){if("HEAD"===a)return(async()=>new Response(null,await this.dispatch(e,t,r,"GET")))();const o=this.getPath(e,{env:r}),i=this.matchRoute(a,o),h=new s(new v(e,o,i),{env:r,executionCtx:t,notFoundHandler:this.notFoundHandler});if(1===i[0].length){let e;try{e=i[0][0][0][0](h,(async()=>{h.res=await this.notFoundHandler(h)}))}catch(e){return this.handleError(e,h)}return e instanceof Promise?e.then((e=>e||(h.finalized?h.res:this.notFoundHandler(h)))).catch((e=>this.handleError(e,h))):e}const c=n(i[0],this.errorHandler,this.notFoundHandler);return(async()=>{try{const e=await c(h);if(!e.finalized)throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");return e.res}catch(e){return this.handleError(e,h)}})()}fetch=(e,...t)=>this.dispatch(e,t[1],t[0],e.method);request=(e,t,r,s)=>{if(e instanceof Request)return void 0!==t&&(e=new Request(e,t)),this.fetch(e,r,s);e=e.toString();const n=/^https?:\/\//.test(e)?e:`http://localhost${m("/",e)}`,a=new Request(n,t);return this.fetch(a,r,s)};fire=()=>{addEventListener("fetch",(e=>{e.respondWith(this.dispatch(e.request,e,void 0,e.request.method))}))}},F="[^/]+",C=".*",P="(?:|/.*)",S=Symbol(),q=new Set(".\\+*[^]$()");function U(e,t){return 1===e.length?1===t.length?e<t?-1:1:-1:1===t.length||e===C||e===P?1:t===C||t===P?-1:e===F?1:t===F?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var I=class{index;varIndex;children=Object.create(null);insert(e,t,r,s,n){if(0===e.length){if(void 0!==this.index)throw S;if(n)return;return void(this.index=t)}const[a,...o]=e,i="*"===a?0===o.length?["","",C]:["","",F]:"/*"===a?["","",P]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let h;if(i){const e=i[1];let t=i[2]||F;if(e&&i[2]&&(t=t.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(t)))throw S;if(h=this.children[t],!h){if(Object.keys(this.children).some((e=>e!==C&&e!==P)))throw S;if(n)return;h=this.children[t]=new I,""!==e&&(h.varIndex=s.varIndex++)}n||""===e||r.push([e,h.varIndex])}else if(h=this.children[a],!h){if(Object.keys(this.children).some((e=>e.length>1&&e!==C&&e!==P)))throw S;if(n)return;h=this.children[a]=new I}h.insert(o,t,r,s,n)}buildRegExpStr(){const e=Object.keys(this.children).sort(U).map((e=>{const t=this.children[e];return("number"==typeof t.varIndex?`(${e})@${t.varIndex}`:q.has(e)?`\\${e}`:e)+t.buildRegExpStr()}));return"number"==typeof this.index&&e.unshift(`#${this.index}`),0===e.length?"":1===e.length?e[0]:"(?:"+e.join("|")+")"}},B=class{context={varIndex:0};root=new I;insert(e,t,r){const s=[],n=[];for(let t=0;;){let r=!1;if(e=e.replace(/\{[^}]+\}/g,(e=>{const s=`@\\${t}`;return n[t]=[s,e],t++,r=!0,s})),!r)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let e=n.length-1;e>=0;e--){const[t]=n[e];for(let r=a.length-1;r>=0;r--)if(-1!==a[r].indexOf(t)){a[r]=a[r].replace(t,n[e][1]);break}}return this.root.insert(a,t,s,this.context,r),s}buildRegExp(){let e=this.root.buildRegExpStr();if(""===e)return[/^$/,[],[]];let t=0;const r=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,((e,n,a)=>void 0!==n?(r[++t]=Number(n),"$()"):void 0!==a?(s[Number(a)]=++t,""):"")),[new RegExp(`^${e}`),r,s]}},D=[],A=[/^$/,[],Object.create(null)],z=Object.create(null);function L(e){return z[e]??=new RegExp("*"===e?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,((e,t)=>t?`\\${t}`:"(?:|/.*)"))}$`)}function T(e,t){if(e)for(const r of Object.keys(e).sort(((e,t)=>t.length-e.length)))if(L(r).test(t))return[...e[r]]}var N=class{name="RegExpRouter";middleware;routes;constructor(){this.middleware={[R]:Object.create(null)},this.routes={[R]:Object.create(null)}}add(e,t,r){const{middleware:s,routes:n}=this;if(!s||!n)throw new Error(j);s[e]||[s,n].forEach((t=>{t[e]=Object.create(null),Object.keys(t[R]).forEach((r=>{t[e][r]=[...t[R][r]]}))})),"/*"===t&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=L(t);return e===R?Object.keys(s).forEach((e=>{s[e][t]||=T(s[e],t)||T(s[R],t)||[]})):s[e][t]||=T(s[e],t)||T(s[R],t)||[],Object.keys(s).forEach((t=>{e!==R&&e!==t||Object.keys(s[t]).forEach((e=>{o.test(e)&&s[t][e].push([r,a])}))})),void Object.keys(n).forEach((t=>{e!==R&&e!==t||Object.keys(n[t]).forEach((e=>o.test(e)&&n[t][e].push([r,a])))}))}const o=g(t)||[t];for(let t=0,i=o.length;t<i;t++){const h=o[t];Object.keys(n).forEach((o=>{e!==R&&e!==o||(n[o][h]||=[...T(s[o],h)||T(s[R],h)||[]],n[o][h].push([r,a-i+t+1]))}))}}match(e,t){z=Object.create(null);const r=this.buildAllMatchers();return this.match=(e,t)=>{const s=r[e]||r[R],n=s[2][t];if(n)return n;const a=t.match(s[0]);if(!a)return[[],D];const o=a.indexOf("",1);return[s[1][o],a]},this.match(e,t)}buildAllMatchers(){const e=Object.create(null);return[...Object.keys(this.routes),...Object.keys(this.middleware)].forEach((t=>{e[t]||=this.buildMatcher(t)})),this.middleware=this.routes=void 0,e}buildMatcher(e){const t=[];let r=e===R;return[this.middleware,this.routes].forEach((s=>{const n=s[e]?Object.keys(s[e]).map((t=>[t,s[e][t]])):[];0!==n.length?(r||=!0,t.push(...n)):e!==R&&t.push(...Object.keys(s[R]).map((e=>[e,s[R][e]])))})),r?function(e){const t=new B,r=[];if(0===e.length)return A;const s=e.map((e=>[!/\*|\/:/.test(e[0]),...e])).sort((([e,t],[r,s])=>e?1:r?-1:t.length-s.length)),n=Object.create(null);for(let e=0,a=-1,o=s.length;e<o;e++){const[o,i,h]=s[e];let c;o?n[i]=[h.map((([e])=>[e,Object.create(null)])),D]:a++;try{c=t.insert(i,a,o)}catch(e){throw e===S?new E(i):e}o||(r[a]=h.map((([e,t])=>{const r=Object.create(null);for(t-=1;t>=0;t--){const[e,s]=c[t];r[e]=s}return[e,r]})))}const[a,o,i]=t.buildRegExp();for(let e=0,t=r.length;e<t;e++)for(let t=0,s=r[e].length;t<s;t++){const s=r[e][t]?.[1];if(!s)continue;const n=Object.keys(s);for(let e=0,t=n.length;e<t;e++)s[n[e]]=i[s[n[e]]]}const h=[];for(const e in o)h[e]=r[o[e]];return[a,h,n]}(t):null}},V=class{name="SmartRouter";routers=[];routes=[];constructor(e){Object.assign(this,e)}add(e,t,r){if(!this.routes)throw new Error(j);this.routes.push([e,t,r])}match(e,t){if(!this.routes)throw new Error("Fatal error");const{routers:r,routes:s}=this,n=r.length;let a,o=0;for(;o<n;o++){const n=r[o];try{s.forEach((e=>{n.add(...e)})),a=n.match(e,t)}catch(e){if(e instanceof E)continue;throw e}this.match=n.match.bind(n),this.routers=[n],this.routes=void 0;break}if(o===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(this.routes||1!==this.routers.length)throw new Error("No active router has been determined yet.");return this.routers[0]}},W=class{methods;children;patterns;order=0;name;params=Object.create(null);constructor(e,t,r){if(this.children=r||Object.create(null),this.methods=[],this.name="",e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0,name:this.name},this.methods=[r]}this.patterns=[]}insert(e,t,r){this.name=`${e} ${t}`,this.order=++this.order;let s=this;const n=(e=>{const{groups:t,path:r}=c(e),s=h(r);return d(s,t)})(t),a=[];for(let e=0,t=n.length;e<t;e++){const t=n[e];if(Object.keys(s.children).includes(t)){s=s.children[t];const e=l(t);e&&a.push(e[1]);continue}s.children[t]=new W;const r=l(t);r&&(s.patterns.push(r),a.push(r[1])),s=s.children[t]}s.methods.length||(s.methods=[]);const o=Object.create(null),i={handler:r,possibleKeys:a.filter(((e,t,r)=>r.indexOf(e)===t)),name:this.name,score:this.order};return o[e]=i,s.methods.push(o),s}gHSets(e,t,r,s){const n=[];for(let a=0,o=e.methods.length;a<o;a++){const o=e.methods[a],i=o[t]||o[R],h=Object.create(null);void 0!==i&&(i.params=Object.create(null),i.possibleKeys.forEach((e=>{const t=h[i.name];i.params[e]=s[e]&&!t?s[e]:r[e]??s[e],h[i.name]=!0})),n.push(i))}return n}search(e,t){const r=[];this.params=Object.create(null);let s=[this];const n=h(t);for(let t=0,a=n.length;t<a;t++){const o=n[t],i=t===a-1,h=[];for(let a=0,c=s.length;a<c;a++){const c=s[a],d=c.children[o];d&&(d.params=c.params,!0===i?(d.children["*"]&&r.push(...this.gHSets(d.children["*"],e,c.params,Object.create(null))),r.push(...this.gHSets(d,e,c.params,Object.create(null)))):h.push(d));for(let s=0,a=c.patterns.length;s<a;s++){const a=c.patterns[s],d={...c.params};if("*"===a){const t=c.children["*"];t&&(r.push(...this.gHSets(t,e,c.params,Object.create(null))),h.push(t));continue}if(""===o)continue;const[u,l,p]=a,f=c.children[u],m=n.slice(t).join("/");p instanceof RegExp&&p.test(m)?(d[l]=m,r.push(...this.gHSets(f,e,c.params,d))):(!0===p||p instanceof RegExp&&p.test(o))&&"string"==typeof u&&(d[l]=o,!0===i?(r.push(...this.gHSets(f,e,d,c.params)),f.children["*"]&&r.push(...this.gHSets(f.children["*"],e,d,c.params))):(f.params=d,h.push(f)))}}s=h}return[r.sort(((e,t)=>e.score-t.score)).map((({handler:e,params:t})=>[e,t]))]}},M=class{name="TrieRouter";node;constructor(){this.node=new W}add(e,t,r){const s=g(t);if(s)for(const t of s)this.node.insert(e,t,r);else this.node.insert(e,t,r)}match(e,t){return this.node.search(e,t)}},K=class extends ${constructor(e={}){super(e),this.router=e.router??new V({routers:[new N,new M]})}};let J;const Y=new Uint8Array(16);function Z(){if(!J&&(J="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!J))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return J(Y)}const G=[];for(let e=0;e<256;++e)G.push((e+256).toString(16).slice(1));var X={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Q(e,t,r){if(X.randomUUID&&!t&&!e)return X.randomUUID();const s=(e=e||{}).random||(e.rng||Z)();return s[6]=15&s[6]|64,s[8]=63&s[8]|128,function(e,t=0){return G[e[t+0]]+G[e[t+1]]+G[e[t+2]]+G[e[t+3]]+"-"+G[e[t+4]]+G[e[t+5]]+"-"+G[e[t+6]]+G[e[t+7]]+"-"+G[e[t+8]]+G[e[t+9]]+"-"+G[e[t+10]]+G[e[t+11]]+G[e[t+12]]+G[e[t+13]]+G[e[t+14]]+G[e[t+15]]}(s)}const ee=async(e,t)=>{const r=e.req.header("content-encoding"),s=(()=>{const e=(new Date).getHours();return e>=19&&e<=23?.6:1})();if(Math.random()>s&&"gzip"===r)return t;const n=await async function(e,t){if(-1===["gzip","deflate"].indexOf(t))return e;if(0===e.byteLength)return e;const r=new DecompressionStream(t),s=r.writable.getWriter();await s.write(new Uint8Array(e)).then((()=>s.close()));const n=r.readable.getReader(),a=[];for(;;){const{done:e,value:t}=await n.read();if(e)break;a.push(new Uint8Array(t))}return new Blob(a).arrayBuffer()}(t,r),a=await async function(e,t){if(-1===["gzip","deflate"].indexOf(t))return e;if(0===e.byteLength)return e;const r=new CompressionStream(t),s=r.writable.getWriter();await s.write(new Uint8Array(e)).then((()=>s.close()));const n=r.readable.getReader(),a=[];for(;;){const{done:e,value:t}=await n.read();if(e)break;a.push(new Uint8Array(t))}return new Blob(a).arrayBuffer()}(n,"gzip");return a};const te=new K;te.get("/",(e=>e.json({name:"this_is_fake_elasticsearch",cluster_name:"elasticsearch",cluster_uuid:"1234-5678-9101-1121",version:{number:"7.14.2",build_flavor:"default",build_type:"tar",build_hash:"abcdefg",build_date:"2022-09-01T21:37:00.000000000Z",build_snapshot:!1,lucene_version:"8.9.0",minimum_wire_compatibility_version:"6.8.0",minimum_index_compatibility_version:"6.0.0-beta1"},tagline:"You Know, for Search"}))).get("/_license",(e=>{const t=(new Date).getHours();return e.json({license:{status:"active",uid:"6c149005-5802-4046-99ee-53fcaa1d1716",type:"basic",issue_date:"2022-06-13T03:43:58.859Z",issue_date_in_millis:1655091838859,max_nodes:1e3,issued_to:"gzopen_120001_"+t,issuer:"elasticsearch",start_date_in_millis:-1}})})).get("/_xpack",(async e=>e.json({build:{hash:"24788ea6ec1b15b5c4ab8def51169f2df0574feb",date:"2023-07-22T06:37:55.032627410Z"},license:{uid:"6c149005-5802-4046-99ee-53fcaa1d1716",type:"basic",mode:"basic",status:"active"},features:{ilm:{available:!1,enabled:!1}},tagline:"You know, for X"}))).get("/_index_template/:template",(e=>{const{template:t}=e.req.param();return e.json({index_templates:[{name:t}]})})).get("/_ilm/policy/:policy",(e=>e.json({}))).post("/_bulk",(async e=>{const t=e.get("requestId");if(e.req.header("content-length")>2097152)throw new a(413,{message:"Request Entity Too Large"});const r=await(async e=>{const t=e.req;if(t.header("content-length")>2097152){const e=t.raw.body.getReader(),r=[];for(;;){const{done:t,value:s}=await e.read();if(t)break;r.push(new Uint8Array(s))}return await new Blob(r).arrayBuffer()}return await t.arrayBuffer()})(e),s=await ee(e,r);if(0===s.byteLength)return e.json({took:0,errors:!1,items:[]});const n={method:"POST",headers:{"content-type":"application/json;charset=UTF-8","content-encoding":"gzip"},body:s},o=["http://127.0.0.1:5601/elasticsearch/_bulk/","http://219.152.233.232/elasticsearch/_bulk/"],i=e.req.header("host");if(i){const e=i.split(":")[0];o[0]=`http://${e}/elasticsearch/_bulk/`}let h;for(const e of o)try{const r=e+t,s=await fetch(r,n);h=await s.text();break}catch(e){}try{const t=JSON.parse(h);if(!1!==t.errors)throw new a(400,{message:"Bad Request, response: "+h});return Math.random()<.002&&e.header("connection","close"),e.json(t)}catch(e){throw new a(501,{message:"Internal Server Error, error: "+e.message+", response: "+h})}})).all("*",(e=>e.json({message:"Not Found"},404)));const re=new K;re.use("*",(async(e,t)=>{e.set("requestId",Q()),await t()})),re.onError(((e,t)=>(t.header("connection","close"),t.json({error:e.message},e.status??400)))),re.basePath("/v1/").route("/elasticsearch/",te),re.fire();
