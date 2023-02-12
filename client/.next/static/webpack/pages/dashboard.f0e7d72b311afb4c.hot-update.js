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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _miscellaneous_AddTaskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous/AddTaskModal */ \"./components/miscellaneous/AddTaskModal.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/shared/lib/constants */ \"./node_modules/next/dist/shared/lib/constants.js\");\n/* harmony import */ var next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProfessorView = ()=>{\n    _s();\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__.ChatState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedStudent, setSelectedStudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getStudents = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/api/professor\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(user.token)\n                }\n            });\n            const data = await res.json();\n            console.log(data);\n            setStudents(data);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const taskCreationHandler = async (task, student)=>{\n        if (!task.task) {\n            console.log(\"Cannot assign an empty task\");\n            return;\n        }\n        const id = student._id;\n        const body = {\n            task,\n            id\n        };\n        console.log(body);\n        console.log(\"Before sending post request\");\n        const res = await fetch(\"http://localhost:5000/api/professor/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(user.token)\n            },\n            body: JSON.stringify(body)\n        });\n    // console.log(\"After sending post request\");\n    // const data = await res.json();\n    // console.log(data);\n    };\n    const modalHandler = (student)=>{\n        setSelectedStudent(student);\n        setShowModal(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getStudents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap\",\n            children: students.map((student)=>{\n                const randomNum = Math.floor(Math.random() * 11) + 1;\n                const { _id: id  } = student;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-[300px] rounded overflow-hidden shadow-lg m-3 cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            class: \"w-full h-[50%]\",\n                            src: \"http://localhost:8080/img\".concat(randomNum, \".jpg\"),\n                            alt: \"Sunset in the mountains\",\n                            onClick: ()=>{\n                                router.push(\"professor/\".concat(id));\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"px-6 py-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"font-bold text-xl mb-2\",\n                                    children: student.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"text-gray-700 text-base\",\n                                    children: student.fieldOfInterest\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    class: \"text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2\",\n                                    onClick: (e)=>{\n                                        modalHandler(student);\n                                        e.stopPropagation();\n                                    },\n                                    children: \"Assign Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 87,\n                            columnNumber: 15\n                        }, undefined),\n                        showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_AddTaskModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            student: selectedStudent,\n                            taskCreationHandler: taskCreationHandler,\n                            isVisible: showModal,\n                            onClose: ()=>setShowModal(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 102,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfessorView, \"3356eqrGo/VppT+V8Bz9esNqrWQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProfessorView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfessorView);\nvar _c;\n$RefreshReg$(_c, \"ProfessorView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs0QkFDckI2QixXQUFXakQ7NEJBQ1hrRCxTQUFTLElBQU1qRCxhQUFhLEtBQUs7Ozs7Ozs7Ozs7OztZQUszQzs7Ozs7OztBQUlSO0dBNUdNSjs7UUFFV0Qsa0RBQVNBOzs7S0FGcEJDO0FBOEdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZmVzc29yVmlldy5qcz9mZGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFRhc2tNb2RhbCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL0FkZFRhc2tNb2RhbFwiO1xyXG5pbXBvcnQgeyBDaGF0U3RhdGUgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgUlNDX01PRFVMRV9UWVBFUyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBQcm9mZXNzb3JWaWV3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0dWRlbnRzLCBzZXRTdHVkZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkU3R1ZGVudCwgc2V0U2VsZWN0ZWRTdHVkZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZ2V0U3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHJvZmVzc29yXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRTdHVkZW50cyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0YXNrQ3JlYXRpb25IYW5kbGVyID0gYXN5bmMgKHRhc2ssIHN0dWRlbnQpID0+IHtcclxuICAgIGlmICghdGFzay50YXNrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGFzc2lnbiBhbiBlbXB0eSB0YXNrXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBzdHVkZW50Ll9pZDtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIHRhc2ssXHJcbiAgICAgIGlkLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkJlZm9yZSBzZW5kaW5nIHBvc3QgcmVxdWVzdFwiKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9mZXNzb3IvXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLnRva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJBZnRlciBzZW5kaW5nIHBvc3QgcmVxdWVzdFwiKTtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9kYWxIYW5kbGVyID0gKHN0dWRlbnQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkU3R1ZGVudChzdHVkZW50KTtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U3R1ZGVudHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAge3N0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpICsgMTtcclxuICAgICAgICAgIGNvbnN0IHsgX2lkOiBpZCB9ID0gc3R1ZGVudDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1bMzAwcHhdIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBtLTMgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBoLVs1MCVdXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbWcke3JhbmRvbU51bX0uanBnYH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlN1bnNldCBpbiB0aGUgbW91bnRhaW5zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYHByb2Zlc3Nvci8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3N0dWRlbnQubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj57c3R1ZGVudC5maWVsZE9mSW50ZXJlc3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1yZWQtMzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtODAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIYW5kbGVyKHN0dWRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFzc2lnbiBUYXNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgIDxBZGRUYXNrTW9kYWxcclxuICAgICAgICAgICAgICAgICAgc3R1ZGVudD17c2VsZWN0ZWRTdHVkZW50fVxyXG4gICAgICAgICAgICAgICAgICB0YXNrQ3JlYXRpb25IYW5kbGVyPXt0YXNrQ3JlYXRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9mZXNzb3JWaWV3O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRUYXNrTW9kYWwiLCJDaGF0U3RhdGUiLCJSU0NfTU9EVUxFX1RZUEVTIiwidXNlUm91dGVyIiwiUHJvZmVzc29yVmlldyIsInVzZXIiLCJyb3V0ZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwic2VsZWN0ZWRTdHVkZW50Iiwic2V0U2VsZWN0ZWRTdHVkZW50IiwiZ2V0U3R1ZGVudHMiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0YXNrQ3JlYXRpb25IYW5kbGVyIiwidGFzayIsInN0dWRlbnQiLCJpZCIsIl9pZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kYWxIYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2xhc3MiLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwicHVzaCIsIm5hbWUiLCJwIiwiZmllbGRPZkludGVyZXN0IiwiYnV0dG9uIiwidHlwZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProfessorView.js\n"));

/***/ })

});