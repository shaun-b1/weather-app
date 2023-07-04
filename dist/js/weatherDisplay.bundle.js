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
/*!******************************!*\
  !*** ./js/weatherDisplay.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ui: () => (/* binding */ ui)
/* harmony export */ });

function ui(data) {
  const {
    current
  } = data;
  const container = document.createElement('main');
  container.classList.add('display');
  const temp = document.createElement('div');
  temp.classList.add('display__component');
  temp.textContent = `${current.temp_c}°`;
  const feelsLike = document.createElement('div');
  feelsLike.classList.add('display__component');
  feelsLike.textContent = `Feels like: ${current.feelslike_c}°`;
  const wind = document.createElement('div');
  wind.classList.add('display__component');
  wind.textContent = `Wind: ${current.wind_kph} ${current.wind_dir}`;
  const precip = document.createElement('div');
  precip.classList.add('display__component');
  precip.textContent = `Precipitation: ${current.precip_mm}mm`;
  const uv = document.createElement('div');
  uv.classList.add('display__component');
  uv.textContent = `UV Index: ${current.uv}`;
  const humidity = document.createElement('div');
  humidity.classList.add('display__component');
  humidity.textContent = `Humidity: ${current.humidity}%`;
  container.append(temp, feelsLike, wind, precip, uv, humidity);
  return container;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy93ZWF0aGVyRGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOVztBQUVYLFNBQVNBLEVBQUVBLENBQUNDLElBQUksRUFBRTtFQUNkLE1BQU07SUFBRUM7RUFBUSxDQUFDLEdBQUdELElBQUk7RUFFeEIsTUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDaERGLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBRWxDLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDRyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ3hDQyxJQUFJLENBQUNDLFdBQVcsR0FBSSxHQUFFUCxPQUFPLENBQUNRLE1BQU8sR0FBRTtFQUV2QyxNQUFNQyxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ00sU0FBUyxDQUFDTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUM3Q0ksU0FBUyxDQUFDRixXQUFXLEdBQUksZUFBY1AsT0FBTyxDQUFDVSxXQUFZLEdBQUU7RUFFN0QsTUFBTUMsSUFBSSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNRLElBQUksQ0FBQ1AsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7RUFDeENNLElBQUksQ0FBQ0osV0FBVyxHQUFJLFNBQVFQLE9BQU8sQ0FBQ1ksUUFBUyxJQUFHWixPQUFPLENBQUNhLFFBQVMsRUFBQztFQUVsRSxNQUFNQyxNQUFNLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM1Q1csTUFBTSxDQUFDVixTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUMxQ1MsTUFBTSxDQUFDUCxXQUFXLEdBQUksa0JBQWlCUCxPQUFPLENBQUNlLFNBQVUsSUFBRztFQUU1RCxNQUFNQyxFQUFFLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4Q2EsRUFBRSxDQUFDWixTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUN0Q1csRUFBRSxDQUFDVCxXQUFXLEdBQUksYUFBWVAsT0FBTyxDQUFDZ0IsRUFBRyxFQUFDO0VBRTFDLE1BQU1DLFFBQVEsR0FBR2YsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDYyxRQUFRLENBQUNiLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQzVDWSxRQUFRLENBQUNWLFdBQVcsR0FBSSxhQUFZUCxPQUFPLENBQUNpQixRQUFTLEdBQUU7RUFFdkRoQixTQUFTLENBQUNpQixNQUFNLENBQUNaLElBQUksRUFBRUcsU0FBUyxFQUFFRSxJQUFJLEVBQUVHLE1BQU0sRUFBRUUsRUFBRSxFQUFFQyxRQUFRLENBQUM7RUFFN0QsT0FBT2hCLFNBQVM7QUFDcEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL3dlYXRoZXJEaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgdWkgfVxuXG5mdW5jdGlvbiB1aShkYXRhKSB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSBkYXRhXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpXG5cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlfX2NvbXBvbmVudCcpXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnQudGVtcF9jfcKwYFxuXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZCgnZGlzcGxheV9fY29tcG9uZW50JylcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtjdXJyZW50LmZlZWxzbGlrZV9jfcKwYFxuXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd2luZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5X19jb21wb25lbnQnKVxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHtjdXJyZW50LndpbmRfa3BofSAke2N1cnJlbnQud2luZF9kaXJ9YFxuXG4gICAgY29uc3QgcHJlY2lwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmVjaXAuY2xhc3NMaXN0LmFkZCgnZGlzcGxheV9fY29tcG9uZW50JylcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgUHJlY2lwaXRhdGlvbjogJHtjdXJyZW50LnByZWNpcF9tbX1tbWBcblxuICAgIGNvbnN0IHV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1di5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5X19jb21wb25lbnQnKVxuICAgIHV2LnRleHRDb250ZW50ID0gYFVWIEluZGV4OiAke2N1cnJlbnQudXZ9YFxuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlfX2NvbXBvbmVudCcpXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7Y3VycmVudC5odW1pZGl0eX0lYFxuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0ZW1wLCBmZWVsc0xpa2UsIHdpbmQsIHByZWNpcCwgdXYsIGh1bWlkaXR5KVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufSJdLCJuYW1lcyI6WyJ1aSIsImRhdGEiLCJjdXJyZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGVtcCIsInRleHRDb250ZW50IiwidGVtcF9jIiwiZmVlbHNMaWtlIiwiZmVlbHNsaWtlX2MiLCJ3aW5kIiwid2luZF9rcGgiLCJ3aW5kX2RpciIsInByZWNpcCIsInByZWNpcF9tbSIsInV2IiwiaHVtaWRpdHkiLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9