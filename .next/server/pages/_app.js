/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/env-vars.ts":
/*!****************************!*\
  !*** ./config/env-vars.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst envVars = {\n    API_URL: String(process.env.NEXT_PUBLIC_APIURL),\n    NEXT_PUBLIC_CONTRACT_ADDRESS: String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),\n    NEXT_PUBLIC_ALCHEMY_ID: String(process.env.NEXT_PUBLIC_ALCHEMY_ID),\n    NEXT_PUBLIC_INFURA_ID: String(process.env.NEXT_PUBLIC_INFURA_ID),\n    NEXT_PUBLIC_ETHERSCAN_API_KEY: String(process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (envVars);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZW52LXZhcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU8sR0FBRztJQUNkQyxPQUFPLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGtCQUFrQixDQUFDO0lBQy9DQyw0QkFBNEIsRUFBRUosTUFBTSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsNEJBQTRCLENBQUM7SUFDOUVDLHNCQUFzQixFQUFFTCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxzQkFBc0IsQ0FBQztJQUNsRUMscUJBQXFCLEVBQUVOLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNJLHFCQUFxQixDQUFDO0lBQ2hFQyw2QkFBNkIsRUFBRVAsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssNkJBQTZCLENBQUM7Q0FDakY7QUFFRCxpRUFBZVQsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aC1zdGFydGVyLXByb2plY3QvLi9jb25maWcvZW52LXZhcnMudHM/ZTE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnZWYXJzID0ge1xuICBBUElfVVJMOiBTdHJpbmcocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJVVJMKSxcbiAgTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUzogU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRSQUNUX0FERFJFU1MpLFxuICBORVhUX1BVQkxJQ19BTENIRU1ZX0lEOiBTdHJpbmcocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCksXG4gIE5FWFRfUFVCTElDX0lORlVSQV9JRDogU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9JRCksXG4gIE5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZOiBTdHJpbmcocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRVRIRVJTQ0FOX0FQSV9LRVkpLFxufVxuXG5leHBvcnQgZGVmYXVsdCBlbnZWYXJzXG4iXSwibmFtZXMiOlsiZW52VmFycyIsIkFQSV9VUkwiLCJTdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJVVJMIiwiTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUyIsIk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQiLCJORVhUX1BVQkxJQ19JTkZVUkFfSUQiLCJORVhUX1BVQkxJQ19FVEhFUlNDQU5fQVBJX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/env-vars.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseSepolia\": () => (/* binding */ baseSepolia),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config_env_vars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/env-vars */ \"./config/env-vars.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst baseSepolia = {\n    id: 84532,\n    name: \"Base Sepolia\",\n    network: \"baseSepolia\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ether\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        public: \"https://sepolia.base.org\",\n        default: \"https://sepolia.base.org\"\n    }\n};\n\nconst { NEXT_PUBLIC_ALCHEMY_ID , NEXT_PUBLIC_INFURA_ID , NEXT_PUBLIC_ETHERSCAN_API_KEY  } = _config_env_vars__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\nconst alchemyId = NEXT_PUBLIC_ALCHEMY_ID;\nconst etherscanApiKey = NEXT_PUBLIC_ETHERSCAN_API_KEY;\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    baseSepolia\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({\n        apiKey: alchemyId\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    appName: \"Web 3 Starter App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        attribute: \"class\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen bg-white dark:bg-gray-900 dark:text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n                    chains: chains,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/mghen/Documents/Projects/frame-maker-app/pages/_app.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mghen/Documents/Projects/frame-maker-app/pages/_app.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mghen/Documents/Projects/frame-maker-app/pages/_app.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mghen/Documents/Projects/frame-maker-app/pages/_app.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mghen/Documents/Projects/frame-maker-app/pages/_app.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNHO0FBQ1M7QUFHQztBQUVtQztBQUNMO0FBQ2hCO0FBQ0Y7QUFJaEQsTUFBTVEsV0FBVyxHQUFVO0lBQ2hDQyxFQUFFLEVBQUUsS0FBTTtJQUNWQyxJQUFJLEVBQUUsY0FBYztJQUNwQkMsT0FBTyxFQUFFLGFBQWE7SUFDdEJDLGNBQWMsRUFBRTtRQUNkQyxRQUFRLEVBQUUsRUFBRTtRQUNaSCxJQUFJLEVBQUUsT0FBTztRQUNiSSxNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQyxNQUFNLEVBQUUsMEJBQTBCO1FBQ2xDQyxPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0NBQ0Y7QUFFc0M7QUFDdkMsTUFBTSxFQUFFRSxzQkFBc0IsR0FBRUMscUJBQXFCLEdBQUVDLDZCQUE2QixHQUFFLEdBQUdILHdEQUFNO0FBRS9GLE1BQU1JLFNBQVMsR0FBR0gsc0JBQXNCO0FBQ3hDLE1BQU1JLGVBQWUsR0FBR0YsNkJBQTZCO0FBRXJELE1BQU0sRUFBRUcsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR3RCLHNEQUFlLENBQzFDO0lBQUNLLFdBQVc7Q0FBQyxFQUNiO0lBQUNGLHdFQUFlLENBQUM7UUFBRW9CLE1BQU0sRUFBRUosU0FBUztLQUFFLENBQUM7SUFBRWYsc0VBQWMsRUFBRTtDQUFDLENBQzNEO0FBQ0QsTUFBTSxFQUFFb0IsVUFBVSxHQUFFLEdBQUcxQix5RUFBaUIsQ0FBQztJQUN2QzJCLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJKLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTUssV0FBVyxHQUFHekIsbURBQVksQ0FBQztJQUMvQjBCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZGLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTU0sR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksR0FBSztJQUNsRCxxQkFDRSw4REFBQ2pDLHNEQUFhO1FBQUNrQyxTQUFTLEVBQUMsT0FBTztrQkFDOUIsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDtzQkFDckUsNEVBQUMvQiw4Q0FBVztnQkFBQ2dDLE1BQU0sRUFBRVIsV0FBVzswQkFDOUIsNEVBQUMzQixzRUFBa0I7b0JBQUNzQixNQUFNLEVBQUVBLE1BQU07OEJBQ2hDLDRFQUFDUSxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7O2lDQUFJOzs7Ozs2QkFDVDs7Ozs7eUJBQ1Q7Ozs7O3FCQUNWOzs7OztpQkFDUSxDQUNqQjtBQUNILENBQUM7QUFDRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aC1zdGFydGVyLXByb2plY3QvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcydcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCdcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15J1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJ1xuXG5pbXBvcnQgeyBDaGFpbiB9IGZyb20gJ3dhZ21pJ1xuIFxuZXhwb3J0IGNvbnN0IGJhc2VTZXBvbGlhOiBDaGFpbiA9IHtcbiAgaWQ6IDg0XzUzMixcbiAgbmFtZTogJ0Jhc2UgU2Vwb2xpYScsXG4gIG5ldHdvcms6ICdiYXNlU2Vwb2xpYScsXG4gIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgZGVjaW1hbHM6IDE4LFxuICAgIG5hbWU6ICdFdGhlcicsXG4gICAgc3ltYm9sOiAnRVRIJyxcbiAgfSxcbiAgcnBjVXJsczoge1xuICAgIHB1YmxpYzogJ2h0dHBzOi8vc2Vwb2xpYS5iYXNlLm9yZycsXG4gICAgZGVmYXVsdDogJ2h0dHBzOi8vc2Vwb2xpYS5iYXNlLm9yZycsXG4gIH0sXG59IFxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9lbnYtdmFycydcbmNvbnN0IHsgTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCwgTkVYVF9QVUJMSUNfSU5GVVJBX0lELCBORVhUX1BVQkxJQ19FVEhFUlNDQU5fQVBJX0tFWSB9ID0gY29uZmlnXG5cbmNvbnN0IGFsY2hlbXlJZCA9IE5FWFRfUFVCTElDX0FMQ0hFTVlfSURcbmNvbnN0IGV0aGVyc2NhbkFwaUtleSA9IE5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZXG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbYmFzZVNlcG9saWFdLFxuICBbYWxjaGVteVByb3ZpZGVyKHsgYXBpS2V5OiBhbGNoZW15SWQgfSksIHB1YmxpY1Byb3ZpZGVyKCldLFxuKVxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6ICdXZWIgMyBTdGFydGVyIEFwcCcsXG4gIGNoYWlucyxcbn0pXG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxufSlcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiYmFzZVNlcG9saWEiLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJkZWNpbWFscyIsInN5bWJvbCIsInJwY1VybHMiLCJwdWJsaWMiLCJkZWZhdWx0IiwiY29uZmlnIiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCIsIk5FWFRfUFVCTElDX0lORlVSQV9JRCIsIk5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZIiwiYWxjaGVteUlkIiwiZXRoZXJzY2FuQXBpS2V5IiwiY2hhaW5zIiwicHJvdmlkZXIiLCJhcGlLZXkiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdHRyaWJ1dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();