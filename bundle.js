/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-bcg.jpg */ \"./src/images/home-bcg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/pizzaBG.jpg */ \"./src/images/pizzaBG.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff8e7;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* ///////////  HEADER     //////*/\r\nheader {\r\n  background: linear-gradient(135deg, #2a2a2a, #1b1b1b);\r\n  padding: 15px 0;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n/* //////////  NAVBAR   ////////*/\r\nnav {\r\n  padding: 0 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/* ЛОГО */\r\n.logo-header-section {\r\n  color: #f7d08a;\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  font-family: \"Georgia\", serif;\r\n  letter-spacing: 1px;\r\n  padding: 0 10px;\r\n}\r\n\r\n/* БЛОК КНОПОК */\r\n.btn-header-section {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n/* КНОПКИ */\r\nbutton {\r\n  background: #fdfdfd;\r\n  color: #222;\r\n  border: none;\r\n  padding: 10px 22px;\r\n  border-radius: 6px;\r\n\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n  transition: transform 150ms, background 200ms, color 200ms, box-shadow 200ms;\r\n}\r\n\r\nbutton:hover {\r\n  background: #222;\r\n  color: #fff;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbutton.active {\r\n  background: #f7d08a;\r\n  color: #222;\r\n  font-weight: bold;\r\n}\r\n\r\n/* /////      HOME          /////*/\r\n\r\n.home-container {\r\n  z-index: 2;\r\n  position: relative;\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-evenly;\r\n  max-width: 1100px;\r\n  margin: 25px auto; /* центрирование с отступами сверху и снизу */\r\n  padding: 20px 5px 20px 5px;\r\n  background-color: #c8a257f2;\r\n  border-radius: 12px;\r\n  box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n  animation: fadeIn 0.6s ease;\r\n}\r\n\r\n.home-bg {\r\n  position: relative;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  /* Чтобы форма не прилипала к краям */\r\n  padding: 40px 0;\r\n}\r\n\r\n.home-bg::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  z-index: 1;\r\n}\r\n\r\n.home-text-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* Заголовок */\r\n.home-title {\r\n  font-size: 2rem;\r\n  font-family: \"Georgia\", serif;\r\n  margin-bottom: 15px;\r\n  color: #960000;\r\n  font-weight: bold;\r\n}\r\n\r\n/* Подзаголовок */\r\n.home-subtitle {\r\n  font-size: 1.4rem;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  font-style: italic;\r\n}\r\n\r\n.order-btn {\r\n  margin-top: 20px;\r\n  background-color: #7d4b3d;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Простая анимация появления */\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.home-img {\r\n  width: 400px;\r\n  aspect-ratio: 1 / 1;\r\n  border-radius: 20px;\r\n  margin: 0 auto;\r\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.footer-container {\r\n  background: linear-gradient(135deg, #2a2a2a, #1b1b1b);\r\n  color: #eee;\r\n  padding: 20px 20px 10px 20px;\r\n  text-align: center;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n.footer-brand {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  margin-bottom: 8px;\r\n  color: #fff;\r\n}\r\n\r\n.footer-location {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 6px;\r\n  color: #ccc;\r\n}\r\n\r\n.footer-contacts,\r\n.footer-hours {\r\n  font-size: 0.7rem;\r\n  margin-bottom: 5px;\r\n  color: #bbb;\r\n}\r\n\r\n#content.contact-bg {\r\n  position: relative;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  /* Чтобы форма не прилипала к краям */\r\n  padding: 40px 0;\r\n}\r\n\r\n.contact-bg::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n}\r\n\r\n.contact-container {\r\n  position: relative;\r\n  z-index: 2;\r\n  margin: 0 auto;\r\n  margin-top: 70px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px 20px;\r\n  animation: fadeIn 0.6s ease;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 50%;\r\n}\r\n\r\n.contact-form {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  background-color: #e5dfdf;\r\n  flex-direction: column;\r\n  border-radius: 12px;\r\n\r\n  gap: 15px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.contact-form div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.contact-form label {\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n}\r\n\r\n.contact-form input {\r\n  padding: 10px;\r\n  font-size: 1rem;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  outline: none;\r\n  transition: all 200ms;\r\n}\r\n\r\n.contact-form input:focus {\r\n  border-color: #960000;\r\n  box-shadow: 0 0 5px rgba(150, 0, 0, 0.5);\r\n}\r\n\r\n.submit-btn {\r\n  padding: 12px;\r\n  font-size: 1.1rem;\r\n  background-color: #960000;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  transition: all 300ms;\r\n}\r\n\r\n.submit-btn:hover {\r\n  background-color: #b11;\r\n  transform: translate(-2px);\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: antiquewhite;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  gap: 80px;\r\n  flex-direction: column;\r\n\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.menu-cards-wrapper {\r\n  display: flex;\r\n  gap: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.pizza-card img {\r\n  height: 350px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n}\r\n\r\n.pizza-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* justify-content: center; */\r\n  /* align-items: center; */\r\n  gap: 10px;\r\n}\r\n\r\n.pizza-card-text-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n\r\n  font-size: 1.2rem;\r\n  color: #333;\r\n  font-weight: 500;\r\n}\r\n\r\n.menu-title {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n\r\n  color: #2b2b2b;\r\n}\r\n\r\n.pizza-price {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  color: #e63946; /* приятный красный для цены */\r\n  margin-top: -4px;\r\n}\r\n\r\n/*            АДАПТИВ   */\r\n\r\n/*           Планшеты (до 1024px)            */\r\n@media (max-width: 1024px) {\r\n  .home-container {\r\n    flex-direction: column;\r\n    text-align: center;\r\n    padding: 25px 10px;\r\n  }\r\n\r\n  .home-img {\r\n    width: 300px;\r\n  }\r\n\r\n  .menu-cards-wrapper {\r\n    gap: 40px;\r\n  }\r\n}\r\n\r\n/*  Мобильные большие (до 768px)            */\r\n@media (max-width: 768px) {\r\n  nav {\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n\r\n  button {\r\n    padding: 8px 18px;\r\n  }\r\n\r\n  .home-title {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .home-subtitle {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .home-img {\r\n    width: 250px;\r\n  }\r\n\r\n  .menu-title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .menu-cards-wrapper {\r\n    flex-direction: column;\r\n    gap: 50px;\r\n  }\r\n\r\n  .pizza-card img {\r\n    height: 280px;\r\n  }\r\n}\r\n\r\n/*        Мобильные маленькие (до 480px)     */\r\n\r\n@media (max-width: 480px) {\r\n  .logo-header-section {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  button {\r\n    font-size: 0.9rem;\r\n    padding: 7px 15px;\r\n  }\r\n\r\n  .home-container {\r\n    padding: 15px;\r\n  }\r\n\r\n  .home-title {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .home-subtitle {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .home-img {\r\n    width: 200px;\r\n  }\r\n\r\n  .pizza-card img {\r\n    height: 230px;\r\n  }\r\n\r\n  .menu-title {\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rstaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rstaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderContact)\n/* harmony export */ });\nfunction RenderContact() {\r\n  console.log(\"RenderContact is working\");\r\n\r\n  // создание контейнера\r\n  const wrapper = document.createElement(\"div\");\r\n  wrapper.classList.add(\"contact-container\");\r\n\r\n  // Создание формы\r\n  const form = document.createElement(\"form\");\r\n  form.classList.add(\"contact-form\");\r\n\r\n  // Label и input для имени\r\n  const labelNameContainer = document.createElement(\"div\");\r\n  const labelName = document.createElement(\"label\");\r\n  labelName.htmlFor = \"name\";\r\n  labelName.textContent = \"Имя\";\r\n  const inputName = document.createElement(\"input\");\r\n  inputName.type = \"text\";\r\n  inputName.id = \"name\";\r\n  inputName.placeholder = \"Введите имя..\";\r\n  inputName.required = true;\r\n  labelNameContainer.append(labelName, inputName);\r\n\r\n  // Label и input для телефона\r\n  const labelTelContainer = document.createElement(\"div\");\r\n  const labelTel = document.createElement(\"label\");\r\n  labelTel.htmlFor = \"tel\";\r\n  labelTel.textContent = \"Телефон\";\r\n  const inputTel = document.createElement(\"input\");\r\n  inputTel.type = \"tel\";\r\n  inputTel.id = \"tel\";\r\n  inputTel.placeholder = \"Введите телефон..\";\r\n  inputTel.required = true;\r\n  inputTel.pattern = \"^[0-9()+\\\\- ]+$\";\r\n\r\n  labelTelContainer.append(labelTel, inputTel);\r\n\r\n  // Label и input для почты\r\n  const labelEmailContainer = document.createElement(\"div\");\r\n  const labelEmail = document.createElement(\"label\");\r\n  labelEmail.htmlFor = \"email\";\r\n  labelEmail.textContent = \"Почта\";\r\n  const inputEmail = document.createElement(\"input\");\r\n  inputEmail.type = \"email\";\r\n  inputEmail.id = \"email\";\r\n  inputEmail.placeholder = \"Введите почту..\";\r\n  inputEmail.required = true;\r\n  labelEmailContainer.append(labelEmail, inputEmail);\r\n\r\n  // Создание кнопки\r\n  const submitBtn = document.createElement(\"button\");\r\n  submitBtn.type = \"submit\";\r\n  submitBtn.textContent = \"Отправить\";\r\n  submitBtn.classList.add(\"submit-btn\");\r\n\r\n  form.append(\r\n    labelNameContainer,\r\n    labelTelContainer,\r\n    labelEmailContainer,\r\n    submitBtn\r\n  );\r\n  wrapper.append(form);\r\n\r\n  // Возвращаем элемент, не мутируя DOM напрямую\r\n  return wrapper;\r\n}\r\n\n\n//# sourceURL=webpack://rstaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza.jpg */ \"./src/images/pizza.jpg\");\n\r\n// import pizzaBG from \"./images/pizzaBG\" ??;\r\n\r\nfunction home() {\r\n  console.log(\"🔥 home() is CALLED RIGHT NOW\");\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"home-container\");\r\n\r\n  const textArea = document.createElement(\"div\");\r\n  textArea.classList.add(\"home-text-area\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.classList.add(\"home-title\");\r\n  h1.textContent = \"Portofino Pizzeria\";\r\n\r\n  const p = document.createElement(\"p\");\r\n  p.classList.add(\"home-subtitle\");\r\n  p.textContent =\r\n    \"Authentic Italian Flavor, Straight From Our Oven to Your Table!\";\r\n\r\n  const btnArea = document.createElement(\"div\");\r\n  btnArea.classList.add(\"home-btn-area\");\r\n\r\n  const btnOrder = document.createElement(\"button\");\r\n  btnOrder.classList.add(\"order-btn\");\r\n  btnOrder.textContent = \"ORDER NOW\";\r\n  btnArea.append(btnOrder);\r\n\r\n  textArea.append(h1, p, btnArea);\r\n\r\n  const imgArea = document.createElement(\"div\");\r\n  imgArea.classList.add(\"home-img-area\");\r\n  const img = document.createElement(\"img\");\r\n  img.src = _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img.alt = \"Pizza\";\r\n  img.classList.add(\"home-img\");\r\n  imgArea.append(img);\r\n\r\n  div.append(textArea, imgArea);\r\n\r\n  // Возвращаем и div, и кнопку\r\n  return { div, btnOrder };\r\n}\r\n\n\n//# sourceURL=webpack://rstaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/images/assorti.jpg":
/*!********************************!*\
  !*** ./src/images/assorti.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"74f19ea5f5a71c815e9e.jpg\";\n\n//# sourceURL=webpack://rstaurant-page/./src/images/assorti.jpg?\n}");

/***/ }),

