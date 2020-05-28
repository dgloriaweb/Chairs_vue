(function(t){function e(e){for(var n,c,s=e[0],o=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"05d9":function(t,e,r){},"0844":function(t,e,r){"use strict";var n=r("05d9"),a=r.n(n);a.a},"157f":function(t,e,r){},"1eef":function(t,e,r){"use strict";var n=r("85fe"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{title:t.title}}),r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[r("router-link",{attrs:{to:"/"}})],1)])},s=[],o={name:"header2",props:{title:String},data:function(){return{name:"Beatrix"}}},u=o,l=(r("1eef"),r("2877")),f=Object(l["a"])(u,c,s,!1,null,"ccec7c88",null),p=f.exports,h={name:"App",data:function(){return{title:"Vue Chairs DB"}},components:{Header:p}},d=h,v=(r("034f"),Object(l["a"])(d,a,i,!1,null,null,null)),m=v.exports,b=(r("a347"),r("8c4f")),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.chairs,(function(t){return r("li",{key:t.id},[r("Chair",{attrs:{chair:t}})],1)})),0)},y=[],_=(r("d3b7"),r("96cf"),r("1da1")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:t.chairPath}},[r("p",[t._v(t._s(t.chair.name))]),r("section",{staticClass:"text-gray-700 body-font"},[r("div",{staticClass:"container px-5 py-24 mx-auto"},[r("div",{staticClass:"flex flex-wrap -m-4"},[r("div",{staticClass:"lg:w-1/4 md:w-1/2 p-4 w-full",staticStyle:{width:"100%"}},[r("a",{staticClass:"block relative h-48 rounded overflow-hidden"},[r("img",{attrs:{src:t.posterImage,alt:t.movie.title}})]),r("div",{staticClass:"mt-4"},[r("h3",{staticClass:"text-gray-500 text-xs tracking-widest title-font mb-1"},[t._v(" CATEGORY ")]),r("h2",{staticClass:"text-gray-900 title-font text-lg font-medium"},[t._v(" The Catalyzer ")]),r("p",{staticClass:"mt-1"},[t._v("$16.00")])])])])])])])},w=[],C={props:["chair"],computed:{posterImage:function(){return"/".concat(this.chair.img_url)},chairPath:function(){return"/chair/".concat(this.chair.id)}}},O=C,j=(r("0844"),Object(l["a"])(O,g,w,!1,null,"6bf5d572",null)),k=j.exports,P={name:"ChairsList",data:function(){return{chairs:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost/chair_api/public/api/chairs");case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,this.chairs=r.data,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()},components:{Chair:k}},$=P,S=(r("95bd"),Object(l["a"])($,x,y,!1,null,"07683afe",null)),D=S.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"chair-wrapper",style:t.styles},[r("div",{staticClass:"chair-info"},[r("h1",[t._v(t._s(t.chair.name))]),r("h3",[t._v("Price: ")]),r("p",[t._v(t._s(t.chair.price))])])])])},R=[],T={data:function(){return{chair:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost/chair_api/public/api/chairs/".concat(this.$route.params.id));case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,this.chair=r.data,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()}},M=T,A=(r("fbf1"),Object(l["a"])(M,E,R,!1,null,"12bb1aa4",null)),B=A.exports;n["a"].use(b["a"]);var H=new b["a"]({mode:"history",routes:[{path:"/",name:"Chairs List",component:D},{path:"/chair/:id",name:"Chairs Detail",component:B}]});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)},router:H}).$mount("#app")},"85ec":function(t,e,r){},"85fe":function(t,e,r){},"95bd":function(t,e,r){"use strict";var n=r("157f"),a=r.n(n);a.a},a347:function(t,e,r){},c30f:function(t,e,r){},fbf1:function(t,e,r){"use strict";var n=r("c30f"),a=r.n(n);a.a}});
//# sourceMappingURL=app.e952638e.js.map