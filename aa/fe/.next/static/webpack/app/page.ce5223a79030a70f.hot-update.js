"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = async ()=>{\n        const response = await fetch(\"/api/poll\", {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        setData(data);\n    };\n    const postData = async ()=>{\n        const response = await fetch(\"/api/poll\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title,\n                description\n            })\n        });\n        const data = await response.json();\n        setData(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white w-full min-h-screen flex flex-col\",\n        children: [\n            data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(item.is_done ? \"text-green-500\" : \"text-black\"),\n                    children: [\n                        item.title,\n                        \": \",\n                        item.description\n                    ]\n                }, item.id, true, {\n                    fileName: \"C:\\\\repo\\\\todo-fe\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"border\",\n                value: title,\n                onChange: (e)=>setTitle(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\repo\\\\todo-fe\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"border\",\n                value: description,\n                onChange: (e)=>setDescription(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\repo\\\\todo-fe\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: postData,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\repo\\\\todo-fe\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\repo\\\\todo-fe\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lgktqdslu07esuEVnMcNXYbkeXg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1RLFlBQVk7UUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGFBQWE7WUFDeENDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUNBLE1BQU1WLE9BQU8sTUFBTU8sU0FBU0ksSUFBSTtRQUNoQ1YsUUFBUUQ7SUFDVjtJQUVBLE1BQU1ZLFdBQVc7UUFDZixNQUFNTCxXQUFXLE1BQU1DLE1BQU0sYUFBYTtZQUN4Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBRyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CYjtnQkFDQUU7WUFDRjtRQUNGO1FBQ0EsTUFBTUosT0FBTyxNQUFNTyxTQUFTSSxJQUFJO1FBQ2hDVixRQUFRRDtJQUNWO0lBRUFILGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7O1lBQ1pqQixLQUFLa0IsR0FBRyxDQUFDLENBQUNDLE1BQVdDLHNCQUNwQiw4REFBQ0o7b0JBRUNDLFdBQVcsR0FBa0QsT0FBL0NFLEtBQUtFLE9BQU8sR0FBRyxtQkFBbUI7O3dCQUUvQ0YsS0FBS2pCLEtBQUs7d0JBQUM7d0JBQUdpQixLQUFLZixXQUFXOzttQkFIMUJlLEtBQUtHLEVBQUU7Ozs7OzBCQU1oQiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xQLFdBQVU7Z0JBQ1ZRLE9BQU92QjtnQkFDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFNBQVN3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFMUMsOERBQUNGO2dCQUNDQyxNQUFLO2dCQUNMUCxXQUFVO2dCQUNWUSxPQUFPckI7Z0JBQ1BzQixVQUFVLENBQUNDLElBQU10QixlQUFlc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBRWhELDhEQUFDSTtnQkFBT0MsU0FBU2xCOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFHakM7R0E1RHdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb2xsXCIsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0RGF0YShkYXRhKTtcbiAgfTtcblxuICBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb2xsXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXREYXRhKGRhdGEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW06IGFueSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0uaXNfZG9uZSA/IFwidGV4dC1ncmVlbi01MDBcIiA6IFwidGV4dC1ibGFja1wifWB9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbS50aXRsZX06IHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXCJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcIlxuICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17cG9zdERhdGF9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaXNfZG9uZSIsImlkIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});