webpackHotUpdate_N_E("pages/apiDB",{

/***/ "./src/pages/apiDB.tsx":
/*!*****************************!*\
  !*** ./src/pages/apiDB.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar apiDB = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiDB, _Component);\n\n  var _super = _createSuper(apiDB);\n\n  function apiDB() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, apiDB);\n\n    _this = _super.call(this);\n    _this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n    return _this;\n  } //Make AJAX calls\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiDB, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var that = this;\n      console.log('Component has Mounted');\n      fetch('http://localhost:5000/api/stocks').then(function (response) {\n        response.json().then(function (data) {\n          that.setState({\n            stocks: data\n          });\n        });\n      });\n    }\n  }, {\n    key: \"addStock\",\n    value: function addStock(event) {\n      var that = this;\n      event.preventDefault();\n      console.log('in method');\n      var stock_data = {\n        symbol: this.refs.symbol.value,\n        name: this.refs.name.value,\n        price: this.refs.price.value,\n        marketcap: this.refs.marketcap.value,\n        debt: this.refs.debt.value,\n        growth: this.refs.growth.value\n      };\n      var request = new Request('http://localhost:5000/api/newStock', {\n        method: 'POST',\n        headers: new Headers({\n          'Content-Type': 'application/json'\n        }),\n        body: JSON.stringify(stock_data)\n      });\n      var stocks = that.state.stocks;\n      stocks.push(stock_data); //stocks.concat(stock_data);\n\n      that.setState({\n        stocks: stocks\n      }); //xmlhttprequest()\n\n      fetch(request).then(function (response) {\n        response.json().then(function (data) {});\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var title = this.state.title;\n      var stocks = this.state.stocks;\n      return __jsx(\"div\", {\n        className: \"apiDB\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }\n      }, title), __jsx(\"form\", {\n        ref: \"stockForm\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }\n      }, __jsx(\"input\", {\n        type: \"text\",\n        ref: \"symbol\",\n        placeholder: \"symbol\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"name\",\n        placeholder: \"name\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"price\",\n        placeholder: \"price\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"marketcap\",\n        placeholder: \"marketcap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"debt\",\n        placeholder: \"debt\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"growth\",\n        placeholder: \"growth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }\n      }), __jsx(\"button\", {\n        onClick: this.addStock.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }\n      }, \" Add Stock\")), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }\n      }, stocks.map(function (indStocks) {\n        return __jsx(\"li\", {\n          key: stocks.id,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 46\n          }\n        }, indStocks.symbol);\n      }), stocks.map(function (indStocks) {\n        return __jsx(\"li\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 46\n          }\n        }, indStocks.name);\n      })));\n    }\n  }]);\n\n  return apiDB;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaURCLnRzeD8yOTAxIl0sIm5hbWVzIjpbImFwaURCIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b2NrX2RhdGEiLCJzeW1ib2wiLCJyZWZzIiwidmFsdWUiLCJuYW1lIiwicHJpY2UiLCJtYXJrZXRjYXAiLCJkZWJ0IiwiZ3Jvd3RoIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImVyciIsImFkZFN0b2NrIiwiYmluZCIsIm1hcCIsImluZFN0b2NrcyIsImlkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztJQUlNQSxLOzs7OztBQUlGLG1CQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLG1CQURFO0FBRVRDLFlBQU0sRUFBRTtBQUZDLEtBQWI7QUFGVTtBQU9iLEcsQ0FDRDs7Ozs7d0NBQ29CO0FBQ2hCLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FDLFdBQUssQ0FBQyxrQ0FBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFTQyxRQUFULEVBQW1CO0FBQ3JCQSxnQkFBUSxDQUFDQyxJQUFULEdBQ0tGLElBREwsQ0FDVSxVQUFTRyxJQUFULEVBQWU7QUFDakJQLGNBQUksQ0FBQ1EsUUFBTCxDQUFlO0FBQ1hULGtCQUFNLEVBQUVRO0FBREcsV0FBZjtBQUdILFNBTEw7QUFNSCxPQVJMO0FBU0g7Ozs2QkFFUUUsSyxFQUFPO0FBQ1osVUFBSVQsSUFBSSxHQUFH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STtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUcsRUFBQyxRQUF2QjtBQUFnQyxtQkFBVyxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFOSixFQU9JO0FBQVEsZUFBTyxFQUFFLEtBQUtnQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixDQUZKLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLaEMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXLFVBQUFDLFNBQVM7QUFBQSxlQUFJO0FBQUksYUFBRyxFQUFFbEMsTUFBTSxDQUFDbUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQkQsU0FBUyxDQUFDckIsTUFBL0IsQ0FBSjtBQUFBLE9BQXBCLENBREwsRUFFS2IsTUFBTSxDQUFDaUMsR0FBUCxDQUFXLFVBQUFDLFNBQVM7QUFBQSxlQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0EsU0FBUyxDQUFDbEIsSUFBZixDQUFKO0FBQUEsT0FBcEIsQ0FGTCxDQVhKLENBREo7QUFrQkg7Ozs7RUF2RmVvQiwrQzs7QUEwRkx2QyxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGlEQi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmNsYXNzIGFwaURCIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnYXBpRGIgYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgc3RvY2tzOiBbXVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9NYWtlIEFKQVggY2FsbHNcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBNb3VudGVkJylcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc3RvY2tzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9ja3M6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN0b2NrKGV2ZW50KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG1ldGhvZCcpXG4gICAgICAgIGxldCBzdG9ja19kYXRhID0ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnJlZnMuc3ltYm9sLnZhbHVlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5yZWZzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5yZWZzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgbWFya2V0Y2FwOiB0aGlzLnJlZnMubWFya2V0Y2FwLnZhbHVlLFxuICAgICAgICAgICAgZGVidDogdGhpcy5yZWZzLmRlYnQudmFsdWUsXG4gICAgICAgICAgICBncm93dGg6IHRoaXMucmVmcy5ncm93dGgudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9uZXdTdG9jaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvY2tfZGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoYXQuc3RhdGUuc3RvY2tzO1xuICAgICAgICBzdG9ja3MucHVzaChzdG9ja19kYXRhKVxuICAgICAgICAvL3N0b2Nrcy5jb25jYXQoc3RvY2tfZGF0YSk7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgfSlcbiAgICAgICAgLy94bWxodHRwcmVxdWVzdCgpXG4gICAgICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICBsZXQgc3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3NcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBpREJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gcmVmPVwic3RvY2tGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInN5bWJvbFwiIHBsYWNlaG9sZGVyPVwic3ltYm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm1hcmtldGNhcFwiIHBsYWNlaG9sZGVyPVwibWFya2V0Y2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZGVidFwiIHBsYWNlaG9sZGVyPVwiZGVidFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImdyb3d0aFwiIHBsYWNlaG9sZGVyPVwiZ3Jvd3RoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFN0b2NrLmJpbmQodGhpcyl9PiBBZGQgU3RvY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7c3RvY2tzLm1hcChpbmRTdG9ja3MgPT4gPGxpIGtleT17c3RvY2tzLmlkfT57aW5kU3RvY2tzLnN5bWJvbH08L2xpPil9XG4gICAgICAgICAgICAgICAgICAgIHtzdG9ja3MubWFwKGluZFN0b2NrcyA9PiA8bGk+e2luZFN0b2Nrcy5uYW1lfTwvbGk+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaURCOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

/***/ })

})