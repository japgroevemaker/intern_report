(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1fee63a2":"5fe958b8","chunk-54e7151c":"ad9ff32a","chunk-2d0e4dfd":"eb265732","chunk-22a953a7":"3111ba39","chunk-a628365a":"37f6d67b","chunk-d4015690":"ea225c24","chunk-56e9538a":"670c2cbd"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1fee63a2":1,"chunk-22a953a7":1,"chunk-a628365a":1,"chunk-d4015690":1,"chunk-56e9538a":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1fee63a2":"4ce4200e","chunk-54e7151c":"31d6cfe0","chunk-2d0e4dfd":"31d6cfe0","chunk-22a953a7":"6a11163b","chunk-a628365a":"6fdd0703","chunk-d4015690":"6ef193db","chunk-56e9538a":"befa8d45"}[t]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){l=m[c],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",m.name="ChunkLoadError",m.type=a,m.request=i,n[1](m)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d49":function(t,e,n){"use strict";var a=n("315b"),i=n.n(a);i.a},"315b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navBar"),n("div",{staticClass:"clearfix py-4"}),n("vue-page-transition",{attrs:{name:"overlay-right-full"}},[n("router-view",{key:t.$route.query.name})],1),n("div",{staticClass:"clearfix py-4"}),n("Footer")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav-bar d-flex flex-row justify-content-between position-fixed col-10 pt-3 mt-3 mx-auto"},[n("div",{staticClass:"navbar-brand py-0"},[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{src:"/static/general/logo.svg",height:"25",alt:""}})])],1),n("ul",{staticClass:"navbar-nav pt-1"},[n("li",{staticClass:"nav-item"},[n("i",{staticClass:"fa fa-bars float-right",on:{click:function(e){t.visible=!t.visible}}})])])]),n("transition",{attrs:{name:"nav-menu"}},[t.visible?n("div",{staticClass:"container-fluid nav-container position-fixed"},[n("h3",{staticClass:"position-absolute montserrat -close",on:{click:function(e){t.visible=!t.visible}}},[t._v("sluit")]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-8 ml-3"},[n("ul",{staticClass:"nav flex-column"},[n("li",{staticClass:"nav-item montserrat mt-3",on:{click:function(e){t.visible=!t.visible}}},[n("router-link",{attrs:{to:{name:"home"}}},[t._v("home")])],1),n("li",{staticClass:"nav-item montserrat mt-3",on:{click:function(e){t.visible=!t.visible}}},[n("router-link",{attrs:{to:{name:"inleiding",query:{name:"inleiding"}}}},[t._v("inleiding")])],1),n("li",{staticClass:"nav-item montserrat mt-3",on:{click:function(e){t.visible=!t.visible}}},[n("router-link",{attrs:{to:{name:"chapter",query:{name:"Projecten"}}}},[t._v("projecten")])],1),n("li",{staticClass:"nav-item montserrat mt-3",on:{click:function(e){t.visible=!t.visible}}},[n("router-link",{attrs:{to:{name:"over-mij",query:{name:"over mij"}}}},[t._v("over mij")])],1)])])]),n("div",{staticClass:"row contact-items mt-5"},[n("div",{staticClass:"col-8 ml-3"},[n("ul",{staticClass:"pl-0"},t._l(t.contactItemsUp,(function(e,a){return n("li",{key:a,staticClass:"contact-item montserrat"},[t._v(t._s(e))])})),0)])]),n("div",{staticClass:"row contact-items mt-2"},[n("div",{staticClass:"col-8 ml-3"},[n("ul",{staticClass:"pl-0"},t._l(t.contactItemsDown,(function(e,a){return n("li",{key:a,staticClass:"contact-item montserrat"},[t._v(t._s(e))])})),0)])])])]):t._e()])],1)},c=[],s={data:function(){return{contactItemsUp:["(06) 29 62 06 22","info@joepgravemaker"],contactItemsDown:["lange nieuwstraat 116","ijmuiden"],visible:!1}}},l=s,u=(n("1d49"),n("2877")),m=Object(u["a"])(l,o,c,!1,null,"5f407daa",null),f=m.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("div",{staticClass:"container py-3"},[n("div",{staticClass:"row contact-items my-md-3"},[n("div",{staticClass:"col-5 ml-3 d-md-flex my-md-auto mx-auto"},[n("ul",{staticClass:"pl-0 mr-md-5 mb-md-0"},t._l(t.contactItemsUp,(function(e,a){return n("li",{key:a,staticClass:"contact-item montserrat"},[t._v(t._s(e))])})),0),n("ul",{staticClass:"pl-0 mb-md-0"},t._l(t.contactItemsDown,(function(e,a){return n("li",{key:a,staticClass:"contact-item montserrat"},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"col-5 d-flex justify-content-around my-auto"},t._l(t.links,(function(t,e){return n("a",{key:e,attrs:{href:t.link,target:"blank"}},[n("div",{staticClass:"circle"},[n("img",{attrs:{src:"/static/footer/"+t.image,alt:""}})])])})),0)])])])])},p=[],v={data:function(){return{contactItemsUp:["(06) 29 62 06 22","info@joepgravemaker"],contactItemsDown:["lange nieuwstraat 116","ijmuiden"],links:[{link:"https://www.instagram.com/jap.groevemaker/",image:"instagram.svg"},{link:"https://github.com/japgroevemaker",image:"github.svg"},{link:"https://www.linkedin.com/in/joep-gravemaker/",image:"linkedin.svg"}]}}},h=v,b=(n("8a66"),Object(u["a"])(h,d,p,!1,null,null,null)),k=b.exports,g={name:"app",components:{navBar:f,Footer:k}},y=g,C=(n("5c0b"),Object(u["a"])(y,i,r,!1,null,null,null)),w=C.exports,_=n("8c4f"),j=n("f0eb");function x(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var P={mounted:function(){var t=x(this);t&&(document.title=t)}};a["a"].use(j["default"]),a["a"].use(_["a"]),a["a"].mixin(P);var O=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-22a953a7")]).then(n.bind(null,"c3b0"))}},{path:"/chapter/",name:"chapter",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-d4015690")]).then(n.bind(null,"1c88"))}},{path:"/page/",name:"inleiding",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-a628365a")]).then(n.bind(null,"14eb"))}},{path:"/page/",name:"over-mij",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-2d0e4dfd"),n.e("chunk-a628365a")]).then(n.bind(null,"14eb"))}},{path:"/project/",name:"project",component:function(){return Promise.all([n.e("chunk-54e7151c"),n.e("chunk-56e9538a")]).then(n.bind(null,"9593"))}},{path:"*",name:"404",component:function(){return n.e("chunk-1fee63a2").then(n.bind(null,"7746"))}}]});a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:O,render:function(t){return t(w)}})},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"5f80":function(t,e,n){},"8a66":function(t,e,n){"use strict";var a=n("5f80"),i=n.n(a);i.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.94adf554.js.map