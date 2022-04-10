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

/***/ "./src/armaments.js":
/*!**************************!*\
  !*** ./src/armaments.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    laser: [\"Phasers\", \"Torpedos de Fóton\"],\n    explosion: [\"Canhão\", \"Torpedos de TNT\"]\n});\n\n//# sourceURL=webpack://exportnomeado/./src/armaments.js?");

/***/ }),

/***/ "./src/defensesNomeado.js":
/*!********************************!*\
  !*** ./src/defensesNomeado.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"laserDefenses\": () => (/* binding */ laserDefenses),\n/* harmony export */   \"steelDefenses\": () => (/* binding */ steelDefenses)\n/* harmony export */ });\nconst laserDefenses = [\"Escudos Defletores\", \"Arma anti-laser\"]\nconst steelDefenses = [\"Escudos de aço\"]\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\"Escudo Resultor\"]);\n/* ==\nexport const laserDefenses = [\"Escudos Defletores\", \"Arma anti-laser\"]\nexport const steelDefenses = [\"Escudos de aço\"]\n*/\n\n//# sourceURL=webpack://exportnomeado/./src/defensesNomeado.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _armaments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./armaments.js */ \"./src/armaments.js\");\n/* harmony import */ var _defensesNomeado_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defensesNomeado.js */ \"./src/defensesNomeado.js\");\n\n\n//tem que ter o MESMO NOME E PODE NÃO CHAMAR O QUE NÃO PRECISA\n \n\n\nconst spaceship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"USS Enterprise\", \"James Kirk\", _armaments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].laser, _defensesNomeado_js__WEBPACK_IMPORTED_MODULE_2__.laserDefenses)\nconsole.log(spaceship)\nconst spaceship2= new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Nave Básica\", \"Astronauta\", [], _defensesNomeado_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\nconsole.log(spaceship2)\n\n\n/*\nnpm install --save-dev webpack webpack-cli\n\nnpx webpack\ncd dist\nhttp-server -c-1\n\nnpm install --global http-server (não precisa mais)\n*/\n\n//# sourceURL=webpack://exportnomeado/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(name, captain, armaments = [], defenses =[]) {\n        this.name = name \n        this.captain = captain \n        this.armaments = armaments \n        this.defenses = defenses\n    }\n}\n/*\nclass Ship {\n    constructor(name, captain, armaments = [], defenses =[]) {\n        this.name = name \n        this.captain = captain \n        this.armaments = armaments \n        this.defenses = defenses\n    }\n}\n\nexport default Ship\n*/\n\n//# sourceURL=webpack://exportnomeado/./src/ship.js?");

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