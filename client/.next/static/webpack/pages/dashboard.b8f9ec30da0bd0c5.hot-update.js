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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _miscellaneous_AddTaskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous/AddTaskModal */ \"./components/miscellaneous/AddTaskModal.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/shared/lib/constants */ \"./node_modules/next/dist/shared/lib/constants.js\");\n/* harmony import */ var next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_constants__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProfessorView = ()=>{\n    _s();\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__.ChatState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedStudent, setSelectedStudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getStudents = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/api/professor\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(user.token)\n                }\n            });\n            const data = await res.json();\n            console.log(data);\n            setStudents(data);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const taskCreationHandler = async (task, student)=>{\n        if (!task.task) {\n            console.log(\"Cannot assign an empty task\");\n            return;\n        }\n        const body = {\n            task,\n            student\n        };\n        console.log(\"Before sending post request\");\n        const res = await fetch(\"http://localhost:5000/api/professor/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(user.token)\n            },\n            body: JSON.stringify(body)\n        });\n        console.log(\"After sending post request\");\n        const data = await res.json();\n        console.log(data);\n    };\n    const modalHandler = (student, e)=>{\n        setSelectedStudent(student);\n        setShowModal(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getStudents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap\",\n            children: students.map((student)=>{\n                const randomNum = Math.floor(Math.random() * 11) + 1;\n                const { _id: id  } = student;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-[300px] rounded overflow-hidden shadow-lg m-3 cursor-pointer\",\n                    onClick: ()=>{\n                        router.push(\"professor/\".concat(id));\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            class: \"w-full h-[50%]\",\n                            src: \"http://localhost:8080/img\".concat(randomNum, \".jpg\"),\n                            alt: \"Sunset in the mountains\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"px-6 py-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"font-bold text-xl mb-2\",\n                                    children: student.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"text-gray-700 text-base\",\n                                    children: student.fieldOfInterest\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    class: \"text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2\",\n                                    onClick: (e)=>{\n                                        modalHandler(student);\n                                    },\n                                    children: \"Assign Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, undefined),\n                        showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_AddTaskModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            student: selectedStudent,\n                            taskCreationHandler: taskCreationHandler,\n                            isVisible: showModal,\n                            onClose: ()=>setShowModal(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ProfessorView.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfessorView, \"3356eqrGo/VppT+V8Bz9esNqrWQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProfessorView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfessorView);\nvar _c;\n$RefreshReg$(_c, \"ProfessorView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsSUFBTWhELGFBQWEsS0FBSzs7Ozs7Ozs7Ozs7O1lBSzNDOzs7Ozs7O0FBSVI7R0ExR01KOztRQUVXRCxrREFBU0E7OztLQUZwQkM7QUE0R04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9mZXNzb3JWaWV3LmpzP2ZkYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkVGFza01vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvQWRkVGFza01vZGFsXCI7XHJcbmltcG9ydCB7IENoYXRTdGF0ZSB9IGZyb20gXCIuLi9Db250ZXh0L0NoYXRQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBSU0NfTU9EVUxFX1RZUEVTIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFByb2Zlc3NvclZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSBDaGF0U3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRTdHVkZW50LCBzZXRTZWxlY3RlZFN0dWRlbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBnZXRTdHVkZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9mZXNzb3JcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLnRva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHNldFN0dWRlbnRzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2tDcmVhdGlvbkhhbmRsZXIgPSBhc3luYyAodGFzaywgc3R1ZGVudCkgPT4ge1xyXG4gICAgaWYgKCF0YXNrLnRhc2spIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgYXNzaWduIGFuIGVtcHR5IHRhc2tcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICB0YXNrLFxyXG4gICAgICBzdHVkZW50LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkJlZm9yZSBzZW5kaW5nIHBvc3QgcmVxdWVzdFwiKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9mZXNzb3IvXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLnRva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJBZnRlciBzZW5kaW5nIHBvc3QgcmVxdWVzdFwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9kYWxIYW5kbGVyID0gKHN0dWRlbnQsIGUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkU3R1ZGVudChzdHVkZW50KTtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U3R1ZGVudHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAge3N0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpICsgMTtcclxuICAgICAgICAgIGNvbnN0IHsgX2lkOiBpZCB9ID0gc3R1ZGVudDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzcz1cIm1heC13LVszMDBweF0gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIG0tMyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYHByb2Zlc3Nvci8ke2lkfWApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBoLVs1MCVdXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbWcke3JhbmRvbU51bX0uanBnYH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlN1bnNldCBpbiB0aGUgbW91bnRhaW5zXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3N0dWRlbnQubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj57c3R1ZGVudC5maWVsZE9mSW50ZXJlc3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1yZWQtMzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtODAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIYW5kbGVyKHN0dWRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBc3NpZ24gVGFza1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWRkVGFza01vZGFsXHJcbiAgICAgICAgICAgICAgICAgIHN0dWRlbnQ9e3NlbGVjdGVkU3R1ZGVudH1cclxuICAgICAgICAgICAgICAgICAgdGFza0NyZWF0aW9uSGFuZGxlcj17dGFza0NyZWF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmVzc29yVmlldztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWRkVGFza01vZGFsIiwiQ2hhdFN0YXRlIiwiUlNDX01PRFVMRV9UWVBFUyIsInVzZVJvdXRlciIsIlByb2Zlc3NvclZpZXciLCJ1c2VyIiwicm91dGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic3R1ZGVudHMiLCJzZXRTdHVkZW50cyIsInNlbGVjdGVkU3R1ZGVudCIsInNldFNlbGVjdGVkU3R1ZGVudCIsImdldFN0dWRlbnRzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwidGFza0NyZWF0aW9uSGFuZGxlciIsInRhc2siLCJzdHVkZW50IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb2RhbEhhbmRsZXIiLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX2lkIiwiaWQiLCJjbGFzcyIsIm9uQ2xpY2siLCJwdXNoIiwiaW1nIiwic3JjIiwiYWx0IiwibmFtZSIsInAiLCJmaWVsZE9mSW50ZXJlc3QiLCJidXR0b24iLCJ0eXBlIiwiaXNWaXNpYmxlIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProfessorView.js\n"));

/***/ })

});