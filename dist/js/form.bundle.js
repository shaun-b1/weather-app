/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9mb3JtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05hO0FBRWIsU0FBU0EsSUFBSUEsQ0FBQSxFQUFHO0VBQ1osTUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFHM0MsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBRWpDLE1BQU1DLFdBQVcsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ25ESSxXQUFXLENBQUNDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0VBQ3pDRCxXQUFXLENBQUNFLFdBQVcsR0FBRyxlQUFlO0VBRXpDLE1BQU1DLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ25ETyxXQUFXLENBQUNGLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzFDRSxXQUFXLENBQUNGLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO0VBQ3hDRSxXQUFXLENBQUNGLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0VBRTFDLE1BQU1HLE1BQU0sR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQy9DUSxNQUFNLENBQUNGLFdBQVcsR0FBRyxRQUFRO0VBQzdCRSxNQUFNLENBQUNILFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0VBRXJDUCxJQUFJLENBQUNXLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsQ0FBQyxJQUFLO0lBQ25DQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUlDLFFBQVEsQ0FBQ2QsSUFBSSxDQUFDO0VBRXRCLENBQUMsQ0FBQztFQUNGQSxJQUFJLENBQUNXLGdCQUFnQixDQUFDLFVBQVUsRUFBR0MsQ0FBQyxJQUFLO0lBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFFNUIsTUFBTUMsSUFBSSxHQUFHTCxDQUFDLENBQUNNLFFBQVE7SUFDdkIsS0FBSSxNQUFNQyxLQUFLLElBQUlGLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBQztNQUM3QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssQ0FBQztJQUN0QjtFQUNKLENBQUMsQ0FBQztFQUVGaEIsU0FBUyxDQUFDa0IsTUFBTSxDQUFDZixXQUFXLEVBQUVHLFdBQVcsQ0FBQztFQUMxQ1QsSUFBSSxDQUFDcUIsTUFBTSxDQUFDbEIsU0FBUyxFQUFFTyxNQUFNLENBQUM7RUFFOUIsT0FBT1YsSUFBSTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgZm9ybSB9XG5cbmZ1bmN0aW9uIGZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuXG5cbiAgICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpXG5cbiAgICBjb25zdCBzZWFyY2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzZWFyY2hcIilcbiAgICBzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoIEhlcmU6IFwiXG5cbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpXG4gICAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWFyY2hcIilcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic2VhcmNoXCIpXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBuZXcgRm9ybURhdGEoZm9ybSlcblxuICAgIH0pXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdmb3JtZGF0YScsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXQncyB3b3JraW5nIVwiKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBlLmZvcm1EYXRhXG4gICAgICAgIGZvcihjb25zdCB2YWx1ZSBvZiBkYXRhLnZhbHVlcygpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHNlYXJjaERpdi5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0KVxuICAgIGZvcm0uYXBwZW5kKHNlYXJjaERpdiwgYnV0dG9uKVxuXG4gICAgcmV0dXJuIGZvcm1cbn1cblxuLy8gZnVuY3Rpb24gdGVzdEZvcm1EYXRhT2JqZWN0KCkge1xuLy8gICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4vLyAgICAgY29uc29sZS5sb2coZm9ybURhdGEpXG4vLyB9XG4iXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNlYXJjaERpdiIsImNsYXNzTGlzdCIsImFkZCIsInNlYXJjaExhYmVsIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJzZWFyY2hJbnB1dCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZm9ybURhdGEiLCJ2YWx1ZSIsInZhbHVlcyIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=