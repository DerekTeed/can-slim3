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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass apiDB extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n  } //Make AJAX calls\n\n\n  componentDidMount() {\n    let that = this;\n    console.log('Component has Mounted');\n    fetch('http://localhost:5000/api/pullfromDBstocks').then(function (response) {\n      response.json().then(function (data) {\n        that.setState({\n          stocks: data\n        });\n      });\n    });\n  }\n\n  removeStocks(id) {\n    var that = this; //this is using stocks from let stocks = this.state.stocks in render()\n\n    let stocks = that.state.stocks;\n    let stock3 = stocks.find(function (stock3) {\n      //by matching them we match the id in which to delete on the button click\n      return stock3.id === id;\n    });\n    var request = new Request('http://localhost:5000/api/removeStock/' + id, {\n      method: 'DELETE'\n    });\n    fetch(request).then(function (response) {\n      stocks.splice(stocks.indexOf(stock3), 1);\n      that.setState({\n        stocks: stocks\n      });\n      response.json().then(function (data) {\n        console.log(that);\n      });\n    });\n  }\n\n  addStock(event) {\n    var that = this;\n    event.preventDefault();\n    console.log('in method');\n    let stock_data = {\n      // id: this.refs.id.value,\n      symbol: this.refs.symbol.value,\n      name: this.refs.name.value,\n      price: this.refs.price.value,\n      marketcap: this.refs.marketcap.value,\n      debt: this.refs.debt.value,\n      growth: this.refs.growth.value\n    };\n    var request = new Request('http://localhost:5000/api/newStock', {\n      method: 'POST',\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      }),\n      body: JSON.stringify(stock_data)\n    });\n    let stocks = that.state.stocks;\n    stocks.push(stock_data); //stocks.concat(stock_data);\n\n    that.setState({\n      stocks: stocks\n    }); //xmlhttprequest()\n\n    fetch(request).then(function (response) {\n      response.json().then(function (data) {});\n    }).catch(function (err) {\n      console.log(err);\n    });\n  }\n\n  render() {\n    let title = this.state.title;\n    let stocks = this.state.stocks;\n    return __jsx(\"div\", {\n      className: \"apiDB\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 17\n      }\n    }, title), __jsx(\"form\", {\n      ref: \"stockForm\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 17\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      ref: \"symbol\",\n      placeholder: \"symbol\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"name\",\n      placeholder: \"name\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"price\",\n      placeholder: \"price\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"marketcap\",\n      placeholder: \"marketcap\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"debt\",\n      placeholder: \"debt\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"growth\",\n      placeholder: \"growth\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 21\n      }\n    }), __jsx(\"button\", {\n      onClick: this.addStock.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 21\n      }\n    }, \" Add Stock\")), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 17\n      }\n    }, stocks.map(indStocks => __jsx(\"li\", {\n      key: indStocks.id,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 46\n      }\n    }, indStocks.symbol, \" \", indStocks.name, \" \", indStocks.price, \" \", indStocks.marketcap, \" \", indStocks.debt, indStocks.growth, \" \", __jsx(\"button\", {\n      onClick: this.removeStocks.bind(this, indStocks.id),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 180\n      }\n    }, \"Remove\")))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpREIudHN4PzI5MDEiXSwibmFtZXMiOlsiYXBpREIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsImNvbXBvbmVudERpZE1vdW50IiwidGhhdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0U3RhdGUiLCJyZW1vdmVTdG9ja3MiLCJpZCIsInN0b2NrMyIsImZpbmQiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsInNwbGljZSIsImluZGV4T2YiLCJhZGRTdG9jayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9ja19kYXRhIiwic3ltYm9sIiwicmVmcyIsInZhbHVlIiwibmFtZSIsInByaWNlIiwibWFya2V0Y2FwIiwiZGVidCIsImdyb3d0aCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJyZW5kZXIiLCJiaW5kIiwibWFwIiwiaW5kU3RvY2tzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQVdBLE1BQU1BLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QztBQUlwQ0MsYUFBVyxDQUFDQyxLQUFELEVBQWE7QUFDcEIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsbUJBREU7QUFFVEMsWUFBTSxFQUFFO0FBRkMsS0FBYjtBQUtILEdBWG1DLENBWXBDOzs7QUFDQUMsbUJBQWlCLEdBQUc7QUFDaEIsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUMsU0FBSyxDQUFDLDRDQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQVNDLFFBQVQsRUFBbUI7QUFDckJBLGNBQVEsQ0FBQ0MsSUFBVCxHQUNLRixJQURM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QUFBO0FBQUEsTUFQSixFQVFJO0FBQVEsYUFBTyxFQUFFLEtBQUtxQixRQUFMLENBQWNxQixJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosQ0FGSixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS3pDLE1BQU0sQ0FBQzBDLEdBQVAsQ0FBV0MsU0FBUyxJQUFJO0FBQUksU0FBRyxFQUFFQSxTQUFTLENBQUMvQixFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCK0IsU0FBUyxDQUFDbkIsTUFBbEMsT0FBMkNtQixTQUFTLENBQUNoQixJQUFyRCxPQUE0RGdCLFNBQVMsQ0FBQ2YsS0FBdEUsT0FBOEVlLFNBQVMsQ0FBQ2QsU0FBeEYsT0FBb0djLFNBQVMsQ0FBQ2IsSUFBOUcsRUFBb0hhLFNBQVMsQ0FBQ1osTUFBOUgsT0FBc0k7QUFBUSxhQUFPLEVBQUcsS0FBS3BCLFlBQUwsQ0FBa0I4QixJQUFsQixDQUF1QixJQUF2QixFQUE2QkUsU0FBUyxDQUFDL0IsRUFBdkMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdEksQ0FBeEIsQ0FETCxDQVpKLENBREo7QUFtQkg7O0FBdkhtQzs7QUEwSHpCbEIsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpREIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBhZGRTdG9jayB7XG4gICAgXG4gICAgc3RvY2tfZGF0YTphbnksXG4gICAgc3ltYm9sOiBhbnksXG4gICAgdGl0bGU6IGFueSxcbiAgICBcbiAgICB2YWx1ZTphbnlcbiAgfVxuXG5jbGFzcyBhcGlEQiBleHRlbmRzIENvbXBvbmVudDxhZGRTdG9jaz4ge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnYXBpRGIgYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgc3RvY2tzOiBbXVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy9NYWtlIEFKQVggY2FsbHNcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IGhhcyBNb3VudGVkJylcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHVsbGZyb21EQnN0b2NrcycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2tzOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlU3RvY2tzKGlkOmFueSkgIHtcbiAgICAgICAgXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgLy90aGlzIGlzIHVzaW5nIHN0b2NrcyBmcm9tIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2NrcyBpbiByZW5kZXIoKVxuICAgICAgICBsZXQgc3RvY2tzID0gdGhhdC5zdGF0ZS5zdG9ja3M7XG4gICAgICAgIGxldCBzdG9jazMgPSBzdG9ja3MuZmluZChmdW5jdGlvbihzdG9jazMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9ieSBtYXRjaGluZyB0aGVtIHdlIG1hdGNoIHRoZSBpZCBpbiB3aGljaCB0byBkZWxldGUgb24gdGhlIGJ1dHRvbiBjbGlja1xuICAgICAgICAgICAgcmV0dXJuIHN0b2NrMy5pZCA9PT0gaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcmVtb3ZlU3RvY2svJysgaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgfSk7XG4gICAgICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0b2Nrcy5zcGxpY2Uoc3RvY2tzLmluZGV4T2Yoc3RvY2szKSwgMSk7XG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN0b2Nrczogc3RvY2tzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBhZGRTdG9jayhldmVudDphbnkpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG1ldGhvZCcpXG4gICAgICAgXG4gICAgICAgIGxldCBzdG9ja19kYXRhID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgIC8vIGlkOiB0aGlzLnJlZnMuaWQudmFsdWUsXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMucmVmcy5zeW1ib2wudmFsdWUsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnJlZnMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnJlZnMucHJpY2UudmFsdWUsXG4gICAgICAgICAgICBtYXJrZXRjYXA6IHRoaXMucmVmcy5tYXJrZXRjYXAudmFsdWUsXG4gICAgICAgICAgICBkZWJ0OiB0aGlzLnJlZnMuZGVidC52YWx1ZSxcbiAgICAgICAgICAgIGdyb3d0aDogdGhpcy5yZWZzLmdyb3d0aC52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL25ld1N0b2NrJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdG9ja19kYXRhKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3RvY2tzID0gdGhhdC5zdGF0ZS5zdG9ja3M7XG4gICAgICAgIHN0b2Nrcy5wdXNoKHN0b2NrX2RhdGEpXG4gICAgICAgIC8vc3RvY2tzLmNvbmNhdChzdG9ja19kYXRhKTtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdG9ja3M6IHN0b2Nrc1xuICAgICAgICB9KVxuICAgICAgICAvL3htbGh0dHByZXF1ZXN0KClcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgICAgIGxldCBzdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2Nrc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcGlEQlwiPlxuICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSByZWY9XCJzdG9ja0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInN5bWJvbFwiIHBsYWNlaG9sZGVyPVwic3ltYm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm1hcmtldGNhcFwiIHBsYWNlaG9sZGVyPVwibWFya2V0Y2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZGVidFwiIHBsYWNlaG9sZGVyPVwiZGVidFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImdyb3d0aFwiIHBsYWNlaG9sZGVyPVwiZ3Jvd3RoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFN0b2NrLmJpbmQodGhpcyl9PiBBZGQgU3RvY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7c3RvY2tzLm1hcChpbmRTdG9ja3MgPT4gPGxpIGtleT17aW5kU3RvY2tzLmlkfT57aW5kU3RvY2tzLnN5bWJvbH0ge2luZFN0b2Nrcy5uYW1lfSB7aW5kU3RvY2tzLnByaWNlfSB7aW5kU3RvY2tzLm1hcmtldGNhcH0ge2luZFN0b2Nrcy5kZWJ0fXtpbmRTdG9ja3MuZ3Jvd3RofSA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnJlbW92ZVN0b2Nrcy5iaW5kKHRoaXMsIGluZFN0b2Nrcy5pZCl9PlJlbW92ZTwvYnV0dG9uPjwvbGk+KX1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaURCOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

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