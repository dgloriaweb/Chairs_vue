(function(t){function e(e){for(var n,i,o=e[0],u=e[1],s=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"00da":function(t,e,r){},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},1500:function(t,e,r){"use strict";var n=r("6608"),a=r.n(n);a.a},"1eef":function(t,e,r){"use strict";var n=r("85fe"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{title:t.title}}),r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[r("router-link",{attrs:{to:"/"}})],1)])},o=[],u={name:"header2",props:{title:String},data:function(){return{name:"Beatrix"}}},s=u,l=(r("1eef"),r("2877")),f=Object(l["a"])(s,i,o,!1,null,"ccec7c88",null),p=f.exports,h={name:"App",data:function(){return{title:"Vue Chairs DB"}},components:{Header:p}},d=h,v=(r("034f"),Object(l["a"])(d,a,c,!1,null,null,null)),b=v.exports,m=(r("a347"),r("8c4f")),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.chairs,(function(t){return r("li",{key:t.id},[r("Chair",{attrs:{chair:t}})],1)})),0)},y=[],w=(r("d3b7"),r("96cf"),r("1da1")),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:t.chairPath}},[r("p",[t._v("Hello "+t._s(t.chair.title))])])},g=[],j={props:["chair"],computed:{chairPath:function(){return"/chair/".concat(this.chair.id)}}},O=j,k=(r("c25a"),Object(l["a"])(O,x,g,!1,null,"2b5e492e",null)),P=k.exports,C={name:"ChairsList",data:function(){return{chairs:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost/chair_api/public/api/chairs");case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,this.chairs=r.data,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()},components:{Chair:P}},$=C,D=(r("cb7a"),Object(l["a"])($,_,y,!1,null,"0d02a9ca",null)),S=D.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"chair-wrapper",style:t.styles},[r("div",{staticClass:"chair-info"},[r("h1",[t._v(t._s(t.chair.title))]),r("h3",[t._v("Body: ")]),r("p",[t._v(t._s(t.chair.body))])])])])},M=[],R={data:function(){return{chair:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost/chair_api/public/api/chairs/".concat(this.$route.params.id));case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,this.chair=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()}},B=R,H=(r("1500"),Object(l["a"])(B,E,M,!1,null,"a68e062e",null)),T=H.exports;n["a"].use(m["a"]);var J=new m["a"]({mode:"history",routes:[{path:"/",name:"Chairs List",component:S},{path:"/chair/:id",name:"Chairs Detail",component:T}]});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)},router:J}).$mount("#app")},6608:function(t,e,r){},"85ec":function(t,e,r){},"85fe":function(t,e,r){},a06b:function(t,e,r){},a347:function(t,e,r){},c25a:function(t,e,r){"use strict";var n=r("a06b"),a=r.n(n);a.a},cb7a:function(t,e,r){"use strict";var n=r("00da"),a=r.n(n);a.a}});
//# sourceMappingURL=app.3481f3e5.js.map