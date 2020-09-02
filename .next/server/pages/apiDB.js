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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/Derek/Desktop/can-slim3/src/pages/apiDB.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // interface Props {\n//     stockSymbol: any,\n//     URLNameData: any,\n//     URLStockPriceData: any,\n//     URLMarketCapitalizationData: any,\n//     debtRatio: any,\n//     qtrGrowthYOYData: any,\n//     stocks:any\n//   }\n\nclass apiDB extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      title: 'apiDb application',\n      stocks: []\n    };\n  } //Make AJAX calls\n\n\n  componentDidMount() {\n    let that = this;\n    console.log('Component has Mounted');\n    fetch('http://localhost:5000/api/pullfromDBstocks').then(function (response) {\n      response.json().then(function (data) {\n        that.setState({\n          stocks: data\n        });\n      });\n    });\n  }\n\n  removeStocks(id) {\n    var that = this; //this is using stocks from let stocks = this.state.stocks in render()\n\n    let stocks = that.state.stocks;\n    let stock3 = stocks.find(function (stock3) {\n      //by matching them we match the id in which to delete on the button click\n      return stock3.id === id;\n    });\n    var request = new Request('http://localhost:5000/api/removeStock/' + id, {\n      method: 'DELETE'\n    });\n    fetch(request).then(function (response) {\n      stocks.splice(stocks.indexOf(stock3), 1);\n      that.setState({\n        stocks: stocks\n      });\n      response.json().then(function (data) {\n        console.log(that);\n      });\n    });\n  }\n\n  addStock(event) {\n    var that = this;\n    event.preventDefault();\n    console.log('in method');\n    let stock_data = {\n      // id: this.refs.id.value,\n      symbol: this.refs.symbol.value,\n      name: this.refs.name.value,\n      price: this.refs.price.value,\n      marketcap: this.refs.marketcap.value,\n      debt: this.refs.debt.value,\n      growth: this.refs.growth.value\n    };\n    var request = new Request('http://localhost:5000/api/newStock', {\n      method: 'POST',\n      headers: new Headers({\n        'Content-Type': 'application/json'\n      }),\n      body: JSON.stringify(stock_data)\n    });\n    let stocks = that.state.stocks;\n    stocks.push(stock_data); //stocks.concat(stock_data);\n\n    that.setState({\n      stocks: stocks\n    }); //xmlhttprequest()\n\n    fetch(request).then(function (response) {\n      response.json().then(function (data) {});\n    }).catch(function (err) {\n      console.log(err);\n    });\n  }\n\n  render() {\n    let title = this.state.title;\n    let stocks = this.state.stocks;\n    return __jsx(\"div\", {\n      className: \"apiDB\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }\n    }, title), __jsx(\"form\", {\n      ref: \"stockForm\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      ref: \"symbol\",\n      placeholder: \"symbol\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"name\",\n      placeholder: \"name\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"price\",\n      placeholder: \"price\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"marketcap\",\n      placeholder: \"marketcap\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"debt\",\n      placeholder: \"debt\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 21\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"growth\",\n      placeholder: \"growth\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 21\n      }\n    }), __jsx(\"button\", {\n      onClick: this.addStock.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 21\n      }\n    }, \" Add Stock\")), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }\n    }, stocks.map(indStocks => __jsx(\"li\", {\n      key: indStocks.id,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 46\n      }\n    }, indStocks.symbol, \" \", indStocks.name, \" \", indStocks.price, \" \", indStocks.marketcap, \" \", indStocks.debt, indStocks.growth, \" \", __jsx(\"button\", {\n      onClick: this.removeStocks.bind(this, indStocks.id),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 180\n      }\n    }, \"Remove\")))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpREIudHN4PzI5MDEiXSwibmFtZXMiOlsiYXBpREIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0aXRsZSIsInN0b2NrcyIsImNvbXBvbmVudERpZE1vdW50IiwidGhhdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0U3RhdGUiLCJyZW1vdmVTdG9ja3MiLCJpZCIsInN0b2NrMyIsImZpbmQiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsInNwbGljZSIsImluZGV4T2YiLCJhZGRTdG9jayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9ja19kYXRhIiwic3ltYm9sIiwicmVmcyIsInZhbHVlIiwibmFtZSIsInByaWNlIiwibWFya2V0Y2FwIiwiZGVidCIsImdyb3d0aCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJyZW5kZXIiLCJiaW5kIiwibWFwIiwiaW5kU3RvY2tzIl0sIm1hcHBpbmdzIjoiOzs7OztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBdUM7QUFJbkNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFhO0FBQ3BCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLG1CQURFO0FBRVRDLFlBQU0sRUFBRTtBQUZDLEtBQWI7QUFLSCxHQVhrQyxDQVluQzs7O0FBQ0FDLG1CQUFpQixHQUFHO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FDLFNBQUssQ0FBQyw0Q0FBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFTQyxRQUFU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UUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBKLEVBUUk7QUFBUSxhQUFPLEVBQUUsS0FBS3FCLFFBQUwsQ0FBY3FCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSixDQUZKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLekMsTUFBTSxDQUFDMEMsR0FBUCxDQUFXQyxTQUFTLElBQUk7QUFBSSxTQUFHLEVBQUVBLFNBQVMsQ0FBQy9CLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0IrQixTQUFTLENBQUNuQixNQUFsQyxPQUEyQ21CLFNBQVMsQ0FBQ2hCLElBQXJELE9BQTREZ0IsU0FBUyxDQUFDZixLQUF0RSxPQUE4RWUsU0FBUyxDQUFDZCxTQUF4RixPQUFvR2MsU0FBUyxDQUFDYixJQUE5RyxFQUFvSGEsU0FBUyxDQUFDWixNQUE5SCxPQUFzSTtBQUFRLGFBQU8sRUFBRyxLQUFLcEIsWUFBTCxDQUFrQjhCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCRSxTQUFTLENBQUMvQixFQUF2QyxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF0SSxDQUF4QixDQURMLENBWkosQ0FESjtBQW1CSDs7QUFsSGtDOztBQXFIeEJsQixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGlEQi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgICAgc3RvY2tTeW1ib2w6IGFueSxcbi8vICAgICBVUkxOYW1lRGF0YTogYW55LFxuLy8gICAgIFVSTFN0b2NrUHJpY2VEYXRhOiBhbnksXG4vLyAgICAgVVJMTWFya2V0Q2FwaXRhbGl6YXRpb25EYXRhOiBhbnksXG4vLyAgICAgZGVidFJhdGlvOiBhbnksXG4vLyAgICAgcXRyR3Jvd3RoWU9ZRGF0YTogYW55LFxuLy8gICAgIHN0b2Nrczphbnlcbi8vICAgfVxuXG5cbmNsYXNzIGFwaURCIGV4dGVuZHMgQ29tcG9uZW50PGFueSxhbnk+IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ2FwaURiIGFwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgIHN0b2NrczogW11cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vTWFrZSBBSkFYIGNhbGxzXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCBoYXMgTW91bnRlZCcpXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3B1bGxmcm9tREJzdG9ja3MnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrczogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZVN0b2NrcyhpZCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIC8vdGhpcyBpcyB1c2luZyBzdG9ja3MgZnJvbSBsZXQgc3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3MgaW4gcmVuZGVyKClcbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoYXQuc3RhdGUuc3RvY2tzO1xuICAgICAgICBsZXQgc3RvY2szID0gc3RvY2tzLmZpbmQoZnVuY3Rpb24oc3RvY2szKSB7XG4gICAgICAgICAgICAvL2J5IG1hdGNoaW5nIHRoZW0gd2UgbWF0Y2ggdGhlIGlkIGluIHdoaWNoIHRvIGRlbGV0ZSBvbiB0aGUgYnV0dG9uIGNsaWNrXG4gICAgICAgICAgICByZXR1cm4gc3RvY2szLmlkID09PSBpZFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9yZW1vdmVTdG9jay8nKyBpZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICB9KTtcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RvY2tzLnNwbGljZShzdG9ja3MuaW5kZXhPZihzdG9jazMpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGFkZFN0b2NrKGV2ZW50KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG1ldGhvZCcpXG4gICAgICAgIGxldCBzdG9ja19kYXRhID0ge1xuICAgICAgICAgICAvLyBpZDogdGhpcy5yZWZzLmlkLnZhbHVlLFxuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnJlZnMuc3ltYm9sLnZhbHVlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5yZWZzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5yZWZzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgbWFya2V0Y2FwOiB0aGlzLnJlZnMubWFya2V0Y2FwLnZhbHVlLFxuICAgICAgICAgICAgZGVidDogdGhpcy5yZWZzLmRlYnQudmFsdWUsXG4gICAgICAgICAgICBncm93dGg6IHRoaXMucmVmcy5ncm93dGgudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9uZXdTdG9jaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvY2tfZGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHN0b2NrcyA9IHRoYXQuc3RhdGUuc3RvY2tzO1xuICAgICAgICBzdG9ja3MucHVzaChzdG9ja19kYXRhKVxuICAgICAgICAvL3N0b2Nrcy5jb25jYXQoc3RvY2tfZGF0YSk7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgfSlcbiAgICAgICAgLy94bWxodHRwcmVxdWVzdCgpXG4gICAgICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICBsZXQgc3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3NcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBpREJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gcmVmPVwic3RvY2tGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJzeW1ib2xcIiBwbGFjZWhvbGRlcj1cInN5bWJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwicHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJtYXJrZXRjYXBcIiBwbGFjZWhvbGRlcj1cIm1hcmtldGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImRlYnRcIiBwbGFjZWhvbGRlcj1cImRlYnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJncm93dGhcIiBwbGFjZWhvbGRlcj1cImdyb3d0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRTdG9jay5iaW5kKHRoaXMpfT4gQWRkIFN0b2NrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3N0b2Nrcy5tYXAoaW5kU3RvY2tzID0+IDxsaSBrZXk9e2luZFN0b2Nrcy5pZH0+e2luZFN0b2Nrcy5zeW1ib2x9IHtpbmRTdG9ja3MubmFtZX0ge2luZFN0b2Nrcy5wcmljZX0ge2luZFN0b2Nrcy5tYXJrZXRjYXB9IHtpbmRTdG9ja3MuZGVidH17aW5kU3RvY2tzLmdyb3d0aH0gPGJ1dHRvbiBvbkNsaWNrPSB7dGhpcy5yZW1vdmVTdG9ja3MuYmluZCh0aGlzLCBpbmRTdG9ja3MuaWQpfT5SZW1vdmU8L2J1dHRvbj48L2xpPil9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlEQjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/apiDB.tsx\n");

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