(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56e9538a"],{"857a":function(t,a,s){var e=s("1d80"),i=/"/g;t.exports=function(t,a,s,o){var n=String(e(t)),c="<"+a;return""!==s&&(c+=" "+s+'="'+String(o).replace(i,"&quot;")+'"'),c+">"+n+"</"+a+">"}},9593:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container-fluid mt-5"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-10 mx-auto"},[s("div",{staticClass:"header-image w-100",style:"background-image: url(/static/projects/"+t.headerImage+")"},[s("div",{staticClass:"-box position-absolute"},[s("h2",{staticClass:"-title mt-n2"},[t._v(" "+t._s(t.title)+" ")])])])])])]),s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-10 mx-auto"},[s("p",{staticClass:"caption"},[t._v(" "+t._s(t.caption)+" ")])])]),s("div",{staticClass:"row mb-5 mx-auto"},[s("div",{staticClass:"col-10 col-md-5 mx-auto mx-md-0 pl-md-0 ml-md-auto"},[s("h3",{staticClass:"text-heading mb-n1"},[t._v(" "+t._s(t.myRole.title)+" ")]),s("p",{staticClass:"plain-text"},[t._v(" "+t._s(t.myRole.text)+" ")])]),s("div",{staticClass:"col-md-1"}),s("div",{staticClass:"col-10 col-md-4 mx-auto mx-md-0 pr-md-0 mr-md-auto"},[s("h3",{staticClass:"text-heading"},[t._v(" "+t._s(t.tools.title)+" ")]),s("div",{staticClass:"d-flex justify-content-between"},t._l(t.tools.icons,(function(t,a){return s("div",{key:a},[s("img",{staticClass:"icon",attrs:{src:"/static/projects/icons/"+t,alt:""}})])})),0)])]),s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-10 mx-auto"},[t.text[0]?s("p",{staticClass:"plain-text"},[t._v(" "+t._s(t.text[0].text)+" ")]):t._e()])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 mx-auto"},t._l(t.images,(function(a,e){return s("div",{key:e},[s("h3",{staticClass:"text-heading"},[t._v(" "+t._s(a.title)+" ")]),s("div",{staticClass:"project-image mb-3 mb-md-5",style:"background-image: url(/static/projects/"+a.image+")"})])})),0)]),s("div",{staticClass:"row mt-3 mb-5 pb-3"},[s("div",{staticClass:"col-10 mx-auto"},[t.text[1]?s("p",{staticClass:"plain-text mb-md-5"},[t._v(" "+t._s(t.text[1].text)+" ")]):t._e(),t.link?s("a",{staticClass:"btn btn-primary btn-block d-md-none",attrs:{href:t.link,target:"blank"}},[t._v(" live voorbeeld ")]):t._e(),t.link?s("a",{staticClass:"btn btn-primary w-50 mx-auto d-none d-md-block",attrs:{href:t.link,target:"blank"}},[t._v(" live voorbeeld ")]):t._e()])])])])},i=[],o=(s("b0c0"),s("9911"),s("d722")),n={data:function(){return{headerImage:"",title:"",caption:"",myRole:{},tools:{},text:[],images:[],link:null,projectAll:[],error:""}},created:function(){this.fetchProjectData(this.$route.query.name),this.backToTop()},methods:{backToTop:function(){window.scrollTo(0,0)},fetchProjectData:function(t){var a=this;o["a"].getProject(t).then((function(t){var s=t.data[0];a.projectAll=t.data,a.headerImage=s.headerImage,a.title=s.title,a.caption=s.caption,a.myRole=s.myrole,a.tools=s.tools,a.text=s.text,a.images=s.images,a.link=s.link})).catch((function(t){a.error=t.message}))}}},c=n,l=(s("c520"),s("2877")),r=Object(l["a"])(c,e,i,!1,null,null,null);a["default"]=r.exports},9911:function(t,a,s){"use strict";var e=s("23e7"),i=s("857a"),o=s("eae9");e({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},b0c0:function(t,a,s){var e=s("83ab"),i=s("9bf2").f,o=Function.prototype,n=o.toString,c=/^\s*function ([^ (]*)/,l="name";!e||l in o||i(o,l,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(t){return""}}})},c520:function(t,a,s){"use strict";var e=s("fee1"),i=s.n(e);i.a},eae9:function(t,a,s){var e=s("d039");t.exports=function(t){return e((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},fee1:function(t,a,s){}}]);
//# sourceMappingURL=chunk-56e9538a.2e79e9a6.js.map