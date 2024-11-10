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
  var $workGrid = $('.work-grid');
  var $workLoader = $('.work-loader');
  var $mail = $('.mail');

  // Work preload

  setTimeout(function () {
    $workLoader.addClass('done');
    $workGrid.addClass('ready');
  }, 1700);

  // Smooth Scroll

  $(document).on('click', 'a[href^="#"]:not(.mail)', function (event) {
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

  // Contact

  $mail.on('click', function () {
    // Get the text field
    var $mailCopy = $mail.find('em').html();
    var $mailCopyIcon = $mail.find('.icon-copy');
    var $mailCopyOutput = $('.mail-output');

    // Copy the text inside the text field
    navigator.clipboard.writeText($mailCopy);
    $mailCopyOutput.addClass('succes');
    $(this).addClass('done');
  });
});

/***/ }),

/***/ "./src/js/components/polit-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/components/polit-swiper.js ***!
  \*******************************************/
/***/ (function() {

var swiper = new Swiper(".swiper", {
  speed: 1600,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 3,
  grabCursor: true,
  autoplay: {
    delay: 3500,
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
    1400: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7SUFDbEI7RUFDSixDQUFDO0VBQ0RRLFVBQVUsRUFBRTtJQUNSQyxFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsU0FBUyxFQUFFO0VBQ2Y7QUFDSixDQUFDLENBQUM7Ozs7OztVQ25DRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFiaXUvLi9zcmMvanMvY29tcG9uZW50cy9wb2xpdC1tYWluLmpzIiwid2VicGFjazovL25hYml1Ly4vc3JjL2pzL2NvbXBvbmVudHMvcG9saXQtc3dpcGVyLmpzIiwid2VicGFjazovL25hYml1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uYWJpdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25hYml1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmFiaXUvLi9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbFxuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvLyBHbG9iYWwgY29uc3RhbnRcblxuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGNvbnN0ICRuYXZMaW5rcyA9ICQoJy5zaXRlLW1lbnUnKS5maW5kKCdsaScpO1xuICAgIGNvbnN0ICRuYXZMaW5rVG9wID0gJCgnLnRvdG9wJyk7XG4gICAgY29uc3QgJGpvYkNvbnRyb2wgPSAkKCcuam9iLWNvbnRyb2wnKTtcbiAgICBjb25zdCAkam9iVGFibGUgPSAkKCcuam9iLXRhYmxlJyk7XG5cbiAgICBjb25zdCAkd29ya0dyaWQgID0gJCgnLndvcmstZ3JpZCcpO1xuICAgIGNvbnN0ICR3b3JrTG9hZGVyID0gJCgnLndvcmstbG9hZGVyJyk7XG5cbiAgICBjb25zdCAkbWFpbCA9ICQoJy5tYWlsJyk7XG5cbiAgICAvLyBXb3JrIHByZWxvYWRcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICR3b3JrTG9hZGVyLmFkZENsYXNzKCdkb25lJylcbiAgICAgICAgJHdvcmtHcmlkLmFkZENsYXNzKCdyZWFkeScpO1xuICAgIH0sIDE3MDApO1xuXG4gICAgLy8gU21vb3RoIFNjcm9sbFxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbaHJlZl49XCIjXCJdOm5vdCgubWFpbCknLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wfSwgMTAwMCwgJ2Vhc2VPdXRFeHBvJyk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWdobGlnaHQgTWVudVxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICRwb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAkKCcuYW5jaG9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AtMTAwO1xuICAgICAgICAgICAgY29uc3QgJGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgaWYgKCRwb3NpdGlvbiA+PSAkdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgJG5hdkxpbmtzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuc2l0ZS1tZW51IGxpIGFbaHJlZj1cIiMnICsgJGlkICsgJ1wiXScpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoJHBvc2l0aW9uID09PSAwKXtcbiAgICAgICAgICAgICAgICAkbmF2TGlua3MucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICRuYXZMaW5rVG9wLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJG5hdkxpbmtzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuXG5cbiAgICAvLyBKb2IgVGFibGVcbiAgICAkam9iQ29udHJvbC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkam9iVGFibGUudG9nZ2xlQ2xhc3MoJ2V4cGFuZCcpO1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgLy8gQ29udGFjdFxuXG4gICAgJG1haWwub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAvLyBHZXQgdGhlIHRleHQgZmllbGRcbiAgICAgICAgdmFyICRtYWlsQ29weSA9ICRtYWlsLmZpbmQoJ2VtJykuaHRtbCgpO1xuICAgICAgICB2YXIgJG1haWxDb3B5SWNvbiA9ICRtYWlsLmZpbmQoJy5pY29uLWNvcHknKTtcbiAgICAgICAgdmFyICRtYWlsQ29weU91dHB1dCA9ICQoJy5tYWlsLW91dHB1dCcpO1xuXG4gICAgICAgIC8vIENvcHkgdGhlIHRleHQgaW5zaWRlIHRoZSB0ZXh0IGZpZWxkXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCRtYWlsQ29weSk7XG5cbiAgICAgICAgJG1haWxDb3B5T3V0cHV0LmFkZENsYXNzKCdzdWNjZXMnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZG9uZScpO1xuICAgIH0pO1xufSk7IiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyXCIsIHtcbiAgICBzcGVlZCA6IDE2MDAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgaW5pdGlhbFNsaWRlOiAzLFxuICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDY0MDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gOTAwOiB7XG4gICAgICAgIC8vICAgICBzbGlkZXNQZXJWaWV3OiAzLjUsXG4gICAgICAgIC8vICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICAvLyB9LFxuICAgICAgICAxNDAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LjUsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICB9LFxuICAgICAgICAxODAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jb21wb25lbnRzL3BvbGl0LW1haW4nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcG9saXQtc3dpcGVyJztcbiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsIiRib2R5IiwiJG5hdkxpbmtzIiwiZmluZCIsIiRuYXZMaW5rVG9wIiwiJGpvYkNvbnRyb2wiLCIkam9iVGFibGUiLCIkd29ya0dyaWQiLCIkd29ya0xvYWRlciIsIiRtYWlsIiwic2V0VGltZW91dCIsImFkZENsYXNzIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImF0dHIiLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGwiLCIkcG9zaXRpb24iLCJwYWdlWU9mZnNldCIsImVhY2giLCIkdGFyZ2V0IiwiJGlkIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyIsIiRtYWlsQ29weSIsImh0bWwiLCIkbWFpbENvcHlJY29uIiwiJG1haWxDb3B5T3V0cHV0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImNlbnRlcmVkU2xpZGVzIiwiaW5pdGlhbFNsaWRlIiwiZ3JhYkN1cnNvciIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImJyZWFrcG9pbnRzIiwicGFnaW5hdGlvbiIsImVsIiwiZHluYW1pY0J1bGxldHMiLCJjbGlja2FibGUiXSwic291cmNlUm9vdCI6IiJ9