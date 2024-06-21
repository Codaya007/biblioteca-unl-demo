"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/reset-password/[token]/page",{

/***/ "(app-pages-browser)/./src/app/auth/reset-password/[token]/page.jsx":
/*!******************************************************!*\
  !*** ./src/app/auth/reset-password/[token]/page.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_Mensajes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Mensajes */ \"(app-pages-browser)/./src/app/components/Mensajes.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ \"(app-pages-browser)/./src/services/auth.service.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login(param) {\n    let { params } = param;\n    var _errors_password;\n    _s();\n    const { token } = params;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const validationScheme = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n        password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Ingrese su contrase\\xf1a\")\n    });\n    const formOptions = {\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(validationScheme)\n    };\n    const { register, handleSubmit, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(formOptions);\n    const { errors } = formState;\n    const sendData = async (data)=>{\n        try {\n            await (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.recoveryPassword)({\n                password: data.password,\n                token\n            });\n            (0,_components_Mensajes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"Exito\", \"Usuario actualizado exitosamente\");\n            router.push(\"/login\");\n        } catch (error) {\n            var _error_response, _error_response_data, _error_response1;\n            console.log(error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);\n            (0,_components_Mensajes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"Error\", ((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : (_error_response_data = _error_response1.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.msg) || \"No se ha podido actualizar el usuario\", \"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center mt-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center mb-4\",\n                                children: \"Cambiar Contrase\\xf1a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit(sendData),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-item\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"form-label\",\n                                                children: \"Contrase\\xf1a\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                ...register(\"password\"),\n                                                name: \"password\",\n                                                id: \"password\",\n                                                type: \"password\",\n                                                className: \"form-control \".concat(errors.password ? \"is-invalid\" : \"\")\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"alert alert-danger invalid-feedback\",\n                                                children: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-primary\",\n                                        children: \"Cambiar contrase\\xf1a\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vivic\\\\Learning\\\\U\\\\PROCESOS_PRUEBAS\\\\frontend\\\\src\\\\app\\\\auth\\\\reset-password\\\\[token]\\\\page.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"yviHlOYEr8tC7202xjOQvLc9/RQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC9bdG9rZW5dL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0o7QUFDMkI7QUFDWjtBQUNVO0FBQ1I7QUFDeUI7QUFFdEQsU0FBU08sTUFBTSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7UUE0Q1RDOztJQTNDbkIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Y7SUFDbEIsTUFBTUcsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU1PLG1CQUFtQlgsdUNBQVUsR0FBR2EsS0FBSyxDQUFDO1FBQzFDQyxVQUFVZCx1Q0FBVSxHQUFHZ0IsUUFBUSxDQUFDO0lBQ2xDO0lBQ0EsTUFBTUMsY0FBYztRQUNsQkMsVUFBVWpCLG9FQUFXQSxDQUFDVTtJQUN4QjtJQUNBLE1BQU0sRUFBRVEsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRSxHQUFHbkIsd0RBQU9BLENBQUNlO0lBQ3RELE1BQU0sRUFBRVQsTUFBTSxFQUFFLEdBQUdhO0lBRW5CLE1BQU1DLFdBQVcsT0FBT0M7UUFDdEIsSUFBSTtZQUNGLE1BQU1sQix3RUFBZ0JBLENBQUM7Z0JBQUVTLFVBQVVTLEtBQUtULFFBQVE7Z0JBQUVMO1lBQU07WUFFeEROLGdFQUFRQSxDQUFDLFNBQVM7WUFDbEJPLE9BQU9jLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztnQkFDRkEsaUJBRU1BLHNCQUFBQTtZQUZsQkMsUUFBUUMsR0FBRyxDQUFDRixrQkFBQUEsNkJBQUFBLGtCQUFBQSxNQUFPRyxRQUFRLGNBQWZILHNDQUFBQSxnQkFBaUJGLElBQUk7WUFFakNwQixnRUFBUUEsQ0FBQyxTQUFTc0IsRUFBQUEsbUJBQUFBLE1BQU1HLFFBQVEsY0FBZEgsd0NBQUFBLHVCQUFBQSxpQkFBZ0JGLElBQUksY0FBcEJFLDJDQUFBQSxxQkFBc0JJLEdBQUcsS0FBSSx5Q0FBeUM7UUFDMUY7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQW1COzs7Ozs7MENBQ2pDLDhEQUFDRTtnQ0FBS0MsVUFBVWQsYUFBYUU7O2tEQUUzQiw4REFBQ1E7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDSTtnREFBTUosV0FBVTswREFBYTs7Ozs7OzBEQUM5Qiw4REFBQ0s7Z0RBQ0UsR0FBR2pCLFNBQVMsV0FBVztnREFDeEJrQixNQUFLO2dEQUNMQyxJQUFHO2dEQUNIQyxNQUFLO2dEQUNMUixXQUFXLGdCQUFvRCxPQUFwQ3ZCLE9BQU9NLFFBQVEsR0FBRyxlQUFlOzs7Ozs7MERBRTlELDhEQUFDZ0I7Z0RBQUlDLFdBQVU7MkRBQ1p2QixtQkFBQUEsT0FBT00sUUFBUSxjQUFmTix1Q0FBQUEsaUJBQWlCZ0MsT0FBTzs7Ozs7Ozs7Ozs7O2tEQUc3Qiw4REFBQ0M7d0NBQ0NGLE1BQUs7d0NBQ0xSLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JqQjtHQWxFd0J6Qjs7UUFFUEYsc0RBQVNBO1FBT3NCRixvREFBT0E7OztLQVQvQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRoL3Jlc2V0LXBhc3N3b3JkL1t0b2tlbl0vcGFnZS5qc3g/ODljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBtZW5zYWplcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NZW5zYWplc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHJlY292ZXJ5UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWUgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIiksXHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybU9wdGlvbnMgPSB7XHJcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIodmFsaWRhdGlvblNjaGVtZSksXHJcbiAgfTtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybShmb3JtT3B0aW9ucyk7XHJcbiAgY29uc3QgeyBlcnJvcnMgfSA9IGZvcm1TdGF0ZTtcclxuXHJcbiAgY29uc3Qgc2VuZERhdGEgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcmVjb3ZlcnlQYXNzd29yZCh7IHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLCB0b2tlbiB9LClcclxuXHJcbiAgICAgIG1lbnNhamVzKFwiRXhpdG9cIiwgXCJVc3VhcmlvIGFjdHVhbGl6YWRvIGV4aXRvc2FtZW50ZVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcj8ucmVzcG9uc2U/LmRhdGEpO1xyXG5cclxuICAgICAgbWVuc2FqZXMoXCJFcnJvclwiLCBlcnJvci5yZXNwb25zZT8uZGF0YT8ubXNnIHx8IFwiTm8gc2UgaGEgcG9kaWRvIGFjdHVhbGl6YXIgZWwgdXN1YXJpb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPkNhbWJpYXIgQ29udHJhc2XDsWE8L2gxPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc2VuZERhdGEpfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGl0bGUtZm9ybVwiPkNhbWJpYXIgQ29udHJhc2XDsWE8L2gxPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGludmFsaWQtZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FtYmlhciBjb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgdmFsdWU9XCJDYW1iaWFyIGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiWXVwIiwieXVwUmVzb2x2ZXIiLCJ1c2VGb3JtIiwibWVuc2FqZXMiLCJ1c2VSb3V0ZXIiLCJyZWNvdmVyeVBhc3N3b3JkIiwiTG9naW4iLCJwYXJhbXMiLCJlcnJvcnMiLCJ0b2tlbiIsInJvdXRlciIsInZhbGlkYXRpb25TY2hlbWUiLCJvYmplY3QiLCJzaGFwZSIsInBhc3N3b3JkIiwic3RyaW5nIiwicmVxdWlyZWQiLCJmb3JtT3B0aW9ucyIsInJlc29sdmVyIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJzZW5kRGF0YSIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJtc2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwiaWQiLCJ0eXBlIiwibWVzc2FnZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/reset-password/[token]/page.jsx\n"));

/***/ })

});