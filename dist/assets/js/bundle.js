/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// JavaScript\n__webpack_require__(/*! ~/main.js */ \"./src/assets/js/main.js\"); // SCSS\n\n\n__webpack_require__(/*! @scss/main.scss */ \"./src/assets/scss/main.scss\");\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("Box.Application.addModule(\"accordion\", function (context) {\n  return {\n    // This Section is for onClick (Messaging)\n    onclick: function (event, element, elementType) {\n      switch (elementType) {\n        case \"js-title\":\n          // Triggers output of \"Navigating somewhere!\"\n          Box.Application.broadcast(\"closeSecondAccordion\"); // block => accordion auf (offen)\n          // none => accordion zu (geschlossen)\n\n          var panel = element.nextElementSibling;\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          } else {\n            panel.style.display = \"block\";\n          }\n\n          break;\n\n        case \"js-title2\":\n          Box.Application.broadcast(\"closeFirstAccordion\");\n          var panel = element.nextElementSibling;\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          } else {\n            panel.style.display = \"block\";\n          }\n\n          break;\n      }\n    },\n    // This Section is for Broadcasting (Messaging)\n    messages: [\"closeSecondAccordion\", \"closeFirstAccordion\"],\n    onmessage: function (name, data) {\n      switch (name) {\n        case \"closeSecondAccordion\":\n          console.log(\"Close Second Accordion\");\n          accordion2Items = document.getElementsByClassName(\"js-title2\");\n          var i;\n\n          for (i = 0; i < accordion2Items.length; i++) {\n            accordion2Items[i].nextElementSibling.style.display = \"none\";\n          }\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          }\n\n          break;\n\n        case \"closeFirstAccordion\":\n          console.log(\"Close First Accordion\");\n          accordion1Items = document.getElementsByClassName(\"js-title\");\n          var i;\n\n          for (i = 0; i < accordion1Items.length; i++) {\n            accordion1Items[i].nextElementSibling.style.display = \"none\";\n          }\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          }\n\n          break;\n      }\n    }\n  };\n});\nvar moduleEl = document.getElementById(\"accordion-id\");\nvar moduleEl2 = document.getElementById(\"accordion-id2\");\nBox.Application.start(moduleEl);\nBox.Application.start(moduleEl2);\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/scss/main.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/app.js");
/******/ 	
/******/ })()
;