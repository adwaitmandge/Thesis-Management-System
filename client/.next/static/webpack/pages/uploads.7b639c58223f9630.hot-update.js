"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/uploads",{

/***/ "./pages/uploads.js":
/*!**************************!*\
  !*** ./pages/uploads.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/supabaseClient */ \"./config/supabaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst uploads = ()=>{\n    _s();\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [bucketData, setBucketData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleUpload = async (e)=>{\n        let file;\n        if (e.target.files) {\n            file = e.target.files[0];\n        }\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").upload(\"public/\" + (file === null || file === void 0 ? void 0 : file.name), file);\n        if (data) {\n            console.log(data);\n            const res = await fetch(\"http://localhost:5000/upload\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            const jsonRes = await res.json();\n            console.log(\"positve response returned\");\n            console.log(\"jsonRes\", jsonRes);\n            console.log(uploadedFiles);\n        } else if (error) {\n            console.log(error);\n        }\n    };\n    const downloadFiles = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").download(\"public/DMA9.pdf\");\n    };\n    const getFiles = async (req, res)=>{\n        try {\n            const res1 = await fetch(\"http://localhost:5000/upload\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await res1.json();\n            setUploadedFiles(data);\n            console.log(data);\n            console.log(\"inside get files at frontend\");\n            console.log(uploadedFiles);\n            await downloadFiles();\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const getFromBucket = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").list(\"public\", {\n            limit: 100,\n            offset: 0,\n            sortBy: {\n                column: \"name\",\n                order: \"asc\"\n            }\n        });\n        setBucketData(data);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getFiles();\n        getFromBucket();\n    }, []);\n    //   className=\"flex min-h-scree flex-col items-center justify-center py-2 \"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col items-center justify-center py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: \"\",\n                    onChange: handleUpload\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-400\",\n                children: bucketData.map((data)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                data.name,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, undefined)\n                    }, 1, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(uploads, \"CUqcG5B0LNJhluczShmzZvHVEMQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploads);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SVI7R0E5Rk1oQjs7UUFHV0Qsa0RBQVNBOzs7QUE2RjFCLCtEQUFlQyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VwbG9hZHMuanM/Mjg3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9jb25maWcvc3VwYWJhc2VDbGllbnRcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB1cGxvYWRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1cGxvYWRlZEZpbGVzLCBzZXRVcGxvYWRlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYnVja2V0RGF0YSwgc2V0QnVja2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBsZXQgZmlsZTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcykge1xyXG4gICAgICBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbShcInRoZXNpc1wiKVxyXG4gICAgICAudXBsb2FkKFwicHVibGljL1wiICsgZmlsZT8ubmFtZSwgZmlsZSk7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91cGxvYWRcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGpzb25SZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBvc2l0dmUgcmVzcG9uc2UgcmV0dXJuZWRcIik7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcImpzb25SZXNcIiwganNvblJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVwbG9hZGVkRmlsZXMpO1xyXG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG93bmxvYWRGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLmRvd25sb2FkKFwicHVibGljL0RNQTkucGRmXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEZpbGVzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91cGxvYWRcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFVwbG9hZGVkRmlsZXMoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBnZXQgZmlsZXMgYXQgZnJvbnRlbmRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVwbG9hZGVkRmlsZXMpO1xyXG4gICAgICBhd2FpdCBkb3dubG9hZEZpbGVzKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RnJvbUJ1Y2tldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLmxpc3QoXCJwdWJsaWNcIiwge1xyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIHNvcnRCeTogeyBjb2x1bW46IFwibmFtZVwiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRCdWNrZXREYXRhKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGaWxlcygpO1xyXG4gICAgZ2V0RnJvbUJ1Y2tldCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gICBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yIFwiXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTJcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJcIiBvbkNoYW5nZT17aGFuZGxlVXBsb2FkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMFwiPlxyXG4gICAgICAgIHtidWNrZXREYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9ezF9PlxyXG4gICAgICAgICAgICAgIDxwPntkYXRhLm5hbWV9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGxvYWRzO1xyXG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJyZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXBsb2FkcyIsInVwbG9hZGVkRmlsZXMiLCJzZXRVcGxvYWRlZEZpbGVzIiwiYnVja2V0RGF0YSIsInNldEJ1Y2tldERhdGEiLCJyb3V0ZXIiLCJoYW5kbGVVcGxvYWQiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZGF0YSIsImVycm9yIiwic3RvcmFnZSIsImZyb20iLCJ1cGxvYWQiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvblJlcyIsImpzb24iLCJkb3dubG9hZEZpbGVzIiwiZG93bmxvYWQiLCJnZXRGaWxlcyIsInJlcSIsImVyciIsIm1lc3NhZ2UiLCJnZXRGcm9tQnVja2V0IiwibGlzdCIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydEJ5IiwiY29sdW1uIiwib3JkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1hcCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/uploads.js\n"));

/***/ })

});