webpackHotUpdate_N_E("pages/apiDB",{

/***/ "./src/pages/apiDB.tsx":
/*!*****************************!*\
  !*** ./src/pages/apiDB.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar apiDB = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiDB, _Component);\n\n  var _super = _createSuper(apiDB);\n\n  function apiDB() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, apiDB);\n\n    _this = _super.call(this);\n    _this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n    return _this;\n  } //Make AJAX calls\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiDB, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var that = this;\n      console.log('Component has Mounted');\n      fetch('http://localhost:5000/api/stocks').then(function (response) {\n        response.json().then(function (data) {\n          that.setState({\n            stocks: data\n          });\n        });\n      });\n    }\n  }, {\n    key: \"removeStocks\",\n    value: function removeStocks(id) {\n      //this is using stocks from let stocks = this.state.stocks in render()\n      var stocks = this.state.stocks;\n      var stock3 = stocks.find(function (stock3) {\n        //by matching them we match the id in which to delete on the button click\n        return stock3.id === id;\n      });\n      var request = new Request('http://localhost:500/api/remove');\n    }\n  }, {\n    key: \"addStock\",\n    value: function addStock(event) {\n      var that = this;\n      event.preventDefault();\n      console.log('in method');\n      var stock_data = {\n        symbol: this.refs.symbol.value,\n        name: this.refs.name.value,\n        price: this.refs.price.value,\n        marketcap: this.refs.marketcap.value,\n        debt: this.refs.debt.value,\n        growth: this.refs.growth.value\n      };\n      var request = new Request('http://localhost:5000/api/newStock', {\n        method: 'POST',\n        headers: new Headers({\n          'Content-Type': 'application/json'\n        }),\n        body: JSON.stringify(stock_data)\n      });\n      var stocks = that.state.stocks;\n      stocks.push(stock_data); //stocks.concat(stock_data);\n\n      that.setState({\n        stocks: stocks\n      }); //xmlhttprequest()\n\n      fetch(request).then(function (response) {\n        response.json().then(function (data) {});\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var title = this.state.title;\n      var stocks = this.state.stocks;\n      return __jsx(\"div\", {\n        className: \"apiDB\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, title), __jsx(\"form\", {\n        ref: \"stockForm\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }\n      }, __jsx(\"input\", {\n        type: \"text\",\n        ref: \"symbol\",\n        placeholder: \"symbol\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"name\",\n        placeholder: \"name\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"price\",\n        placeholder: \"price\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"marketcap\",\n        placeholder: \"marketcap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"debt\",\n        placeholder: \"debt\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"growth\",\n        placeholder: \"growth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }\n      }), __jsx(\"button\", {\n        onClick: this.addStock.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }\n      }, \" Add Stock\")), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }\n      }, stocks.map(function (indStocks) {\n        return __jsx(\"li\", {\n          key: indStocks.id,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 46\n          }\n        }, indStocks.symbol, \" \", indStocks.name, \" \", indStocks.price, \" \", indStocks.marketcap, \" \", indStocks.debt, indStocks.growth, \" \", __jsx(\"button\", {\n          onClick: _this2.removeStocks.bind(_this2, indStocks.id),\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 180\n          }\n        }, \"Remove\"));\n      })));\n    }\n  }]);\n\n  return apiDB;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaURCLnRzeD8yOTAxIl0sIm5hbWVzIjpbImFwaURCIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwiaWQiLCJzdG9jazMiLCJmaW5kIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvY2tfZGF0YSIsInN5bWJvbCIsInJlZnMiLCJ2YWx1ZSIsIm5hbWUiLCJwcmljZSIsIm1hcmtldGNhcCIsImRlYnQiLCJncm93dGgiLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImVyciIsImFkZFN0b2NrIiwiYmluZCIsIm1hcCIsImluZFN0b2NrcyIsInJlbW92ZVN0b2NrcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFJTUEsSzs7Ozs7QUFJRixtQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxtQkFERTtBQUVUQyxZQUFNLEVBQUU7QUFGQyxLQUFiO0FBRlU7QUFPYixHLENBQ0Q7Ozs7O3dDQUNvQjtBQUNoQixVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBQyxXQUFLLENBQUMsa0NBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQkEsZ0JBQVEsQ0FBQ0MsSUFBVCxHQUNLRixJQURMLENBQ1UsVUFBU0csSUFBVCxFQUFlO0FBQ2pCUCxjQUFJLENBQUNRLFFBQUwsQ0FBZTtBQUNYVCxrQkFBTSxFQUFFUTtBQURHLFdBQWY7QUFHSCxTQUxMO0FBTUgsT0FSTDtBQVNIOzs7aUNB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QUE7QUFBQTtBQUFBO0FBQUEsb0JBQXRJLENBQUo7QUFBQSxPQUFwQixDQURMLENBWkosQ0FESjtBQW1CSDs7OztFQXBHZTZCLCtDOztBQXVHTDFDLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaURCLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cblxuY2xhc3MgYXBpREIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdhcGlEYiBhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICBzdG9ja3M6IFtdXG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL01ha2UgQUpBWCBjYWxsc1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgaGFzIE1vdW50ZWQnKVxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9zdG9ja3MnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrczogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZVN0b2NrcyhpZCkge1xuICAgICAgICAvL3RoaXMgaXMgdXNpbmcgc3RvY2tzIGZyb20gbGV0IHN0b2NrcyA9IHRoaXMuc3RhdGUuc3RvY2tzIGluIHJlbmRlcigpXG4gICAgICAgIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2NrcztcbiAgICAgICAgbGV0IHN0b2NrMyA9IHN0b2Nrcy5maW5kKGZ1bmN0aW9uKHN0b2NrMykge1xuICAgICAgICAgICAgLy9ieSBtYXRjaGluZyB0aGVtIHdlIG1hdGNoIHRoZSBpZCBpbiB3aGljaCB0byBkZWxldGUgb24gdGhlIGJ1dHRvbiBjbGlja1xuICAgICAgICAgICAgcmV0dXJuIHN0b2NrMy5pZCA9PT0gaWRcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAvYXBpL3JlbW92ZScpXG4gICAgfVxuXG5cbiAgICBhZGRTdG9jayhldmVudCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBtZXRob2QnKVxuICAgICAgICBsZXQgc3RvY2tfZGF0YSA9IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnJlZnMuc3ltYm9sLnZhbHVlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5yZWZzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5yZWZzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgbWFya2V0Y2FwOiB0aGlzLnJlZnMubWFya2V0Y2FwLnZhbHVlLFxuICAgICAgICAgICAgZGVidDogdGhpcy5yZWZzLmRlYnQudmFsdWUsXG4gICAgICAgICAgICBncm93dGg6IHRoaXMucmVmcy5ncm93dGgudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9uZXdTdG9jaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvY2tfZGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoYXQuc3RhdGUuc3RvY2tzO1xuICAgICAgICBzdG9ja3MucHVzaChzdG9ja19kYXRhKVxuICAgICAgICAvL3N0b2Nrcy5jb25jYXQoc3RvY2tfZGF0YSk7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgfSlcbiAgICAgICAgLy94bWxodHRwcmVxdWVzdCgpXG4gICAgICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICBsZXQgc3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3NcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBpREJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gcmVmPVwic3RvY2tGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJzeW1ib2xcIiBwbGFjZWhvbGRlcj1cInN5bWJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwicHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJtYXJrZXRjYXBcIiBwbGFjZWhvbGRlcj1cIm1hcmtldGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImRlYnRcIiBwbGFjZWhvbGRlcj1cImRlYnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJncm93dGhcIiBwbGFjZWhvbGRlcj1cImdyb3d0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRTdG9jay5iaW5kKHRoaXMpfT4gQWRkIFN0b2NrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3N0b2Nrcy5tYXAoaW5kU3RvY2tzID0+IDxsaSBrZXk9e2luZFN0b2Nrcy5pZH0+e2luZFN0b2Nrcy5zeW1ib2x9IHtpbmRTdG9ja3MubmFtZX0ge2luZFN0b2Nrcy5wcmljZX0ge2luZFN0b2Nrcy5tYXJrZXRjYXB9IHtpbmRTdG9ja3MuZGVidH17aW5kU3RvY2tzLmdyb3d0aH0gPGJ1dHRvbiBvbkNsaWNrPSB7dGhpcy5yZW1vdmVTdG9ja3MuYmluZCh0aGlzLCBpbmRTdG9ja3MuaWQpfT5SZW1vdmU8L2J1dHRvbj48L2xpPil9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlEQjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

/***/ })

})