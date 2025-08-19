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

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.config = void 0;\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\n// Load correct .env file based on NODE_ENV\nconst envPath = path.resolve(process.cwd(), `.env.${\"development\" || 0}`);\ndotenv.config({ path: envPath });\nexports.config = {\n    port: parseInt(process.env.PORT || '3000', 10),\n    db: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        pass: process.env.DB_PASS,\n    },\n    jwt: {\n        secret: process.env.JWT_SECRET,\n    },\n};\n\n\n//# sourceURL=webpack://blogger/./src/config/config.ts?\n}");

/***/ }),

/***/ "./src/controllers/user.controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/user.controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.register = exports.login = void 0;\nconst login = (req, res, next) => {\n    try {\n        console.log('welcome to user');\n        res.send({ mesage: 'Welcome' });\n    }\n    catch (error) {\n        next(error);\n    }\n};\nexports.login = login;\nconst register = (req, res, next) => {\n    try {\n        res.send({ mesage: 'Welcome' });\n    }\n    catch (error) {\n        next(error);\n    }\n};\nexports.register = register;\n\n\n//# sourceURL=webpack://blogger/./src/controllers/user.controller.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __webpack_require__(/*! ./config/config */ \"./src/config/config.ts\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst user_route_1 = __importDefault(__webpack_require__(/*! ./routes/user.route */ \"./src/routes/user.route.ts\"));\nconst app = (0, express_1.default)();\napp.use(express_1.default.json());\napp.use('/', user_route_1.default);\napp.listen(config_1.config.port, () => {\n    console.log(`🚀 Server running on http://localhost:${config_1.config.port}`);\n    console.log(`🌱 Environment: ${config_1.config.port}`);\n});\n\n\n//# sourceURL=webpack://blogger/./src/index.ts?\n}");

/***/ }),

/***/ "./src/routes/user.route.ts":
/*!**********************************!*\
  !*** ./src/routes/user.route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst user_controller_1 = __webpack_require__(/*! ../controllers/user.controller */ \"./src/controllers/user.controller.ts\");\nconst router = (0, express_1.Router)();\nrouter.get('/api/users', user_controller_1.login);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://blogger/./src/routes/user.route.ts?\n}");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;