webpackHotUpdate_N_E("pages/apiDB",{

/***/ "./src/pages/apiDB.tsx":
/*!*****************************!*\
  !*** ./src/pages/apiDB.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar apiDB = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiDB, _Component);\n\n  var _super = _createSuper(apiDB);\n\n  function apiDB() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, apiDB);\n\n    _this = _super.call(this);\n    _this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n    return _this;\n  } //Make AJAX calls\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(apiDB, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('Component has Mounted');\n      fetch('http://localhost:3001/stocks').then(function (response) {\n        response.json().then(function (data) {\n          console.log(data);\n        });\n      });\n    }\n  }, {\n    key: \"addStock\",\n    value: function addStock(event) {\n      var that = this;\n      event.preventDefault();\n      console.log('in method');\n      var stock_data = {\n        symbol: this.refs.symbol.value,\n        name: this.refs.name.value,\n        price: this.refs.price.value,\n        marketcap: this.refs.marketcap.value,\n        debt: this.refs.debt.value,\n        growth: this.refs.growth.value\n      };\n      var request = new Request('http://localhost:5000/api/newStock', {\n        method: 'POST',\n        headers: new Headers({\n          'Content-Type': 'application/json'\n        }),\n        body: JSON.stringify(stock_data)\n      });\n      var stocks = that.state.stocks;\n      stocks.push(stock_data); //stocks.concat(stock_data);\n\n      that.setState({\n        stocks: stocks\n      }); //xmlhttprequest()\n\n      fetch(request).then(function (response) {\n        response.json().then(function (data) {});\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var title = this.state.title;\n      var stocks = this.state.stocks;\n      return __jsx(\"div\", {\n        className: \"apiDB\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }\n      }, title), __jsx(\"form\", {\n        ref: \"stockForm\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }\n      }, __jsx(\"input\", {\n        type: \"text\",\n        ref: \"symbol\",\n        placeholder: \"symbol\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"name\",\n        placeholder: \"name\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"price\",\n        placeholder: \"price\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"marketcap\",\n        placeholder: \"marketcap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"debt\",\n        placeholder: \"debt\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        ref: \"growth\",\n        placeholder: \"growth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }\n      }), __jsx(\"button\", {\n        onClick: this.addStock.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }\n      }, \" Add Stock\"), __jsx(\"pre\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }\n      }, JSON.stringify(stocks))));\n    }\n  }]);\n\n  return apiDB;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaURCLnRzeD8yOTAxIl0sIm5hbWVzIjpbImFwaURCIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXZlbnQiLCJ0aGF0IiwicHJldmVudERlZmF1bHQiLCJzdG9ja19kYXRhIiwic3ltYm9sIiwicmVmcyIsInZhbHVlIiwibmFtZSIsInByaWNlIiwibWFya2V0Y2FwIiwiZGVidCIsImdyb3d0aCIsInJlcXVlc3QiLCJSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJzZXRTdGF0ZSIsImVyciIsImFkZFN0b2NrIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFJTUEsSzs7Ozs7QUFJRixtQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxtQkFERTtBQUVUQyxZQUFNLEVBQUU7QUFGQyxLQUFiO0FBRlU7QUFPYixHLENBQ0Q7Ozs7O3dDQUNvQjtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUMsV0FBSyxDQUFDLDhCQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQVNDLFFBQVQsRUFBbUI7QUFDckJBLGdCQUFRLENBQUNDLElBQVQsR0FDS0YsSUFETCxDQUNVLFVBQVNHLElBQVQsRUFBZTtBQUNqQk4saUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFaO0FBQ0gsU0FITDtBQUlILE9BTkw7QUFPSDs7OzZCQUVRQyxLLEVBQU87QUFDWixVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBRCxXQUFLLENBQUNFLGNBQU47QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFVBQUlT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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkosRUFPSTtBQUFRLGVBQU8sRUFBRSxLQUFLZ0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU1OLElBQUksQ0FBQ0MsU0FBTCxDQUFlM0IsTUFBZixDQUFOLENBUkosQ0FGSixDQURKO0FBZUg7Ozs7RUFqRmVpQywrQzs7QUFvRkxwQyxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGlEQi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmNsYXNzIGFwaURCIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnYXBpRGIgYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgc3RvY2tzOiBbXVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9NYWtlIEFKQVggY2FsbHNcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBoYXMgTW91bnRlZCcpXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc3RvY2tzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN0b2NrKGV2ZW50KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG1ldGhvZCcpXG4gICAgICAgIGxldCBzdG9ja19kYXRhID0ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnJlZnMuc3ltYm9sLnZhbHVlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5yZWZzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5yZWZzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgbWFya2V0Y2FwOiB0aGlzLnJlZnMubWFya2V0Y2FwLnZhbHVlLFxuICAgICAgICAgICAgZGVidDogdGhpcy5yZWZzLmRlYnQudmFsdWUsXG4gICAgICAgICAgICBncm93dGg6IHRoaXMucmVmcy5ncm93dGgudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9uZXdTdG9jaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvY2tfZGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoYXQuc3RhdGUuc3RvY2tzO1xuICAgICAgICBzdG9ja3MucHVzaChzdG9ja19kYXRhKVxuICAgICAgICAvL3N0b2Nrcy5jb25jYXQoc3RvY2tfZGF0YSk7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgfSlcbiAgICAgICAgLy94bWxodHRwcmVxdWVzdCgpXG4gICAgICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICBsZXQgc3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3NcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBpREJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gcmVmPVwic3RvY2tGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInN5bWJvbFwiIHBsYWNlaG9sZGVyPVwic3ltYm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm1hcmtldGNhcFwiIHBsYWNlaG9sZGVyPVwibWFya2V0Y2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZGVidFwiIHBsYWNlaG9sZGVyPVwiZGVidFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImdyb3d0aFwiIHBsYWNlaG9sZGVyPVwiZ3Jvd3RoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFN0b2NrLmJpbmQodGhpcyl9PiBBZGQgU3RvY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3RvY2tzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpREI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

/***/ })

})