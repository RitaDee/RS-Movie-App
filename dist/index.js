"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #011928;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nheader {\\n  background-color: #66f;\\n  color: #f5f5f5;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 3rem;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: center;\\n  background-color: #66f;\\n  color: #f5f5f5;\\n  padding: 3rem;\\n}\\n\\n.creators {\\n  display: flex;\\n  font-size: 16px;\\n  gap: 0.5rem;\\n}\\n\\n.main-show {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 4fr));\\n  column-gap: 24px;\\n  row-gap: 24px;\\n  width: 90%;\\n  margin: 24px auto 24px auto;\\n}\\n\\n.article {\\n  background-color: rgb(0, 77, 153);\\n  border: 2px solid black;\\n  border-radius: 8px;\\n  width: 100%;\\n}\\n\\nimg {\\n  width: 100%;\\n}\\n\\n.name {\\n  font-size: 16px;\\n  padding: 0;\\n  margin-bottom: 12px;\\n  text-align: center;\\n  color: #f5f5f5;\\n}\\n\\n#like-r {\\n  color: #f5f5f5;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0;\\n  margin: 4px auto;\\n  width: 50%;\\n}\\n\\n#btn-ctn {\\n  width: 50%;\\n  margin: 12px auto;\\n}\\n\\n.comment {\\n  border-radius: 8px;\\n  font-size: 16px;\\n  padding: 0.5rem;\\n  width: 90%;\\n}\\n\\n/* styling for pop up window */\\n\\n.popup {\\n  width: 100vw;\\n  height: 100vh;\\n  top: 0;\\n  position: fixed;\\n  backdrop-filter: blur(10px);\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.popImage {\\n  width: 60%;\\n  height: 75%;\\n  padding-top: 30px;\\n}\\n\\n.content {\\n  background-color: #009999;\\n  overflow-y: auto;\\n  width:70%;\\n  margin: 0 auto;\\n  height: 100%;\\n  padding-top: 100px;\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  border-radius: 10px;\\n}\\n\\n.part {\\n  height: 70%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.cancel {\\n  margin-top: 30%;\\n  padding-left: 90%;\\n}\\n\\n.namepop {\\n  font-size: 60px;\\n}\\n\\nform {\\n  padding-top: 40px;\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 15px;\\n  width: 40%;\\n}\\n\\ninput {\\n  border-radius: 5px;\\n  height: 20%;\\n  border: 1px solid rgb(0, 77, 153);\\n  padding: 15px;\\n}\\n\\ntextarea {\\n  border-radius: 5px;\\n  padding: 15px;\\n  border: 1px solid rgb(0, 77, 153);\\n}\\n\\nbutton[type=submit] {\\n  padding: 10px;\\n  background-color: rgb(0, 77, 153);\\n  color: white;\\n  margin-bottom: 30px;\\n}\\n\\n#heart {\\n  cursor: pointer;\\n}\\n\\ntable {\\n  height: 10vh;\\n  width: 80%;\\n  padding: 1rem;\\n  margin: 0 auto;\\n}\\n\\ntable,\\ntr {\\n  border: 1px solid black;\\n  overflow-y: scroll;\\n}\\n\\ntr:hover {\\n  background-color: #66f;\\n}\\n\\nth {\\n  padding: 10px;\\n}\\n\\ntd {\\n  padding-right: 5px;\\n  text-align: center;\\n  width: 140px;\\n}\\n\\n.commentBtn {\\n  padding: 7px;\\n  border-radius: 5px;\\n  margin-bottom: 8px;\\n  background-color: rgb(0, 77, 153);\\n  color: white;\\n}\\n\\n.commentspan {\\n  color: #f5f5f5;\\n  font-size: 20px;\\n  font-weight: 600;\\n  text-align: center;\\n  padding-left: 3rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_showlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showlikes.js */ \"./src/modules/showlikes.js\");\n\n\n\n\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_showlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentApi.js":
/*!***********************************!*\
  !*** ./src/modules/commentApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\nconst appId = 'Cdks7edv0UuC8Wi4mnCb';\n\nconst getComments = async (id) => {\n  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${id}`;\n\n  const res = await fetch(urlComments);\n  const result = await res.json();\n  return result;\n};\n\n// post comment on api\n\nconst postComments = async (id, name, comments) => {\n  const posted = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;\n  const response = await fetch(posted, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username: name,\n      comment: comments,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  const data = response.text();\n  return data;\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/commentApi.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _total_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./total.js */ \"./src/modules/total.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n\n\n\n\n\nconst Movies = document.querySelector('.main-show');\n\nconst showMovie = async () => {\n  const allShows = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const sliceShows = allShows.splice(0, 28);\n  sliceShows.forEach((show) => {\n    const template = `\n  <div class=\"article\">\n  <div class=\"img\">\n    <img src=${show.image.medium}>\n  </div>\n  <div class=\"name\"> <p>${show.name}</p></div>\n  <div id=\"like-r\">\n  <p id=\"heart\"><i id=\"${show.id}\" class=\"fa-regular fa-heart\"></i></p>\n  <p class=\"likes\"> <span class=\"${show.id}\">0</span> likes</p>\n  </div>\n  <div id=\"btn-ctn\">\n  <button id=\"${show.name}\" data-index=\"${show.id}\" class=\"comment\">comment</button>\n  </div>\n  </div>`;\n    Movies.innerHTML += template;\n\n    const num = document.querySelector('#movie-counter');\n\n    (0,_total_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Movies, num);\n\n    const heart = document.querySelectorAll('#heart i');\n    heart.forEach((hit) => {\n      hit.addEventListener('click', () => {\n        const id = hit.getAttribute('id');\n        (0,_fetch_js__WEBPACK_IMPORTED_MODULE_3__.newLike)(id);\n      });\n    });\n  });\n  (0,_popUp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovie);\n\n\n//# sourceURL=webpack:///./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchLike\": () => (/* binding */ fetchLike),\n/* harmony export */   \"newLike\": () => (/* binding */ newLike)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _showlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showlikes.js */ \"./src/modules/showlikes.js\");\n\n\n\nconst fetchLike = (reveal) => {\n  reveal.forEach((items) => {\n    const likes = async () => {\n      const predata = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      return predata;\n    };\n    likes().then((data) => {\n      data.forEach((dat) => {\n        if (parseInt(items.dataset.id, 10) === dat.item_id) {\n          const like = items.querySelector('.likes');\n          like.innerText = dat.likes;\n        }\n      });\n    });\n  });\n};\n\nconst newLike = async (id) => {\n  const res = await fetch(\n    _likes_js__WEBPACK_IMPORTED_MODULE_0__.likesUrl,\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n  (0,_showlikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  return res;\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/fetch.js?");

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllComment\": () => (/* binding */ getAllComment),\n/* harmony export */   \"sendComment\": () => (/* binding */ sendComment)\n/* harmony export */ });\n/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentApi.js */ \"./src/modules/commentApi.js\");\n\n\nconst getAllComment = async (id) => {\n  const table = document.querySelector('.table');\n  const commentSpan = document.querySelector('.commentspan');\n  const data = await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  if (data.length) {\n    data.forEach((elem) => {\n      const tr = document.createElement('tr');\n      tr.innerHTML = `<td class=\"username\">${elem.username}</td>\n      <td class=\"comment\">${elem.comment}</td>\n      <td class=\"creation_date\">${elem.creation_date}</td> `;\n      table.appendChild(tr);\n    });\n    commentSpan.innerHTML = `${data.length} comments for this movie`;\n  } else {\n    const h3 = document.createElement('h3');\n    h3.textContent = 'No Comments';\n    table.appendChild(h3);\n  }\n};\n\nconst sendComment = async (id) => {\n  const username = document.querySelector('.username');\n  const usercomment = document.querySelector('.usercomment');\n  const form = document.querySelector('.Form');\n  if (username.value.length !== 0 && usercomment.value.length !== 0) {\n    const res = await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(`item${id}`, username.value, usercomment.value);\n    form.reset();\n    getAllComment(id);\n    return res;\n  }\n  return id;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/fetchComment.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"likesUrl\": () => (/* binding */ likesUrl)\n/* harmony export */ });\nconst appId = 'Cdks7edv0UuC8Wi4mnCb';\n\nconst likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;\n\nconst getLikes = async () => {\n  const res = await fetch(likesUrl);\n  const data = await res.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack:///./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n\n\n\nconst clickClose = (container) => {\n  const cancelBtn = document.querySelector('.cancel');\n  cancelBtn.addEventListener('click', () => {\n    container.innerHTML = '';\n  });\n};\nconst fetchData = async () => {\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const res = data.splice(0, 28);\n\n  const container = document.querySelector('.alert');\n  const btn = document.querySelectorAll('.comment');\n\n  btn.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      const item = e.target.getAttribute('data-index');\n      const dataObj = res.find(\n        (resObj) => parseInt(resObj.id, 10) === parseInt(item, 10),\n      );\n      container.innerHTML += `\n          <div class=\"popup\">\n          <div class=\"content\">\n          <div class=\"part\">\n          <i class=\"fa-solid fa-x close fa-2x cancel\" aria-hidden=\"true\"></i>\n          <img class=\"popImage\" src=\"${dataObj.image.medium}\"/>\n          <p class=\"namepop\">${dataObj.name}</p>\n          <div id=\"${dataObj.id}\">\n            <span class=\"commentspan\"></span>\n            <table class=\"table\">\n              <tr>\n              <td>username</td>\n              <td>comment</td>\n              <td>creation_date</td>\n              </tr>\n            </table>\n          </div>\n          <form class=\"Form\">\n            <h2>Add Comment</h2><br>\n            <input type=\"text\" class=\"username\" placeholder=\"Your name\" required/>\n            <textarea rows=\"5\" class=\"usercomment\" placeholder=\"Your comment\" required></textarea>\n            <button class=\"btnSubmit\" id=\"item${dataObj.id}\" type=\"submit\">Comment</button>\n          </form>\n          </div>\n          </div>\n          </div\n          `;\n      const submitBtn = document.querySelector('.btnSubmit');\n      submitBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.sendComment)(parseInt(item, 10));\n      });\n      (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.getAllComment)(parseInt(item, 10));\n      clickClose(container);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n\n//# sourceURL=webpack:///./src/modules/popUp.js?");

/***/ }),

/***/ "./src/modules/showlikes.js":
/*!**********************************!*\
  !*** ./src/modules/showlikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\nconst showLikes = async () => {\n  const allLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const likeSpan = document.querySelectorAll('.likes span');\n  likeSpan.forEach((span) => {\n    const index = span.getAttribute('class');\n    allLikes.forEach((like) => {\n      if (like.item_id === index) {\n        span.textContent = like.likes;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showLikes);\n\n//# sourceURL=webpack:///./src/modules/showlikes.js?");

/***/ }),

/***/ "./src/modules/total.js":
/*!******************************!*\
  !*** ./src/modules/total.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCount = (Movies, num) => {\n  const items = Array.from(Movies.children);\n  num.innerText = items.length;\n  return items;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCount);\n\n\n//# sourceURL=webpack:///./src/modules/total.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);