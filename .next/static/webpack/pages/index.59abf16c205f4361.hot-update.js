"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Corporate/Header.jsx":
/*!*********************************************!*\
  !*** ./src/components/Corporate/Header.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/loadBackgroudImages */ \"./src/common/loadBackgroudImages.js\");\n/* harmony import */ var _data_Corporate_header_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/Corporate/header.json */ \"./src/data/Corporate/header.json\");\n\nvar _s = $RefreshSig$();\n\n\n//= Modules\n\n\n//= Scripts\n\n//= Data\n\nconst swiperOptions = {\n    modules: [\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax\n    ],\n    speed: 1500,\n    parallax: true,\n    loop: false,\n    onSwiper: function(swiper) {\n        for(var i = 0; i < swiper.slides.length; i++){\n            swiper.slides[i].querySelector(\".bg-img\").setAttribute(\"data-swiper-parallax\", 0.75 * swiper.width);\n        }\n    },\n    onResize: function(swiper) {\n        swiper.update();\n    },\n    pagination: {\n        el: \".slider-prlx .parallax-slider .swiper-pagination\",\n        type: \"fraction\",\n        clickable: true\n    },\n    navigation: {\n        nextEl: \".slider-prlx .parallax-slider .next-ctrl\",\n        prevEl: \".slider-prlx .parallax-slider .prev-ctrl\"\n    }\n};\nfunction Header() {\n    _s();\n    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadSwiper(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadSwiper) (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    }, [\n        loadSwiper\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"slider slider-prlx o-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lines two\"\n            }, void 0, false, {\n                fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            loadSwiper && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                className: \"parallax-slider\",\n                ...swiperOptions,\n                children: _data_Corporate_header_json__WEBPACK_IMPORTED_MODULE_6__.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-img valign\",\n                            \"data-background\": item.background,\n                            \"data-overlay-dark\": \"7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row justify-content-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"col-lg-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"caption text-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                    className: \"sub-title mb-15\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            width: \"18\",\n                                                            height: \"18\",\n                                                            viewBox: \"0 0 18 18\",\n                                                            fill: \"none\",\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z\",\n                                                                fill: \"currentColor\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                                lineNumber: 64,\n                                                                columnNumber: 31\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 29\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"ml-10\",\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 29\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"fz-60\",\n                                                    children: item.text\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: item.button.link,\n                                                    className: \"butn butn-md butn-bg main-colorbg3 text-dark mt-30\",\n                                                    style: {\n                                                        marginRight: \"10px\"\n                                                    },\n                                                    children: [\n                                                        item.button.text,\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"ml-5\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                width: \"18\",\n                                                                height: \"18\",\n                                                                viewBox: \"0 0 18 18\",\n                                                                fill: \"none\",\n                                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z\",\n                                                                    fill: \"currentColor\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                                    lineNumber: 75,\n                                                                    columnNumber: 7\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 5\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 3\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: item.button2.link,\n                                                    className: \"butn butn-md butn-bg main-colorbg3 text-dark mt-30\",\n                                                    children: [\n                                                        item.button2.text,\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"ml-5\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                width: \"18\",\n                                                                height: \"18\",\n                                                                viewBox: \"0 0 17 18\",\n                                                                fill: \"none\",\n                                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    d: \"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z\",\n                                                                    fill: \"currentColor\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                                    lineNumber: 84,\n                                                                    columnNumber: 7\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                                lineNumber: 83,\n                                                                columnNumber: 5\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 3\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 1\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mukelakatungu/Megamailpartners/src/components/Corporate/Header.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"5/9B53sdUwAqGuPzFzERsrfJEZE=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxLQUFLcUIsT0FBTyxDQUFDTixJQUFJO3NFQUNsQiw4REFBQ3JDOzREQUFFbUIsV0FBVTtzRUFDWCw0RUFBQ1E7Z0VBQUl0QixPQUFNO2dFQUFLdUIsUUFBTztnRUFBS0MsU0FBUTtnRUFBWUMsTUFBSztnRUFBT0MsT0FBTTswRUFDaEUsNEVBQUNDO29FQUFLQyxHQUFFO29FQUE0dEJILE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkE5Qi9zQlIsS0FBS3NCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ3ZDO0dBbEVTN0I7S0FBQUE7QUFvRVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29ycG9yYXRlL0hlYWRlci5qc3g/NDdmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy89IE1vZHVsZXNcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24sIEF1dG9wbGF5LCBQYWdpbmF0aW9uLCBQYXJhbGxheCB9IGZyb20gJ3N3aXBlcic7XHJcbi8vPSBTY3JpcHRzXHJcbmltcG9ydCBsb2FkQmFja2dyb3VkSW1hZ2VzIGZyb20gJ0AvY29tbW9uL2xvYWRCYWNrZ3JvdWRJbWFnZXMnO1xyXG4vLz0gRGF0YVxyXG5pbXBvcnQgZGF0YSBmcm9tICdAL2RhdGEvQ29ycG9yYXRlL2hlYWRlci5qc29uJztcclxuXHJcbmNvbnN0IHN3aXBlck9wdGlvbnMgPSB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb24sIEF1dG9wbGF5LCBQYWdpbmF0aW9uLCBQYXJhbGxheF0sXHJcbiAgc3BlZWQ6IDE1MDAsXHJcbiAgcGFyYWxsYXg6IHRydWUsXHJcbiAgbG9vcDogZmFsc2UsXHJcbiAgb25Td2lwZXI6IGZ1bmN0aW9uIChzd2lwZXIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzd2lwZXIuc2xpZGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5iZy1pbWcnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4JywgMC43NSAqIHN3aXBlci53aWR0aCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblJlc2l6ZTogZnVuY3Rpb24gKHN3aXBlcikge1xyXG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc2xpZGVyLXBybHggLnBhcmFsbGF4LXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcclxuICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnNsaWRlci1wcmx4IC5wYXJhbGxheC1zbGlkZXIgLm5leHQtY3RybCcsXHJcbiAgICBwcmV2RWw6ICcuc2xpZGVyLXBybHggLnBhcmFsbGF4LXNsaWRlciAucHJldi1jdHJsJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtsb2FkU3dpcGVyLCBzZXRMb2FkU3dpcGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRTd2lwZXIodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRTd2lwZXIpIGxvYWRCYWNrZ3JvdWRJbWFnZXMoKTtcclxuICB9LCBbbG9hZFN3aXBlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzbGlkZXIgc2xpZGVyLXBybHggby1oaWRkZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lcyB0d29cIj48L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIGxvYWRTd2lwZXIgJiZcclxuICAgICAgICA8U3dpcGVyIGNsYXNzTmFtZT1cInBhcmFsbGF4LXNsaWRlclwiIHsuLi5zd2lwZXJPcHRpb25zfT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW1nIHZhbGlnblwiIGRhdGEtYmFja2dyb3VuZD17aXRlbS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW92ZXJsYXktZGFyaz1cIjdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3ViLXRpdGxlIG1iLTE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLjkyMiA0LjVWMTEuODEyNUMxMy45MjIgMTEuOTI0NCAxMy44Nzc2IDEyLjAzMTcgMTMuNzk4NSAxMi4xMTA4QzEzLjcxOTMgMTIuMTg5OSAxMy42MTIgMTIuMjM0NCAxMy41MDAyIDEyLjIzNDRDMTMuMzg4MyAxMi4yMzQ0IDEzLjI4MSAxMi4xODk5IDEzLjIwMTggMTIuMTEwOEMxMy4xMjI3IDEyLjAzMTcgMTMuMDc4MyAxMS45MjQ0IDEzLjA3ODMgMTEuODEyNVY1LjUxOTUzTDQuNzk1NDcgMTMuNzk1M0M0LjcxNzE1IDEzLjg3MzYgNC42MTA5MiAxMy45MTc2IDQuNTAwMTUgMTMuOTE3NkM0LjM4OTM5IDEzLjkxNzYgNC4yODMxNiAxMy44NzM2IDQuMjA0ODQgMTMuNzk1M0M0LjEyNjUyIDEzLjcxNyA0LjA4MjUyIDEzLjYxMDggNC4wODI1MiAxMy41QzQuMDgyNTIgMTMuMzg5MiA0LjEyNjUyIDEzLjI4MyA0LjIwNDg0IDEzLjIwNDdMMTIuNDgwNiA0LjkyMTg4SDYuMTg3NjVDNi4wNzU3NyA0LjkyMTg4IDUuOTY4NDYgNC44Nzc0MyA1Ljg4OTM0IDQuNzk4MzFDNS44MTAyMyA0LjcxOTE5IDUuNzY1NzggNC42MTE4OSA1Ljc2NTc4IDQuNUM1Ljc2NTc4IDQuMzg4MTEgNS44MTAyMyA0LjI4MDgxIDUuODg5MzQgNC4yMDE2OUM1Ljk2ODQ2IDQuMTIyNTcgNi4wNzU3NyA0LjA3ODEzIDYuMTg3NjUgNC4wNzgxMkgxMy41MDAyQzEzLjYxMiA0LjA3ODEzIDEzLjcxOTMgNC4xMjI1NyAxMy43OTg1IDQuMjAxNjlDMTMuODc3NiA0LjI4MDgxIDEzLjkyMiA0LjM4ODExIDEzLjkyMiA0LjVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xMFwiPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmei02MFwiPntpdGVtLnRleHR9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmJ1dHRvbi5saW5rfSBjbGFzc05hbWU9XCJidXRuIGJ1dG4tbWQgYnV0bi1iZyBtYWluLWNvbG9yYmczIHRleHQtZGFyayBtdC0zMFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XHJcbiAge2l0ZW0uYnV0dG9uLnRleHR9XHJcbiAgPGkgY2xhc3NOYW1lPVwibWwtNVwiPlxyXG4gICAgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTMuOTIyIDQuNVYxMS44MTI1QzEzLjkyMiAxMS45MjQ0IDEzLjg3NzYgMTIuMDMxNyAxMy43OTg1IDEyLjExMDhDMTMuNzE5MyAxMi4xODk5IDEzLjYxMiAxMi4yMzQ0IDEzLjUwMDIgMTIuMjM0NEMxMy4zODgzIDEyLjIzNDQgMTMuMjgxIDEyLjE4OTkgMTMuMjAxOCAxMi4xMTA4QzEzLjEyMjcgMTIuMDMxNyAxMy4wNzgzIDExLjkyNDQgMTMuMDc4MyAxMS44MTI1VjUuNTE5NTNMNC43OTU0NyAxMy43OTUzQzQuNzE3MTUgMTMuODczNiA0LjYxMDkyIDEzLjkxNzYgNC41MDAxNSAxMy45MTc2QzQuMzg5MzkgMTMuOTE3NiA0LjI4MzE2IDEzLjg3MzYgNC4yMDQ4NCAxMy43OTUzQzQuMTI2NTIgMTMuNzE3IDQuMDgyNTIgMTMuNjEwOCA0LjA4MjUyIDEzLjVDNC4wODI1MiAxMy4zODkyIDQuMTI2NTIgMTMuMjgzIDQuMjA0ODQgMTMuMjA0N0wxMi40ODA2IDQuOTIxODhINi4xODc2NUM2LjA3NTc3IDQuOTIxODggNS45Njg0NiA0Ljg3NzQzIDUuODg5MzQgNC43OTgzMUM1LjgxMDIzIDQuNzE5MTkgNS43NjU3OCA0LjYxMTg5IDUuNzY1NzggNC41QzUuNzY1NzggNC4zODgxMSA1LjgxMDIzIDQuMjgwODEgNS44ODkzNCA0LjIwMTY5QzUuOTY4NDYgNC4xMjI1NyA2LjA3NTc3IDQuMDc4MTMgNi4xODc2NSA0LjA3ODEySDEzLjUwMDJDMTMuNjEyIDQuMDc4MTMgMTMuNzE5MyA0LjEyMjU3IDEzLjc5ODUgNC4yMDE2OUMxMy44Nzc2IDQuMjgwODEgMTMuOTIyIDQuMzg4MTEgMTMuOTIyIDQuNVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9pPlxyXG48L0xpbms+XHJcblxyXG48TGluayBocmVmPXtpdGVtLmJ1dHRvbjIubGlua30gY2xhc3NOYW1lPVwiYnV0biBidXRuLW1kIGJ1dG4tYmcgbWFpbi1jb2xvcmJnMyB0ZXh0LWRhcmsgbXQtMzBcIj5cclxuICB7aXRlbS5idXR0b24yLnRleHR9XHJcbiAgPGkgY2xhc3NOYW1lPVwibWwtNVwiPlxyXG4gICAgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE3IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTMuOTIyIDQuNVYxMS44MTI1QzEzLjkyMiAxMS45MjQ0IDEzLjg3NzYgMTIuMDMxNyAxMy43OTg1IDEyLjExMDhDMTMuNzE5MyAxMi4xODk5IDEzLjYxMiAxMi4yMzQ0IDEzLjUwMDIgMTIuMjM0NEMxMy4zODgzIDEyLjIzNDQgMTMuMjgxIDEyLjE4OTkgMTMuMjAxOCAxMi4xMTA4QzEzLjEyMjcgMTIuMDMxNyAxMy4wNzgzIDExLjkyNDQgMTMuMDc4MyAxMS44MTI1VjUuNTE5NTNMNC43OTU0NyAxMy43OTUzQzQuNzE3MTUgMTMuODczNiA0LjYxMDkyIDEzLjkxNzYgNC41MDAxNSAxMy45MTc2QzQuMzg5MzkgMTMuOTE3NiA0LjI4MzE2IDEzLjg3MzYgNC4yMDQ4NCAxMy43OTUzQzQuMTI2NTIgMTMuNzE3IDQuMDgyNTIgMTMuNjEwOCA0LjA4MjUyIDEzLjVDNC4wODI1MiAxMy4zODkyIDQuMTI2NTIgMTMuMjgzIDQuMjA0ODQgMTMuMjA0N0wxMi40ODA2IDQuOTIxODhINi4xODc2NUM2LjA3NTc3IDQuOTIxODggNS45Njg0NiA0Ljg3NzQzIDUuODg5MzQgNC43OTgzMUM1LjgxMDIzIDQuNzE5MTkgNS43NjU3OCA0LjYxMTg5IDUuNzY1NzggNC41QzUuNzY1NzggNC4zODgxMSA1LjgxMDIzIDQuMjgwODEgNS44ODkzNCA0LjIwMTY5QzUuOTY4NDYgNC4xMjI1NyA2LjA3NTc3IDQuMDc4MTMgNi4xODc2NSA0LjA3ODEySDEzLjUwMDJDMTMuNjEyIDQuMDc4MTMgMTMuNzE5MyA0LjEyMjU3IDEzLjc5ODUgNC4yMDE2OUMxMy44Nzc2IDQuMjgwODEgMTMuOTIyIDQuMzg4MTEgMTMuOTIyIDQuNVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9pPlxyXG48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIH1cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIkF1dG9wbGF5IiwiUGFnaW5hdGlvbiIsIlBhcmFsbGF4IiwibG9hZEJhY2tncm91ZEltYWdlcyIsImRhdGEiLCJzd2lwZXJPcHRpb25zIiwibW9kdWxlcyIsInNwZWVkIiwicGFyYWxsYXgiLCJsb29wIiwib25Td2lwZXIiLCJzd2lwZXIiLCJpIiwic2xpZGVzIiwibGVuZ3RoIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpZHRoIiwib25SZXNpemUiLCJ1cGRhdGUiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIkhlYWRlciIsImxvYWRTd2lwZXIiLCJzZXRMb2FkU3dpcGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiaXRlbSIsImRhdGEtYmFja2dyb3VuZCIsImJhY2tncm91bmQiLCJkYXRhLW92ZXJsYXktZGFyayIsImg2Iiwic3ZnIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIiwic3BhbiIsInRpdGxlIiwiaDEiLCJ0ZXh0IiwiaHJlZiIsImJ1dHRvbiIsImxpbmsiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiYnV0dG9uMiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Corporate/Header.jsx\n"));

/***/ })

});