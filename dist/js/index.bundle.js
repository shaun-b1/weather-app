/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ "./js/weatherAPI.js");


function form() {
  const form = document.createElement("form");
  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search");
  const searchLabel = document.createElement("label");
  searchLabel.setAttribute("for", "search");
  searchLabel.textContent = "Search Here: ";
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("name", "search");
  const button = document.createElement("button");
  button.textContent = "Search";
  button.setAttribute("type", "submit");
  form.addEventListener('submit', _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.queryWeatherAPI);
  searchDiv.append(searchLabel, searchInput);
  form.append(searchDiv, button);
  return form;
}

// function testFormDataObject() {
//     const formData = new FormData(form)
//     console.log(formData)
// }

/***/ }),

/***/ "./js/weatherAPI.js":
/*!**************************!*\
  !*** ./js/weatherAPI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryWeatherAPI: () => (/* binding */ queryWeatherAPI)
/* harmony export */ });
async function queryWeatherAPI(e) {
  const searchInput = document.getElementById('search');
  e.preventDefault();
  const searchQuery = searchInput.value;
  const apiKey = 'fb9920be55e14572b69130147232506';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('An error has occurred: ', error);
  }
}

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
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./js/form.js");

document.body.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.form)());

// const img = document.createElement('img')
// document.body.appendChild(img)

// async function getCats() {
//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZqIKvv15hAXZjKYwJy5fraKl9gQhT0DF&s=cats', {mode: 'cors'})
//   const catData = await response.json()
//   img.src = catData.data.images.original.url
// }

// getCats()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvd2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeVdlYXRoZXJBUEkgfSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XG5leHBvcnQgeyBmb3JtIH07XG5cbmZ1bmN0aW9uIGZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hEaXYuY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTtcblxuICBjb25zdCBzZWFyY2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgc2VhcmNoTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2VhcmNoXCIpO1xuICBzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoIEhlcmU6IFwiO1xuXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlYXJjaFwiKTtcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInNlYXJjaFwiKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHF1ZXJ5V2VhdGhlckFQSSlcblxuICBzZWFyY2hEaXYuYXBwZW5kKHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCk7XG4gIGZvcm0uYXBwZW5kKHNlYXJjaERpdiwgYnV0dG9uKTtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuLy8gZnVuY3Rpb24gdGVzdEZvcm1EYXRhT2JqZWN0KCkge1xuLy8gICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4vLyAgICAgY29uc29sZS5sb2coZm9ybURhdGEpXG4vLyB9XG4iLCJleHBvcnQgXG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5V2VhdGhlckFQSShlKSB7XG5cbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlXG4gICAgY29uc3QgYXBpS2V5ID0gJ2ZiOTkyMGJlNTVlMTQ1NzJiNjkxMzAxNDcyMzI1MDYnXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke3NlYXJjaFF1ZXJ5fWBcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQ6ICcsIGVycm9yKVxuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0oKSk7XG5cbi8vIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZylcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0cygpIHtcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9WnFJS3Z2MTVoQVhaaktZd0p5NWZyYUtsOWdRaFQwREYmcz1jYXRzJywge21vZGU6ICdjb3JzJ30pXG4vLyAgIGNvbnN0IGNhdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbi8vICAgaW1nLnNyYyA9IGNhdERhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsXG4vLyB9XG5cbi8vIGdldENhdHMoKVxuIl0sIm5hbWVzIjpbInF1ZXJ5V2VhdGhlckFQSSIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZWFyY2hEaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWFyY2hMYWJlbCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50Iiwic2VhcmNoSW5wdXQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kIiwiZSIsImdldEVsZW1lbnRCeUlkIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwiYXBpS2V5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYm9keSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==