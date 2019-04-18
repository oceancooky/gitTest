(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods_detail/goods_detail"],{

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/main.js?{\"page\":\"pages%2Fgoods_detail%2Fgoods_detail\"}":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/main.js?{"page":"pages%2Fgoods_detail%2Fgoods_detail"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _goods_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/goods_detail/goods_detail.vue */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_goods_detail.default));

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue":
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_detail_vue_vue_type_template_id_3d4dba08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_detail.vue?vue&type=template&id=3d4dba08& */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=template&id=3d4dba08&");
/* harmony import */ var _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_detail.vue?vue&type=script&lang=js& */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_detail.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_detail_vue_vue_type_template_id_3d4dba08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_detail_vue_vue_type_template_id_3d4dba08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goods_detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goods_detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=template&id=3d4dba08&":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=template&id=3d4dba08& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_template_id_3d4dba08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/Compressed/HBuilderX.1.3.2.20181214.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goods_detail.vue?vue&type=template&id=3d4dba08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=template&id=3d4dba08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_template_id_3d4dba08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_Compressed_HBuilderX_1_3_2_20181214_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_detail_vue_vue_type_template_id_3d4dba08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































































































var _login = _interopRequireDefault(__webpack_require__(/*! auth/login */ "../../../../../../Documents/HBuilderProjects/龙腾虎跃/auth/login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: {
    login: _login.default },

  data: function data() {
    return {
      ismask: false,
      picIndex: 1,
      popUp: false,
      id: '',
      goods: {},
      goodspic: [],
      Html: '',
      specList: {},
      selectSpec: {},
      selectSpecTxet: '',
      buyType: 1,
      num: 1,
      isDone: false,
      opType: 1,
      field: 0,
      customerOnline: true,
      showTipBox: false };

  },
  onShow: function onShow() {
    this.getCustomerTime();
  },
  onLoad: function onLoad(options) {
    uni.showNavigationBarLoading();
    this.id = options.id;
    this.field = options.field;
    this.getdetail();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      console.log(res.target);
    }
    return {
      title: this.goods.name,
      path: '/pages/goods_detail/goods_detail?id=' + this.id + '&field=' + this.field,
      imageUrl: this.goodspic[0] };

  },
  methods: {
    getIndex: function getIndex(e) {
      this.picIndex = e.detail.current + 1;
    },
    getdetail: function getdetail() {
      var that = this;
      this.$api.get('/api/goods/detail', {
        field_id: this.id,
        field: this.field },
      function (res) {
        console.log(res);
        uni.hideNavigationBarLoading();
        if (res.data.code == 200) {
          var data = res.data.data;
          that.goods = data;
          that.goodspic = data.photo_images;
          that.Html = that.formatImg(data.content);
          // that.contentPic = that.getimgsrc(data.content)
          if (data.spec_group.length > 0) {//多规格处理
            that.dealSpec();
          } else {
            console.log('单规格');
            that.selectSpecTxet = data.default_spec_text;
            that.selectSpec = {
              selectid: data.products.id, //获取规格id
              selectImg: data.products.image ? data.products.image : data.thumb_image, //规格图片
              selectPrice: data.products.price, //规格价格
              selectOriginPrice: data.products.origin_price };

          }
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

          setTimeout(function () {
            uni.navigateBack();
          }, 1000);

        }
      });
    },
    //格式详情图片  宽度100%
    formatImg: function formatImg(html) {
      var newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
        var match = match.replace(/style=\"(.*)\"/gi, 'style="width: 100%;display: block;float: left;"');
        return match;
      });
      return newContent;
    },

    // 			//存放详情图片
    // 			getimgsrc(html) {
    // 				var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
    // 				var imgsrcArr = [];
    // 				var tem = ''
    // 				while (tem = reg.exec(html)) {
    // 					imgsrcArr.push(tem[2]);
    // 				}
    // 				return imgsrcArr;
    // 			},


    //初始化规格
    dealSpec: function dealSpec() {
      var specList = this.goods.spec_group;
      var default_spec_text = this.goods.default_spec_text;
      for (var i = 0; i < specList.length; i++) {
        for (var j = 0; j < specList[i].value.length; j++) {
          if (default_spec_text.indexOf(specList[i].value[j]) != -1) {
            specList[i].checked = j;
          }
        }
      }
      this.specList = specList;
      this.specResult();
    },

    //拼接规格信息
    specResult: function specResult() {
      var specTxet = '';
      var specList = this.specList;
      for (var i = 0; i < specList.length; i++) {
        var itemCheckid = specList[i].checked;
        specTxet = specTxet + specList[i].value[itemCheckid] + ',';
      }
      specTxet = specTxet.slice(0, specTxet.length - 1);
      this.selectSpecTxet = specTxet;
      this.selectSpec = {
        selectid: this.goods.products[specTxet].id, //获取规格id
        selectImg: this.goods.products[specTxet].image ? this.goods.products[specTxet].image : this.goods.thumb_image, //规格图片
        selectPrice: this.goods.products[specTxet].price, //规格价格
        selectOriginPrice: this.goods.products[specTxet].origin_price };

      console.log(this.selectSpec.selectid, this.selectSpecTxet);
    },

    //数量加减
    calNum: function calNum(op) {
      this.num = this.num + op;
      if (this.num <= 0) {
        this.num = 1;
        uni.showToast({
          title: '数量最小为1',
          icon: 'none' });

      }
    },

    getInputNum: function getInputNum(e) {
      this.num = Number(e.detail.value);
    },

    //购买类型
    sleBuyType: function sleBuyType(state) {
      this.buyType = state;
    },

    //选择规格
    sleType: function sleType(index, idx) {
      var that = this;
      var specList = this.specList;
      specList[index].checked = idx;
      that.specList = {};
      that.specList = specList;
      that.specResult();
    },

    //记录是立即购买还是加入购物车
    operateType: function operateType(op) {
      this.opType = op;
      this.showPop();
    },

    //立即购买
    buyNow: function buyNow() {
      //先添加到购物车
      var that = this;
      this.$api.post('/api/order/directOrder', {
        field_id: this.id,
        field: this.field,
        field_product_id: this.selectSpec.selectid,
        number: this.num,
        type: this.buyType },
      function (res) {
        console.log(res);
        if (res.data.code == 200) {
          if (that.field == 0) {
            uni.navigateTo({
              url: '/pages/pay/pay' });

          } else {
            uni.navigateTo({
              url: '/pages/pay/otherpay/otherpay?field=' + that.field });

          }

        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      });
    },

    //加入购物车
    addCart: function addCart() {
      var that = this;
      this.$api.get('/api/cart/addCart', {
        field_id: this.goods.id,
        field: this.field,
        field_product_id: this.selectSpec.selectid,
        num: this.num,
        type: this.buyType },
      function (res) {
        console.log(res);
        var icon = res.data.code == 200 ? 'success' : 'none';
        uni.showToast({
          title: res.data.msg,
          icon: icon });

      });
    },

    //确认
    confirm: function confirm() {
      this.hidePop();
      if (this.opType == 0) {
        this.addCart();
      } else {
        this.buyNow();
      }
    },

    selectOp: function selectOp() {
      this.isDone = true;
      this.showPop();
    },

    showPop: function showPop() {
      this.popUp = true;
    },
    hidePop: function hidePop() {
      this.popUp = false;
      this.isDone = false;
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
    showTips: function showTips() {
      this.showTipBox = !this.showTipBox;
    },

    //顶部大图
    previewImage: function previewImage(index) {
      uni.previewImage({
        current: this.goodspic[index],
        urls: this.goodspic });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=template&id=3d4dba08&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/龙腾虎跃/pages/goods_detail/goods_detail.vue?vue&type=template&id=3d4dba08& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: "content" },
    [
      _c("view", { staticClass: "page-section swiper" }, [
        _c(
          "view",
          { staticClass: "page-section-spacing" },
          [
            _c(
              "swiper",
              {
                staticClass: "swiper",
                attrs: {
                  circular: "true",
                  "indicator-dots": false,
                  autoplay: false,
                  duration: 500,
                  eventid: "0cd4c4ca-1"
                },
                on: { change: _vm.getIndex }
              },
              _vm._l(_vm.goodspic, function(item, index) {
                return _c(
                  "swiper-item",
                  { key: index, attrs: { mpcomid: "0cd4c4ca-0-" + index } },
                  [
                    _c("view", { staticClass: "swiper-item" }, [
                      _c("image", {
                        attrs: { src: item, eventid: "0cd4c4ca-0-" + index },
                        on: {
                          tap: function($event) {
                            _vm.previewImage(index)
                          }
                        }
                      })
                    ])
                  ]
                )
              })
            ),
            _c("view", { staticClass: "pic_index" }, [
              _vm._v(_vm._s(_vm.picIndex) + "/" + _vm._s(_vm.goodspic.length))
            ])
          ],
          1
        )
      ]),
      _c("view", { staticClass: "goods-maininfo" }, [
        _c("view", { staticClass: "price flex-con" }, [
          _c("view", { staticClass: "r-price" }, [
            _vm._v("￥"),
            _c("view", [_vm._v(_vm._s(_vm.goods.price))])
          ]),
          _c("view", { staticClass: "o-price" }, [
            _vm._v("￥" + _vm._s(_vm.goods.origin_price))
          ])
        ]),
        _c("view", { staticClass: "title" }, [_vm._v(_vm._s(_vm.goods.name))]),
        _c("view", { staticClass: "subtilte" }, [
          _vm._v(_vm._s(_vm.goods.intro))
        ]),
        _c("view", { staticClass: "flex-con justify-bet title-sub" }, [
          _c("view", [_vm._v("销量：" + _vm._s(_vm.goods.sale))]),
          _c("view", [
            _vm._v(
              "运费：" +
                _vm._s(_vm.goods.postage > 0 ? _vm.goods.postage : "免运费")
            )
          ])
        ])
      ]),
      _c(
        "view",
        {
          staticClass: "selected padding-content flex-con more more-b more-r",
          attrs: { eventid: "0cd4c4ca-2" },
          on: { tap: _vm.selectOp }
        },
        [_vm._v("已选"), _c("view", {}, [_vm._v(_vm._s(_vm.selectSpecTxet))])]
      ),
      _c("view", { staticClass: "padding-content menu menu-title bor-bot" }, [
        _vm._v("产品详情")
      ]),
      _c(
        "view",
        { staticClass: "detial-content" },
        [
          _c("rich-text", { attrs: { nodes: _vm.Html, mpcomid: "0cd4c4ca-1" } })
        ],
        1
      ),
      _c("view", { staticClass: "bottom-menu fix-bottom" }, [
        _c(
          "view",
          { staticClass: "bottom-menu-con flex-con" },
          [
            _c(
              "view",
              { staticClass: "s-btn flex-con-col" },
              [
                _c("image", {
                  attrs: {
                    src: "/static/img/details_icon_cus.png",
                    mode: "widthFix"
                  }
                }),
                _vm._v("客服"),
                _vm.customerOnline
                  ? _c("button", { attrs: { "open-type": "contact" } })
                  : _c("button", {
                      attrs: { eventid: "0cd4c4ca-3" },
                      on: { tap: _vm.showTips }
                    })
              ],
              1
            ),
            _c(
              "navigator",
              {
                staticClass: "s-btn flex-con-col",
                attrs: {
                  url: "/pages/tabbar/tabbar-3/tabbar-3",
                  "open-type": "switchTab"
                }
              },
              [
                _c("image", {
                  attrs: {
                    src: "/static/img/details_icon_cart.png",
                    mode: "widthFix"
                  }
                }),
                _vm._v("购物车")
              ]
            ),
            _c(
              "view",
              {
                staticClass: "sub-btn",
                attrs: { eventid: "0cd4c4ca-4" },
                on: {
                  tap: function($event) {
                    _vm.operateType(0)
                  }
                }
              },
              [_vm._v("加入购物车")]
            ),
            _c(
              "view",
              {
                staticClass: "sub-btn buynow",
                attrs: { eventid: "0cd4c4ca-5" },
                on: {
                  tap: function($event) {
                    _vm.operateType(1)
                  }
                }
              },
              [_vm._v("立即购买")]
            )
          ],
          1
        )
      ]),
      _vm.popUp
        ? _c("view", {
            staticClass: "popup",
            attrs: { eventid: "0cd4c4ca-6" },
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
      _c(
        "view",
        {
          staticClass: "select-pop",
          class: { active: _vm.popUp },
          attrs: { eventid: "0cd4c4ca-17" },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              _vm.moveHandle($event)
            }
          }
        },
        [
          _c("view", {
            staticClass: "close-btn",
            attrs: { eventid: "0cd4c4ca-7" },
            on: { tap: _vm.hidePop }
          }),
          _c(
            "view",
            {
              staticClass: "padding-top20 flex-con justify-bet slelect-content"
            },
            [
              _c("view", { staticClass: "selectImg flex-con" }, [
                _c("image", {
                  attrs: { src: _vm.selectSpec.selectImg, mode: "widthFix" }
                })
              ]),
              _c("view", { staticClass: "selectInfo flex-con-col" }, [
                _c("view", { staticClass: "selectPrice flex-con" }, [
                  _vm._v("价格：￥" + _vm._s(_vm.selectSpec.selectPrice)),
                  _c("view", [
                    _vm._v("￥" + _vm._s(_vm.selectSpec.selectOriginPrice))
                  ])
                ]),
                _c("view", { staticClass: "selectSpec" }, [
                  _vm._v("已选择：" + _vm._s(_vm.selectSpecTxet))
                ])
              ])
            ]
          ),
          _c(
            "scroll-view",
            { staticClass: "spec-croll", attrs: { "scroll-y": "true" } },
            [
              _vm._l(_vm.specList, function(item, index) {
                return _c("view", { key: index }, [
                  _c(
                    "view",
                    {
                      staticClass:
                        "selec-title padding-content martop20 font-bold"
                    },
                    [_vm._v(_vm._s(item.key))]
                  ),
                  _c(
                    "view",
                    { staticClass: "padding-content flex-con specWrap" },
                    _vm._l(item.value, function(subitem, idx) {
                      return _c(
                        "view",
                        {
                          key: idx,
                          staticClass: "spec-view martop20",
                          class: idx == item.checked ? "seleType" : "",
                          attrs: { eventid: "0cd4c4ca-8-" + index + "-" + idx },
                          on: {
                            tap: function($event) {
                              _vm.sleType(index, idx)
                            }
                          }
                        },
                        [_vm._v(_vm._s(subitem))]
                      )
                    })
                  )
                ])
              }),
              _vm.field == 2
                ? _c("block", [
                    _c(
                      "view",
                      {
                        staticClass:
                          "selec-title padding-content martop20 font-bold"
                      },
                      [_vm._v("购买类型")]
                    ),
                    _c(
                      "view",
                      { staticClass: "padding-content flex-con specWrap" },
                      [
                        _c(
                          "view",
                          {
                            staticClass: "spec-view martop20",
                            class: _vm.buyType == 2 ? "seleType" : "",
                            attrs: { eventid: "0cd4c4ca-9" },
                            on: {
                              tap: function($event) {
                                _vm.sleBuyType(2)
                              }
                            }
                          },
                          [_vm._v("代售")]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: "spec-view martop20",
                            class: _vm.buyType == 1 ? "seleType" : "",
                            attrs: { eventid: "0cd4c4ca-10" },
                            on: {
                              tap: function($event) {
                                _vm.sleBuyType(1)
                              }
                            }
                          },
                          [_vm._v("自用")]
                        )
                      ]
                    )
                  ])
                : _vm._e(),
              _c(
                "view",
                {
                  staticClass:
                    "selec-title padding-content martop20 font-bold flex-con justify-bet"
                },
                [
                  _vm._v("购买数量"),
                  _c(
                    "view",
                    { staticClass: "goods-card-num flex-con" },
                    [
                      _c("button", {
                        attrs: { eventid: "0cd4c4ca-11" },
                        on: {
                          tap: function($event) {
                            _vm.calNum(-1)
                          }
                        }
                      }),
                      _c("input", {
                        attrs: {
                          type: "number",
                          placeholder: "1",
                          value: _vm.num,
                          eventid: "0cd4c4ca-12"
                        },
                        on: { blur: _vm.getInputNum }
                      }),
                      _c("button", {
                        attrs: { eventid: "0cd4c4ca-13" },
                        on: {
                          tap: function($event) {
                            _vm.calNum(1)
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            2
          ),
          _vm.isDone
            ? _c(
                "view",
                { staticClass: "submit-btn flex-con" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "add-cart",
                      attrs: { eventid: "0cd4c4ca-14" },
                      on: { tap: _vm.addCart }
                    },
                    [_vm._v("加入购物车")]
                  ),
                  _c(
                    "button",
                    {
                      attrs: { eventid: "0cd4c4ca-15" },
                      on: { tap: _vm.buyNow }
                    },
                    [_vm._v("立即购买")]
                  )
                ],
                1
              )
            : _c(
                "view",
                { staticClass: "submit-btn flex-con" },
                [
                  _c(
                    "button",
                    {
                      attrs: { eventid: "0cd4c4ca-16" },
                      on: { tap: _vm.confirm }
                    },
                    [_vm._v("确定")]
                  )
                ],
                1
              )
        ],
        1
      ),
      _vm.showTipBox
        ? _c(
            "view",
            {
              staticClass: "tip-wrap",
              attrs: { eventid: "0cd4c4ca-19" },
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
                    _vm._v("当前不在工作时间范围内，请您晚点再来咨询呀~")
                  ]),
                  _c(
                    "button",
                    {
                      staticClass: "tip_confirm_btn",
                      attrs: { eventid: "0cd4c4ca-18" },
                      on: { tap: _vm.showTips }
                    },
                    [_c("text", [_vm._v("我知道了")])]
                  )
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _c("login", { attrs: { showmask: _vm.ismask, mpcomid: "0cd4c4ca-2" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../../../Documents/HBuilderProjects/龙腾虎跃/main.js?{\"page\":\"pages%2Fgoods_detail%2Fgoods_detail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods_detail/goods_detail.js.map