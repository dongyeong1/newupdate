"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/musclePurpose",{

/***/ "./pages/musclePurpose.js":
/*!********************************!*\
  !*** ./pages/musclePurpose.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _purposeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purposeModal */ \"./pages/purposeModal.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/react */ \"./node_modules/@fullcalendar/react/dist/main.js\");\n/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ \"./node_modules/@fullcalendar/interaction/main.js\");\n/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/timegrid */ \"./node_modules/@fullcalendar/timegrid/main.js\");\n/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/daygrid */ \"./node_modules/@fullcalendar/daygrid/main.js\");\n/* harmony import */ var _purposeInformation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purposeInformation */ \"./pages/purposeInformation.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 30px;\\n  font-weight: bold;\\n  margin-bottom: 7px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  // height: 100%;\\n  // padding: 0 100px;\\n  padding: 2% 5% 0 5%;\\n\\n  .ant-picker-calendar-header {\\n    padding-top: 0;\\n  }\\n\\n  .ant-picker-calendar-date {\\n    width: 90% !important;\\n  }\\n\\n  .ant-picker-calendar-date-content {\\n    height: 70px !important;\\n  }\\n\\n  .ant-card {\\n    width: 100%;\\n    border-radius: 9px;\\n    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);\\n  }\\n\\n  .ant-card-body {\\n    padding: 28px 28px 0 28px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// const [value, setValue] = useState(moment().format(\"2022-01-01\"));\n// const onSelect = (value) => {\n//   setValue(value);\n// };\n// const onPanelChange = (value) => {\n//   setValue(value);\n// };\nfunction onPanelChange(value, mode) {\n    console.log(value.format(\"YYYY-MM-DD\"), mode);\n}\nvar musclePurpose = function() {\n    _s();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.user;\n    }), goalpurpose = ref.goalpurpose, allPurpose = ref.allPurpose;\n    var calendarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // const [calendarEvent,setCalendarEvent]=useState([])\n    var calendarEvent = [];\n    for(var i = 0; i < allPurpose.length; i++){\n        if (allPurpose[i].event == \"B\") {\n            var tdate = new Date(allPurpose[i].lastDate);\n            tdate.setDate(tdate.getDate() + 1);\n            calendarEvent.push({\n                id: allPurpose[i].id,\n                title: allPurpose[i].title,\n                start: allPurpose[i].firstDate,\n                end: tdate,\n                color: \"#0000FF\",\n                textColor: allPurpose[i].goalDistance\n            });\n        } else {\n            var tdate = new Date(allPurpose[i].lastDate);\n            tdate.setDate(tdate.getDate() + 1);\n            calendarEvent.push({\n                id: allPurpose[i].id,\n                title: allPurpose[i].title,\n                start: allPurpose[i].firstDate,\n                end: tdate,\n                color: \"#008000\",\n                textColor: allPurpose[i].goalDistance\n            });\n        // calendarEvent.push({id:allPurpose[i].id,title:allPurpose[i].title,start:allPurpose[i].firstDate,end:allPurpose[i].lastDate,color:'#008000',textColor:allPurpose[i].goalDistance})\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"asdasdsa\");\n        antd__WEBPACK_IMPORTED_MODULE_10__.Modal.destroyAll();\n    }, [\n        goalpurpose\n    ]);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isModal = ref1[0], setIsModal = ref1[1];\n    var showModal = function() {\n        setIsModal(true);\n    };\n    var openModal = function() {\n        setIsModal(function(prev) {\n            return !prev;\n        });\n        console.log(isModal);\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), information = ref2[0], setInformation = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), informationModal = ref3[0], setInformationModal = ref3[1];\n    var showInformationModal = function() {\n        setInformationModal(true);\n    };\n    var openInformationModal = function() {\n        setInformationModal(function(prev) {\n            return !prev;\n        });\n    };\n    var asd = function(a) {\n        showInformationModal();\n        setInformation(a.event);\n        console.log(a);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                type: \"primary\",\n                onClick: showModal,\n                ghost: true,\n                children: \"\\uC6B4\\uB3D9\\uBAA9\\uD45C\\uC124\\uC815\"\n            }, void 0, false, {\n                fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_purposeModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isModal: isModal,\n                openModal: openModal,\n                setIsModal: setIsModal\n            }, void 0, false, {\n                fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                children: \"\\uB098\\uC758 \\uC6B4\\uB3D9\\uBAA9\\uD45C\"\n            }, void 0, false, {\n                fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        eventClick: asd,\n                        events: calendarEvent,\n                        innerRef: calendarRef,\n                        plugins: [\n                            _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                        ],\n                        editable: true,\n                        selectable: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_purposeInformation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        informationModal: informationModal,\n                        openInformationModal: openInformationModal,\n                        setInformationModal: setInformationModal,\n                        information: information\n                    }, void 0, false, {\n                        fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n                        lineNumber: 117,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dong/CAPSTONE_UPDATE/pages/musclePurpose.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(musclePurpose, \"tjF8v3zoZPKwJhyyxBkyIQxGQp4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].h1(_templateObject());\n_c = Title;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1());\n_c1 = Container;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (musclePurpose);\nvar _c, _c1;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsU0FBUztnQkFBQ0MsT0FBTyxFQUFFYixTQUFTO2dCQUFFYyxLQUFLOzBCQUFDLHNDQUUzQzs7Ozs7cUJBQVM7MEJBQ1QsOERBQUN2RCxxREFBTztnQkFBQ3VDLE9BQU8sRUFBRUEsT0FBTztnQkFBRUcsU0FBUyxFQUFFQSxTQUFTO2dCQUFFRixVQUFVLEVBQUVBLFVBQVU7Ozs7O3FCQUFHOzBCQUNoRiw4REFBQ2dCLEtBQUs7MEJBQUMsdUNBQU87Ozs7O3FCQUFROzBCQUN0Qiw4REFBQzlELHVDQUFJOztrQ0FFSCw4REFBQ1EsMkRBQVk7d0JBQ2J1RCxVQUFVLEVBQUVQLEdBQUc7d0JBQ2ZRLE1BQU0sRUFBRXRDLGFBQWE7d0JBQ3ZCdUMsUUFBUSxFQUFFeEMsV0FBVzt3QkFDckJ5QyxPQUFPLEVBQUU7NEJBQUN2RCw2REFBYTt5QkFBQzt3QkFDeEJ3RCxRQUFRO3dCQUNSQyxVQUFVOzs7Ozs2QkFDVjtrQ0FDRCw4REFBQ3ZELDJEQUFXO3dCQUFDdUMsZ0JBQWdCLEVBQUVBLGdCQUFnQjt3QkFBRUcsb0JBQW9CLEVBQUVBLG9CQUFvQjt3QkFBRUYsbUJBQW1CLEVBQUVBLG1CQUFtQjt3QkFBRUgsV0FBVyxFQUFFQSxXQUFXOzs7Ozs2QkFBRzs7Ozs7O3FCQUMxSjs7Ozs7O2FBQ0csQ0FDWjtDQUNIO0dBdkZLOUIsYUFBYTs7UUFFY2Isb0RBQVc7OztBQXVGNUMsSUFBTXVELEtBQUssR0FBR3pELDZEQUFTLG1CQUl0QjtBQUpLeUQsS0FBQUEsS0FBSztBQU1YLElBQU1KLFNBQVMsR0FBR3JELDhEQUFVLG9CQTBCM0I7QUExQktxRCxNQUFBQSxTQUFTOztBQStDZiwrREFBZXRDLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tdXNjbGVQdXJwb3NlLmpzPzE4NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhbGVuZGFyLCBDYXJkLCBBbGVydCxCdXR0b24sTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgbW9tZW50IH0gZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFMTF9HT0FMX1JFUVVFU1QsIExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCBQdXJwb3NlIGZyb20gXCIuL3B1cnBvc2VNb2RhbFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tIFwiQGZ1bGxjYWxlbmRhci9yZWFjdFwiO1xuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvdGltZWdyaWRcIjtcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZGF5Z3JpZCdcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEluZm9ybWF0aW9uIGZyb20gJy4vcHVycG9zZUluZm9ybWF0aW9uJ1xuXG5cbi8vIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUobW9tZW50KCkuZm9ybWF0KFwiMjAyMi0wMS0wMVwiKSk7XG5cbi8vIGNvbnN0IG9uU2VsZWN0ID0gKHZhbHVlKSA9PiB7XG4vLyAgIHNldFZhbHVlKHZhbHVlKTtcbi8vIH07XG5cbi8vIGNvbnN0IG9uUGFuZWxDaGFuZ2UgPSAodmFsdWUpID0+IHtcbi8vICAgc2V0VmFsdWUodmFsdWUpO1xuLy8gfTtcblxuZnVuY3Rpb24gb25QYW5lbENoYW5nZSh2YWx1ZSwgbW9kZSkge1xuICBjb25zb2xlLmxvZyh2YWx1ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLCBtb2RlKTtcbn1cblxuY29uc3QgbXVzY2xlUHVycG9zZSA9ICgpID0+IHtcblxuICBjb25zdCB7Z29hbHB1cnBvc2UsYWxsUHVycG9zZX09dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcilcbiAgXG5cblxuICBjb25zdCBjYWxlbmRhclJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBjb25zdCBbY2FsZW5kYXJFdmVudCxzZXRDYWxlbmRhckV2ZW50XT11c2VTdGF0ZShbXSlcbiAgY29uc3QgY2FsZW5kYXJFdmVudD1bXVxuICBmb3IodmFyIGk9MDsgaTxhbGxQdXJwb3NlLmxlbmd0aDsgaSsrKXtcbiAgICBpZihhbGxQdXJwb3NlW2ldLmV2ZW50PT0nQicpe1xuICAgICAgdmFyIHRkYXRlPW5ldyBEYXRlKGFsbFB1cnBvc2VbaV0ubGFzdERhdGUpXG4gICAgICB0ZGF0ZS5zZXREYXRlKHRkYXRlLmdldERhdGUoKSsxKVxuICAgICAgY2FsZW5kYXJFdmVudC5wdXNoKHtpZDphbGxQdXJwb3NlW2ldLmlkLHRpdGxlOmFsbFB1cnBvc2VbaV0udGl0bGUsc3RhcnQ6YWxsUHVycG9zZVtpXS5maXJzdERhdGUsZW5kOnRkYXRlLGNvbG9yOicjMDAwMEZGJyx0ZXh0Q29sb3I6YWxsUHVycG9zZVtpXS5nb2FsRGlzdGFuY2V9KVxuICAgIH1lbHNle1xuICAgICAgdmFyIHRkYXRlPW5ldyBEYXRlKGFsbFB1cnBvc2VbaV0ubGFzdERhdGUpXG4gICAgICB0ZGF0ZS5zZXREYXRlKHRkYXRlLmdldERhdGUoKSsxKVxuICAgICAgY2FsZW5kYXJFdmVudC5wdXNoKHtpZDphbGxQdXJwb3NlW2ldLmlkLHRpdGxlOmFsbFB1cnBvc2VbaV0udGl0bGUsc3RhcnQ6YWxsUHVycG9zZVtpXS5maXJzdERhdGUsZW5kOnRkYXRlLGNvbG9yOicjMDA4MDAwJyx0ZXh0Q29sb3I6YWxsUHVycG9zZVtpXS5nb2FsRGlzdGFuY2V9KVxuICAgICAgLy8gY2FsZW5kYXJFdmVudC5wdXNoKHtpZDphbGxQdXJwb3NlW2ldLmlkLHRpdGxlOmFsbFB1cnBvc2VbaV0udGl0bGUsc3RhcnQ6YWxsUHVycG9zZVtpXS5maXJzdERhdGUsZW5kOmFsbFB1cnBvc2VbaV0ubGFzdERhdGUsY29sb3I6JyMwMDgwMDAnLHRleHRDb2xvcjphbGxQdXJwb3NlW2ldLmdvYWxEaXN0YW5jZX0pXG4gICAgfVxuICAgXG4gICAgXG4gIH1cblxuXG5cblxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnNvbGUubG9nKCdhc2Rhc2RzYScpXG5Nb2RhbC5kZXN0cm95QWxsKCk7XG4gIH0sW2dvYWxwdXJwb3NlXSlcblxuXG5cblxuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldElzTW9kYWwodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHNldElzTW9kYWwoKHByZXYpID0+ICFwcmV2KTtcbiAgICBjb25zb2xlLmxvZyhpc01vZGFsKTtcbiAgfTtcblxuXG4gIGNvbnN0IFtpbmZvcm1hdGlvbixzZXRJbmZvcm1hdGlvbl09dXNlU3RhdGUoe30pXG4gIGNvbnN0IFtpbmZvcm1hdGlvbk1vZGFsLCBzZXRJbmZvcm1hdGlvbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblxuICBjb25zdCBzaG93SW5mb3JtYXRpb25Nb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJbmZvcm1hdGlvbk1vZGFsKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5JbmZvcm1hdGlvbk1vZGFsID0gKCkgPT4ge1xuICAgIHNldEluZm9ybWF0aW9uTW9kYWwoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcbiAgY29uc3QgYXNkPShhKT0+e1xuICAgIHNob3dJbmZvcm1hdGlvbk1vZGFsKClcbiAgICBzZXRJbmZvcm1hdGlvbihhLmV2ZW50KVxuICAgIGNvbnNvbGUubG9nKGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17c2hvd01vZGFsfSBnaG9zdD5cbiAgICAgICAgICAgIOyatOuPmeuqqe2RnOyEpOyglVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8UHVycG9zZSBpc01vZGFsPXtpc01vZGFsfSBvcGVuTW9kYWw9e29wZW5Nb2RhbH0gc2V0SXNNb2RhbD17c2V0SXNNb2RhbH0vPlxuICAgICAgPFRpdGxlPuuCmOydmCDsmrTrj5nrqqntkZw8L1RpdGxlPlxuICAgICAgPENhcmQ+XG4gICAgICAgIHsvKiA8Q2FsZW5kYXIgb25QYW5lbENoYW5nZT17b25QYW5lbENoYW5nZX0gLz4gKi99XG4gICAgICAgIDxGdWxsQ2FsZW5kYXJcbiAgICAgICAgZXZlbnRDbGljaz17YXNkfVxuICAgICAgICBldmVudHM9e2NhbGVuZGFyRXZlbnR9XG4gICAgICBpbm5lclJlZj17Y2FsZW5kYXJSZWZ9XG4gICAgICBwbHVnaW5zPXtbZGF5R3JpZFBsdWdpbl19XG4gICAgICBlZGl0YWJsZVxuICAgICAgc2VsZWN0YWJsZVxuICAgIC8+XG4gICAgIDxJbmZvcm1hdGlvbiBpbmZvcm1hdGlvbk1vZGFsPXtpbmZvcm1hdGlvbk1vZGFsfSBvcGVuSW5mb3JtYXRpb25Nb2RhbD17b3BlbkluZm9ybWF0aW9uTW9kYWx9IHNldEluZm9ybWF0aW9uTW9kYWw9e3NldEluZm9ybWF0aW9uTW9kYWx9IGluZm9ybWF0aW9uPXtpbmZvcm1hdGlvbn0vPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC8vIGhlaWdodDogMTAwJTtcbiAgLy8gcGFkZGluZzogMCAxMDBweDtcbiAgcGFkZGluZzogMiUgNSUgMCA1JTtcblxuICAuYW50LXBpY2tlci1jYWxlbmRhci1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgLmFudC1waWNrZXItY2FsZW5kYXItZGF0ZSB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFudC1waWNrZXItY2FsZW5kYXItZGF0ZS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbnQtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAtMnB4IHJnYigwIDAgMCAvIDE2JSksIDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDEyJSk7XG4gIH1cblxuICAuYW50LWNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMjhweCAyOHB4IDAgMjhweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcbiAgICB9XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgICB9KTtcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6QUxMX0dPQUxfUkVRVUVTVFxuICAgIH0pXG5cbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbXVzY2xlUHVycG9zZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FsZW5kYXIiLCJDYXJkIiwiQWxlcnQiLCJCdXR0b24iLCJNb2RhbCIsIm1vbWVudCIsInN0eWxlZCIsIlB1cnBvc2UiLCJ1c2VTZWxlY3RvciIsIkZ1bGxDYWxlbmRhciIsImludGVyYWN0aW9uUGx1Z2luIiwidGltZUdyaWRQbHVnaW4iLCJkYXlHcmlkUGx1Z2luIiwidXNlUmVmIiwiSW5mb3JtYXRpb24iLCJvblBhbmVsQ2hhbmdlIiwidmFsdWUiLCJtb2RlIiwiY29uc29sZSIsImxvZyIsImZvcm1hdCIsIm11c2NsZVB1cnBvc2UiLCJzdGF0ZSIsInVzZXIiLCJnb2FscHVycG9zZSIsImFsbFB1cnBvc2UiLCJjYWxlbmRhclJlZiIsImNhbGVuZGFyRXZlbnQiLCJpIiwibGVuZ3RoIiwiZXZlbnQiLCJ0ZGF0ZSIsIkRhdGUiLCJsYXN0RGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwicHVzaCIsImlkIiwidGl0bGUiLCJzdGFydCIsImZpcnN0RGF0ZSIsImVuZCIsImNvbG9yIiwidGV4dENvbG9yIiwiZ29hbERpc3RhbmNlIiwiZGVzdHJveUFsbCIsImlzTW9kYWwiLCJzZXRJc01vZGFsIiwic2hvd01vZGFsIiwib3Blbk1vZGFsIiwicHJldiIsImluZm9ybWF0aW9uIiwic2V0SW5mb3JtYXRpb24iLCJpbmZvcm1hdGlvbk1vZGFsIiwic2V0SW5mb3JtYXRpb25Nb2RhbCIsInNob3dJbmZvcm1hdGlvbk1vZGFsIiwib3BlbkluZm9ybWF0aW9uTW9kYWwiLCJhc2QiLCJhIiwiQ29udGFpbmVyIiwidHlwZSIsIm9uQ2xpY2siLCJnaG9zdCIsIlRpdGxlIiwiZXZlbnRDbGljayIsImV2ZW50cyIsImlubmVyUmVmIiwicGx1Z2lucyIsImVkaXRhYmxlIiwic2VsZWN0YWJsZSIsImgxIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/musclePurpose.js\n");

/***/ })

});