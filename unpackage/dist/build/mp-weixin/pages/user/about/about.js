(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/about/about"],{"12df":function(t,n,e){"use strict";e.r(n);var a=e("8040"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=o.a},"1bb6":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[e("view",{staticClass:"padding-top20"},[e("rich-text",{attrs:{nodes:t.Html,mpcomid:"090fa31b-0"}})],1)])},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"58f2":function(t,n,e){"use strict";var a=e("f09f"),o=e.n(a);o.a},8040:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{Html:"",from:0}},onLoad:function(n){n.from&&(this.from=n.from,t.setNavigationBarTitle({title:"用户协议"})),this.getInfo()},methods:{getInfo:function(){var n=this;this.$api.get("/api/common/getContent",{},function(e){console.log(e),200==e.data.code?0==n.from?n.Html=n.formatImg(e.data.data.aboutUs):n.Html=n.formatImg(e.data.data.privacyAgreement):t.showToast({title:e.data.msg,icon:"none"})})},formatImg:function(t){var n=t.replace(/<img[^>]*>/gi,function(t,n){t=t.replace(/style=\"(.*)\"/gi,'style="width: 100%;display: block;float: left;"');return t});return n}}};n.default=e}).call(this,e("543d")["default"])},b061:function(t,n,e){"use strict";e.r(n);var a=e("1bb6"),o=e("12df");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("58f2");var u=e("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},bad3:function(t,n,e){"use strict";e("c0c8");var a=r(e("b0ce")),o=r(e("b061"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},f09f:function(t,n,e){}},[["bad3","common/runtime","common/vendor"]]]);