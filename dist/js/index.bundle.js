/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
  let gif = document.createElement("img");
  document.body.appendChild(gif);
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=ZqIKvv15hAXZjKYwJy5fraKl9gQhT0DF&s=cats",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      gif.src = response.data.images.original.url;
    });
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUN2Q0QsUUFBUSxDQUFDRSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0osR0FBRyxDQUFDO0FBRTlCSyxLQUFLLENBQ0gseUZBQXlGLEVBQ3pGO0VBQUVDLElBQUksRUFBRTtBQUFPLENBQ2pCLENBQUMsQ0FDRUMsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtFQUN4QixPQUFPQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUNERixJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO0VBQ3hCUixHQUFHLENBQUNVLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHO0FBQzdDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGdpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdpZik7XG5cbmZldGNoKFxuICBcImh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PVpxSUt2djE1aEFYWmpLWXdKeTVmcmFLbDlnUWhUMERGJnM9Y2F0c1wiLFxuICB7IG1vZGU6IFwiY29yc1wiIH1cbilcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBnaWYuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICB9KTtcbiJdLCJuYW1lcyI6WyJnaWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmZXRjaCIsIm1vZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic3JjIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==
