fetch(
  "https://api.weatherapi.com/v1/current.json?key=fb9920be55e14572b69130147232506&q=London&aqi=no",
  { mode: "cors" }
).then(function (response) {
  console.log(response.json());
});
