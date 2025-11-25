/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/polit-main.js":
/*!*****************************************!*\
  !*** ./src/js/components/polit-main.js ***!
  \*****************************************/
/***/ (function() {

// Global

window.addEventListener('load', function () {
  var workGrids = document.querySelector('.work-grid');
  var workLoader = document.querySelector('.work-loader');
  var workAbout = document.querySelector('.about');

  // Work preload
  setTimeout(function () {
    workLoader.classList.add('done');
    workGrids.classList.add('ready');
    workAbout.classList.add('ready');
  }, 1700);
});

/***/ }),

/***/ "./src/js/components/polit-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/components/polit-swiper.js ***!
  \*******************************************/
/***/ (function() {

var swiper = new Swiper(".swiper", {
  speed: 800,
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 3,
  grabCursor: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1800: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
  // pagination: {
  //     el: ".swiper-pagination",
  //     dynamicBullets: true,
  //     clickable: true,
  // },
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_polit_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/polit-main */ "./src/js/components/polit-main.js");
/* harmony import */ var _components_polit_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_polit_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_polit_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/polit-swiper */ "./src/js/components/polit-swiper.js");
/* harmony import */ var _components_polit_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_polit_swiper__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ2xDLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQ3RELElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3pELElBQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDOztFQUVsRDtFQUNBRyxVQUFVLENBQUMsWUFBTTtJQUNiRixVQUFVLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNoQ1AsU0FBUyxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDaENILFNBQVMsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDWixDQUFDLENBQUMsQzs7Ozs7Ozs7OztBQ2JGLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsU0FBUyxFQUFFO0VBQy9CQyxLQUFLLEVBQUcsR0FBRztFQUNYQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxhQUFhLEVBQUUsR0FBRztFQUNsQkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxZQUFZLEVBQUUsQ0FBQztFQUNmQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsUUFBUSxFQUFFO0lBQ05DLEtBQUssRUFBRSxJQUFJO0lBQ1hDLG9CQUFvQixFQUFFO0VBQzFCLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1QsR0FBRyxFQUFFO01BQ0RSLGFBQWEsRUFBRSxHQUFHO01BQ2xCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELEdBQUcsRUFBRTtNQUNERCxhQUFhLEVBQUUsR0FBRztNQUNsQkMsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDRkQsYUFBYSxFQUFFLEdBQUc7TUFDbEJDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0ZELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDbEI7RUFDSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSixDQUFDLENBQUMsQzs7Ozs7O1VDbkNGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDhDQUE4Qyx5RDs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYWJpdS8uL3NyYy9qcy9jb21wb25lbnRzL3BvbGl0LW1haW4uanMiLCJ3ZWJwYWNrOi8vbmFiaXUvLi9zcmMvanMvY29tcG9uZW50cy9wb2xpdC1zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vbmFiaXUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFiaXUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmFiaXUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmFiaXUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uYWJpdS8uL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2xvYmFsXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGNvbnN0IHdvcmtHcmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWdyaWQnKTtcbiAgICBjb25zdCB3b3JrTG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstbG9hZGVyJyk7XG4gICAgY29uc3Qgd29ya0Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG5cbiAgICAvLyBXb3JrIHByZWxvYWRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd29ya0xvYWRlci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgIHdvcmtHcmlkcy5jbGFzc0xpc3QuYWRkKCdyZWFkeScpO1xuICAgICAgICB3b3JrQWJvdXQuY2xhc3NMaXN0LmFkZCgncmVhZHknKTtcbiAgICB9LCAxNzAwKTtcbn0pO1xuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyXCIsIHtcbiAgICBzcGVlZCA6IDgwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGluaXRpYWxTbGlkZTogMyxcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICAgIGRlbGF5OiA2MDAwLFxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA2NDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIDkwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMy41LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgfSxcbiAgICAgICAgMTQwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNC41LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgfSxcbiAgICAgICAgMTgwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBwYWdpbmF0aW9uOiB7XG4gICAgLy8gICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIC8vICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICAvLyAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIC8vIH0sXG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wb2xpdC1tYWluJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3BvbGl0LXN3aXBlcic7XG4iXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndvcmtHcmlkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndvcmtMb2FkZXIiLCJ3b3JrQWJvdXQiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImNlbnRlcmVkU2xpZGVzIiwiaW5pdGlhbFNsaWRlIiwiZ3JhYkN1cnNvciIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImJyZWFrcG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==