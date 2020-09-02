module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/apiDB.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/apiDB.tsx":
/*!*****************************!*\
  !*** ./src/pages/apiDB.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass apiDB extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n  } //Make AJAX calls\n\n\n  componentDidMount() {\n    let that = this;\n    console.log('Component has Mounted');\n    fetch('http://localhost:5000/api/pullfromDBstocks').then(function (response) {\n      response.json().then(function (data) {\n        that.setState({\n          stocks: data\n        });\n      });\n    });\n  }\n\n  removeStocks(id) {\n    var that = this; //this is using stocks from let stocks = this.state.stocks in render()\n\n    let stocks = this.state.stocks;\n    let stock3 = stocks.find(function (stock3) {\n      //by matching them we match the id in which to delete on the button click\n      return stock3.id === id;\n    });\n    var request = new Request('http://localhost:5000/api/removeStock/' + id, {\n      method: 'DELETE'\n    });\n    fetch(request).then(function (response) {\n      stocks.splice(stocks.indexOf(stock3), 1);\n      that.setState({\n        stocks: stocks\n      });\n      response.json().then(function (data) {\n        console.log(that);\n      });\n    });\n  }\n\n  addStock(event) {\n    var that = this;\n    event.preventDefault();\n    console.log('in method');\n    let stock_data = {\n      // id: this.refs.id.value,\n      symbol: this.refs.symbol.value,\n      name: this.refs.name.value,\n      price: this.refs.price.value,\n      marketcap: this.refs.marketcap.value,\n      debt: this.refs.debt.value,\n      growth: this.refs.growth.value\n    };\n    var request = new Request('http://localhost:5000/api/newStock', {\n      method: 'POST',\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      }),\n      body: JSON.stringify(stock_data)\n    });\n    let stocks = that.state.stocks;\n    stocks.push(stock_data); //stocks.concat(stock_data);\n\n    that.setState({\n      stocks: stocks\n    }); //xmlhttprequest()\n\n    fetch(request).then(function (response) {\n      response.json().then(function (data) {});\n    }).catch(function (err) {\n      console.log(err);\n    });\n  }\n\n  render() {\n    let title = this.state.title;\n    let stocks = this.state.stocks;\n    return __jsx(\"div\", {\n      className: \"apiDB\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }\n    }, title), __jsx(\"form\", {\n      ref: \"stockForm\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      ref: \"symbol\",\n      placeholder: \"symbol\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"name\",\n      placeholder: \"name\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"price\",\n      placeholder: \"price\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"marketcap\",\n      placeholder: \"marketcap\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"debt\",\n      placeholder: \"debt\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"growth\",\n      placeholder: \"growth\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 21\n      }\n    }), __jsx(\"button\", {\n      onClick: this.addStock.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 21\n      }\n    }, \" Add Stock\")), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 17\n      }\n    }, stocks.map(indStocks => __jsx(\"li\", {\n      key: indStocks.id,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 46\n      }\n    }, indStocks.symbol, \" \", indStocks.name, \" \", indStocks.price, \" \", indStocks.marketcap, \" \", indStocks.debt, indStocks.growth, \" \", __jsx(\"button\", {\n      onClick: this.removeStocks.bind(this, indStocks.id),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 180\n      }\n    }, \"Remove\")))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpREIudHN4PzI5MDEiXSwibmFtZXMiOlsiYXBpREIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwidGl0bGUiLCJzdG9ja3MiLCJjb21wb25lbnREaWRNb3VudCIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwicmVtb3ZlU3RvY2tzIiwiaWQiLCJzdG9jazMiLCJmaW5kIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJtZXRob2QiLCJzcGxpY2UiLCJpbmRleE9mIiwiYWRkU3RvY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvY2tfZGF0YSIsInN5bWJvbCIsInJlZnMiLCJ2YWx1ZSIsIm5hbWUiLCJwcmljZSIsIm1hcmtldGNhcCIsImRlYnQiLCJncm93dGgiLCJoZWFkZXJzIiwiSGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImNhdGNoIiwiZXJyIiwicmVuZGVyIiwiYmluZCIsIm1hcCIsImluZFN0b2NrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFJQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBOEI7QUFJMUJDLGFBQVcsR0FBRztBQUNWO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxtQkFERTtBQUVUQyxZQUFNLEVBQUU7QUFGQyxLQUFiO0FBS0gsR0FYeUIsQ0FZMUI7OztBQUNBQyxtQkFBaUIsR0FBRztBQUNoQixRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBQyxTQUFLLENBQUMsNENBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQkEsY0FBUSxDQUFDQyxJQUFULEdBQ0tGLElBREwsQ0FDVSxVQUFTRyxJQUFULEVBQWU7QUFDakJQLFlB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LENBQWNxQixJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosQ0FGSixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS3pDLE1BQU0sQ0FBQzBDLEdBQVAsQ0FBV0MsU0FBUyxJQUFJO0FBQUksU0FBRyxFQUFFQSxTQUFTLENBQUMvQixFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCK0IsU0FBUyxDQUFDbkIsTUFBbEMsT0FBMkNtQixTQUFTLENBQUNoQixJQUFyRCxPQUE0RGdCLFNBQVMsQ0FBQ2YsS0FBdEUsT0FBOEVlLFNBQVMsQ0FBQ2QsU0FBeEYsT0FBb0djLFNBQVMsQ0FBQ2IsSUFBOUcsRUFBb0hhLFNBQVMsQ0FBQ1osTUFBOUgsT0FBc0k7QUFBUSxhQUFPLEVBQUcsS0FBS3BCLFlBQUwsQ0FBa0I4QixJQUFsQixDQUF1QixJQUF2QixFQUE2QkUsU0FBUyxDQUFDL0IsRUFBdkMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdEksQ0FBeEIsQ0FETCxDQVpKLENBREo7QUFtQkg7O0FBbEh5Qjs7QUFxSGZqQixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGlEQi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmNsYXNzIGFwaURCIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnYXBpRGIgYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgc3RvY2tzOiBbXVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9NYWtlIEFKQVggY2FsbHNcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBNb3VudGVkJylcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHVsbGZyb21EQnN0b2NrcycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2tzOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlU3RvY2tzKGlkKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgLy90aGlzIGlzIHVzaW5nIHN0b2NrcyBmcm9tIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2NrcyBpbiByZW5kZXIoKVxuICAgICAgICBsZXQgc3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3M7XG4gICAgICAgIGxldCBzdG9jazMgPSBzdG9ja3MuZmluZChmdW5jdGlvbihzdG9jazMpIHtcbiAgICAgICAgICAgIC8vYnkgbWF0Y2hpbmcgdGhlbSB3ZSBtYXRjaCB0aGUgaWQgaW4gd2hpY2ggdG8gZGVsZXRlIG9uIHRoZSBidXR0b24gY2xpY2tcbiAgICAgICAgICAgIHJldHVybiBzdG9jazMuaWQgPT09IGlkXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3JlbW92ZVN0b2NrLycrIGlkLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgIH0pO1xuICAgICAgICBmZXRjaChyZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdG9ja3Muc3BsaWNlKHN0b2Nrcy5pbmRleE9mKHN0b2NrMyksIDEpO1xuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdG9ja3M6IHN0b2Nrc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgYWRkU3RvY2soZXZlbnQpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gbWV0aG9kJylcbiAgICAgICAgbGV0IHN0b2NrX2RhdGEgPSB7XG4gICAgICAgICAgIC8vIGlkOiB0aGlzLnJlZnMuaWQudmFsdWUsXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMucmVmcy5zeW1ib2wudmFsdWUsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnJlZnMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnJlZnMucHJpY2UudmFsdWUsXG4gICAgICAgICAgICBtYXJrZXRjYXA6IHRoaXMucmVmcy5tYXJrZXRjYXAudmFsdWUsXG4gICAgICAgICAgICBkZWJ0OiB0aGlzLnJlZnMuZGVidC52YWx1ZSxcbiAgICAgICAgICAgIGdyb3d0aDogdGhpcy5yZWZzLmdyb3d0aC52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL25ld1N0b2NrJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdG9ja19kYXRhKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3RvY2tzID0gdGhhdC5zdGF0ZS5zdG9ja3M7XG4gICAgICAgIHN0b2Nrcy5wdXNoKHN0b2NrX2RhdGEpXG4gICAgICAgIC8vc3RvY2tzLmNvbmNhdChzdG9ja19kYXRhKTtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdG9ja3M6IHN0b2Nrc1xuICAgICAgICB9KVxuICAgICAgICAvL3htbGh0dHByZXF1ZXN0KClcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgICAgIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2Nrc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcGlEQlwiPlxuICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSByZWY9XCJzdG9ja0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInN5bWJvbFwiIHBsYWNlaG9sZGVyPVwic3ltYm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm1hcmtldGNhcFwiIHBsYWNlaG9sZGVyPVwibWFya2V0Y2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZGVidFwiIHBsYWNlaG9sZGVyPVwiZGVidFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImdyb3d0aFwiIHBsYWNlaG9sZGVyPVwiZ3Jvd3RoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFN0b2NrLmJpbmQodGhpcyl9PiBBZGQgU3RvY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7c3RvY2tzLm1hcChpbmRTdG9ja3MgPT4gPGxpIGtleT17aW5kU3RvY2tzLmlkfT57aW5kU3RvY2tzLnN5bWJvbH0ge2luZFN0b2Nrcy5uYW1lfSB7aW5kU3RvY2tzLnByaWNlfSB7aW5kU3RvY2tzLm1hcmtldGNhcH0ge2luZFN0b2Nrcy5kZWJ0fXtpbmRTdG9ja3MuZ3Jvd3RofSA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnJlbW92ZVN0b2Nrcy5iaW5kKHRoaXMsIGluZFN0b2Nrcy5pZCl9PlJlbW92ZTwvYnV0dG9uPjwvbGk+KX1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaURCOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });