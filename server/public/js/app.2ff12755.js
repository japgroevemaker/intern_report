(function(e){function t(t){for(var a,i,o=t[0],s=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1fee63a2":"40ab8782","chunk-54e7151c":"ad9ff32a","chunk-2d0e4dfd":"eb265732","chunk-01a525e9":"1c24b54e","chunk-22a953a7":"72bdb4d9","chunk-a628365a":"37f6d67b","chunk-56e9538a":"2e79e9a6"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1fee63a2":1,"chunk-01a525e9":1,"chunk-22a953a7":1,"chunk-a628365a":1,"chunk-56e9538a":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1fee63a2":"55d95dc1","chunk-54e7151c":"31d6cfe0","chunk-2d0e4dfd":"31d6cfe0","chunk-01a525e9":"3084e0d8","chunk-22a953a7":"4ee1fbc5","chunk-a628365a":"6fdd0703","chunk-56e9538a":"0dfc35d7"}[e]+".css",r=s.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete i[e],d.parentNode.removeChild(d),n(c)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",f.name="ChunkLoadError",f.type=a,f.request=i,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navBar"),n("div",{staticClass:"clearfix py-4"}),n("vue-page-transition",{attrs:{name:"overlay-right-full"}},[n("router-view",{key:e.$route.query.name})],1),n("div",{staticClass:"clearfix py-4"}),n("Footer")],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"nav-bar position-fixed col-10 pt-3 mt-3 mx-auto"},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("i",{staticClass:"fa fa-bars float-right",on:{click:function(t){e.visible=!e.visible}}})])])]),n("transition",{attrs:{name:"nav-menu"}},[e.visible?n("div",{staticClass:"container-fluid nav-container position-fixed"},[n("h3",{staticClass:"position-absolute -close",on:{click:function(t){e.visible=!e.visible}}},[e._v("sluit")]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-8 ml-3"},[n("ul",{staticClass:"nav flex-column"},[n("li",{staticClass:"nav-item mt-3",on:{click:function(t){e.visible=!e.visible}}},[n("router-link",{attrs:{to:{name:"home"}}},[e._v("home")])],1),n("li",{staticClass:"nav-item mt-3",on:{click:function(t){e.visible=!e.visible}}},[n("router-link",{attrs:{to:{name:"inleiding",query:{name:"inleiding"}}}},[e._v("inleiding")])],1),n("li",{staticClass:"nav-item mt-3",on:{click:function(t){e.visible=!e.visible}}},[n("router-link",{attrs:{to:{name:"chapter",query:{name:"Projecten"}}}},[e._v("projecten")])],1),n("li",{staticClass:"nav-item mt-3",on:{click:function(t){e.visible=!e.visible}}},[n("router-link",{attrs:{to:{name:"over-mij",query:{name:"over mij"}}}},[e._v("over mij")])],1)])])]),n("div",{staticClass:"row contact-items mt-5"},[n("div",{staticClass:"col-8 ml-3"},[n("ul",{staticClass:"pl-0"},e._l(e.contactItemsUp,(function(t,a){return n("li",{key:a,staticClass:"contact-item"},[e._v(e._s(t))])})),0)])]),n("div",{staticClass:"row contact-items mt-2"},[n("div",{staticClass:"col-8 ml-3"},[n("ul",{staticClass:"pl-0"},e._l(e.contactItemsDown,(function(t,a){return n("li",{key:a,staticClass:"contact-item"},[e._v(e._s(t))])})),0)])])])]):e._e()])],1)},o=[],s={data:function(){return{contactItemsUp:["(06) 29 62 06 22","info@joepgravemaker"],contactItemsDown:["lange nieuwstraat 116","ijmuiden"],visible:!1}}},l=s,u=(n("75c1"),n("2877")),f=Object(u["a"])(l,c,o,!1,null,"22b65ecf",null),d=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",[n("div",{staticClass:"container py-3"},[n("div",{staticClass:"row contact-items my-md-3"},[n("div",{staticClass:"col-5 ml-3 d-md-flex my-md-auto mx-auto"},[n("ul",{staticClass:"pl-0 mr-md-5 mb-md-0"},e._l(e.contactItemsUp,(function(t,a){return n("li",{key:a,staticClass:"contact-item"},[e._v(e._s(t))])})),0),n("ul",{staticClass:"pl-0 mb-md-0"},e._l(e.contactItemsDown,(function(t,a){return n("li",{key:a,staticClass:"contact-item"},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"col-5 d-flex justify-content-around my-auto"},e._l(e.links,(function(e,t){return n("a",{key:t,attrs:{href:e.link}},[n("div",{staticClass:"circle"},[n("img",{attrs:{src:"/static/footer/"+e.image,alt:""}})])])})),0)])])])])},p=[],v={data:function(){return{contactItemsUp:["(06) 29 62 06 22","info@joepgravemaker"],contactItemsDown:["lange nieuwstraat 116","ijmuiden"],links:[{link:"https://www.instagram.com/jap.groevemaker/",image:"instagram.svg"},{link:"https://github.com/japgroevemaker",image:"github.svg"},{link:"https://www.linkedin.com/in/joep-gravemaker/",image:"linkedin.svg"}]}}},h=v,k=(n("8a66"),Object(u["a"])(h,m,p,!1,null,null,null)),b=k.exports,g={name:"app",components:{navBar:d,Footer:b}},y=g,C=(n("5c0b"),Object(u["a"])(y,i,r,!1,null,null,null)),w=C.exports,_=n("8c4f"),j=n("f0eb");function x(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var P={mounted:function(){var e=x(this);e&&(document.title=e)}};a["a"].use(j["default"]),a["a"].use(_["a"]),a["a"].mixin(P);var O=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-22a953a7")]).then(n.bind(null,"c3b0"))}},{path:"/chapter/",name:"chapter",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-01a525e9")]).then(n.bind(null,"1c88"))}},{path:"/page/",name:"inleiding",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-a628365a")]).then(n.bind(null,"14eb"))}},{path:"/page/",name:"over-mij",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-a628365a")]).then(n.bind(null,"14eb"))}},{path:"/project/",name:"project",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-56e9538a")]).then(n.bind(null,"9593"))}},{path:"*",name:"404",component:function(){return n.e("chunk-1fee63a2").then(n.bind(null,"7746"))}}]});a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:O,render:function(e){return e(w)}})},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"5f80":function(e,t,n){},"63d9":function(e,t,n){},"75c1":function(e,t,n){"use strict";var a=n("63d9"),i=n.n(a);i.a},"8a66":function(e,t,n){"use strict";var a=n("5f80"),i=n.n(a);i.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.2ff12755.js.map