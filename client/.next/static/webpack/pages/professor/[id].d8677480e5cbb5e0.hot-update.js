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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n/* harmony import */ var _miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous/UpdateModal */ \"./components/miscellaneous/UpdateModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , deleteTask , updateTask  } = param;\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getMonth = (num)=>{\n        if (num == 1) return \"Jan\";\n        if (num == 2) return \"Feb\";\n        if (num == 3) return \"Mar\";\n        if (num == 4) return \"Apr\";\n        if (num == 5) return \"May\";\n        if (num == 6) return \"Jun\";\n        if (num == 7) return \"Jul\";\n        if (num == 8) return \"Aug\";\n        if (num == 9) return \"Sep\";\n        if (num == 10) return \"Oct\";\n        if (num == 11) return \"Nov\";\n        if (num == 12) return \"Dec\";\n    };\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.map((task, index)=>{\n            var _task_deadline, _task_deadline1, _task_deadline2;\n            const { isCompleted , creator  } = task;\n            const date = task === null || task === void 0 ? void 0 : (_task_deadline = task.deadline) === null || _task_deadline === void 0 ? void 0 : _task_deadline.slice(0, 10);\n            const monthNum = task === null || task === void 0 ? void 0 : (_task_deadline1 = task.deadline) === null || _task_deadline1 === void 0 ? void 0 : _task_deadline1.slice(5, 7);\n            const month = getMonth(monthNum);\n            const day = task === null || task === void 0 ? void 0 : (_task_deadline2 = task.deadline) === null || _task_deadline2 === void 0 ? void 0 : _task_deadline2.slice(8, 10);\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowUpdateModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowDeleteModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold text-sm\",\n                                        children: [\n                                            \"Due \",\n                                            \"\".concat(day, \" \").concat(month)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showDeleteModal,\n                        onClose: ()=>setShowDeleteModal(false),\n                        deleteTask: deleteTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showUpdateModal,\n                        onClose: ()=>setShowUpdateModal(false),\n                        updateTask: updateTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 98,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                lineNumber: 50,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"h3i57rFKxhmIBNyshrzrMyPIbmE=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sa0JBQ3hCLDhEQUFDdEIsb0RBQU1BO3dDQUNMa0MsV0FBWTt3Q0FDWkUsT0FBTTt3Q0FDTkMsU0FBUyxJQUFNOzRDQUNidkIsZ0JBQWdCSzs0Q0FDaEJULG1CQUFtQixJQUFJO3dDQUN6QjtrREFFQSw0RUFBQ2hCLDJFQUFlQTs0Q0FBQzRDLE1BQU16Qyx5RUFBVUE7Ozs7Ozs7Ozs7O2tEQUdyQyw4REFBQ3NDO3dDQUFLRCxXQUFVOzs0Q0FBb0I7NENBQU0sR0FBU1AsT0FBUEMsS0FBSSxLQUFTLE9BQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUl0RGQsOEJBQ0MsOERBQUNWLGtFQUFXQTt3QkFDVm9DLFdBQVc5Qjt3QkFDWCtCLFNBQVMsSUFBTTlCLG1CQUFtQixLQUFLO3dCQUN2Q0gsWUFBWUE7d0JBQ1pZLE1BQU1OOzs7Ozs7b0JBR1RBLDhCQUNDLDhEQUFDVCxrRUFBV0E7d0JBQ1ZtQyxXQUFXNUI7d0JBQ1g2QixTQUFTLElBQU01QixtQkFBbUIsS0FBSzt3QkFDdkNKLFlBQVlBO3dCQUNaVyxNQUFNTjs7Ozs7OztlQXBEU00sS0FBS1ksR0FBRzs7Ozs7UUF5RGpDOztBQUdOO0dBOUZNMUI7S0FBQUE7QUFnR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hc3NpZ25lZFRhc2tzLmpzPzliNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUNpcmNsZUNoZWNrLFxyXG4gIGZhUGVuLFxyXG4gIGZhVHJhc2hDYW4sXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB0b2RvZGF0YSB9IGZyb20gXCIuLi9kYXRhL3RvZG9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9ob29rc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGF0U3RhdGUgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgRGVsZXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9EZWxldGVNb2RhbFwiO1xyXG5pbXBvcnQgVXBkYXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9VcGRhdGVNb2RhbFwiO1xyXG5cclxuY29uc3QgVG9EbyA9ICh7IHRvRG8sIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2sgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dVcGRhdGVNb2RhbCwgc2V0U2hvd1VwZGF0ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZFRhc2tdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBnZXRNb250aCA9IChudW0pID0+IHtcclxuICAgIGlmIChudW0gPT0gMSkgcmV0dXJuIFwiSmFuXCI7XHJcblxyXG4gICAgaWYgKG51bSA9PSAyKSByZXR1cm4gXCJGZWJcIjtcclxuICAgIGlmIChudW0gPT0gMykgcmV0dXJuIFwiTWFyXCI7XHJcbiAgICBpZiAobnVtID09IDQpIHJldHVybiBcIkFwclwiO1xyXG4gICAgaWYgKG51bSA9PSA1KSByZXR1cm4gXCJNYXlcIjtcclxuICAgIGlmIChudW0gPT0gNikgcmV0dXJuIFwiSnVuXCI7XHJcbiAgICBpZiAobnVtID09IDcpIHJldHVybiBcIkp1bFwiO1xyXG4gICAgaWYgKG51bSA9PSA4KSByZXR1cm4gXCJBdWdcIjtcclxuICAgIGlmIChudW0gPT0gOSkgcmV0dXJuIFwiU2VwXCI7XHJcbiAgICBpZiAobnVtID09IDEwKSByZXR1cm4gXCJPY3RcIjtcclxuICAgIGlmIChudW0gPT0gMTEpIHJldHVybiBcIk5vdlwiO1xyXG4gICAgaWYgKG51bSA9PSAxMikgcmV0dXJuIFwiRGVjXCI7XHJcbiAgfTtcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0b0RvPy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc0NvbXBsZXRlZCwgY3JlYXRvciB9ID0gdGFzaztcclxuICAgICAgICBjb25zdCBkYXRlID0gdGFzaz8uZGVhZGxpbmU/LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICBjb25zdCBtb250aE51bSA9IHRhc2s/LmRlYWRsaW5lPy5zbGljZSg1LCA3KTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGdldE1vbnRoKG1vbnRoTnVtKTtcclxuICAgICAgICBjb25zdCBkYXkgPSB0YXNrPy5kZWFkbGluZT8uc2xpY2UoOCwgMTApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXMgdXNlci5faWQgPT09IGNyZWF0b3JcIiwgdXNlci5faWQgPT09IGNyZWF0b3IpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt0YXNrLl9pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGJnLWdyYXktMTAwIHJvdW5kZWQtWzZweF0gbWItWzIwcHhdIHB0LVsxMHB4XSBwci1bMTQwcHhdIHBsLVsxMHB4XSBwYi1bMTVweF0gdGV4dC1jZW50ZXIgdGV4dC1bMjJweF0gcmVsYXRpdmUgZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0YXNrLmlzQ29tcGxldGVkID8gXCJmbGV4IGxpbmUtdGhyb3VnaCAuLi5cIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTk5XSByb3VuZGVkLVs1MCVdIHctWzI2cHhdIGgtWzI2cHhdIGZsZXggdGV4dC1jZW50ZXIgdGV4dC1bMThweF0gbXItWzhweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleFwiPnt0YXNrLnRhc2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzUwJV0gLXRyYW5zbGF0ZS15LVs1MCVdIC4uLiByaWdodC1bMTVweF0gaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dVcGRhdGVNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHt1c2VyLl9pZCA9PT0gdGFzay5jcmVhdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlciBgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaENhbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc21cIj5EdWUge2Ake2RheX0gJHttb250aH1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYXNrICYmIChcclxuICAgICAgICAgICAgICA8RGVsZXRlTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd0RlbGV0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0RlbGV0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2s9e2RlbGV0ZVRhc2t9XHJcbiAgICAgICAgICAgICAgICB0YXNrPXtzZWxlY3RlZFRhc2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3NlbGVjdGVkVGFzayAmJiAoXHJcbiAgICAgICAgICAgICAgPFVwZGF0ZU1vZGFsXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3Nob3dVcGRhdGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dVcGRhdGVNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUYXNrPXt1cGRhdGVUYXNrfVxyXG4gICAgICAgICAgICAgICAgdGFzaz17c2VsZWN0ZWRUYXNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvRG87XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVDaGVjayIsImZhUGVuIiwiZmFUcmFzaENhbiIsInRvZG9kYXRhIiwidXNlRGlzY2xvc3VyZSIsIkJ1dHRvbiIsIkNoYXRTdGF0ZSIsIkJ1dHRvbkdyb3VwIiwiRGVsZXRlTW9kYWwiLCJVcGRhdGVNb2RhbCIsIlRvRG8iLCJ0b0RvIiwiZGVsZXRlVGFzayIsInVwZGF0ZVRhc2siLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJzaG93VXBkYXRlTW9kYWwiLCJzZXRTaG93VXBkYXRlTW9kYWwiLCJzZWxlY3RlZFRhc2siLCJzZXRTZWxlY3RlZFRhc2siLCJnZXRNb250aCIsIm51bSIsInVzZXIiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJpc0NvbXBsZXRlZCIsImNyZWF0b3IiLCJkYXRlIiwiZGVhZGxpbmUiLCJzbGljZSIsIm1vbnRoTnVtIiwibW9udGgiLCJkYXkiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwiRnJhZ21lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidGl0bGUiLCJvbkNsaWNrIiwiaWNvbiIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/assignedTasks.js\n"));

/***/ })

});