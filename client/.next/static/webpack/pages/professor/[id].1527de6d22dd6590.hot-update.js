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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n/* harmony import */ var _miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous/UpdateModal */ \"./components/miscellaneous/UpdateModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , deleteTask , updateTask  } = param;\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getMonth = (num)=>{\n        if (num == 1) return \"Jan\";\n    };\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.map((task, index)=>{\n            var _task_deadline;\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowUpdateModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowDeleteModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    task === null || task === void 0 ? void 0 : (_task_deadline = task.deadline) === null || _task_deadline === void 0 ? void 0 : _task_deadline.slice(0, 10)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showDeleteModal,\n                        onClose: ()=>setShowDeleteModal(false),\n                        deleteTask: deleteTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 74,\n                        columnNumber: 15\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showUpdateModal,\n                        onClose: ()=>setShowUpdateModal(false),\n                        updateTask: updateTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"h3i57rFKxhmIBNyshrzrMyPIbmE=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Fzc2lnbmVkVGFza3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ3lCO0FBS3RCO0FBQ0M7QUFDSztBQUNQO0FBQ1U7QUFDUjtBQUNVO0FBQ0E7QUFFdEQsTUFBTWEsT0FBTyxTQUFzQztRQUFyQyxFQUFFQyxLQUFJLEVBQUVDLFdBQVUsRUFBRUMsV0FBVSxFQUFFOztJQUM1QyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ2tCLGlCQUFpQkMsbUJBQW1CLEdBQUduQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ29CLGNBQWNDLGdCQUFnQixHQUFHckIsK0NBQVFBLENBQUMsQ0FBQztJQUVsRCxNQUFNc0IsV0FBVyxDQUFDQyxNQUFRO1FBQ3hCLElBQUdBLE9BQU8sR0FDUixPQUFPO0lBQ1g7SUFHQSxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHaEIsZ0VBQVNBO0lBQzFCLHFCQUNFO2tCQUNHSyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1ZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO2dCQXVDakJEO1lBdENULE1BQU0sRUFBRUUsWUFBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0g7WUFDakNJLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJQLEtBQUtRLEdBQUcsS0FBS0g7WUFDcEQscUJBQ0UsOERBQUM5Qix1REFBYzs7a0NBQ2IsOERBQUNtQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFXVCxLQUFLRSxXQUFXLEdBQUcsMEJBQTBCLEVBQUU7MENBQzdELDRFQUFDTTtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNDOzRDQUFLRCxXQUFVO3NEQUNiUixRQUFROzs7Ozs7c0RBRVgsOERBQUNTOzRDQUFLRCxXQUFVO3NEQUFRVCxLQUFLQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHckMsOERBQUNRO2dDQUFJQyxXQUFVOztvQ0FDWlgsS0FBS1EsR0FBRyxLQUFLTixLQUFLRyxPQUFPLGtCQUN4Qiw4REFBQ087d0NBQ0NELFdBQVk7d0NBQ1pFLE9BQU07d0NBQ05DLFNBQVMsSUFBTTs0Q0FDYmpCLGdCQUFnQks7NENBQ2hCUCxtQkFBbUIsSUFBSTt3Q0FDekI7a0RBRUEsNEVBQUNsQiwyRUFBZUE7NENBQUNzQyxNQUFNcEMsb0VBQUtBOzs7Ozs7Ozs7OztvQ0FHL0JxQixLQUFLUSxHQUFHLEtBQUtOLEtBQUtHLE9BQU8sa0JBQ3hCLDhEQUFDdEIsb0RBQU1BO3dDQUNMNEIsV0FBWTt3Q0FDWkUsT0FBTTt3Q0FDTkMsU0FBUyxJQUFNOzRDQUNiakIsZ0JBQWdCSzs0Q0FDaEJULG1CQUFtQixJQUFJO3dDQUN6QjtrREFFQSw0RUFBQ2hCLDJFQUFlQTs0Q0FBQ3NDLE1BQU1uQyx5RUFBVUE7Ozs7Ozs7Ozs7O29DQUdwQ3NCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLEtBQU1jLFFBQVEsY0FBZGQsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWdCZSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7b0JBSTdCckIsOEJBQ0MsOERBQUNWLGtFQUFXQTt3QkFDVmdDLFdBQVcxQjt3QkFDWDJCLFNBQVMsSUFBTTFCLG1CQUFtQixLQUFLO3dCQUN2Q0gsWUFBWUE7d0JBQ1pZLE1BQU1OOzs7Ozs7b0JBR1RBLDhCQUNDLDhEQUFDVCxrRUFBV0E7d0JBQ1YrQixXQUFXeEI7d0JBQ1h5QixTQUFTLElBQU14QixtQkFBbUIsS0FBSzt3QkFDdkNKLFlBQVlBO3dCQUNaVyxNQUFNTjs7Ozs7OztlQXBEU00sS0FBS00sR0FBRzs7Ozs7UUF5RGpDOztBQUdOO0dBOUVNcEI7S0FBQUE7QUFnRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hc3NpZ25lZFRhc2tzLmpzPzliNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUNpcmNsZUNoZWNrLFxyXG4gIGZhUGVuLFxyXG4gIGZhVHJhc2hDYW4sXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB0b2RvZGF0YSB9IGZyb20gXCIuLi9kYXRhL3RvZG9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9ob29rc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGF0U3RhdGUgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgRGVsZXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9EZWxldGVNb2RhbFwiO1xyXG5pbXBvcnQgVXBkYXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9VcGRhdGVNb2RhbFwiO1xyXG5cclxuY29uc3QgVG9EbyA9ICh7IHRvRG8sIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2sgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dVcGRhdGVNb2RhbCwgc2V0U2hvd1VwZGF0ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZFRhc2tdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBnZXRNb250aCA9IChudW0pID0+IHtcclxuICAgIGlmKG51bSA9PSAxKVxyXG4gICAgICByZXR1cm4gXCJKYW5cIlxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0b0RvPy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc0NvbXBsZXRlZCwgY3JlYXRvciB9ID0gdGFzaztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklzIHVzZXIuX2lkID09PSBjcmVhdG9yXCIsIHVzZXIuX2lkID09PSBjcmVhdG9yKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFzay5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBiZy1ncmF5LTEwMCByb3VuZGVkLVs2cHhdIG1iLVsyMHB4XSBwdC1bMTBweF0gcHItWzE0MHB4XSBwbC1bMTBweF0gcGItWzE1cHhdIHRleHQtY2VudGVyIHRleHQtWzIycHhdIHJlbGF0aXZlIGZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGFzay5pc0NvbXBsZXRlZCA/IFwiZmxleCBsaW5lLXRocm91Z2ggLi4uXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzk5OV0gcm91bmRlZC1bNTAlXSB3LVsyNnB4XSBoLVsyNnB4XSBmbGV4IHRleHQtY2VudGVyIHRleHQtWzE4cHhdIG1yLVs4cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57dGFzay50YXNrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVs1MCVdIC10cmFuc2xhdGUteS1bNTAlXSAuLi4gcmlnaHQtWzE1cHhdIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAge3VzZXIuX2lkID09PSB0YXNrLmNyZWF0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VXBkYXRlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci1bMjBweF0gY3Vyc29yLXBvaW50ZXIgYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZU1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2hDYW59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHt0YXNrPy5kZWFkbGluZT8uc2xpY2UoMCwgMTApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFRhc2sgJiYgKFxyXG4gICAgICAgICAgICAgIDxEZWxldGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93RGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzaz17ZGVsZXRlVGFza31cclxuICAgICAgICAgICAgICAgIHRhc2s9e3NlbGVjdGVkVGFza31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYXNrICYmIChcclxuICAgICAgICAgICAgICA8VXBkYXRlTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd1VwZGF0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VwZGF0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2s9e3VwZGF0ZVRhc2t9XHJcbiAgICAgICAgICAgICAgICB0YXNrPXtzZWxlY3RlZFRhc2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUNpcmNsZUNoZWNrIiwiZmFQZW4iLCJmYVRyYXNoQ2FuIiwidG9kb2RhdGEiLCJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiQ2hhdFN0YXRlIiwiQnV0dG9uR3JvdXAiLCJEZWxldGVNb2RhbCIsIlVwZGF0ZU1vZGFsIiwiVG9EbyIsInRvRG8iLCJkZWxldGVUYXNrIiwidXBkYXRlVGFzayIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInNob3dVcGRhdGVNb2RhbCIsInNldFNob3dVcGRhdGVNb2RhbCIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsImdldE1vbnRoIiwibnVtIiwidXNlciIsIm1hcCIsInRhc2siLCJpbmRleCIsImlzQ29tcGxldGVkIiwiY3JlYXRvciIsImNvbnNvbGUiLCJsb2ciLCJfaWQiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ0aXRsZSIsIm9uQ2xpY2siLCJpY29uIiwiZGVhZGxpbmUiLCJzbGljZSIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/assignedTasks.js\n"));

/***/ })

});