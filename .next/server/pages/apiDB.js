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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass apiDB extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n  } //Make AJAX calls\n\n\n  componentDidMount() {\n    let that = this;\n    console.log('Component has Mounted');\n    fetch('http://localhost:5000/api/pullfromDBstocks').then(function (response) {\n      response.json().then(function (data) {\n        that.setState({\n          stocks: data\n        });\n      });\n    });\n  }\n\n  removeStocks(id) {\n    var that = this; //this is using stocks from let stocks = this.state.stocks in render()\n\n    let stocks = that.state.stocks;\n    let stock3 = stocks.find(function (stock3) {\n      //by matching them we match the id in which to delete on the button click\n      return stock3.id === id;\n    });\n    var request = new Request('http://localhost:5000/api/removeStock/' + id, {\n      method: 'DELETE'\n    });\n    fetch(request).then(function (response) {\n      stocks.splice(stocks.indexOf(stock3), 1);\n      that.setState({\n        stocks: stocks\n      });\n      response.json().then(function (data) {\n        console.log(that);\n      });\n    });\n  }\n\n  addStock(event) {\n    var that = this;\n    event.preventDefault();\n    console.log('in method');\n    let stock_data = {\n      // id: this.refs.id.value,\n      symbol: this.refs.symbol.value,\n      name: this.refs.name.value,\n      price: this.refs.price.value,\n      marketcap: this.refs.marketcap.value,\n      debt: this.refs.debt.value,\n      growth: this.refs.growth.value\n    };\n    var request = new Request('http://localhost:5000/api/newStock', {\n      method: 'POST',\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      }),\n      body: JSON.stringify(stock_data)\n    });\n    let stocks = that.state.stocks;\n    stocks.push(stock_data); //stocks.concat(stock_data);\n\n    that.setState({\n      stocks: stocks\n    }); //xmlhttprequest()\n\n    fetch(request).then(function (response) {\n      response.json().then(function (data) {});\n    }).catch(function (err) {\n      console.log(err);\n    });\n  }\n\n  render() {\n    let title = this.state.title;\n    let stocks = this.state.stocks;\n    return __jsx(\"div\", {\n      className: \"apiDB\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }\n    }, title), __jsx(\"form\", {\n      ref: \"stockForm\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      ref: \"symbol\",\n      placeholder: \"symbol\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"name\",\n      placeholder: \"name\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"price\",\n      placeholder: \"price\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"marketcap\",\n      placeholder: \"marketcap\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"debt\",\n      placeholder: \"debt\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"growth\",\n      placeholder: \"growth\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 21\n      }\n    }), __jsx(\"button\", {\n      onClick: this.addStock.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }\n    }, \" Add Stock\")), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }\n    }, stocks.map(indStocks => __jsx(\"li\", {\n      key: indStocks.id,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 46\n      }\n    }, indStocks.symbol, \" \", indStocks.name, \" \", indStocks.price, \" \", indStocks.marketcap, \" \", indStocks.debt, indStocks.growth, \" \", __jsx(\"button\", {\n      onClick: this.removeStocks.bind(this, indStocks.id),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 180\n      }\n    }, \"Remove\")))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpREIudHN4PzI5MDEiXSwibmFtZXMiOlsiYXBpREIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRpdGxlIiwic3RvY2tzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0aGF0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRTdGF0ZSIsInJlbW92ZVN0b2NrcyIsImlkIiwic3RvY2szIiwiZmluZCIsInJlcXVlc3QiLCJSZXF1ZXN0IiwibWV0aG9kIiwic3BsaWNlIiwiaW5kZXhPZiIsImFkZFN0b2NrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b2NrX2RhdGEiLCJzeW1ib2wiLCJyZWZzIiwidmFsdWUiLCJuYW1lIiwicHJpY2UiLCJtYXJrZXRjYXAiLCJkZWJ0IiwiZ3Jvd3RoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJjYXRjaCIsImVyciIsInJlbmRlciIsImJpbmQiLCJtYXAiLCJpbmRTdG9ja3MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBR0EsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBNEM7QUFJeENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFhO0FBQ3BCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLG1CQURFO0FBRVRDLFlBQU0sRUFBRTtBQUZDLEtBQWI7QUFLSCxHQVh1QyxDQVl4Qzs7O0FBQ0FDLG1CQUFpQixHQUFHO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FDLFNBQUssQ0FBQyw0Q0FBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFTQyxRQUFULEVBQW1CO0FBQ3JCQSxjQUFRLENB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEosRUFRSTtBQUFRLGFBQU8sRUFBRSxLQUFLcUIsUUFBTCxDQUFjcUIsSUFBZCxDQUFtQixJQUFuQixDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJKLENBRkosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0t6QyxNQUFNLENBQUMwQyxHQUFQLENBQVdDLFNBQVMsSUFBSTtBQUFJLFNBQUcsRUFBRUEsU0FBUyxDQUFDL0IsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3QitCLFNBQVMsQ0FBQ25CLE1BQWxDLE9BQTJDbUIsU0FBUyxDQUFDaEIsSUFBckQsT0FBNERnQixTQUFTLENBQUNmLEtBQXRFLE9BQThFZSxTQUFTLENBQUNkLFNBQXhGLE9BQW9HYyxTQUFTLENBQUNiLElBQTlHLEVBQW9IYSxTQUFTLENBQUNaLE1BQTlILE9BQXNJO0FBQVEsYUFBTyxFQUFHLEtBQUtwQixZQUFMLENBQWtCOEIsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJFLFNBQVMsQ0FBQy9CLEVBQXZDLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXRJLENBQXhCLENBREwsQ0FaSixDQURKO0FBbUJIOztBQXZIdUM7O0FBMEg3Qm5CLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaURCLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIGFwaURCIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnYXBpRGIgYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgc3RvY2tzOiBbXVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9NYWtlIEFKQVggY2FsbHNcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBNb3VudGVkJylcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHVsbGZyb21EQnN0b2NrcycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2tzOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlU3RvY2tzKGlkOmFueSkgIHtcbiAgICAgICAgXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgLy90aGlzIGlzIHVzaW5nIHN0b2NrcyBmcm9tIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2NrcyBpbiByZW5kZXIoKVxuICAgICAgICBsZXQgc3RvY2tzID0gdGhhdC5zdGF0ZS5zdG9ja3M7XG4gICAgICAgIGxldCBzdG9jazMgPSBzdG9ja3MuZmluZChmdW5jdGlvbihzdG9jazMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9ieSBtYXRjaGluZyB0aGVtIHdlIG1hdGNoIHRoZSBpZCBpbiB3aGljaCB0byBkZWxldGUgb24gdGhlIGJ1dHRvbiBjbGlja1xuICAgICAgICAgICAgcmV0dXJuIHN0b2NrMy5pZCA9PT0gaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcmVtb3ZlU3RvY2svJysgaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgfSk7XG4gICAgICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0b2Nrcy5zcGxpY2Uoc3RvY2tzLmluZGV4T2Yoc3RvY2szKSwgMSk7XG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN0b2Nrczogc3RvY2tzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBhZGRTdG9jayhldmVudDphbnkpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG1ldGhvZCcpXG4gICAgICAgXG4gICAgICAgIGxldCBzdG9ja19kYXRhID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgIC8vIGlkOiB0aGlzLnJlZnMuaWQudmFsdWUsXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMucmVmcy5zeW1ib2wudmFsdWUsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnJlZnMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnJlZnMucHJpY2UudmFsdWUsXG4gICAgICAgICAgICBtYXJrZXRjYXA6IHRoaXMucmVmcy5tYXJrZXRjYXAudmFsdWUsXG4gICAgICAgICAgICBkZWJ0OiB0aGlzLnJlZnMuZGVidC52YWx1ZSxcbiAgICAgICAgICAgIGdyb3d0aDogdGhpcy5yZWZzLmdyb3d0aC52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL25ld1N0b2NrJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdG9ja19kYXRhKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3RvY2tzID0gdGhhdC5zdGF0ZS5zdG9ja3M7XG4gICAgICAgIHN0b2Nrcy5wdXNoKHN0b2NrX2RhdGEpXG4gICAgICAgIC8vc3RvY2tzLmNvbmNhdChzdG9ja19kYXRhKTtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdG9ja3M6IHN0b2Nrc1xuICAgICAgICB9KVxuICAgICAgICAvL3htbGh0dHByZXF1ZXN0KClcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgICAgIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2Nrc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcGlEQlwiPlxuICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSByZWY9XCJzdG9ja0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInN5bWJvbFwiIHBsYWNlaG9sZGVyPVwic3ltYm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm1hcmtldGNhcFwiIHBsYWNlaG9sZGVyPVwibWFya2V0Y2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZGVidFwiIHBsYWNlaG9sZGVyPVwiZGVidFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImdyb3d0aFwiIHBsYWNlaG9sZGVyPVwiZ3Jvd3RoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFN0b2NrLmJpbmQodGhpcyl9PiBBZGQgU3RvY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7c3RvY2tzLm1hcChpbmRTdG9ja3MgPT4gPGxpIGtleT17aW5kU3RvY2tzLmlkfT57aW5kU3RvY2tzLnN5bWJvbH0ge2luZFN0b2Nrcy5uYW1lfSB7aW5kU3RvY2tzLnByaWNlfSB7aW5kU3RvY2tzLm1hcmtldGNhcH0ge2luZFN0b2Nrcy5kZWJ0fXtpbmRTdG9ja3MuZ3Jvd3RofSA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnJlbW92ZVN0b2Nrcy5iaW5kKHRoaXMsIGluZFN0b2Nrcy5pZCl9PlJlbW92ZTwvYnV0dG9uPjwvbGk+KX1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaURCOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

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