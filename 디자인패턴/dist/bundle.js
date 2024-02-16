/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

// Aggregator 인터페이스 구현체
var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.getListIterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Item 의 검색을 수행하는 클래스
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");


var item = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠쿠다스", 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 2000),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("뺴뺴로", 1500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 1000),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("오예스", 4500),
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](item);
var list = array.getListIterator();
var renderHTML = function (iter) {
    while (iter.next()) {
        var item_1 = iter.current();
        var domItem = document.createElement("div");
        domItem.innerText = "".concat(item_1.name, " : ").concat(item_1.cost);
        document.body.appendChild(domItem);
        domItem.classList.add("iterator-item");
    }
};
renderHTML(list);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFHLE1BQUksQ0FBQyxJQUFJLGdCQUFNLE1BQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQztBQUVGLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbl9wYXR0ZXJucy8uL3NyYy9pdGVyYXRvci9BcnJheS50cyIsIndlYnBhY2s6Ly9kZXNpZ25fcGF0dGVybnMvLi9zcmMvaXRlcmF0b3IvQXJyYXlJdGVyYXRvci50cyIsIndlYnBhY2s6Ly9kZXNpZ25fcGF0dGVybnMvLi9zcmMvaXRlcmF0b3IvSXRlbS50cyIsIndlYnBhY2s6Ly9kZXNpZ25fcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduX3BhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25fcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ25fcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ25fcGF0dGVybnMvLi9zcmMvaXRlcmF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFnZ3JlZ2F0b3IgZnJvbSBcIi4vQWdncmVnYXRvclwiO1xuaW1wb3J0IEFycmF5SXRlcmF0b3IgZnJvbSBcIi4vQXJyYXlJdGVyYXRvclwiO1xuaW1wb3J0IEl0ZXJhdG9yIGZyb20gXCIuL0l0ZXJhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbi8vIEFnZ3JlZ2F0b3Ig7J247YSw7Y6Y7J207IqkIOq1rO2YhOyytFxuXG5jbGFzcyBBcnJheSBpbXBsZW1lbnRzIEFnZ3JlZ2F0b3I8SXRlbT4ge1xuICBwcml2YXRlIGl0ZW1zOiBJdGVtW107XG5cbiAgY29uc3RydWN0b3IoaXRlbXM6IEl0ZW1bXSkge1xuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGdldExpc3RJdGVyYXRvcigpOiBJdGVyYXRvcjxJdGVtPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5O1xuIiwiaW1wb3J0IEFycmF5IGZyb20gXCIuL0FycmF5XCI7XG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vSXRlcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuLy8gSXRlbSDsnZgg6rKA7IOJ7J2EIOyImO2Wie2VmOuKlCDtgbTrnpjsiqRcblxuY2xhc3MgQXJyYXlJdGVyYXRvciBpbXBsZW1lbnRzIEl0ZXJhdG9yPEl0ZW0+IHtcbiAgcHJpdmF0ZSBhcnJheTogQXJyYXk7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5pbmRleCA9IC0xO1xuICB9XG5cbiAgbmV4dCgpOiBib29sZWFuIHtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLmFycmF5LmNvdW50O1xuICB9XG4gIGN1cnJlbnQoKTogSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZ2V0SXRlbSh0aGlzLmluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUl0ZXJhdG9yO1xuIiwiY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfY29zdDogbnVtYmVyKSB7fVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGNvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFycmF5IGZyb20gXCIuL0FycmF5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vSXRlcmF0b3JcIjtcblxuY29uc3QgaXRlbSA9IFtcbiAgbmV3IEl0ZW0oXCLsv6Dsv6Dri6TsiqRcIiwgMjUwMCksXG4gIG5ldyBJdGVtKFwi7IOI7Jqw6rmhXCIsIDIwMDApLFxuICBuZXcgSXRlbShcIuu6tOu6tOuhnFwiLCAxNTAwKSxcbiAgbmV3IEl0ZW0oXCLstIjsvZTtjIzsnbRcIiwgMTAwMCksXG4gIG5ldyBJdGVtKFwi7Jik7JiI7IqkXCIsIDQ1MDApLFxuXTtcblxuY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoaXRlbSk7XG5jb25zdCBsaXN0ID0gYXJyYXkuZ2V0TGlzdEl0ZXJhdG9yKCk7XG5cbmNvbnN0IHJlbmRlckhUTUwgPSAoaXRlcjogSXRlcmF0b3I8SXRlbT4pID0+IHtcbiAgd2hpbGUgKGl0ZXIubmV4dCgpKSB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZXIuY3VycmVudCgpO1xuXG4gICAgY29uc3QgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tSXRlbS5pbm5lclRleHQgPSBgJHtpdGVtLm5hbWV9IDogJHtpdGVtLmNvc3R9YDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUl0ZW0pO1xuXG4gICAgZG9tSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlcmF0b3ItaXRlbVwiKTtcbiAgfVxufTtcblxucmVuZGVySFRNTChsaXN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==