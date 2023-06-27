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

function form() {
  const form = document.createElement('form');
  const searchDiv = document.createElement('div');
  searchDiv.classList.add("search");
  const searchLabel = document.createElement('label');
  searchLabel.setAttribute("for", "search");
  searchLabel.textContent = "Search Here: ";
  const searchInput = document.createElement('input');
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("name", "search");
  const button = document.createElement('button');
  button.textContent = "Search";
  button.setAttribute('type', 'submit');
  form.addEventListener('submit', e => {
    e.preventDefault();
    new FormData(form);
  });
  form.addEventListener('formdata', e => {
    console.log("it's working!");
    const data = e.formData;
    for (const value of data.values()) {
      console.log(value);
    }
  });
  searchDiv.append(searchLabel, searchInput);
  form.append(searchDiv, button);
  return form;
}

// function testFormDataObject() {
//     const formData = new FormData(form)
//     console.log(formData)
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUViLFNBQVNBLElBQUlBLENBQUEsRUFBRztFQUNaLE1BQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBRzNDLE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUVqQyxNQUFNQyxXQUFXLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNuREksV0FBVyxDQUFDQyxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztFQUN6Q0QsV0FBVyxDQUFDRSxXQUFXLEdBQUcsZUFBZTtFQUV6QyxNQUFNQyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNuRE8sV0FBVyxDQUFDRixZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztFQUMxQ0UsV0FBVyxDQUFDRixZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztFQUN4Q0UsV0FBVyxDQUFDRixZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztFQUUxQyxNQUFNRyxNQUFNLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQ1EsTUFBTSxDQUFDRixXQUFXLEdBQUcsUUFBUTtFQUM3QkUsTUFBTSxDQUFDSCxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztFQUVyQ1AsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUdDLENBQUMsSUFBSztJQUNuQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFJQyxRQUFRLENBQUNkLElBQUksQ0FBQztFQUV0QixDQUFDLENBQUM7RUFDRkEsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUdDLENBQUMsSUFBSztJQUNyQ0csT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBRTVCLE1BQU1DLElBQUksR0FBR0wsQ0FBQyxDQUFDTSxRQUFRO0lBQ3ZCLEtBQUksTUFBTUMsS0FBSyxJQUFJRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUM7TUFDN0JMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxLQUFLLENBQUM7SUFDdEI7RUFDSixDQUFDLENBQUM7RUFFRmhCLFNBQVMsQ0FBQ2tCLE1BQU0sQ0FBQ2YsV0FBVyxFQUFFRyxXQUFXLENBQUM7RUFDMUNULElBQUksQ0FBQ3FCLE1BQU0sQ0FBQ2xCLFNBQVMsRUFBRU8sTUFBTSxDQUFDO0VBRTlCLE9BQU9WLElBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFFOUJDLFFBQVEsQ0FBQ3FCLElBQUksQ0FBQ0MsV0FBVyxDQUFDdkIsMkNBQUksQ0FBQyxDQUFDLENBQUM7O0FBR2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBmb3JtIH1cblxuZnVuY3Rpb24gZm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cblxuICAgIGNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2VhcmNoRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIilcblxuICAgIGNvbnN0IHNlYXJjaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHNlYXJjaExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNlYXJjaFwiKVxuICAgIHNlYXJjaExhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2ggSGVyZTogXCJcblxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzZWFyY2hcIilcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlYXJjaFwiKVxuICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzZWFyY2hcIilcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIlxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG5ldyBGb3JtRGF0YShmb3JtKVxuXG4gICAgfSlcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2Zvcm1kYXRhJywgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdCdzIHdvcmtpbmchXCIpXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGUuZm9ybURhdGFcbiAgICAgICAgZm9yKGNvbnN0IHZhbHVlIG9mIGRhdGEudmFsdWVzKCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc2VhcmNoRGl2LmFwcGVuZChzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQpXG4gICAgZm9ybS5hcHBlbmQoc2VhcmNoRGl2LCBidXR0b24pXG5cbiAgICByZXR1cm4gZm9ybVxufVxuXG4vLyBmdW5jdGlvbiB0ZXN0Rm9ybURhdGFPYmplY3QoKSB7XG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbi8vICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcbi8vIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKCkpXG5cblxuLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRDYXRzKCkgeyBcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9WnFJS3Z2MTVoQVhaaktZd0p5NWZyYUtsOWdRaFQwREYmcz1jYXRzJywge21vZGU6ICdjb3JzJ30pXG4vLyAgIGNvbnN0IGNhdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbi8vICAgaW1nLnNyYyA9IGNhdERhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsXG4vLyB9XG5cbi8vIGdldENhdHMoKVxuIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZWFyY2hEaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWFyY2hMYWJlbCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50Iiwic2VhcmNoSW5wdXQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZvcm1EYXRhIiwidmFsdWUiLCJ2YWx1ZXMiLCJhcHBlbmQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9