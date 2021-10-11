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

eval("Box.Application.addModule(\"accordion\", function (context) {\n  const moduleElement = context.getElement(); // This Function Will Open The Selected Accordion\n\n  const _toggleAccordion = element => {\n    let panel = element.nextElementSibling;\n\n    if (panel.style.display === \"block\") {\n      panel.style.display = \"none\";\n    } else {\n      panel.style.display = \"block\";\n    }\n  }; // This Function Will Close All Other Accordions From The Other Accordion\n\n\n  const _closeAllOthers = selectedAccordion => {\n    Box.Application.broadcast(\"closeOtherAccordion\", {\n      result: selectedAccordion\n    });\n  };\n\n  return {\n    init: function () {\n      window.addEventListener(\"resize\", function () {\n        // This Service Will be Activated When We Resize The Window\n        const onResizeChangeAccColorService = Box.Application.getService(\"onResizeChangeAccColor\");\n        onResizeChangeAccColorService.onResize();\n      }, true);\n    },\n    // This Section is for onClick (Messaging)\n    onclick: function (event, element, elementType) {\n      switch (elementType) {\n        case \"js-title\":\n          // Hier We Will Select The Parent Accordion\n          selectedAccordion = element.parentNode.parentNode; //closest\n\n          _toggleAccordion(element);\n\n          _closeAllOthers(selectedAccordion);\n\n          break;\n      }\n    },\n    // This Section is for Broadcasting (Messaging)\n    messages: [\"closeOtherAccordion\"],\n    onmessage: function (name, data) {\n      switch (name) {\n        case \"closeOtherAccordion\":\n          if (data.result !== moduleElement) {\n            for (i = 0; i < data.result.children.length; i++) {\n              data.result.nextElementSibling.children[i].children[1].style.display = \"none\";\n            }\n          } else {\n            for (i = 0; i < data.result.children.length; i++) {\n              data.result.previousElementSibling.children[i].children[1].style.display = \"none\";\n            }\n          }\n\n          break;\n      }\n    }\n  };\n});\nvar moduleEl = document.getElementById(\"accordion-id\");\nvar moduleEl2 = document.getElementById(\"accordion-id2\");\nBox.Application.start(moduleEl);\nBox.Application.start(moduleEl2);\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/modules/accordion.js?");

/***/ }),

/***/ "./src/assets/js/services/onResizeChangeAccColor.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/services/onResizeChangeAccColor.js ***!
  \**********************************************************/
/***/ (function() {

eval("Box.Application.addService(\"onResizeChangeAccColor\", function (application) {\n  return {\n    onResize: function () {\n      // This Section Will Output The Window With & Height\n      // console.log(\n      //   \"Window Width =\",\n      //   window.innerWidth,\n      //   \"Window Height =\",\n      //   window.innerHeight\n      // );\n      // This Section Of Code Will Change The Color Of The Accordions\n      accordion_header = document.getElementsByClassName(\"accordion__title\");\n\n      for (var i = 0; i < accordion_header.length; i++) {\n        // The Color Of The Accordions is Purple by Default\n        if (window.innerWidth <= 1750) {\n          accordion_header[i].style.backgroundColor = \"#5b5f97\";\n        } // Light Green if <= 1550\n\n\n        if (window.innerWidth <= 1550) {\n          accordion_header[i].style.backgroundColor = \"#00ff00\";\n        } // Light Green if <= 1350\n\n\n        if (window.innerWidth <= 1350) {\n          accordion_header[i].style.backgroundColor = \"#ffb97f\";\n        } // Light Green if <= 1150\n\n\n        if (window.innerWidth <= 1150) {\n          accordion_header[i].style.backgroundColor = \"#7ff7ff\";\n        }\n      }\n    }\n  };\n});\n\n//# sourceURL=webpack://T3JS-Version-2/./src/assets/js/services/onResizeChangeAccColor.js?");

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