/***/ "./src/images/home-bcg.jpg":
/*!*********************************!*\
  !*** ./src/images/home-bcg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"2c1fea847020561667c6.jpg\";\n\n//# sourceURL=webpack://rstaurant-page/./src/images/home-bcg.jpg?\n}");

/***/ }),

/***/ "./src/images/margarita.jpg":
/*!**********************************!*\
  !*** ./src/images/margarita.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f0c167b676421c91bc1c.jpg\";\n\n//# sourceURL=webpack://rstaurant-page/./src/images/margarita.jpg?\n}");

/***/ }),

/***/ "./src/images/peperoni.jpg":
/*!*********************************!*\
  !*** ./src/images/peperoni.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"cbf496c4b30a9e1eb4ff.jpg\";\n\n//# sourceURL=webpack://rstaurant-page/./src/images/peperoni.jpg?\n}");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4499f8086365c4018d10.jpg\";\n\n//# sourceURL=webpack://rstaurant-page/./src/images/pizza.jpg?\n}");

/***/ }),

/***/ "./src/images/pizzaBG.jpg":
/*!********************************!*\
  !*** ./src/images/pizzaBG.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c0e7cbb1579a1074b688.jpg\";\n\n//# sourceURL=webpack://rstaurant-page/./src/images/pizzaBG.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _initialLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialLoad.js */ \"./src/initialLoad.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Контейнер и кнопки в хедере\r\nconst content = document.getElementById(\"content\");\r\nconst homeBtn = document.getElementById(\"homeBtn\");\r\nconst contactBtn = document.getElementById(\"contactBtn\");\r\nconst menuBtn = document.getElementById(\"menuBtn\");\r\nconst buttons = [homeBtn, contactBtn, menuBtn];\r\n\r\n// switchTab универсальная функция\r\nfunction switchTab(tabFunc, activeBtn) {\r\n  content.textContent = \"\";\r\n  content.classList.remove(\"contact-bg\");\r\n  content.classList.remove(\"home-bg\");\r\n\r\n  // Если это контактная вкладка — добавляем фон\r\n  if (tabFunc === _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n    content.classList.add(\"contact-bg\");\r\n  }\r\n\r\n  if (tabFunc === _home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\r\n    content.classList.add(\"home-bg\");\r\n  }\r\n\r\n  const tabContent = tabFunc();\r\n\r\n  // Если вернулась кнопка внутри tabContent, отдельно на неё можно повесить обработчик\r\n  if (tabContent.div && tabContent.btnOrder) {\r\n    content.append(tabContent.div);\r\n    // Кнопка \"ORDER NOW\" открывает контакт\r\n    tabContent.btnOrder.addEventListener(\"click\", () =>\r\n      switchTab(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], tabContent.btnOrder)\r\n    );\r\n  } else {\r\n    content.append(tabContent);\r\n  }\r\n\r\n  buttons.forEach((btn) => btn.classList.remove(\"active\"));\r\n  if (activeBtn.classList) activeBtn.classList.add(\"active\");\r\n}\r\n\r\n// Начальный рендер Home\r\nswitchTab(_home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], homeBtn);\r\n\r\n// Вешаем клики на хедерные кнопки\r\nhomeBtn.addEventListener(\"click\", () => switchTab(_home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], homeBtn));\r\ncontactBtn.addEventListener(\"click\", () =>\r\n  switchTab(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], contactBtn)\r\n);\r\nmenuBtn.addEventListener(\"click\", () => switchTab(_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], menuBtn));\r\n\n\n//# sourceURL=webpack://rstaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderInitialHome)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n// INITIAL HOME\r\nfunction RenderInitialHome() {\r\n  console.log(\"Initial Load is working\");\r\n  return (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack://rstaurant-page/./src/initialLoad.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderMenu)\n/* harmony export */ });\n/* harmony import */ var _images_margarita_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/margarita.jpg */ \"./src/images/margarita.jpg\");\n/* harmony import */ var _images_assorti_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/assorti.jpg */ \"./src/images/assorti.jpg\");\n/* harmony import */ var _images_peperoni_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/peperoni.jpg */ \"./src/images/peperoni.jpg\");\n\r\n\r\n\r\n\r\nfunction RenderMenu() {\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu-container\");\r\n\r\n  const menuHeader = document.createElement(\"h2\");\r\n  menuHeader.classList.add(\"menu-title\");\r\n  menuHeader.textContent = \"OUR MENU\";\r\n\r\n  //              MARGARITA             //\r\n  const pizzaCardOne = document.createElement(\"div\");\r\n  pizzaCardOne.classList.add(\"pizza-card\");\r\n\r\n  const pizzaImgOne = document.createElement(\"img\");\r\n  pizzaImgOne.alt = \"Margarita\";\r\n  pizzaImgOne.src = _images_margarita_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  const pizzaOneTextArea = document.createElement(\"div\");\r\n  pizzaOneTextArea.classList.add(\"pizza-card-text-area\");\r\n\r\n  const pizzaOneTitle = document.createElement(\"p\");\r\n  pizzaOneTitle.textContent = \"Margarita\";\r\n\r\n  const pizzaOnePrice = document.createElement(\"p\");\r\n  pizzaOnePrice.classList.add(\"pizza-price\");\r\n  pizzaOnePrice.textContent = \"2.99$\";\r\n\r\n  // pizza one text area append\r\n  pizzaOneTextArea.append(pizzaOneTitle, pizzaOnePrice);\r\n\r\n  // pizza one append\r\n  pizzaCardOne.append(pizzaImgOne, pizzaOneTextArea);\r\n\r\n  //                 ASSORTI             //\r\n  const pizzaCardTwo = document.createElement(\"div\");\r\n  pizzaCardTwo.classList.add(\"pizza-card\");\r\n\r\n  const pizzaImgTwo = document.createElement(\"img\");\r\n  pizzaImgTwo.src = _images_assorti_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  pizzaImgTwo.alt = \"Assorti\";\r\n\r\n  const pizzaTwoTextArea = document.createElement(\"div\");\r\n  pizzaTwoTextArea.classList.add(\"pizza-card-text-area\");\r\n\r\n  const pizzaTwoTitle = document.createElement(\"p\");\r\n  pizzaTwoTitle.textContent = \"Assorti\";\r\n\r\n  const pizzaTwoPrice = document.createElement(\"p\");\r\n  pizzaTwoPrice.classList.add(\"pizza-price\");\r\n  pizzaTwoPrice.textContent = \"2.69$\";\r\n\r\n  // pizza two text area append\r\n  pizzaTwoTextArea.append(pizzaTwoTitle, pizzaTwoPrice);\r\n\r\n  // pizza two append\r\n  pizzaCardTwo.append(pizzaImgTwo, pizzaTwoTextArea);\r\n\r\n  //              PEPERONI              //\r\n  const pizzaCardThree = document.createElement(\"div\");\r\n  pizzaCardThree.classList.add(\"pizza-card\");\r\n\r\n  const pizzaImgThree = document.createElement(\"img\");\r\n  pizzaImgThree.src = _images_peperoni_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n  pizzaImgThree.alt = \"Peperoni\";\r\n\r\n  const pizzaThreeTextArea = document.createElement(\"div\");\r\n  pizzaThreeTextArea.classList.add(\"pizza-card-text-area\");\r\n\r\n  const pizzaThreeTitle = document.createElement(\"p\");\r\n  pizzaThreeTitle.textContent = \"Peperoni\";\r\n\r\n  const pizzaThreePrice = document.createElement(\"p\");\r\n  pizzaThreePrice.classList.add(\"pizza-price\");\r\n\r\n  pizzaThreePrice.textContent = \"2.49$\";\r\n\r\n  // pizza three text area append\r\n  pizzaThreeTextArea.append(pizzaThreeTitle, pizzaThreePrice);\r\n\r\n  // pizza three append\r\n  pizzaCardThree.append(pizzaImgThree, pizzaThreeTextArea);\r\n\r\n  // Cards wrapper\r\n  const cardsWrapper = document.createElement(\"div\");\r\n  cardsWrapper.classList.add(\"menu-cards-wrapper\");\r\n\r\n  // Final append\r\n  cardsWrapper.append(pizzaCardOne, pizzaCardTwo, pizzaCardThree);\r\n  menuContainer.append(menuHeader, cardsWrapper);\r\n\r\n  return menuContainer;\r\n}\r\n\n\n//# sourceURL=webpack://rstaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rstaurant-page/./src/style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;