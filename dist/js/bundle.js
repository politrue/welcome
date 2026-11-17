/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/polit-main.js":
/*!*****************************************!*\
  !*** ./src/js/components/polit-main.js ***!
  \*****************************************/
/***/ (function() {

// Global
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  var body = document.body;
  var header = document.querySelector('#header');
  var footer = document.querySelector('#colophon');
  var main = document.querySelector('#primary');
  var toggleNavigation = document.querySelector('#toggleNavigation');
  var siteNavigation = document.querySelector('#siteNavigation');

  //// Menu

  function closeNavigation() {
    siteNavigation.classList.remove('toggled');
    body.classList.remove('overflow');
    toggleNavigation.setAttribute('aria-expanded', 'false');
  }
  function openNavigation() {
    siteNavigation.classList.add('toggled');
    body.classList.add('overflow');
    toggleNavigation.setAttribute('aria-expanded', 'true');
  }
  function toggleMenu() {
    var expanded = siteNavigation.classList.contains('toggled');
    if (expanded) {
      closeNavigation();
    } else {
      openNavigation();
    }
  }

  // Clic sobre el botón
  toggleNavigation.addEventListener('click', toggleMenu);

  // // Soporte teclado (solo si NO es un button)
  // toggleNavigation.addEventListener('keydown', function (e) {
  //     if (e.key === 'Enter' || e.key === ' ') {
  //         e.preventDefault();
  //         toggleMenu();
  //     }
  // });

  // Cerrar al pulsar un enlace del menú
  siteNavigation.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      closeNavigation();
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && siteNavigation.classList.contains('toggled')) {
      closeNavigation();
      toggleNavigation.focus();
    }
  });

  //// Scroll
  window.addEventListener('scroll', function () {
    // Sticky header
    var fireSticky = 50;
    if (window.scrollY > fireSticky) {} else {
      header.classList.remove('up');
    }
  });

  //// Hiding - Showing NavBar

  var yprev = window.pageYOffset;
  console.log(window.scrollY);

  // Inside our throttle() function, we call the event handler only
  // if it hasn’t been called during the last 250 milliseconds.

  var throttle = function throttle(callback, timeout) {
    var wait = false;
    return function () {
      if (wait) return;
      callback.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, timeout);
    };
  };
  var handler = function handler() {
    var y = window.pageYOffset;
    if (y < 100) {
      header.classList.remove('up');
      body.classList.remove('going-up');
      yprev = y;
      return;
    }
    var ymax = document.documentElement.scrollHeight - window.innerHeight;
    if (y > yprev) {
      header.classList.add('up');
      body.classList.remove('going-up');
    } else if (y < yprev) {
      header.classList.remove('up');
      body.classList.add('going-up');
    }
    yprev = Math.min(Math.max(y, 0), ymax);
  };
  window.addEventListener('scroll', throttle(handler, 250));

  //// Smooth Scroll on Anchor
  document.addEventListener('click', function (e) {
    var _document$querySelect;
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    // Excepciones
    if (link.matches('.class')) {
      return;
    }
    e.preventDefault();
    var target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    // Offset dinámico
    var offset = ((_document$querySelect = document.querySelector('.site-header')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.offsetHeight) || 250;
    var top = target.getBoundingClientRect().top + window.scrollY - offset;
    console.log('offset usado:', offset);
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function() { return module['default']; } :
/******/ 			function() { return module; };
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
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

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFHTixDQUFDLENBQUMsQzs7Ozs7O1VDekpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUM1QkE7VUFDQTtVQUNBO1VBQ0EsZUFBZSw0QkFBNEI7VUFDM0MsZUFBZTtVQUNmLGlDQUFpQyxXQUFXO1VBQzVDO1VBQ0EsRTs7O1VDUEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQSxFOzs7VUNQQSw4Q0FBOEMsMEQ7OztVQ0E5QztVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0QsRSIsInNvdXJjZXMiOlsid2VicGFjazovL25hYml1Ly4vc3JjL2pzL2NvbXBvbmVudHMvcG9saXQtbWFpbi5qcyIsIndlYnBhY2s6Ly9uYWJpdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uYWJpdS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uYWJpdS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmFiaXUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uYWJpdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25hYml1Ly4vc3JjL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWxcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIC8vIEVsZW1lbnRzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcGhvbicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbWFyeScpO1xuICAgIGNvbnN0IHRvZ2dsZU5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlTmF2aWdhdGlvbicpO1xuICAgIGNvbnN0IHNpdGVOYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpdGVOYXZpZ2F0aW9uJyk7XG5cblxuICAgIC8vLy8gTWVudVxuXG4gICAgZnVuY3Rpb24gY2xvc2VOYXZpZ2F0aW9uKCkge1xuICAgICAgICBzaXRlTmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuTmF2aWdhdGlvbigpIHtcbiAgICAgICAgc2l0ZU5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XG4gICAgICAgIHRvZ2dsZU5hdmlnYXRpb24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IHNpdGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpO1xuXG4gICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgY2xvc2VOYXZpZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcGVuTmF2aWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xpYyBzb2JyZSBlbCBib3TDs25cbiAgICB0b2dnbGVOYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XG5cbiAgICAvLyAvLyBTb3BvcnRlIHRlY2xhZG8gKHNvbG8gc2kgTk8gZXMgdW4gYnV0dG9uKVxuICAgIC8vIHRvZ2dsZU5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7XG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcblxuICAgIC8vIENlcnJhciBhbCBwdWxzYXIgdW4gZW5sYWNlIGRlbCBtZW7DulxuICAgIHNpdGVOYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKSkge1xuICAgICAgICAgICAgY2xvc2VOYXZpZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENlcnJhciBjb24gRXNjYXBlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgc2l0ZU5hdmlnYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJykpIHtcbiAgICAgICAgICAgIGNsb3NlTmF2aWdhdGlvbigpO1xuICAgICAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbi5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLy8vIFNjcm9sbFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gU3RpY2t5IGhlYWRlclxuICAgICAgICBjb25zdCBmaXJlU3RpY2t5ID0gNTA7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGZpcmVTdGlja3kpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCd1cCcpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy8vLyBIaWRpbmcgLSBTaG93aW5nIE5hdkJhclxuXG4gICAgbGV0IHlwcmV2ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcblxuICAgIC8vIEluc2lkZSBvdXIgdGhyb3R0bGUoKSBmdW5jdGlvbiwgd2UgY2FsbCB0aGUgZXZlbnQgaGFuZGxlciBvbmx5XG4gICAgLy8gaWYgaXQgaGFzbuKAmXQgYmVlbiBjYWxsZWQgZHVyaW5nIHRoZSBsYXN0IDI1MCBtaWxsaXNlY29uZHMuXG5cbiAgICBjb25zdCB0aHJvdHRsZSA9IChjYWxsYmFjaywgdGltZW91dCkgPT4ge1xuICAgICAgICBsZXQgd2FpdCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2FpdCkgcmV0dXJuO1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgd2FpdCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgd2FpdCA9IGZhbHNlOyB9LCB0aW1lb3V0KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgICAgICBpZiAoeSA8IDEwMCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3VwJyk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2dvaW5nLXVwJyk7XG4gICAgICAgICAgICB5cHJldiA9IHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5bWF4ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHkgPiB5cHJldikge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3VwJyk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2dvaW5nLXVwJylcbiAgICAgICAgfVxuXG4gICAgZWxzZSBpZiAoeSA8IHlwcmV2KSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZ29pbmctdXAnKVxuICAgICAgICB9XG5cbiAgICAgICAgeXByZXYgPSBNYXRoLm1pbihNYXRoLm1heCh5LCAwKSwgeW1heCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZShoYW5kbGVyLCAyNTApKTtcblxuXG4gICAgLy8vLyBTbW9vdGggU2Nyb2xsIG9uIEFuY2hvclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2FbaHJlZl49XCIjXCJdJyk7XG4gICAgICAgIGlmICghbGluaykgcmV0dXJuO1xuXG4gICAgICAgIC8vIEV4Y2VwY2lvbmVzXG4gICAgICAgIGlmIChsaW5rLm1hdGNoZXMoJy5jbGFzcycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgICAgICAvLyBPZmZzZXQgZGluw6FtaWNvXG4gICAgICAgIGxldCBvZmZzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKT8ub2Zmc2V0SGVpZ2h0IHx8IDI1MDtcblxuXG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIG9mZnNldDtcblxuICAgICAgICBjb25zb2xlLmxvZygnb2Zmc2V0IHVzYWRvOicsIG9mZnNldCk7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wb2xpdC1tYWluJztcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiaGVhZGVyIiwicXVlcnlTZWxlY3RvciIsImZvb3RlciIsIm1haW4iLCJ0b2dnbGVOYXZpZ2F0aW9uIiwic2l0ZU5hdmlnYXRpb24iLCJjbG9zZU5hdmlnYXRpb24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJvcGVuTmF2aWdhdGlvbiIsImFkZCIsInRvZ2dsZU1lbnUiLCJleHBhbmRlZCIsImNvbnRhaW5zIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJrZXkiLCJmb2N1cyIsIndpbmRvdyIsImZpcmVTdGlja3kiLCJzY3JvbGxZIiwieXByZXYiLCJwYWdlWU9mZnNldCIsImNvbnNvbGUiLCJsb2ciLCJ0aHJvdHRsZSIsImNhbGxiYWNrIiwidGltZW91dCIsIndhaXQiLCJjYWxsIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJ5IiwieW1heCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiTWF0aCIsIm1pbiIsIm1heCIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsImxpbmsiLCJtYXRjaGVzIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUbyIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==