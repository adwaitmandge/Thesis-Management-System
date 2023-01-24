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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/supabaseClient */ \"./config/supabaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst uploads = ()=>{\n    _s();\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [bucketData, setBucketData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleUpload = async (e)=>{\n        let file;\n        if (e.target.files) {\n            file = e.target.files[0];\n        }\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").upload(\"public/\" + (file === null || file === void 0 ? void 0 : file.name), file);\n        if (data) {\n            console.log(data);\n            const res = await fetch(\"http://localhost:5000/upload\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            const jsonRes = await res.json();\n            console.log(\"positve response returned\");\n            console.log(\"jsonRes\", jsonRes);\n            console.log(uploadedFiles);\n        } else if (error) {\n            console.log(error);\n        }\n    };\n    const downloadFiles = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").download(\"\");\n    };\n    const getFiles = async (req, res)=>{\n        try {\n            const res1 = await fetch(\"http://localhost:5000/upload\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await res1.json();\n            setUploadedFiles(data);\n            console.log(data);\n            console.log(\"inside get files at frontend\");\n            console.log(uploadedFiles);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const getFromBucket = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").list(\"public\", {\n            limit: 100,\n            offset: 0,\n            sortBy: {\n                column: \"name\",\n                order: \"asc\"\n            }\n        });\n        setBucketData(data);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getFiles();\n        getFromBucket();\n    }, []);\n    //   className=\"flex min-h-scree flex-col items-center justify-center py-2 \"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col items-center justify-center py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: \"\",\n                    onChange: handleUpload\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-400\",\n                children: bucketData.map((data)=>{\n                    console.log(\"Mapping\", data.name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>downloadFile(),\n                            className: \"text-black\",\n                            children: [\n                                data.name,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, undefined)\n                    }, data.id, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(uploads, \"CUqcG5B0LNJhluczShmzZvHVEMQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploads);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOztnQ0FBYy9CLEtBQUtLLElBQUk7Z0NBQUM7Ozs7Ozs7dUJBRGpFTCxLQUFLdUMsRUFBRTs7Ozs7Z0JBSXJCOzs7Ozs7OztBQUlSO0dBN0ZNbEQ7O1FBR1dELGtEQUFTQTs7O0FBNEYxQiwrREFBZUMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91cGxvYWRzLmpzPzI4NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vY29uZmlnL3N1cGFiYXNlQ2xpZW50XCI7XHJcbmltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgdXBsb2FkcyA9ICgpID0+IHtcclxuICBjb25zdCBbdXBsb2FkZWRGaWxlcywgc2V0VXBsb2FkZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2J1Y2tldERhdGEsIHNldEJ1Y2tldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGU7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuICAgICAgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLnVwbG9hZChcInB1YmxpYy9cIiArIGZpbGU/Lm5hbWUsIGZpbGUpO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdXBsb2FkXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBqc29uUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJwb3NpdHZlIHJlc3BvbnNlIHJldHVybmVkXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJqc29uUmVzXCIsIGpzb25SZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWRlZEZpbGVzKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvd25sb2FkRmlsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKFwidGhlc2lzXCIpXHJcbiAgICAgIC5kb3dubG9hZChgYCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RmlsZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VwbG9hZFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0VXBsb2FkZWRGaWxlcyhkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGdldCBmaWxlcyBhdCBmcm9udGVuZFwiKTtcclxuICAgICAgY29uc29sZS5sb2codXBsb2FkZWRGaWxlcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RnJvbUJ1Y2tldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLmxpc3QoXCJwdWJsaWNcIiwge1xyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIHNvcnRCeTogeyBjb2x1bW46IFwibmFtZVwiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRCdWNrZXREYXRhKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZpbGVzKCk7XHJcbiAgICBnZXRGcm9tQnVja2V0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyAgIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTIgXCJcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMlwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cIlwiIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwXCI+XHJcbiAgICAgICAge2J1Y2tldERhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHBpbmdcIiwgZGF0YS5uYW1lKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkRmlsZSgpfSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+e2RhdGEubmFtZX0gPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkcztcclxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwicmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVwbG9hZHMiLCJ1cGxvYWRlZEZpbGVzIiwic2V0VXBsb2FkZWRGaWxlcyIsImJ1Y2tldERhdGEiLCJzZXRCdWNrZXREYXRhIiwicm91dGVyIiwiaGFuZGxlVXBsb2FkIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImRhdGEiLCJlcnJvciIsInN0b3JhZ2UiLCJmcm9tIiwidXBsb2FkIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb25SZXMiLCJqc29uIiwiZG93bmxvYWRGaWxlcyIsImRvd25sb2FkIiwiZ2V0RmlsZXMiLCJyZXEiLCJlcnIiLCJtZXNzYWdlIiwiZ2V0RnJvbUJ1Y2tldCIsImxpc3QiLCJsaW1pdCIsIm9mZnNldCIsInNvcnRCeSIsImNvbHVtbiIsIm9yZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIiwiZG93bmxvYWRGaWxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/uploads.js\n"));

/***/ })

});