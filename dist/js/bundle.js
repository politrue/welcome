/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/polit-main.js":
/*!*****************************************!*\
  !*** ./src/js/components/polit-main.js ***!
  \*****************************************/
/***/ (function() {

// Global

jQuery(document).ready(function ($) {
  // Global constant

  var $body = $('body');
  var $navLinks = $('.site-menu').find('li');
  var $navLinkTop = $('.totop');
  var $jobControl = $('.job-control');
  var $jobTable = $('.job-table');

  // Smooth Scroll

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'easeOutExpo');
  });

  // Highlight Menu

  $(window).scroll(function () {
    var $position = window.pageYOffset;
    // console.log(position);
    $('.anchor').each(function () {
      var $target = $(this).offset().top - 100;
      var $id = $(this).attr('id');
      if ($position >= $target) {
        $navLinks.removeClass('active');
        $('.site-menu li a[href="#' + $id + '"]').parent().addClass('active');
      } else if ($position === 0) {
        $navLinks.removeClass('active');
      }
    });
  });
  $navLinkTop.on("click", function () {
    $navLinks.removeClass('active');
  });

  // Job Table
  $jobControl.on('click', function () {
    $jobTable.toggleClass('expand');
    $(this).toggleClass('active');
  });
  console.log('main scripts');
});

/***/ }),

/***/ "./src/js/components/polit-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/components/polit-swiper.js ***!
  \*******************************************/
/***/ (function() {

var swiper = new Swiper(".swiper", {
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    // 900: {
    //     slidesPerView: 3.5,
    //     spaceBetween: 30,
    // },
    1100: {
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  }
});
console.log('swiper');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLElBQUk7SUFDWEMsb0JBQW9CLEVBQUU7RUFDMUIsQ0FBQztFQUNEQyxXQUFXLEVBQUU7SUFDVCxHQUFHLEVBQUU7TUFDRFAsYUFBYSxFQUFFLEdBQUc7TUFDbEJDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLEVBQUU7TUFDRkQsYUFBYSxFQUFFLEdBQUc7TUFDbEJDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0ZELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDO0VBQ0RPLFVBQVUsRUFBRTtJQUNSQyxFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsU0FBUyxFQUFFO0VBQ2Y7QUFDSixDQUFDLENBQUM7QUFFRmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O1VDcENyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFiaXUvLi9zcmMvanMvY29tcG9uZW50cy9wb2xpdC1tYWluLmpzIiwid2VicGFjazovL25hYml1Ly4vc3JjL2pzL2NvbXBvbmVudHMvcG9saXQtc3dpcGVyLmpzIiwid2VicGFjazovL25hYml1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uYWJpdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmFiaXUvLi9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbFxuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvLyBHbG9iYWwgY29uc3RhbnRcblxuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGNvbnN0ICRuYXZMaW5rcyA9ICQoJy5zaXRlLW1lbnUnKS5maW5kKCdsaScpO1xuICAgIGNvbnN0ICRuYXZMaW5rVG9wID0gJCgnLnRvdG9wJyk7XG4gICAgY29uc3QgJGpvYkNvbnRyb2wgPSAkKCcuam9iLWNvbnRyb2wnKTtcbiAgICBjb25zdCAkam9iVGFibGUgPSAkKCcuam9iLXRhYmxlJyk7XG5cbiAgICAvLyBTbW9vdGggU2Nyb2xsXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wfSwgMTAwMCwgJ2Vhc2VPdXRFeHBvJyk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWdobGlnaHQgTWVudVxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICRwb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAkKCcuYW5jaG9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AtMTAwO1xuICAgICAgICAgICAgY29uc3QgJGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgaWYgKCRwb3NpdGlvbiA+PSAkdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgJG5hdkxpbmtzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuc2l0ZS1tZW51IGxpIGFbaHJlZj1cIiMnICsgJGlkICsgJ1wiXScpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoJHBvc2l0aW9uID09PSAwKXtcbiAgICAgICAgICAgICAgICAkbmF2TGlua3MucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICRuYXZMaW5rVG9wLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJG5hdkxpbmtzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgLy8gSm9iIFRhYmxlXG4gICAgJGpvYkNvbnRyb2wub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJGpvYlRhYmxlLnRvZ2dsZUNsYXNzKCdleHBhbmQnKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSlcblxuXG4gICAgY29uc29sZS5sb2coJ21haW4gc2NyaXB0cycpO1xuXG59KTsiLCJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXJcIiwge1xuICAgIHNwZWVkIDogMTAwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICAgIGRlbGF5OiAyNTAwLFxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA2NDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuNSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIDkwMDoge1xuICAgICAgICAvLyAgICAgc2xpZGVzUGVyVmlldzogMy41LFxuICAgICAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgMTEwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNC41LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgfSxcbiAgICAgICAgMTgwMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG59KTtcblxuY29uc29sZS5sb2coJ3N3aXBlcicpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wb2xpdC1tYWluJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3BvbGl0LXN3aXBlcic7XG4iXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCIkYm9keSIsIiRuYXZMaW5rcyIsImZpbmQiLCIkbmF2TGlua1RvcCIsIiRqb2JDb250cm9sIiwiJGpvYlRhYmxlIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImF0dHIiLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGwiLCIkcG9zaXRpb24iLCJwYWdlWU9mZnNldCIsImVhY2giLCIkdGFyZ2V0IiwiJGlkIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJhZGRDbGFzcyIsInRvZ2dsZUNsYXNzIiwiY29uc29sZSIsImxvZyIsInN3aXBlciIsIlN3aXBlciIsInNwZWVkIiwibG9vcCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsImdyYWJDdXJzb3IiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsInBhZ2luYXRpb24iLCJlbCIsImR5bmFtaWNCdWxsZXRzIiwiY2xpY2thYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==