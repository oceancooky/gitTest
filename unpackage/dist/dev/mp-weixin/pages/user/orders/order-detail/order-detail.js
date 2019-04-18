(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/orders/order-detail/order-detail"],{

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/main.js?{\"page\":\"pages%2Fuser%2Forders%2Forder-detail%2Forder-detail\"}":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/main.js?{"page":"pages%2Fuser%2Forders%2Forder-detail%2Forder-detail"} ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _orderDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/user/orders/order-detail/order-detail.vue */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_orderDetail.default));

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue":
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_detail_vue_vue_type_template_id_58e00d54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.vue?vue&type=template&id=58e00d54& */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=template&id=58e00d54&");
/* harmony import */ var _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.vue?vue&type=script&lang=js& */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_detail_vue_vue_type_template_id_58e00d54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_detail_vue_vue_type_template_id_58e00d54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=template&id=58e00d54&":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=template&id=58e00d54& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_template_id_58e00d54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-detail.vue?vue&type=template&id=58e00d54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=template&id=58e00d54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_template_id_58e00d54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_detail_vue_vue_type_template_id_58e00d54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;































































































var _goods_card = _interopRequireDefault(__webpack_require__(/*! ../../../../template/goods_card */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/template/goods_card.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: {
    goodsCard: _goods_card.default },

  data: function data() {
    return {
      id: '',
      order: {},
      cost: '',
      address: {},
      btn: [],
      open_area: 0,
      customerOnline: true,
      tipContent: '',
      showPop: false,
      popUp: false,
      timer: {},
      orderStatusNum: 0,
      orderStatus: [{
        color: '#FFFFFF',
        title: '',
        subtitle: '' },

      {
        color: '#CB0E0E',
        title: '等待买家付款',
        subtitle: '订单将于 --:--:-- 后自动关闭' },

      {
        color: '#737A81',
        title: '交易关闭',
        subtitle: '用户已取消' },


      {
        color: '#28BC83',
        title: '交易成功',
        subtitle: '欢迎再次光临！' },

      {
        color: '#737A81',
        title: '交易关闭',
        subtitle: '系统关闭' },

      {
        color: '#4483EB',
        title: '卖家已发货',
        subtitle: '订单将于 --:--:-- 后自动收货' },

      {
        color: '#CB0E0E',
        title: '等待卖家发货',
        subtitle: '卖家正在处理订单,即将发货！' }] };



  },
  onLoad: function onLoad(options) {
    this.id = options.id;
    this.getOrder();
  },
  onShow: function onShow() {
    this.getCustomerTime();
  },
  onHide: function onHide() {
    this.popUp = false;
  },
  onUnload: function onUnload() {
    clearInterval(this.tiktok);
  },
  methods: {
    getOrder: function getOrder() {
      var that = this;
      this.$api.get('/api/order/getRow', {
        order_id: this.id },
      function (res) {
        console.log(res);
        if (res.data.code == 200) {
          var data = res.data.data;
          that.order = data;
          that.btn = data.operable.btn;
          if (data.consignee_info) {
            that.address = data.consignee_info;
          }
          that.orderState(data.order_status, data.pay_status, data.delivery_status);
        }
      });
    },

    //顶部颜色
    orderState: function orderState(status, pay, delivery) {
      if (status > 1 && status < 5) {
        this.orderStatusNum = status;
      }
      if (status == 0) {
        if (pay == 0 && delivery == 0) {
          this.orderStatusNum = 1;
          if (this.order.pay_overtime) {
            this.getTimer(this.order.pay_overtime);
          } else {
            this.orderStatus[1].title = this.order.operable.status_text;
            this.orderStatus[1].subtitle = '';
          }

        }
        if (pay == 1 && delivery == 0) {
          this.orderStatusNum = 6;
        }
      }
      if (status == 1) {
        if (pay == 1 && delivery == 0) {
          this.orderStatusNum = 6;
        }
        if (pay && delivery) {
          this.orderStatusNum = 5;
          this.getTimer(this.order.delivery_overtime);
        }
      }
    },

    //订单操作
    operate: function operate(op) {
      var that = this;
      console.log(op);
      if (op == 'call_cancel') {//电话取消
        that.popUp = true;
      } else if (op == "pay") {//立即付款
        that.doPay();
      } else if (op == "invoice") {//查看发票
        that.scanInvoice();
      } else if (op == "cancel") {//直接取消
        uni.showModal({
          title: '确认取消订单吗?',
          confirmColor: '#e9101f',
          success: function success(res) {
            if (res.confirm) {
              that.sendOP(op);
            }
          } });

      } else if (op == "delete" || op == "remove") {
        uni.showModal({
          title: '确认删除订单吗?',
          confirmColor: '#e9101f',
          success: function success(res) {
            if (res.confirm) {
              that.sendOP(op);
            }
          } });

      } else if (op == "reset") {
        // that.doPay()
        that.sendOP(op);
      } else if (op == "again") {
        that.sendOP(op);
      } else if (op == "delivery") {
        uni.navigateTo({
          url: '../logistics/logistics?id=' + that.id });

      } else if (op == "confirm") {
        uni.showModal({
          title: '确认收货吗?',
          confirmColor: '#e9101f',
          success: function success(res) {
            if (res.confirm) {
              that.sendOP(op);
            }
          } });

      }
    },
    sendOP: function sendOP(op) {
      var that = this;
      this.$api.get('/api/order/operate', {
        order_id: this.id,
        operate: op },
      function (res) {
        console.log(res);
        if (res.data.code == 200) {
          uni.showToast({
            title: res.data.msg });

          if (op == "delete" || op == "remove") {
            return uni.navigateBack();
          }
          if (op == "again") {
            uni.switchTab({
              url: '/pages/tabbar/tabbar-3/tabbar-3' });

          }

          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2];
          prevPage.$vm.upDate = true;
          // that.renewRow(id, index)
          that.getOrder();
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: "none" });

        }
      });
    },
    doPay: function doPay() {
      var that = this;
      this.$api.post('/api/miniprogram.payment/unifiedOrder', {
        order_id: this.id },
      function (res) {
        console.log(res);
        if (res.data.code == 200) {
          var payObj = res.data.data;
          payObj.success = function () {
            uni.showToast({
              title: '支付成功!' });

            that.getOrder();
          };
          payObj.fail = function () {
            uni.showToast({
              title: '您取消了支付',
              icon: 'none' });

          };
          uni.requestPayment(payObj);
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      });
    },

    //客服是否在线
    getCustomerTime: function getCustomerTime() {
      var that = this;
      this.$api.get('/api/common/getContent', {}, function (res) {
        console.log(res);
        if (res.data.code == 200) {
          that.customerOnline = res.data.data.customer_online.flag;
        }
      });
    },

    isShowTip: function isShowTip(op, field_id, field) {
      if (op == 1) {
        if (!this.customerOnline) {
          this.tipContent = '当前不在工作时间范围内，请您晚点再来咨询呀~';
          this.showPop = true;
        }

      } else {
        uni.navigateTo({
          url: '/pages/goods_detail/goods_detail?id=' + field_id + '&field=' + field });

      }
    },
    hidePop: function hidePop() {
      this.showPop = false;
      this.popUp = false;
    },

    godetail: function godetail(field_id, field) {
      if (field != 0 && this.open_area != field) {
        uni.showToast({
          title: '当前专区未开放，您暂时还无法查看该商品',
          icon: 'none' });

      } else {
        uni.navigateTo({
          url: '/pages/goods_detail/goods_detail?id=' + field_id + '&field=' + field });

      }
    },

    //查看发票
    scanInvoice: function scanInvoice(id, index) {
      var filePath = [];
      filePath[0] = this.order.invoice_file_url;
      uni.previewImage({
        current: filePath[0],
        urls: filePath });

    },

    //计时器
    getTimer: function getTimer(endtime) {
      var that = this;
      var timer = {};
      that.tiktok = setInterval(function () {
        var result = endtime - Math.round(new Date() / 1000);
        timer.h = Math.floor(result / 3600 % 24) < 10 ? '0' + Math.floor(result / 3600 % 24) : Math.floor(result / 3600 %
        24);
        timer.m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 %
        60);
        timer.s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);
        timer.d = Math.floor(result / 3600 / 24);
        if (that.orderStatusNum == 1) {
          that.orderStatus[1].subtitle = '订单将于 ' + timer.h + ':' + timer.m + ':' + timer.s + ' 后自动关闭';
        } else {
          that.orderStatus[5].subtitle = '订单将于 ' + timer.d + '天' + timer.h + ':' + timer.m + ':' + timer.s + ' 后自动收货';
        }
        that.timer = timer;
        that.clearTimer();
      }, 1000);

    },
    //清除定时器
    clearTimer: function clearTimer() {
      var that = this;
      var timer = this.timer;
      var url = '';
      if (timer.h == '00' && timer.m == '00' && timer.s == '00') {
        clearInterval(that.tiktok);
        if (that.orderStatusNum == 1) {
          url = '/api/order/closeOrder';
        } else {
          url = '/api/order/receiveOrder';
        }
        that.$api.get(url, {
          order_id: that.id },
        function (res) {
          console.log(res);
          if (res.data.code == 200) {
            that.getOrder();
          }
        });
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=template&id=58e00d54&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/user/orders/order-detail/order-detail.vue?vue&type=template&id=58e00d54& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: "padding-content flex-con-col order-state",
        style: { backgroundColor: _vm.orderStatus[_vm.orderStatusNum].color }
      },
      [
        _c("view", { staticClass: "order-state-title" }, [
          _vm._v(_vm._s(_vm.orderStatus[_vm.orderStatusNum].title))
        ]),
        _c("view", { staticClass: "order-state-subtitle" }, [
          _vm._v(_vm._s(_vm.orderStatus[_vm.orderStatusNum].subtitle))
        ])
      ]
    ),
    _vm.address.name
      ? _c("view", { staticClass: "padding-content flex-con address" }, [
          _c("view", { staticClass: "address-edit" }),
          _c("view", { staticClass: "address-info" }, [
            _c("view", { staticClass: "address-name flex-con" }, [
              _vm._v(_vm._s(_vm.address.name)),
              _c("view", { staticClass: "address-phone" }, [
                _vm._v(_vm._s(_vm.address.phone))
              ])
            ]),
            _c("view", { staticClass: "address-detail flex-con" }, [
              _vm._v(_vm._s(_vm.address.address))
            ])
          ])
        ])
      : _vm._e(),
    _c(
      "view",
      { staticClass: "content martop20 padding-content orders-goods-wrap" },
      [
        _c(
          "view",
          { staticClass: "order-item-goods" },
          _vm._l(_vm.order.goods_info, function(item, index) {
            return _c(
              "view",
              {
                key: index,
                attrs: { eventid: "5be0d316-0-" + index },
                on: {
                  tap: function($event) {
                    _vm.isShowTip(2, item.field_id, item.field)
                  }
                }
              },
              [
                _c("goodsCard", {
                  attrs: { goodsinfo: item, mpcomid: "5be0d316-0-" + index }
                })
              ],
              1
            )
          })
        )
      ]
    ),
    _c(
      "view",
      { staticClass: "content padding-content menu menu-title remark" },
      [
        _vm._v("留言:"),
        _c("view", [_vm._v(_vm._s(_vm.order.remark ? _vm.order.remark : "无"))])
      ]
    ),
    _c("view", { staticClass: "content martop20 padding-top20" }, [
      _c("view", { staticClass: "info-item flex-con justify-bet" }, [
        _vm._v("商品金额"),
        _c("view", [_vm._v("￥" + _vm._s(_vm.order.goods_total))])
      ]),
      _c("view", { staticClass: "info-item flex-con justify-bet" }, [
        _vm._v("支付方式"),
        _c("view", [
          _c("text", [_vm._v("￥" + _vm._s(_vm.order.order_amount))]),
          _vm.order.coin_total > 0
            ? _c("text", [
                _vm._v("+" + _vm._s(_vm.order.coin_total) + "购物币")
              ])
            : _vm._e(),
          _vm.order.point_total > 0
            ? _c("text", [_vm._v("+" + _vm._s(_vm.order.point_total) + "积分")])
            : _vm._e()
        ])
      ]),
      _c("view", { staticClass: "info-item flex-con justify-bet" }, [
        _vm._v("运费"),
        _c("view", [_vm._v("￥" + _vm._s(_vm.order.freight))])
      ])
    ]),
    _c(
      "view",
      { staticClass: "content padding-content menu menu-title goods-total" },
      [
        _vm._v("共" + _vm._s(_vm.order.goods_num) + "件商品"),
        _c("view", [
          _vm._v("合计："),
          _c("text", [_vm._v("￥" + _vm._s(_vm.order.order_amount))]),
          _vm.order.coin_total > 0
            ? _c("text", [
                _vm._v("+" + _vm._s(_vm.order.coin_total) + "购物币")
              ])
            : _vm._e(),
          _vm.order.point_total > 0
            ? _c("text", [_vm._v("+" + _vm._s(_vm.order.point_total) + "积分")])
            : _vm._e(),
          _vm.order.freight > 0
            ? _c("text", [_vm._v("+" + _vm._s(_vm.order.freight) + "运费")])
            : _vm._e()
        ])
      ]
    ),
    _c("view", { staticClass: "content martop20" }, [
      _c("view", { staticClass: "padding-content menu menu-title" }, [
        _vm._v("订单信息")
      ]),
      _c("view", { staticClass: "padding-top20" }, [
        _c("view", { staticClass: "info-item flex-con" }, [
          _vm._v("订单编号:"),
          _c("view", [_vm._v(_vm._s(_vm.order.order_no))])
        ]),
        _c("view", { staticClass: "info-item flex-con" }, [
          _vm._v("创建时间:"),
          _c("view", [_vm._v(_vm._s(_vm.order.create_time_text))])
        ]),
        _vm.order.pay_time_text
          ? _c("view", { staticClass: "info-item flex-con" }, [
              _vm._v("支付时间:"),
              _c("view", [_vm._v(_vm._s(_vm.order.pay_time_text))])
            ])
          : _vm._e()
      ])
    ]),
    _c(
      "view",
      { staticClass: "content padding-content contact" },
      [
        _c("image", {
          attrs: { src: "/static/img/common_icon_call.png", mode: "widthFix" }
        }),
        _vm._v("联系客服"),
        _vm.customerOnline
          ? _c("button", { attrs: { "open-type": "contact" } }, [_vm._v("1")])
          : _c("button", {
              attrs: { eventid: "5be0d316-1" },
              on: {
                tap: function($event) {
                  _vm.isShowTip(1)
                }
              }
            })
      ],
      1
    ),
    _c(
      "view",
      { staticClass: "content padding-content flex-con order-item-btns" },
      _vm._l(_vm.btn, function(item, index) {
        return _c(
          "button",
          {
            key: index,
            class: {
              confirm: item.operate == "pay" || item.operate == "confirm"
            },
            attrs: { eventid: "5be0d316-2-" + index },
            on: {
              tap: function($event) {
                _vm.operate(item.operate)
              }
            }
          },
          [_vm._v(_vm._s(item.name))]
        )
      })
    ),
    _vm.showPop
      ? _c(
          "view",
          {
            staticClass: "tip-wrap",
            attrs: { eventid: "5be0d316-4" },
            on: {
              touchmove: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                _vm.moveHandle($event)
              }
            }
          },
          [
            _c(
              "view",
              { staticClass: "tip-box flex-con-col" },
              [
                _c("view", { staticClass: "tip-title" }, [
                  _vm._v(_vm._s(_vm.tipContent))
                ]),
                _c(
                  "button",
                  {
                    staticClass: "tip_confirm_btn",
                    attrs: { eventid: "5be0d316-3" },
                    on: { tap: _vm.hidePop }
                  },
                  [_c("text", [_vm._v("我知道了")])]
                )
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm.popUp
      ? _c("view", {
          staticClass: "popup",
          attrs: { eventid: "5be0d316-5" },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              _vm.moveHandle($event)
            },
            tap: _vm.hidePop
          }
        })
      : _vm._e(),
    _vm.popUp
      ? _c(
          "view",
          {
            staticClass: "diyModal flex-con-col",
            attrs: { eventid: "5be0d316-7" },
            on: {
              touchmove: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                _vm.moveHandle($event)
              }
            }
          },
          [
            _c("view", { staticClass: "diyModal-title padding-content" }, [
              _vm._v("已付款订单请联系客服取消~")
            ]),
            _c(
              "view",
              { staticClass: "diyModal-btn flex-con" },
              [
                _c(
                  "button",
                  {
                    attrs: { eventid: "5be0d316-6" },
                    on: { tap: _vm.hidePop }
                  },
                  [_vm._v("取消")]
                ),
                _c("button", { attrs: { "open-type": "contact" } }, [
                  _vm._v("确定")
                ])
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../../../Documents/HBuilderProjects/龙腾虎跃/main.js?{\"page\":\"pages%2Fuser%2Forders%2Forder-detail%2Forder-detail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/user/orders/order-detail/order-detail.js.map