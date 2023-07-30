(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/buttons/CheckButton.tsx":
/*!************************************************!*\
  !*** ./src/components/buttons/CheckButton.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_generalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/generalStyles */ "./src/styles/generalStyles.ts");
/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/react */ "@mdi/react");
/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/js */ "@mdi/js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mdi_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themeProvider_ReactBricksThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../themeProvider/ReactBricksThemeProvider */ "./src/themeProvider/ReactBricksThemeProvider.tsx");





const CheckButton = ({
  size,
  color,
  onClick
}) => {
  const {
    bricksConfig
  } = (0,_themeProvider_ReactBricksThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useReactBricksTheme)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_generalStyles__WEBPACK_IMPORTED_MODULE_1__.ButtonLike, {
    onClick: onClick,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mdi_react__WEBPACK_IMPORTED_MODULE_2___default()), {
      path: _mdi_js__WEBPACK_IMPORTED_MODULE_3__.mdiCheck,
      size: size || bricksConfig.GeneralSizes.Button.Medium,
      color: color || bricksConfig.GeneralColors.Success
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckButton);

/***/ }),

/***/ "./src/components/buttons/TestButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/buttons/TestButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestButton: () => (/* binding */ TestButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const TestButton = () => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "primary",
    children: "ASE"
  });
};


/***/ }),

/***/ "./src/styles/generalStyles.ts":
/*!*************************************!*\
  !*** ./src/styles/generalStyles.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonLike: () => (/* binding */ ButtonLike),
/* harmony export */   Centered: () => (/* binding */ Centered),
/* harmony export */   Justified: () => (/* binding */ Justified),
/* harmony export */   JustifiedSm: () => (/* binding */ JustifiedSm)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Centered = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;    
`;
const Justified = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const JustifiedSm = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Justified)`
  gap: 5px;
`;
const ButtonLike = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Centered)`
  cursor: pointer;
`;


/***/ }),

/***/ "./src/themeProvider/ReactBricksThemeProvider.tsx":
/*!********************************************************!*\
  !*** ./src/themeProvider/ReactBricksThemeProvider.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactBricksThemeContext: () => (/* binding */ ReactBricksThemeContext),
/* harmony export */   ReactBricksThemeProvider: () => (/* binding */ ReactBricksThemeProvider),
/* harmony export */   useReactBricksTheme: () => (/* binding */ useReactBricksTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DefaultThemeConfig = {
  GeneralColors: {
    Success: "green",
    Warning: "orange",
    Error: "red",
    Info: "lightblue"
  },
  GeneralSizes: {
    Button: {
      Small: "10px",
      Medium: "20px",
      Large: "30px"
    }
  }
};
const ReactBricksThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});
const ReactBricksThemeProvider = props => {
  const targetConfig = props['config'];
  const [innerConfig, setInnerConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DefaultThemeConfig);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!targetConfig) return;
    setInnerConfig(prevState => Object.assign(Object.assign({}, prevState), targetConfig));
  }, [props]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactBricksThemeContext.Provider, {
    value: {
      bricksConfig: innerConfig
    }
  });
};
const useReactBricksTheme = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ReactBricksThemeContext);
  if (context === undefined) {
    throw new Error(`useReactBricksThemeContext must be used within a ReactBricksThemeProvider`);
  }
  return context;
};


/***/ }),

/***/ "@mdi/js":
/*!**************************!*\
  !*** external "@mdi/js" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("@mdi/js");

/***/ }),

/***/ "@mdi/react":
/*!*****************************!*\
  !*** external "@mdi/react" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@mdi/react");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckButton: () => (/* reexport safe */ _root_components_buttons_CheckButton__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ReactBricksThemeProvider: () => (/* reexport safe */ _root_themeProvider_ReactBricksThemeProvider__WEBPACK_IMPORTED_MODULE_2__.ReactBricksThemeProvider),
/* harmony export */   TestButton: () => (/* reexport safe */ _components_buttons_TestButton__WEBPACK_IMPORTED_MODULE_0__.TestButton)
/* harmony export */ });
/* harmony import */ var _components_buttons_TestButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/buttons/TestButton */ "./src/components/buttons/TestButton.tsx");
/* harmony import */ var _root_components_buttons_CheckButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/components/buttons/CheckButton */ "./src/components/buttons/CheckButton.tsx");
/* harmony import */ var _root_themeProvider_ReactBricksThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/themeProvider/ReactBricksThemeProvider */ "./src/themeProvider/ReactBricksThemeProvider.tsx");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-bricks.js.map