(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/account/commission/record/record"],{"0a34":function(t,n,e){"use strict";e("c0c8");var i=s(e("b0ce")),a=s(e("8c7c"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"0edf":function(t,n,e){"use strict";var i=e("2141"),a=e.n(i);a.a},2141:function(t,n,e){},4359:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[t.nodata?t._e():e("view",{staticClass:"list padding-content flex-con"},[e("view",{staticClass:"list-item font-thin line-clamp-1"},[t._v("时间")]),e("view",{staticClass:"list-item font-thin"},[t._v("金额")]),e("view",{staticClass:"list-item font-thin"},[t._v("状态")])]),t._l(t.list,function(n,i){return e("view",{key:i,staticClass:"list padding-content flex-con"},[e("view",{staticClass:"list-item font-weg line-clamp-1"},[t._v(t._s(n.create_date))]),e("view",{staticClass:"list-item font-weg"},[t._v(t._s(n.amount))]),0==n.status?e("view",{staticClass:"list-item font-thin col-blue"},[t._v(t._s(n.status_text))]):t._e(),1==n.status?e("view",{staticClass:"list-item font-thin"},[t._v(t._s(n.status_text))]):t._e(),2==n.status?e("view",{staticClass:"list-item font-thin col-red"},[t._v(t._s(n.status_text))]):t._e()])}),e("loadMore",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"6fc358bd-0"}}),e("naData",{attrs:{nodata:t.nodata,nodataText:t.nodataText,mpcomid:"6fc358bd-1"}}),e("loading",{attrs:{isLoading:t.isLoading,mpcomid:"6fc358bd-2"}})],2)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"8c7c":function(t,n,e){"use strict";e.r(n);var i=e("4359"),a=e("9c68");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("0edf");var o=e("2877"),l=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=l.exports},"9c68":function(t,n,e){"use strict";e.r(n);var i=e("e02a"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},e02a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("1473")),a=o(e("9110")),s=o(e("3764"));function o(t){return t&&t.__esModule?t:{default:t}}var l={components:{loadMore:i.default,naData:a.default,loading:s.default},data:function(){return{page_num:1,page_size:20,list:[],nodataText:"还没有记录哦~",nodata:!1,loadingType:0,isLoading:!1}},onLoad:function(t){this.showLoading(),this.getList()},onPullDownRefresh:function(){var n=this;this.loadingType=0,setTimeout(function(){n.list=[],n.page_num=1,n.getList(),t.stopPullDownRefresh()},800)},onReachBottom:function(){if(0===this.loadingType){this.loadingType=1;this.page_num;this.page_num=this.page_num+1,console.log(this.page_num),this.getList()}},methods:{getList:function(){var n=this;this.nodata=!1,this.$api.get("/api/finance/withdrawLog",{type:1,page_num:this.page_num,page_size:this.page_size},function(e){if(200==e.data.code){var i=n.list,a=e.data.data;setTimeout(function(t){0==i.length?(n.loadingType=0,a.length<=0?n.nodata=!0:n.list=a):a.length<=0?n.loadingType=2:(n.loadingType=0,n.list=i.concat(a))},800)}else t.showToast({title:e.data.msg,icon:"none"});console.log(e)})},showLoading:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1},800)}}};n.default=l}).call(this,e("543d")["default"])}},[["0a34","common/runtime","common/vendor"]]]);