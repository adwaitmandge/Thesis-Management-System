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

/***/ "./components/ToDo.jsx":
/*!*****************************!*\
  !*** ./components/ToDo.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n/* harmony import */ var _miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous/UpdateModal */ \"./components/miscellaneous/UpdateModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , markDone , updateTask , deleteTask  } = param;\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    console.log(user);\n    console.log(toDo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo.map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]\",\n                                        title: \"\".concat(task.isCompleted ? \"Completed\" : \"Not Completed\"),\n                                        onClick: (e)=>markDone(task),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCircleCheck\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        onClick: ()=>{\n                                            setShowUpdateModal(true);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>setShowDeleteModal(true),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showDeleteModal,\n                        onClose: ()=>setShowDeleteModal(false),\n                        deleteTask: deleteTask,\n                        task: task\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showUpdateModal,\n                        onClose: ()=>setShowUpdateModal(false),\n                        updateTask: updateTask,\n                        task: task\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"h3i57rFKxhmIBNyshrzrMyPIbmE=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQVVkO0FBQ3VDO0FBS3RCO0FBQ0M7QUFDSztBQUNHO0FBQ1I7QUFDVTtBQUNBO0FBRXRELE1BQU1vQixPQUFPLFNBQWdEO1FBQS9DLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUVDLFdBQVUsRUFBRTs7SUFDdEQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHekIsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNLENBQUMwQixpQkFBaUJDLG1CQUFtQixHQUFHM0IsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNLENBQUM0QixjQUFjQyxnQkFBZ0IsR0FBRzdCLCtDQUFRQSxDQUFDLENBQUM7SUFFbEQsTUFBTSxFQUFFOEIsS0FBSSxFQUFFLEdBQUdmLGdFQUFTQTtJQUMxQmdCLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWkMsUUFBUUMsR0FBRyxDQUFDWjtJQUNaLHFCQUNFO2tCQUNHQSxLQUFLYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtZQUN6QixNQUFNLEVBQUVDLFlBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdIO1lBQ2pDSCxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRixLQUFLUSxHQUFHLEtBQUtEO1lBQ3BELHFCQUNFLDhEQUFDdEMsdURBQWM7O2tDQUNiLDhEQUFDeUM7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBV1AsS0FBS0UsV0FBVyxHQUFHLDBCQUEwQixFQUFFOzBDQUM3RCw0RUFBQ0k7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDQzs0Q0FBS0QsV0FBVTtzREFDYk4sUUFBUTs7Ozs7O3NEQUVYLDhEQUFDTzs0Q0FBS0QsV0FBVTtzREFBUVAsS0FBS0EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3JDLDhEQUFDTTtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUNDRixXQUFVO3dDQUNWRyxPQUFPLEdBQW9ELE9BQWpEVixLQUFLRSxXQUFXLEdBQUcsY0FBYyxlQUFlO3dDQUMxRFMsU0FBUyxDQUFDQyxJQUFNekIsU0FBU2E7a0RBRXpCLDRFQUFDekIsMkVBQWVBOzRDQUFDc0MsTUFBTXJDLDRFQUFhQTs7Ozs7Ozs7Ozs7b0NBR3JDb0IsS0FBS1EsR0FBRyxLQUFLSixLQUFLRyxPQUFPLGtCQUN4Qiw4REFBQ0s7d0NBQ0NELFdBQVk7d0NBQ1pHLE9BQU07d0NBQ05DLFNBQVMsSUFBTTs0Q0FDYmxCLG1CQUFtQixJQUFJO3dDQUN6QjtrREFFQSw0RUFBQ2xCLDJFQUFlQTs0Q0FBQ3NDLE1BQU1wQyxvRUFBS0E7Ozs7Ozs7Ozs7O29DQUkvQm1CLEtBQUtRLEdBQUcsS0FBS0osS0FBS0csT0FBTyxrQkFDeEIsOERBQUM3QixvREFBTUE7d0NBQ0xpQyxXQUFZO3dDQUNaRyxPQUFNO3dDQUNOQyxTQUFTLElBQU1wQixtQkFBbUIsSUFBSTtrREFFdEMsNEVBQUNoQiwyRUFBZUE7NENBQUNzQyxNQUFNbkMseUVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLekMsOERBQUNLLGtFQUFXQTt3QkFDVitCLFdBQVd4Qjt3QkFDWHlCLFNBQVMsSUFBTXhCLG1CQUFtQixLQUFLO3dCQUN2Q0YsWUFBWUE7d0JBQ1pXLE1BQU1BOzs7Ozs7a0NBRVIsOERBQUNoQixrRUFBV0E7d0JBQ1Y4QixXQUFXdEI7d0JBQ1h1QixTQUFTLElBQU10QixtQkFBbUIsS0FBSzt3QkFDdkNMLFlBQVlBO3dCQUNaWSxNQUFNQTs7Ozs7OztlQXBEV0EsS0FBS0ksR0FBRzs7Ozs7UUF3RGpDOztBQUdOO0dBekVNbkI7S0FBQUE7QUEyRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub0RvLmpzeD8xNzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxGb290ZXIsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUNpcmNsZUNoZWNrLFxyXG4gIGZhUGVuLFxyXG4gIGZhVHJhc2hDYW4sXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB0b2RvZGF0YSB9IGZyb20gXCIuLi9kYXRhL3RvZG9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9ob29rc1wiO1xyXG5pbXBvcnQgeyBDaGF0U3RhdGUgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgRGVsZXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9EZWxldGVNb2RhbFwiO1xyXG5pbXBvcnQgVXBkYXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9VcGRhdGVNb2RhbFwiO1xyXG5cclxuY29uc3QgVG9EbyA9ICh7IHRvRG8sIG1hcmtEb25lLCB1cGRhdGVUYXNrLCBkZWxldGVUYXNrIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RlbGV0ZU1vZGFsLCBzZXRTaG93RGVsZXRlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93VXBkYXRlTW9kYWwsIHNldFNob3dVcGRhdGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBDaGF0U3RhdGUoKTtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICBjb25zb2xlLmxvZyh0b0RvKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RvRG8ubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNDb21wbGV0ZWQsIGNyZWF0b3IgfSA9IHRhc2s7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJcyB1c2VyLl9pZCA9PT0gY3JlYXRvclwiLCB1c2VyLl9pZCA9PT0gY3JlYXRvcik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Rhc2suX2lkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYmctZ3JheS0xMDAgcm91bmRlZC1bNnB4XSBtYi1bMjBweF0gcHQtWzEwcHhdIHByLVsxNDBweF0gcGwtWzEwcHhdIHBiLVsxNXB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsyMnB4XSByZWxhdGl2ZSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Rhc2suaXNDb21wbGV0ZWQgPyBcImZsZXggbGluZS10aHJvdWdoIC4uLlwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM5OTldIHJvdW5kZWQtWzUwJV0gdy1bMjZweF0gaC1bMjZweF0gZmxleCB0ZXh0LWNlbnRlciB0ZXh0LVsxOHB4XSBtci1bOHB4XSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4XCI+e3Rhc2sudGFza308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNTAlXSAtdHJhbnNsYXRlLXktWzUwJV0gLi4uIHJpZ2h0LVsxNXB4XSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtWyMwMGZmODldIHBvaW50ZXItZXZlbnRzLWF1dG8gbXItWzIwcHhdIG1iLVsxMHB4XSBob3Zlcjp0ZXh0LVsjZmY1ZTAwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHt0YXNrLmlzQ29tcGxldGVkID8gXCJDb21wbGV0ZWRcIiA6IFwiTm90IENvbXBsZXRlZFwifWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBtYXJrRG9uZSh0YXNrKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUNoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAge3VzZXIuX2lkID09PSB0YXNrLmNyZWF0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VXBkYXRlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge3VzZXIuX2lkID09PSB0YXNrLmNyZWF0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZWxldGVNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaENhbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERlbGV0ZU1vZGFsXHJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93RGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0RlbGV0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICBkZWxldGVUYXNrPXtkZWxldGVUYXNrfVxyXG4gICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxVcGRhdGVNb2RhbFxyXG4gICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd1VwZGF0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dVcGRhdGVNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgdXBkYXRlVGFzaz17dXBkYXRlVGFza31cclxuICAgICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbEZvb3RlciIsIk1vZGFsQm9keSIsIk1vZGFsQ2xvc2VCdXR0b24iLCJCdXR0b24iLCJGb250QXdlc29tZUljb24iLCJmYUNpcmNsZUNoZWNrIiwiZmFQZW4iLCJmYVRyYXNoQ2FuIiwidG9kb2RhdGEiLCJ1c2VEaXNjbG9zdXJlIiwiQ2hhdFN0YXRlIiwiQnV0dG9uR3JvdXAiLCJEZWxldGVNb2RhbCIsIlVwZGF0ZU1vZGFsIiwiVG9EbyIsInRvRG8iLCJtYXJrRG9uZSIsInVwZGF0ZVRhc2siLCJkZWxldGVUYXNrIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwic2hvd1VwZGF0ZU1vZGFsIiwic2V0U2hvd1VwZGF0ZU1vZGFsIiwic2VsZWN0ZWRUYXNrIiwic2V0U2VsZWN0ZWRUYXNrIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJpc0NvbXBsZXRlZCIsImNyZWF0b3IiLCJfaWQiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJidXR0b24iLCJ0aXRsZSIsIm9uQ2xpY2siLCJlIiwiaWNvbiIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToDo.jsx\n"));

/***/ })

});