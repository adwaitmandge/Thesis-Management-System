"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/miscellaneous/AddTaskModal.js":
/*!**************************************************!*\
  !*** ./components/miscellaneous/AddTaskModal.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddTaskModal = (param)=>{\n    let { isVisible , onClose , taskCreationHandler , student  } = param;\n    _s();\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task: \"\",\n        deadline: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"relative w-full h-full max-w-md md:h-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            class: \"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white\",\n                            \"data-modal-hide\": \"popup-modal\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    onClick: onClose,\n                                    \"aria-hidden\": \"true\",\n                                    class: \"w-5 h-5\",\n                                    fill: \"currentColor\",\n                                    viewBox: \"0 0 20 20\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"fill-rule\": \"evenodd\",\n                                        d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                        \"clip-rule\": \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"sr-only\",\n                                    onClick: ()=>onClose(),\n                                    children: \"Close modal\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"p-6 text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    \"aria-hidden\": \"true\",\n                                    class: \"mx-auto mb-3 text-gray-400 w-14 h-14 dark:text-gray-200\",\n                                    fill: \"none\",\n                                    stroke: \"currentColor\",\n                                    viewBox: \"0 0 24 24\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    class: \"mb-2 text-lg font-normal text-gray-500 dark:text-gray-400\",\n                                    children: \"Assign Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-[10px] mb-[20px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            id: \"first_name\",\n                                            class: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            placeholder: \"Assign New Task\",\n                                            value: newTask.task,\n                                            onChange: (e)=>setNewTask({\n                                                    ...newTask,\n                                                    task: e.target.value\n                                                }),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"date\",\n                                            id: \"first_name\",\n                                            class: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-3 dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            placeholder: \"Set a deadline\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-modal-hide\": \"popup-modal\",\n                                    type: \"button\",\n                                    class: \"text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2\",\n                                    onClick: ()=>taskCreationHandler(newTask, student),\n                                    children: \"Assign\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-modal-hide\": \"popup-modal\",\n                                    type: \"button\",\n                                    class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                    onClick: ()=>{\n                                        onClose();\n                                    },\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\AddTaskModal.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AddTaskModal, \"8G/R624v0L87+D3p6KItSccvAsc=\");\n_c = AddTaskModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTaskModal);\nvar _c;\n$RefreshReg$(_c, \"AddTaskModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvQWRkVGFza01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDO0FBRWpDLE1BQU1DLGVBQWUsU0FBMEQ7UUFBekQsRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUVDLG9CQUFtQixFQUFFQyxRQUFPLEVBQUU7O0lBQ3hFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztRQUNyQ1EsTUFBTTtRQUNOQyxVQUFTO0lBQ1g7SUFHQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlFLE9BQU07MEJBQ1QsNEVBQUNGO29CQUFJRSxPQUFNOztzQ0FDVCw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xGLE9BQU07NEJBQ05HLG1CQUFnQjs7OENBRWhCLDhEQUFDQztvQ0FDQ0MsU0FBU2Q7b0NBQ1RlLGVBQVk7b0NBQ1pOLE9BQU07b0NBQ05PLE1BQUs7b0NBQ0xDLFNBQVE7b0NBQ1JDLE9BQU07OENBRU4sNEVBQUNDO3dDQUNDQyxhQUFVO3dDQUNWQyxHQUFFO3dDQUNGQyxhQUFVOzs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ1o7b0NBQU9ELE9BQU07b0NBQVVLLFNBQVMsSUFBTWQ7OENBQVc7Ozs7Ozs7Ozs7OztzQ0FJcEQsOERBQUNPOzRCQUFJRSxPQUFNOzs4Q0FDVCw4REFBQ0k7b0NBQ0NFLGVBQVk7b0NBQ1pOLE9BQU07b0NBQ05PLE1BQUs7b0NBQ0xPLFFBQU87b0NBQ1BOLFNBQVE7b0NBQ1JDLE9BQU07OENBRU4sNEVBQUNDO3dDQUNDSyxrQkFBZTt3Q0FDZkMsbUJBQWdCO3dDQUNoQkMsZ0JBQWE7d0NBQ2JMLEdBQUU7Ozs7Ozs7Ozs7OzhDQUdOLDhEQUFDTTtvQ0FBR2xCLE9BQU07OENBQTREOzs7Ozs7OENBR3RFLDhEQUFDRjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNvQjs0Q0FDQ2pCLE1BQUs7NENBQ0xrQixJQUFHOzRDQUNIcEIsT0FBTTs0Q0FDTnFCLGFBQVk7NENBQ1pDLE9BQU81QixRQUFRRSxJQUFJOzRDQUNuQjJCLFVBQVUsQ0FBQ0MsSUFDVDdCLFdBQVc7b0RBQUUsR0FBR0QsT0FBTztvREFBRUUsTUFBTTRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnREFBQzs0Q0FFaERJLFFBQVE7Ozs7OztzREFFViw4REFBQ1A7NENBQ0NqQixNQUFLOzRDQUNMa0IsSUFBRzs0Q0FFSHBCLE9BQU07NENBQ05xQixhQUFZOzRDQUNaSyxRQUFROzs7Ozs7Ozs7Ozs7OENBR1osOERBQUN6QjtvQ0FDQ0UsbUJBQWdCO29DQUNoQkQsTUFBSztvQ0FDTEYsT0FBTTtvQ0FDTkssU0FBUyxJQUFNYixvQkFBb0JFLFNBQVNEOzhDQUM3Qzs7Ozs7OzhDQUdELDhEQUFDUTtvQ0FDQ0UsbUJBQWdCO29DQUNoQkQsTUFBSztvQ0FDTEYsT0FBTTtvQ0FDTkssU0FBUyxJQUFNO3dDQUNiZDtvQ0FDRjs4Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQW5HTUY7S0FBQUE7QUFxR04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL0FkZFRhc2tNb2RhbC5qcz80NGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBZGRUYXNrTW9kYWwgPSAoeyBpc1Zpc2libGUsIG9uQ2xvc2UsIHRhc2tDcmVhdGlvbkhhbmRsZXIsIHN0dWRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKHtcclxuICAgIHRhc2s6IFwiXCIsXHJcbiAgICBkZWFkbGluZTpcIlwiXHJcbiAgfSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbCBtYXgtdy1tZCBtZDpoLWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIHRvcC0zIHJpZ2h0LTIuNSB0ZXh0LWdyYXktNDAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgcm91bmRlZC1sZyB0ZXh0LXNtIHAtMS41IG1sLWF1dG8gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGRhcms6aG92ZXI6YmctZ3JheS04MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy01IGgtNVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiXHJcbiAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3Itb25seVwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoKX0+XHJcbiAgICAgICAgICAgICAgICBDbG9zZSBtb2RhbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm14LWF1dG8gbWItMyB0ZXh0LWdyYXktNDAwIHctMTQgaC0xNCBkYXJrOnRleHQtZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgOHY0bTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItMiB0ZXh0LWxnIGZvbnQtbm9ybWFsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICBBc3NpZ24gVGFza1xyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bMTBweF0gbWItWzIwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFzc2lnbiBOZXcgVGFza1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrLnRhc2t9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXROZXdUYXNrKHsgLi4ubmV3VGFzaywgdGFzazogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBtdC0zIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2V0IGEgZGVhZGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTMwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGFza0NyZWF0aW9uSGFuZGxlcihuZXdUYXNrLCBzdHVkZW50KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBc3NpZ25cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0yMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNSBweS0yLjUgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czp6LTEwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2tNb2RhbDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWRkVGFza01vZGFsIiwiaXNWaXNpYmxlIiwib25DbG9zZSIsInRhc2tDcmVhdGlvbkhhbmRsZXIiLCJzdHVkZW50IiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJ0YXNrIiwiZGVhZGxpbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzcyIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLW1vZGFsLWhpZGUiLCJzdmciLCJvbkNsaWNrIiwiYXJpYS1oaWRkZW4iLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJzdHJva2UiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInN0cm9rZS13aWR0aCIsImgzIiwiaW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/miscellaneous/AddTaskModal.js\n"));

/***/ })

});