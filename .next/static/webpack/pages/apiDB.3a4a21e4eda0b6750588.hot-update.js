webpackHotUpdate_N_E("pages/apiDB",{

/***/ "./src/pages/apiDB.tsx":
/*!*****************************!*\
  !*** ./src/pages/apiDB.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar apiDB = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiDB, _Component);\n\n  var _super = _createSuper(apiDB);\n\n  function apiDB() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, apiDB);\n\n    _this = _super.call(this);\n    _this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n    return _this;\n  } //Make AJAX calls\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiDB, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var that = this;\n      console.log('Component has Mounted');\n      fetch('http://localhost:5000/api/stocks').then(function (response) {\n        response.json().then(function (data) {\n          that.setState({\n            stocks: data\n          });\n        });\n      });\n    }\n  }, {\n    key: \"removeStocks\",\n    value: function removeStocks(id) {\n      var stocks = this.state.stocks;\n      var stock3 = stocks2.find(function (stock3) {\n        return stock3.id === id;\n      });\n      console.log('remove', stock3);\n    }\n  }, {\n    key: \"addStock\",\n    value: function addStock(event) {\n      var that = this;\n      event.preventDefault();\n      console.log('in method');\n      var stock_data = {\n        symbol: this.refs.symbol.value,\n        name: this.refs.name.value,\n        price: this.refs.price.value,\n        marketcap: this.refs.marketcap.value,\n        debt: this.refs.debt.value,\n        growth: this.refs.growth.value\n      };\n      var request = new Request('http://localhost:5000/api/newStock', {\n        method: 'POST',\n        headers: new Headers({\n          'Content-Type': 'application/json'\n        }),\n        body: JSON.stringify(stock_data)\n      });\n      var stocks = that.state.stocks;\n      stocks.push(stock_data); //stocks.concat(stock_data);\n\n      that.setState({\n        stocks: stocks\n      }); //xmlhttprequest()\n\n      fetch(request).then(function (response) {\n        response.json().then(function (data) {});\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var title = this.state.title;\n      var stocks = this.state.stocks;\n      return __jsx(\"div\", {\n        className: \"apiDB\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }\n      }, title), __jsx(\"form\", {\n        ref: \"stockForm\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }\n      }, __jsx(\"input\", {\n        type: \"text\",\n        ref: \"symbol\",\n        placeholder: \"symbol\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"name\",\n        placeholder: \"name\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"price\",\n        placeholder: \"price\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"marketcap\",\n        placeholder: \"marketcap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"debt\",\n        placeholder: \"debt\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"growth\",\n        placeholder: \"growth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }\n      }), __jsx(\"button\", {\n        onClick: this.addStock.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }\n      }, \" Add Stock\")), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }\n      }, stocks.map(function (indStocks) {\n        return __jsx(\"li\", {\n          key: indStocks.id,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 46\n          }\n        }, indStocks.symbol, \" \", indStocks.name, \" \", indStocks.price, \" \", indStocks.marketcap, \" \", indStocks.debt, indStocks.growth, \" \", __jsx(\"button\", {\n          onClick: _this2.removeStocks.bind(_this2, indStocks.id),\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 180\n          }\n        }, \"Remove\"));\n      })));\n    }\n  }]);\n\n  return apiDB;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaURCLnRzeD8yOTAxIl0sIm5hbWVzIjpbImFwaURCIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwiaWQiLCJzdG9jazMiLCJzdG9ja3MyIiwiZmluZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9ja19kYXRhIiwic3ltYm9sIiwicmVmcyIsInZhbHVlIiwibmFtZSIsInByaWNlIiwibWFya2V0Y2FwIiwiZGVidCIsImdyb3d0aCIsInJlcXVlc3QiLCJSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnIiLCJhZGRTdG9jayIsImJpbmQiLCJtYXAiLCJpbmRTdG9ja3MiLCJyZW1vdmVTdG9ja3MiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBSU1BLEs7Ozs7O0FBSUYsbUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsbUJBREU7QUFFVEMsWUFBTSxFQUFFO0FBRkMsS0FBYjtBQUZVO0FBT2IsRyxDQUNEOzs7Ozt3Q0FDb0I7QUFDaEIsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUMsV0FBSyxDQUFDLGtDQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQVNDLFFBQVQsRUFBbUI7QUFDckJBLGdCQUFRLENBQUNDLElBQVQsR0FDS0YsSUFETCxDQUNVLFVBQVNHLElBQVQsRUFBZTtBQUNqQlAsY0FBSSxDQUFDUSxRQUFMLENBQWU7QUFDWFQsa0JBQU0sRUFBRVE7QUFERyxXQUFmO0FBR0gsU0FMTDtBQU1ILE9BUkw7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF0SSxDQUFKO0FBQUEsT0FBcEIsQ0FETCxDQVpKLENBREo7QUFtQkg7Ozs7RUFsR2U4QiwrQzs7QUFxR0wzQyxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGlEQi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmNsYXNzIGFwaURCIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnYXBpRGIgYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgc3RvY2tzOiBbXVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9NYWtlIEFKQVggY2FsbHNcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBNb3VudGVkJylcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc3RvY2tzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9ja3M6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVTdG9ja3MoaWQpIHtcbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoaXMuc3RhdGUuc3RvY2tzO1xuICAgICAgICBsZXQgc3RvY2szID0gc3RvY2tzMi5maW5kKGZ1bmN0aW9uKHN0b2NrMykge1xuICAgICAgICAgICAgcmV0dXJuIHN0b2NrMy5pZCA9PT0gaWRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScsc3RvY2szKVxuICAgIH1cblxuXG4gICAgYWRkU3RvY2soZXZlbnQpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gbWV0aG9kJylcbiAgICAgICAgbGV0IHN0b2NrX2RhdGEgPSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5yZWZzLnN5bWJvbC52YWx1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucmVmcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucmVmcy5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgIG1hcmtldGNhcDogdGhpcy5yZWZzLm1hcmtldGNhcC52YWx1ZSxcbiAgICAgICAgICAgIGRlYnQ6IHRoaXMucmVmcy5kZWJ0LnZhbHVlLFxuICAgICAgICAgICAgZ3Jvd3RoOiB0aGlzLnJlZnMuZ3Jvd3RoLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbmV3U3RvY2snLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0b2NrX2RhdGEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzdG9ja3MgPSB0aGF0LnN0YXRlLnN0b2NrcztcbiAgICAgICAgc3RvY2tzLnB1c2goc3RvY2tfZGF0YSlcbiAgICAgICAgLy9zdG9ja3MuY29uY2F0KHN0b2NrX2RhdGEpO1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0b2Nrczogc3RvY2tzXG4gICAgICAgIH0pXG4gICAgICAgIC8veG1saHR0cHJlcXVlc3QoKVxuICAgICAgICBmZXRjaChyZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZTtcbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoaXMuc3RhdGUuc3RvY2tzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwaURCXCI+XG4gICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIHJlZj1cInN0b2NrRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwic3ltYm9sXCIgcGxhY2Vob2xkZXI9XCJzeW1ib2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cInByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwibWFya2V0Y2FwXCIgcGxhY2Vob2xkZXI9XCJtYXJrZXRjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJkZWJ0XCIgcGxhY2Vob2xkZXI9XCJkZWJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZ3Jvd3RoXCIgcGxhY2Vob2xkZXI9XCJncm93dGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkU3RvY2suYmluZCh0aGlzKX0+IEFkZCBTdG9jazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtzdG9ja3MubWFwKGluZFN0b2NrcyA9PiA8bGkga2V5PXtpbmRTdG9ja3MuaWR9PntpbmRTdG9ja3Muc3ltYm9sfSB7aW5kU3RvY2tzLm5hbWV9IHtpbmRTdG9ja3MucHJpY2V9IHtpbmRTdG9ja3MubWFya2V0Y2FwfSB7aW5kU3RvY2tzLmRlYnR9e2luZFN0b2Nrcy5ncm93dGh9IDxidXR0b24gb25DbGljaz0ge3RoaXMucmVtb3ZlU3RvY2tzLmJpbmQodGhpcywgaW5kU3RvY2tzLmlkKX0+UmVtb3ZlPC9idXR0b24+PC9saT4pfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpREI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

/***/ })

})