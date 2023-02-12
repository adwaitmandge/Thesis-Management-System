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

/***/ "./components/ProfessorView.js":
/*!*************************************!*\
  !*** ./components/ProfessorView.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _miscellaneous_AddTaskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous/AddTaskModal */ \"./components/miscellaneous/AddTaskModal.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/shared/lib/constants */ \"./node_modules/next/dist/shared/lib/constants.js\");\n/* harmony import */ var next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProfessorView = ()=>{\n    _s();\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__.ChatState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedStudent, setSelectedStudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getStudents = async ()=>{\n        try {\n            const res1 = await fetch(\"http://localhost:5000/api/professor\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(user.token)\n                }\n            });\n            const data = await res1.json();\n            console.log(data);\n            setStudents(data);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const taskCreationHandler = async (task, student)=>{\n        if (!task.task) {\n            console.log(\"Cannot assign an empty task\");\n            return;\n        }\n        const id = student._id;\n        const body = {\n            task,\n            id\n        };\n        // console.log(\"Before sending post request\");\n        // const res = await fetch(\"http://localhost:5000/api/professor/\", {\n        //   method: \"POST\",\n        //   headers: {\n        //     \"Content-Type\": \"application/json\",\n        //     Authorization: `Bearer ${user.token}`,\n        //   },\n        //   body: JSON.stringify(body),\n        // });\n        console.log(\"After sending post request\");\n        const data = await res.json();\n        console.log(data);\n    };\n    const modalHandler = (student)=>{\n        setSelectedStudent(student);\n        setShowModal(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getStudents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap\",\n            children: students.map((student)=>{\n                const randomNum = Math.floor(Math.random() * 11) + 1;\n                const { _id: id  } = student;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-[300px] rounded overflow-hidden shadow-lg m-3 cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            class: \"w-full h-[50%]\",\n                            src: \"http://localhost:8080/img\".concat(randomNum, \".jpg\"),\n                            alt: \"Sunset in the mountains\",\n                            onClick: ()=>{\n                                router.push(\"professor/\".concat(id));\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"px-6 py-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"font-bold text-xl mb-2\",\n                                    children: student.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"text-gray-700 text-base\",\n                                    children: student.fieldOfInterest\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    class: \"text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2\",\n                                    onClick: (e)=>{\n                                        modalHandler(student);\n                                        e.stopPropagation();\n                                    },\n                                    children: \"Assign Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined),\n                        showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_AddTaskModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            student: selectedStudent,\n                            taskCreationHandler: taskCreationHandler,\n                            isVisible: showModal,\n                            onClose: ()=>setShowModal(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfessorView, \"3356eqrGo/VppT+V8Bz9esNqrWQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProfessorView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfessorView);\nvar _c;\n$RefreshReg$(_c, \"ProfessorView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLOzs7Ozs7Ozs7Ozs7WUFLM0M7Ozs7Ozs7QUFJUjtHQTFHTUo7O1FBRVdELGtEQUFTQTs7O0tBRnBCQztBQTRHTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2Zlc3NvclZpZXcuanM/ZmRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRUYXNrTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9BZGRUYXNrTW9kYWxcIjtcclxuaW1wb3J0IHsgQ2hhdFN0YXRlIH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IFJTQ19NT0RVTEVfVFlQRVMgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgUHJvZmVzc29yVmlldyA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IENoYXRTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFN0dWRlbnQsIHNldFNlbGVjdGVkU3R1ZGVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGdldFN0dWRlbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Byb2Zlc3NvclwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIudG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0U3R1ZGVudHMoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGFza0NyZWF0aW9uSGFuZGxlciA9IGFzeW5jICh0YXNrLCBzdHVkZW50KSA9PiB7XHJcbiAgICBpZiAoIXRhc2sudGFzaykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBhc3NpZ24gYW4gZW1wdHkgdGFza1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlkID0gc3R1ZGVudC5faWQ7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICB0YXNrLFxyXG4gICAgICBpZCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJCZWZvcmUgc2VuZGluZyBwb3N0IHJlcXVlc3RcIik7XHJcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHJvZmVzc29yL1wiLCB7XHJcbiAgICAvLyAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXIgc2VuZGluZyBwb3N0IHJlcXVlc3RcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vZGFsSGFuZGxlciA9IChzdHVkZW50KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFN0dWRlbnQoc3R1ZGVudCk7XHJcbiAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFN0dWRlbnRzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtzdHVkZW50cy5tYXAoKHN0dWRlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKSArIDE7XHJcbiAgICAgICAgICBjb25zdCB7IF9pZDogaWQgfSA9IHN0dWRlbnQ7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctWzMwMHB4XSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgbS0zIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgaC1bNTAlXVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvaW1nJHtyYW5kb21OdW19LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJTdW5zZXQgaW4gdGhlIG1vdW50YWluc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGBwcm9mZXNzb3IvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiPntzdHVkZW50Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+e3N0dWRlbnQuZmllbGRPZkludGVyZXN0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTMwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGFuZGxlcihzdHVkZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBc3NpZ24gVGFza1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWRkVGFza01vZGFsXHJcbiAgICAgICAgICAgICAgICAgIHN0dWRlbnQ9e3NlbGVjdGVkU3R1ZGVudH1cclxuICAgICAgICAgICAgICAgICAgdGFza0NyZWF0aW9uSGFuZGxlcj17dGFza0NyZWF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmVzc29yVmlldztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWRkVGFza01vZGFsIiwiQ2hhdFN0YXRlIiwiUlNDX01PRFVMRV9UWVBFUyIsInVzZVJvdXRlciIsIlByb2Zlc3NvclZpZXciLCJ1c2VyIiwicm91dGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic3R1ZGVudHMiLCJzZXRTdHVkZW50cyIsInNlbGVjdGVkU3R1ZGVudCIsInNldFNlbGVjdGVkU3R1ZGVudCIsImdldFN0dWRlbnRzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwidGFza0NyZWF0aW9uSGFuZGxlciIsInRhc2siLCJzdHVkZW50IiwiaWQiLCJfaWQiLCJib2R5IiwibW9kYWxIYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2xhc3MiLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwicHVzaCIsIm5hbWUiLCJwIiwiZmllbGRPZkludGVyZXN0IiwiYnV0dG9uIiwidHlwZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProfessorView.js\n"));

/***/ })

});