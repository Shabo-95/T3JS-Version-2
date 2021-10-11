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

eval("// JavaScript\n__webpack_require__(/*! @modules/accordion.js */ \"./src/assets/js/modules/accordion.js\");\n\n__webpack_require__(/*! @services/onResizeChangeAccColor.js */ \"./src/assets/js/services/onResizeChangeAccColor.js\"); // SCSS\n\n\n__webpack_require__(/*! @scss/main.scss */ \"./src/assets/scss/main.scss\");\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/modules/accordion.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/accordion.js ***!
  \********************************************/
/***/ (function() {

eval("Box.Application.addModule(\"accordion\", function (context) {\n  return {\n    init: function () {\n      window.addEventListener(\"resize\", function () {\n        // This Service is for Changing Accordion Color When We Resize Window\n        const onResizeChangeAccColorService = Box.Application.getService(\"popups\");\n        onResizeChangeAccColorService.onResize();\n      }, true);\n    },\n    // This Section is for onClick (Messaging)\n    onclick: function (event, element, elementType) {\n      switch (elementType) {\n        case \"js-title\":\n          // Triggers output of \"Navigating somewhere!\"\n          Box.Application.broadcast(\"closeSecondAccordion\"); // block => accordion auf (offen)\n          // none => accordion zu (geschlossen)\n\n          var panel = element.nextElementSibling;\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          } else {\n            panel.style.display = \"block\";\n          }\n\n          break;\n\n        case \"js-title2\":\n          Box.Application.broadcast(\"closeFirstAccordion\");\n          var panel = element.nextElementSibling;\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          } else {\n            panel.style.display = \"block\";\n          }\n\n          break;\n      }\n    },\n    // This Section Will be Activated When We Resize The Window\n    // onresize: function (event, element, elementType) {\n    //   console.log(\"!!!!!!!!!!!!!!\");\n    //   console.log(\"element!!!! =\", element);\n    // },\n    // This Section is for Broadcasting (Messaging)\n    messages: [\"closeSecondAccordion\", \"closeFirstAccordion\"],\n    onmessage: function (name, data) {\n      switch (name) {\n        case \"closeSecondAccordion\":\n          console.log(\"Close Second Accordion\");\n          accordion2Items = document.getElementsByClassName(\"js-title2\");\n          var i;\n\n          for (i = 0; i < accordion2Items.length; i++) {\n            accordion2Items[i].nextElementSibling.style.display = \"none\";\n          }\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          }\n\n          break;\n\n        case \"closeFirstAccordion\":\n          console.log(\"Close First Accordion\");\n          accordion1Items = document.getElementsByClassName(\"js-title\");\n          var i;\n\n          for (i = 0; i < accordion1Items.length; i++) {\n            accordion1Items[i].nextElementSibling.style.display = \"none\";\n          }\n\n          if (panel.style.display === \"block\") {\n            panel.style.display = \"none\";\n          }\n\n          break;\n      }\n    }\n  };\n});\nvar moduleEl = document.getElementById(\"accordion-id\");\nvar moduleEl2 = document.getElementById(\"accordion-id2\");\nBox.Application.start(moduleEl);\nBox.Application.start(moduleEl2);\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/modules/accordion.js?");

/***/ }),

/***/ "./src/assets/js/services/onResizeChangeAccColor.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/services/onResizeChangeAccColor.js ***!
  \**********************************************************/
/***/ (function() {

eval("Box.Application.addService(\"popups\", function (application) {\n  return {\n    onResize: function () {\n      // This Section Will Output The Window With & Height\n      // console.log(\n      //   \"Window Width =\",\n      //   window.innerWidth,\n      //   \"Window Height =\",\n      //   window.innerHeight\n      // );\n      // This Section Of Code Will Change The Color Of The Accordions\n      accordion_header = document.getElementsByClassName(\"accordion__title\");\n\n      for (var i = 0; i < accordion_header.length; i++) {\n        // The Color Of The Accordions is Purple by Default\n        if (window.innerWidth <= 1487) {\n          accordion_header[i].style.backgroundColor = \"#5b5f97\";\n        } // Light Green if <= 1200\n\n\n        if (window.innerWidth <= 1200) {\n          accordion_header[i].style.backgroundColor = \"#00ff00\";\n        } // Light Green if <= 768\n\n\n        if (window.innerWidth <= 1068) {\n          accordion_header[i].style.backgroundColor = \"#ffb97f\";\n        } // Light Green if <= 576\n\n\n        if (window.innerWidth <= 876) {\n          accordion_header[i].style.backgroundColor = \"#7ff7ff\";\n        }\n      }\n    }\n  };\n});\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/services/onResizeChangeAccColor.js?");

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