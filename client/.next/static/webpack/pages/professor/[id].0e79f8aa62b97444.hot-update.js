"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/professor/[id]",{

/***/ "./components/assignedTasks.js":
/*!*************************************!*\
  !*** ./components/assignedTasks.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n/* harmony import */ var _miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous/UpdateModal */ \"./components/miscellaneous/UpdateModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , deleteTask , updateTask  } = param;\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getMonth = (num)=>{\n        if (num == 1) return \"Jan\";\n        if (num == 2) return \"Feb\";\n        if (num == 2) return \"Mar\";\n        if (num == 2) return \"Apr\";\n        if (num == 2) return \"May\";\n        if (num == 2) return \"Jun\";\n        if (num == 2) return \"Jul\";\n        if (num == 2) return \"Aug\";\n        if (num == 2) return \"Sep\";\n        if (num == 2) return \"Oct\";\n        if (num == 2) return \"Nov\";\n        if (num == 2) return \"Dec\";\n    };\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.map((task, index)=>{\n            var _task_deadline;\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowUpdateModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowDeleteModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    task === null || task === void 0 ? void 0 : (_task_deadline = task.deadline) === null || _task_deadline === void 0 ? void 0 : _task_deadline.slice(0, 10)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showDeleteModal,\n                        onClose: ()=>setShowDeleteModal(false),\n                        deleteTask: deleteTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showUpdateModal,\n                        onClose: ()=>setShowUpdateModal(false),\n                        updateTask: updateTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 92,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"h3i57rFKxhmIBNyshrzrMyPIbmE=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUNaWSxNQUFNTjs7Ozs7O29CQUdUQSw4QkFDQyw4REFBQ1Qsa0VBQVdBO3dCQUNWK0IsV0FBV3hCO3dCQUNYeUIsU0FBUyxJQUFNeEIsbUJBQW1CLEtBQUs7d0JBQ3ZDSixZQUFZQTt3QkFDWlcsTUFBTU47Ozs7Ozs7ZUFwRFNNLEtBQUtNLEdBQUc7Ozs7O1FBeURqQzs7QUFHTjtHQXhGTXBCO0tBQUFBO0FBMEZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXNzaWduZWRUYXNrcy5qcz85YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFDaXJjbGVDaGVjayxcclxuICBmYVBlbixcclxuICBmYVRyYXNoQ2FuLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgdG9kb2RhdGEgfSBmcm9tIFwiLi4vZGF0YS90b2RvZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaG9va3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhdFN0YXRlIH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvRGVsZXRlTW9kYWxcIjtcclxuaW1wb3J0IFVwZGF0ZU1vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvVXBkYXRlTW9kYWxcIjtcclxuXHJcbmNvbnN0IFRvRG8gPSAoeyB0b0RvLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RlbGV0ZU1vZGFsLCBzZXRTaG93RGVsZXRlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93VXBkYXRlTW9kYWwsIHNldFNob3dVcGRhdGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZ2V0TW9udGggPSAobnVtKSA9PiB7XHJcbiAgICBpZiAobnVtID09IDEpIHJldHVybiBcIkphblwiO1xyXG5cclxuICAgIGlmIChudW0gPT0gMikgcmV0dXJuIFwiRmViXCI7XHJcbiAgICBpZiAobnVtID09IDIpIHJldHVybiBcIk1hclwiO1xyXG4gICAgaWYgKG51bSA9PSAyKSByZXR1cm4gXCJBcHJcIjtcclxuICAgIGlmIChudW0gPT0gMikgcmV0dXJuIFwiTWF5XCI7XHJcbiAgICBpZiAobnVtID09IDIpIHJldHVybiBcIkp1blwiO1xyXG4gICAgaWYgKG51bSA9PSAyKSByZXR1cm4gXCJKdWxcIjtcclxuICAgIGlmIChudW0gPT0gMikgcmV0dXJuIFwiQXVnXCI7XHJcbiAgICBpZiAobnVtID09IDIpIHJldHVybiBcIlNlcFwiO1xyXG4gICAgaWYgKG51bSA9PSAyKSByZXR1cm4gXCJPY3RcIjtcclxuICAgIGlmIChudW0gPT0gMikgcmV0dXJuIFwiTm92XCI7XHJcbiAgICBpZiAobnVtID09IDIpIHJldHVybiBcIkRlY1wiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0b0RvPy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc0NvbXBsZXRlZCwgY3JlYXRvciB9ID0gdGFzaztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklzIHVzZXIuX2lkID09PSBjcmVhdG9yXCIsIHVzZXIuX2lkID09PSBjcmVhdG9yKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFzay5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBiZy1ncmF5LTEwMCByb3VuZGVkLVs2cHhdIG1iLVsyMHB4XSBwdC1bMTBweF0gcHItWzE0MHB4XSBwbC1bMTBweF0gcGItWzE1cHhdIHRleHQtY2VudGVyIHRleHQtWzIycHhdIHJlbGF0aXZlIGZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGFzay5pc0NvbXBsZXRlZCA/IFwiZmxleCBsaW5lLXRocm91Z2ggLi4uXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzk5OV0gcm91bmRlZC1bNTAlXSB3LVsyNnB4XSBoLVsyNnB4XSBmbGV4IHRleHQtY2VudGVyIHRleHQtWzE4cHhdIG1yLVs4cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57dGFzay50YXNrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVs1MCVdIC10cmFuc2xhdGUteS1bNTAlXSAuLi4gcmlnaHQtWzE1cHhdIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAge3VzZXIuX2lkID09PSB0YXNrLmNyZWF0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VXBkYXRlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci1bMjBweF0gY3Vyc29yLXBvaW50ZXIgYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZU1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2hDYW59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHt0YXNrPy5kZWFkbGluZT8uc2xpY2UoMCwgMTApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFRhc2sgJiYgKFxyXG4gICAgICAgICAgICAgIDxEZWxldGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93RGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzaz17ZGVsZXRlVGFza31cclxuICAgICAgICAgICAgICAgIHRhc2s9e3NlbGVjdGVkVGFza31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYXNrICYmIChcclxuICAgICAgICAgICAgICA8VXBkYXRlTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd1VwZGF0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VwZGF0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2s9e3VwZGF0ZVRhc2t9XHJcbiAgICAgICAgICAgICAgICB0YXNrPXtzZWxlY3RlZFRhc2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUNpcmNsZUNoZWNrIiwiZmFQZW4iLCJmYVRyYXNoQ2FuIiwidG9kb2RhdGEiLCJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiQ2hhdFN0YXRlIiwiQnV0dG9uR3JvdXAiLCJEZWxldGVNb2RhbCIsIlVwZGF0ZU1vZGFsIiwiVG9EbyIsInRvRG8iLCJkZWxldGVUYXNrIiwidXBkYXRlVGFzayIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInNob3dVcGRhdGVNb2RhbCIsInNldFNob3dVcGRhdGVNb2RhbCIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsImdldE1vbnRoIiwibnVtIiwidXNlciIsIm1hcCIsInRhc2siLCJpbmRleCIsImlzQ29tcGxldGVkIiwiY3JlYXRvciIsImNvbnNvbGUiLCJsb2ciLCJfaWQiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ0aXRsZSIsIm9uQ2xpY2siLCJpY29uIiwiZGVhZGxpbmUiLCJzbGljZSIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/assignedTasks.js\n"));

/***/ })

});