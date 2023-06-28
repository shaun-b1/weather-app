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
/*!**************************!*\
  !*** ./js/weatherAPI.js ***!
  \**************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy93ZWF0aGVyQVBJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0pBLGVBQWVBLGVBQWVBLENBQUNDLENBQUMsRUFBRTtFQUU5QixNQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUVyREgsQ0FBQyxDQUFDSSxjQUFjLENBQUMsQ0FBQztFQUVsQixNQUFNQyxXQUFXLEdBQUdKLFdBQVcsQ0FBQ0ssS0FBSztFQUNyQyxNQUFNQyxNQUFNLEdBQUcsaUNBQWlDO0VBQ2hELE1BQU1DLEdBQUcsR0FBSSxpREFBZ0RELE1BQU8sTUFBS0YsV0FBWSxFQUFDO0VBRXRGLElBQUk7SUFDQSxNQUFNSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFDakMsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFFbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7RUFDckIsQ0FBQyxDQUFDLE9BQU9JLEtBQUssRUFBQztJQUNYRixPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRUMsS0FBSyxDQUFDO0VBQ2pEO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL3dlYXRoZXJBUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgXG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5V2VhdGhlckFQSShlKSB7XG5cbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlXG4gICAgY29uc3QgYXBpS2V5ID0gJ2ZiOTkyMGJlNTVlMTQ1NzJiNjkxMzAxNDcyMzI1MDYnXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke3NlYXJjaFF1ZXJ5fWBcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQ6ICcsIGVycm9yKVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbInF1ZXJ5V2VhdGhlckFQSSIsImUiLCJzZWFyY2hJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaFF1ZXJ5IiwidmFsdWUiLCJhcGlLZXkiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9