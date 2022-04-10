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

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SpaceEngine)\n/* harmony export */ });\nclass SpaceEngine {\n    static start(ship) {\n        SpaceEngine.check(ship).then(perc => \n            console.log(`(${ship.name}) Partida autorizada: carga atual em ${perc}%`)).catch(perc => \n                console.log(`(${ship.name}) Partida não autorizada: carga atual em ${perc}%`))\n    }\n\n    static check(ship) {\n        return new Promise((resolve, reject) => {\n            let perc = ship.calcperc()\n            if (perc > 30){\n                resolve(Math.round(perc))\n            } else {\n                reject(Math.round(perc))\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack://ex1/./src/engine.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship.js */ \"./src/spaceship.js\");\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.js */ \"./src/engine.js\");\n\n\n\n_engine_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start(new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Sophia\", 10, 5))\n_engine_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start(new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Amsterdã\", 14,  10))\n_engine_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start(new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Estrela-Anã\", 20, 4))\n/*\nlet sophia = new Ship(\"Sophia\", 10, 5)    \nlet amsterdã = new Ship(\"Amsterdã\", 14,  10) \nlet estrela = new Ship(\"Estrela-Anã\", 20, 4)\n\nnew Engine(sophia).start()\nnew Engine(amsterdã).start()\nnew Engine(estrela).start()\n/*\nnpm install --save-dev webpack webpack-cli\n\nnpx webpack\ncd dist\nhttp-server -c-1\n\nnpm install --global http-server (não precisa mais)\n*/\n\n//# sourceURL=webpack://ex1/./src/index.js?");

/***/ }),

/***/ "./src/spaceship.js":
/*!**************************!*\
  !*** ./src/spaceship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Spaceship)\n/* harmony export */ });\nclass Spaceship {\n    constructor(name, capac, carga){\n        this.name = name\n        this.capac = capac\n        this.carga = carga\n        }\n\n    calcperc(){\n        return this.carga*100/this.capac\n    }\n}\n\n//# sourceURL=webpack://ex1/./src/spaceship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;