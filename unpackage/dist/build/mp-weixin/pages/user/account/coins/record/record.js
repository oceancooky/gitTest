(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/account/coins/record/record"],{"0381":function(t,e,n){"use strict";var i=n("6bf0"),a=n.n(i);a.a},"1f08":function(t,e,n){"use strict";n.r(e);var i=n("6fed"),a=n("64c4");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("0381");var o=n("2877"),l=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},"64c4":function(t,e,n){"use strict";n.r(e);var i=n("7e51"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"6bf0":function(t,e,n){},"6fed":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[t.nodata?t._e():n("view",{staticClass:"list padding-content flex-con"},[n("view",{staticClass:"list-item font-thin line-clamp-1"},[t._v("时间")]),n("view",{staticClass:"list-item font-thin"},[t._v("金额")]),n("view",{staticClass:"list-item font-thin"},[t._v("状态")])]),t._l(t.list,function(e,i){return n("view",{key:i,staticClass:"list padding-content flex-con"},[n("view",{staticClass:"list-item font-weg line-clamp-1"},[t._v(t._s(e.create_date))]),n("view",{staticClass:"list-item font-weg"},[t._v(t._s(e.amount))]),0==e.status?n("view",{staticClass:"list-item font-thin col-blue"},[t._v(t._s(e.status_text))]):t._e(),1==e.status?n("view",{staticClass:"list-item font-thin"},[t._v(t._s(e.status_text))]):t._e(),2==e.status?n("view",{staticClass:"list-item font-thin col-red"},[t._v(t._s(e.status_text))]):t._e()])}),n("loadMore",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"9fe89ba0-0"}}),n("naData",{attrs:{nodata:t.nodata,nodataText:t.nodataText,mpcomid:"9fe89ba0-1"}}),n("loading",{attrs:{isLoading:t.isLoading,mpcomid:"9fe89ba0-2"}})],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"7e51":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("1473")),a=o(n("9110")),s=o(n("3764"));function o(t){return t&&t.__esModule?t:{default:t}}var l={components:{loadMore:i.default,naData:a.default,loading:s.default},data:function(){return{page_num:1,page_size:20,list:[],nodataText:"还没有记录哦~",nodata:!1,loadingType:0,isLoading:!1}},onLoad:function(t){this.showLoading(),this.getList()},onPullDownRefresh:function(){var e=this;this.loadingType=0,setTimeout(function(){e.list=[],e.page_num=1,e.getList(),t.stopPullDownRefresh()},800)},onReachBottom:function(){if(0===this.loadingType){this.loadingType=1;this.page_num;this.page_num=this.page_num+1,console.log(this.page_num),this.getList()}},methods:{getList:function(){var e=this;this.nodata=!1,this.$api.get("/api/finance/withdrawLog",{type:0,page_num:this.page_num,page_size:this.page_size},function(n){if(200==n.data.code){var i=e.list,a=n.data.data;setTimeout(function(t){0==i.length?(e.loadingType=0,a.length<=0?e.nodata=!0:e.list=a):a.length<=0?e.loadingType=2:(e.loadingType=0,e.list=i.concat(a))},800)}else t.showToast({title:n.data.msg,icon:"none"});console.log(n)})},showLoading:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1},800)}}};e.default=l}).call(this,n("543d")["default"])},e910:function(t,e,n){"use strict";n("c0c8");var i=s(n("b0ce")),a=s(n("1f08"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["e910","common/runtime","common/vendor"]]]);