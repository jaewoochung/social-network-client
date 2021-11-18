"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbarLayout/Navbar.js":
/*!*******************************************!*\
  !*** ./components/navbarLayout/Navbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/navbarLayout/logo.js\");\n/* harmony import */ var _menuLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuLinks */ \"./components/navbarLayout/menuLinks.jsx\");\n/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuToggle */ \"./components/navbarLayout/menuToggle.jsx\");\n/* harmony import */ var _navbarContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbarContainer */ \"./components/navbarLayout/navbarContainer.jsx\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nvar authToken = cookies.get('token');\nvar Navbar = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var toggle = function() {\n        return setIsOpen(!isOpen);\n    };\n    if (authToken) {\n        console.log(cookies.get('username'));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_navbarContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/Users/jaewoochung/Documents/github_repositories/social-network/client/components/navbarLayout/Navbar.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/jaewoochung/Documents/github_repositories/social-network/client/components/navbarLayout/Navbar.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            authToken ? cookie.get('username') : '',\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menuToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                toggle: toggle,\n                isOpen: isOpen,\n                __source: {\n                    fileName: \"/Users/jaewoochung/Documents/github_repositories/social-network/client/components/navbarLayout/Navbar.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menuLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: isOpen,\n                __source: {\n                    fileName: \"/Users/jaewoochung/Documents/github_repositories/social-network/client/components/navbarLayout/Navbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    })));\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhckxheW91dC9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWQ7QUFDVTtBQUNFO0FBQ1U7QUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsR0FBSyxDQUFDTyxPQUFPLEdBQUcsR0FBRyxDQUFDRCx3REFBTztBQUUzQixHQUFLLENBQUNFLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBTztBQUVyQyxHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUN6QixHQUFLLENBQXVCVixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ1csTUFBTSxHQUFlWCxHQUFlLEtBQTVCWSxTQUFTLEdBQUlaLEdBQWU7SUFFM0MsR0FBSyxDQUFDYSxNQUFNLEdBQUcsUUFBUTtRQUFGRCxNQUFNLENBQU5BLFNBQVMsRUFBRUQsTUFBTTs7SUFFdEMsRUFBRSxFQUFFSixTQUFTLEVBQUUsQ0FBQztRQUNkTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBVTtJQUNwQyxDQUFDO0lBRUQsTUFBTSx1RUFDSEosd0RBQWU7T0FBS00sS0FBSzs7Ozs7Ozs7aUZBQ3ZCVCw2Q0FBSTs7Ozs7Ozs7WUFDSE0sU0FBUyxHQUFHUyxNQUFNLENBQUNSLEdBQUcsQ0FBQyxDQUFVLGFBQUksQ0FBRTtpRkFDeENMLG1EQUFVO2dCQUFDVSxNQUFNLEVBQUVBLE1BQU07Z0JBQUVGLE1BQU0sRUFBRUEsTUFBTTs7Ozs7Ozs7aUZBQ3pDVCxrREFBUztnQkFBQ1MsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7Ozs7O0FBRy9CLENBQUM7R0FqQktGLE1BQU07S0FBTkEsTUFBTTtBQW1CWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhckxheW91dC9OYXZiYXIuanM/OTZhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IE1lbnVMaW5rcyBmcm9tICcuL21lbnVMaW5rcydcbmltcG9ydCBNZW51VG9nZ2xlIGZyb20gJy4vbWVudVRvZ2dsZSdcbmltcG9ydCBOYXZiYXJDb250YWluZXIgZnJvbSAnLi9uYXZiYXJDb250YWluZXInXG5cbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnXG5cbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpXG5cbmNvbnN0IGF1dGhUb2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicpXG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG5cbiAgaWYgKGF1dGhUb2tlbikge1xuICAgIGNvbnNvbGUubG9nKGNvb2tpZXMuZ2V0KCd1c2VybmFtZScpKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxOYXZiYXJDb250YWluZXIgey4uLnByb3BzfT5cbiAgICAgIDxMb2dvIC8+XG4gICAgICB7IGF1dGhUb2tlbiA/IGNvb2tpZS5nZXQoJ3VzZXJuYW1lJykgOiAnJyB9XG4gICAgICA8TWVudVRvZ2dsZSB0b2dnbGU9e3RvZ2dsZX0gaXNPcGVuPXtpc09wZW59IC8+XG4gICAgICA8TWVudUxpbmtzIGlzT3Blbj17aXNPcGVufSAvPlxuICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dvIiwiTWVudUxpbmtzIiwiTWVudVRvZ2dsZSIsIk5hdmJhckNvbnRhaW5lciIsIkNvb2tpZXMiLCJjb29raWVzIiwiYXV0aFRva2VuIiwiZ2V0IiwiTmF2YmFyIiwicHJvcHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwiY29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbarLayout/Navbar.js\n");

/***/ })

});