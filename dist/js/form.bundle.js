/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/weatherAPI.js":
/*!**************************!*\
  !*** ./js/weatherAPI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayResults: () => (/* binding */ displayResults),
/* harmony export */   queryWeatherAPI: () => (/* binding */ queryWeatherAPI)
/* harmony export */ });
/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ "./js/weatherDisplay.js");


async function queryWeatherAPI(e) {
  const searchInput = document.getElementById("search");
  e.preventDefault();
  const searchQuery = searchInput.value;
  const apiKey = "fb9920be55e14572b69130147232506";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data, searchQuery);
  } catch (error) {
    console.log("An error has occurred: ", error);
  }
}
function displayResults(data) {
  if (data.location && data.location.name) {
    console.log(data);
    document.body.appendChild((0,_weatherDisplay__WEBPACK_IMPORTED_MODULE_0__.ui)(data));
  } else {
    console.log('No results found');
  }
}

// check what console.log logs, so you can accurately figure out what is being returned in searchQuery

// build a GUI for returning the results. Don't worry about style, just return a box with  temp, feels like, wind, precip, UV, Humidity

// npm cities.json; how does it work, can we use that to input searchQueries?

/***/ }),

/***/ "./js/weatherDisplay.js":
/*!******************************!*\
  !*** ./js/weatherDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
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
  form.addEventListener("submit", _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.queryWeatherAPI);
  searchDiv.append(searchLabel, searchInput);
  form.append(searchDiv, button);
  return form;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7RUFDekNELFdBQVcsQ0FBQ2QsV0FBVyxHQUFHLGVBQWU7RUFFekMsTUFBTXpCLFdBQVcsR0FBR0MsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNuRHJCLFdBQVcsQ0FBQ3dDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzFDeEMsV0FBVyxDQUFDd0MsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7RUFDeEN4QyxXQUFXLENBQUN3QyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztFQUUxQyxNQUFNQyxNQUFNLEdBQUd4QyxRQUFRLENBQUNvQixhQUFhLENBQUMsUUFBUSxDQUFDO0VBQy9Db0IsTUFBTSxDQUFDaEIsV0FBVyxHQUFHLFFBQVE7RUFDN0JnQixNQUFNLENBQUNELFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0VBRXJDSCxJQUFJLENBQUNLLGdCQUFnQixDQUFDLFFBQVEsRUFBRTdDLHdEQUFlLENBQUM7RUFFaER5QyxTQUFTLENBQUNGLE1BQU0sQ0FBQ0csV0FBVyxFQUFFdkMsV0FBVyxDQUFDO0VBQzFDcUMsSUFBSSxDQUFDRCxNQUFNLENBQUNFLFNBQVMsRUFBRUcsTUFBTSxDQUFDO0VBRTlCLE9BQU9KLElBQUk7QUFDYixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvd2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly8vLi9qcy93ZWF0aGVyRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vd2VhdGhlckRpc3BsYXlcIjtcbmV4cG9ydCB7IHF1ZXJ5V2VhdGhlckFQSSwgZGlzcGxheVJlc3VsdHMgfVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeVdlYXRoZXJBUEkoZSkge1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICBjb25zdCBhcGlLZXkgPSBcImZiOTkyMGJlNTVlMTQ1NzJiNjkxMzAxNDcyMzI1MDZcIjtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke3NlYXJjaFF1ZXJ5fWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGRpc3BsYXlSZXN1bHRzKGRhdGEsIHNlYXJjaFF1ZXJ5KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkOiBcIiwgZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZXN1bHRzKGRhdGEpIHtcbiAgaWYgKGRhdGEubG9jYXRpb24gJiYgZGF0YS5sb2NhdGlvbi5uYW1lKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpKGRhdGEpKVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdObyByZXN1bHRzIGZvdW5kJyk7XG4gIH1cbn1cblxuLy8gY2hlY2sgd2hhdCBjb25zb2xlLmxvZyBsb2dzLCBzbyB5b3UgY2FuIGFjY3VyYXRlbHkgZmlndXJlIG91dCB3aGF0IGlzIGJlaW5nIHJldHVybmVkIGluIHNlYXJjaFF1ZXJ5XG5cbi8vIGJ1aWxkIGEgR1VJIGZvciByZXR1cm5pbmcgdGhlIHJlc3VsdHMuIERvbid0IHdvcnJ5IGFib3V0IHN0eWxlLCBqdXN0IHJldHVybiBhIGJveCB3aXRoICB0ZW1wLCBmZWVscyBsaWtlLCB3aW5kLCBwcmVjaXAsIFVWLCBIdW1pZGl0eVxuXG4vLyBucG0gY2l0aWVzLmpzb247IGhvdyBkb2VzIGl0IHdvcmssIGNhbiB3ZSB1c2UgdGhhdCB0byBpbnB1dCBzZWFyY2hRdWVyaWVzP1xuXG5cbiIsImV4cG9ydCB7IHVpIH1cblxuZnVuY3Rpb24gdWkoZGF0YSkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gZGF0YVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKVxuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5X19jb21wb25lbnQnKVxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50LnRlbXBfY33CsGBcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlfX2NvbXBvbmVudCcpXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Y3VycmVudC5mZWVsc2xpa2VfY33CsGBcblxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdpbmQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheV9fY29tcG9uZW50JylcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7Y3VycmVudC53aW5kX2twaH0gJHtjdXJyZW50LndpbmRfZGlyfWBcblxuICAgIGNvbnN0IHByZWNpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJlY2lwLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlfX2NvbXBvbmVudCcpXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246ICR7Y3VycmVudC5wcmVjaXBfbW19bW1gXG5cbiAgICBjb25zdCB1diA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheV9fY29tcG9uZW50JylcbiAgICB1di50ZXh0Q29udGVudCA9IGBVViBJbmRleDogJHtjdXJyZW50LnV2fWBcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5X19jb21wb25lbnQnKVxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnQuaHVtaWRpdHl9JWBcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGVtcCwgZmVlbHNMaWtlLCB3aW5kLCBwcmVjaXAsIHV2LCBodW1pZGl0eSlcblxuICAgIHJldHVybiBjb250YWluZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHF1ZXJ5V2VhdGhlckFQSSB9IGZyb20gXCIuL3dlYXRoZXJBUElcIjtcbmV4cG9ydCB7IGZvcm0gfTtcblxuZnVuY3Rpb24gZm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpO1xuXG4gIGNvbnN0IHNlYXJjaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzZWFyY2hcIik7XG4gIHNlYXJjaExhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2ggSGVyZTogXCI7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzZWFyY2hcIik7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VhcmNoXCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic2VhcmNoXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBxdWVyeVdlYXRoZXJBUEkpO1xuXG4gIHNlYXJjaERpdi5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0KTtcbiAgZm9ybS5hcHBlbmQoc2VhcmNoRGl2LCBidXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufSJdLCJuYW1lcyI6WyJ1aSIsInF1ZXJ5V2VhdGhlckFQSSIsImRpc3BsYXlSZXN1bHRzIiwiZSIsInNlYXJjaElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoUXVlcnkiLCJ2YWx1ZSIsImFwaUtleSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwibmFtZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGVtcCIsInRleHRDb250ZW50IiwidGVtcF9jIiwiZmVlbHNMaWtlIiwiZmVlbHNsaWtlX2MiLCJ3aW5kIiwid2luZF9rcGgiLCJ3aW5kX2RpciIsInByZWNpcCIsInByZWNpcF9tbSIsInV2IiwiaHVtaWRpdHkiLCJhcHBlbmQiLCJmb3JtIiwic2VhcmNoRGl2Iiwic2VhcmNoTGFiZWwiLCJzZXRBdHRyaWJ1dGUiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==