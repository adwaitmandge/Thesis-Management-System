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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n/* harmony import */ var _miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous/UpdateModal */ \"./components/miscellaneous/UpdateModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , deleteTask , updateTask  } = param;\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowUpdateModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>{\n                                            setSelectedTask(task);\n                                            setShowDeleteModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    task.deadline.slice(0, 10)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showDeleteModal,\n                        onClose: ()=>setShowDeleteModal(false),\n                        deleteTask: deleteTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 68,\n                        columnNumber: 15\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showUpdateModal,\n                        onClose: ()=>setShowUpdateModal(false),\n                        updateTask: updateTask,\n                        task: selectedTask\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                        lineNumber: 76,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\assignedTasks.js\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"h3i57rFKxhmIBNyshrzrMyPIbmE=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Fzc2lnbmVkVGFza3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ3lCO0FBS3RCO0FBQ0M7QUFDSztBQUNQO0FBQ1U7QUFDUjtBQUNVO0FBQ0E7QUFFdEQsTUFBTWEsT0FBTyxTQUFzQztRQUFyQyxFQUFFQyxLQUFJLEVBQUVDLFdBQVUsRUFBRUMsV0FBVSxFQUFFOztJQUM1QyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ2tCLGlCQUFpQkMsbUJBQW1CLEdBQUduQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ29CLGNBQWNDLGdCQUFnQixHQUFHckIsK0NBQVFBLENBQUMsQ0FBQztJQUVsRCxNQUFNLEVBQUVzQixLQUFJLEVBQUUsR0FBR2QsZ0VBQVNBO0lBQzFCLHFCQUNFO2tCQUNHSyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1VLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO1lBQzFCLE1BQU0sRUFBRUMsWUFBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0g7WUFDakNJLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJQLEtBQUtRLEdBQUcsS0FBS0g7WUFDcEQscUJBQ0UsOERBQUM1Qix1REFBYzs7a0NBQ2IsOERBQUNpQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFXVCxLQUFLRSxXQUFXLEdBQUcsMEJBQTBCLEVBQUU7MENBQzdELDRFQUFDTTtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNDOzRDQUFLRCxXQUFVO3NEQUNiUixRQUFROzs7Ozs7c0RBRVgsOERBQUNTOzRDQUFLRCxXQUFVO3NEQUFRVCxLQUFLQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHckMsOERBQUNRO2dDQUFJQyxXQUFVOztvQ0FDWlgsS0FBS1EsR0FBRyxLQUFLTixLQUFLRyxPQUFPLGtCQUN4Qiw4REFBQ087d0NBQ0NELFdBQVk7d0NBQ1pFLE9BQU07d0NBQ05DLFNBQVMsSUFBTTs0Q0FDYmYsZ0JBQWdCRzs0Q0FDaEJMLG1CQUFtQixJQUFJO3dDQUN6QjtrREFFQSw0RUFBQ2xCLDJFQUFlQTs0Q0FBQ29DLE1BQU1sQyxvRUFBS0E7Ozs7Ozs7Ozs7O29DQUcvQm1CLEtBQUtRLEdBQUcsS0FBS04sS0FBS0csT0FBTyxrQkFDeEIsOERBQUNwQixvREFBTUE7d0NBQ0wwQixXQUFZO3dDQUNaRSxPQUFNO3dDQUNOQyxTQUFTLElBQU07NENBQ2JmLGdCQUFnQkc7NENBQ2hCUCxtQkFBbUIsSUFBSTt3Q0FDekI7a0RBRUEsNEVBQUNoQiwyRUFBZUE7NENBQUNvQyxNQUFNakMseUVBQVVBOzs7Ozs7Ozs7OztvQ0FHcENvQixLQUFLYyxRQUFRLENBQUNDLEtBQUssQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7O29CQUkzQm5CLDhCQUNDLDhEQUFDVixrRUFBV0E7d0JBQ1Y4QixXQUFXeEI7d0JBQ1h5QixTQUFTLElBQU14QixtQkFBbUIsS0FBSzt3QkFDdkNILFlBQVlBO3dCQUNaVSxNQUFNSjs7Ozs7O29CQUdUQSw4QkFDQyw4REFBQ1Qsa0VBQVdBO3dCQUNWNkIsV0FBV3RCO3dCQUNYdUIsU0FBUyxJQUFNdEIsbUJBQW1CLEtBQUs7d0JBQ3ZDSixZQUFZQTt3QkFDWlMsTUFBTUo7Ozs7Ozs7ZUFwRFNJLEtBQUtNLEdBQUc7Ozs7O1FBeURqQzs7QUFHTjtHQXhFTWxCO0tBQUFBO0FBMEVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXNzaWduZWRUYXNrcy5qcz85YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFDaXJjbGVDaGVjayxcclxuICBmYVBlbixcclxuICBmYVRyYXNoQ2FuLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgdG9kb2RhdGEgfSBmcm9tIFwiLi4vZGF0YS90b2RvZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaG9va3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhdFN0YXRlIH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvRGVsZXRlTW9kYWxcIjtcclxuaW1wb3J0IFVwZGF0ZU1vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvVXBkYXRlTW9kYWxcIjtcclxuXHJcbmNvbnN0IFRvRG8gPSAoeyB0b0RvLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RlbGV0ZU1vZGFsLCBzZXRTaG93RGVsZXRlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93VXBkYXRlTW9kYWwsIHNldFNob3dVcGRhdGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBDaGF0U3RhdGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RvRG8/Lm1hcCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGlzQ29tcGxldGVkLCBjcmVhdG9yIH0gPSB0YXNrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXMgdXNlci5faWQgPT09IGNyZWF0b3JcIiwgdXNlci5faWQgPT09IGNyZWF0b3IpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt0YXNrLl9pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGJnLWdyYXktMTAwIHJvdW5kZWQtWzZweF0gbWItWzIwcHhdIHB0LVsxMHB4XSBwci1bMTQwcHhdIHBsLVsxMHB4XSBwYi1bMTVweF0gdGV4dC1jZW50ZXIgdGV4dC1bMjJweF0gcmVsYXRpdmUgZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0YXNrLmlzQ29tcGxldGVkID8gXCJmbGV4IGxpbmUtdGhyb3VnaCAuLi5cIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTk5XSByb3VuZGVkLVs1MCVdIHctWzI2cHhdIGgtWzI2cHhdIGZsZXggdGV4dC1jZW50ZXIgdGV4dC1bMThweF0gbXItWzhweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleFwiPnt0YXNrLnRhc2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzUwJV0gLXRyYW5zbGF0ZS15LVs1MCVdIC4uLiByaWdodC1bMTVweF0gaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dVcGRhdGVNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHt1c2VyLl9pZCA9PT0gdGFzay5jcmVhdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlciBgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaENhbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3Rhc2suZGVhZGxpbmUuc2xpY2UoMCwgMTApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFRhc2sgJiYgKFxyXG4gICAgICAgICAgICAgIDxEZWxldGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93RGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzaz17ZGVsZXRlVGFza31cclxuICAgICAgICAgICAgICAgIHRhc2s9e3NlbGVjdGVkVGFza31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYXNrICYmIChcclxuICAgICAgICAgICAgICA8VXBkYXRlTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd1VwZGF0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VwZGF0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2s9e3VwZGF0ZVRhc2t9XHJcbiAgICAgICAgICAgICAgICB0YXNrPXtzZWxlY3RlZFRhc2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUNpcmNsZUNoZWNrIiwiZmFQZW4iLCJmYVRyYXNoQ2FuIiwidG9kb2RhdGEiLCJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiQ2hhdFN0YXRlIiwiQnV0dG9uR3JvdXAiLCJEZWxldGVNb2RhbCIsIlVwZGF0ZU1vZGFsIiwiVG9EbyIsInRvRG8iLCJkZWxldGVUYXNrIiwidXBkYXRlVGFzayIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInNob3dVcGRhdGVNb2RhbCIsInNldFNob3dVcGRhdGVNb2RhbCIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsInVzZXIiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJpc0NvbXBsZXRlZCIsImNyZWF0b3IiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwiRnJhZ21lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidGl0bGUiLCJvbkNsaWNrIiwiaWNvbiIsImRlYWRsaW5lIiwic2xpY2UiLCJpc1Zpc2libGUiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/assignedTasks.js\n"));

/***/ })

});