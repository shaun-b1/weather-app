let gif = document.createElement("img");
document.body.appendChild(gif);

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=ZqIKvv15hAXZjKYwJy5fraKl9gQhT0DF&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    gif.src = response.data.images.original.url;
  });
