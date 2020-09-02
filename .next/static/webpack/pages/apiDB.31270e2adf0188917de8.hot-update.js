webpackHotUpdate_N_E("pages/apiDB",{

/***/ "./src/pages/apiDB.tsx":
/*!*****************************!*\
  !*** ./src/pages/apiDB.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar apiDB = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiDB, _Component);\n\n  var _super = _createSuper(apiDB);\n\n  function apiDB() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, apiDB);\n\n    _this = _super.call(this);\n    _this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n    return _this;\n  } //Make AJAX calls\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiDB, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('Component has Mounted');\n      fetch('http://localhost:3001/stocks').then(function (response) {\n        response;\n      });\n    }\n  }, {\n    key: \"addStock\",\n    value: function addStock(event) {\n      var that = this;\n      event.preventDefault();\n      console.log('in method');\n      var stock_data = {\n        symbol: this.refs.symbol.value,\n        name: this.refs.name.value,\n        price: this.refs.price.value,\n        marketcap: this.refs.marketcap.value,\n        debt: this.refs.debt.value,\n        growth: this.refs.growth.value\n      };\n      var request = new Request('http://localhost:5000/api/newStock', {\n        method: 'POST',\n        headers: new Headers({\n          'Content-Type': 'application/json'\n        }),\n        body: JSON.stringify(stock_data)\n      });\n      var stocks = that.state.stocks;\n      stocks.push(stock_data); //stocks.concat(stock_data);\n\n      that.setState({\n        stocks: stocks\n      }); //xmlhttprequest()\n\n      fetch(request).then(function (response) {\n        response.json().then(function (data) {});\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var title = this.state.title;\n      var stocks = this.state.stocks;\n      return __jsx(\"div\", {\n        className: \"apiDB\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }\n      }, title), __jsx(\"form\", {\n        ref: \"stockForm\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 17\n        }\n      }, __jsx(\"input\", {\n        type: \"text\",\n        ref: \"symbol\",\n        placeholder: \"symbol\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"name\",\n        placeholder: \"name\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"price\",\n        placeholder: \"price\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"marketcap\",\n        placeholder: \"marketcap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"debt\",\n        placeholder: \"debt\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"growth\",\n        placeholder: \"growth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }\n      }), __jsx(\"button\", {\n        onClick: this.addStock.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }\n      }, \" Add Stock\"), __jsx(\"pre\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }\n      }, JSON.stringify(stocks))));\n    }\n  }]);\n\n  return apiDB;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaURCLnRzeD8yOTAxIl0sIm5hbWVzIjpbImFwaURCIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImV2ZW50IiwidGhhdCIsInByZXZlbnREZWZhdWx0Iiwic3RvY2tfZGF0YSIsInN5bWJvbCIsInJlZnMiLCJ2YWx1ZSIsIm5hbWUiLCJwcmljZSIsIm1hcmtldGNhcCIsImRlYnQiLCJncm93dGgiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwic2V0U3RhdGUiLCJqc29uIiwiZGF0YSIsImVyciIsImFkZFN0b2NrIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFJTUEsSzs7Ozs7QUFJRixtQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxtQkFERTtBQUVUQyxZQUFNLEVBQUU7QUFGQyxLQUFiO0FBRlU7QUFPYixHLENBQ0Q7Ozs7O3dDQUNvQjtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUMsV0FBSyxDQUFDLDhCQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQVNDLFFBQVQsRUFBbUI7QUFDckJBLGdCQUFRO0FBQ1gsT0FITDtBQUlIOzs7NkJBRVFDLEssRUFBTztBQUNaLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FELFdBQUssQ0FBQ0UsY0FBTjtBQUNBUCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsVUFBSU8sVUFBVSxHQUFHO0FBQ2JDLGNBQU0sRUFBRSxLQUFLQyxJQUFMLENBQVVELE1BQVYsQ0FBaUJFLEtBRFo7QUFFYkMsWUFBSSxFQUFFLEtBQUtGLElBQUws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Q0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTVIsSUFBSSxDQUFDQyxTQUFMLENBQWV6QixNQUFmLENBQU4sQ0FSSixDQUZKLENBREo7QUFlSDs7OztFQTlFZWlDLCtDOztBQWlGTHBDLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaURCLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cblxuY2xhc3MgYXBpREIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdhcGlEYiBhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICBzdG9ja3M6IFtdXG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL01ha2UgQUpBWCBjYWxsc1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBNb3VudGVkJylcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdG9ja3MnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRTdG9jayhldmVudCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBtZXRob2QnKVxuICAgICAgICBsZXQgc3RvY2tfZGF0YSA9IHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5yZWZzLnN5bWJvbC52YWx1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucmVmcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucmVmcy5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgIG1hcmtldGNhcDogdGhpcy5yZWZzLm1hcmtldGNhcC52YWx1ZSxcbiAgICAgICAgICAgIGRlYnQ6IHRoaXMucmVmcy5kZWJ0LnZhbHVlLFxuICAgICAgICAgICAgZ3Jvd3RoOiB0aGlzLnJlZnMuZ3Jvd3RoLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbmV3U3RvY2snLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0b2NrX2RhdGEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzdG9ja3MgPSB0aGF0LnN0YXRlLnN0b2NrcztcbiAgICAgICAgc3RvY2tzLnB1c2goc3RvY2tfZGF0YSlcbiAgICAgICAgLy9zdG9ja3MuY29uY2F0KHN0b2NrX2RhdGEpO1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0b2Nrczogc3RvY2tzXG4gICAgICAgIH0pXG4gICAgICAgIC8veG1saHR0cHJlcXVlc3QoKVxuICAgICAgICBmZXRjaChyZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZTtcbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoaXMuc3RhdGUuc3RvY2tzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwaURCXCI+XG4gICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIHJlZj1cInN0b2NrRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJzeW1ib2xcIiBwbGFjZWhvbGRlcj1cInN5bWJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwicHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJtYXJrZXRjYXBcIiBwbGFjZWhvbGRlcj1cIm1hcmtldGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImRlYnRcIiBwbGFjZWhvbGRlcj1cImRlYnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJncm93dGhcIiBwbGFjZWhvbGRlcj1cImdyb3d0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRTdG9jay5iaW5kKHRoaXMpfT4gQWRkIFN0b2NrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHN0b2Nrcyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaURCOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

/***/ })

})