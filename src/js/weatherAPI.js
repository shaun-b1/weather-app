export async function queryWeatherAPI(e) {
  const searchInput = document.getElementById("search");

  e.preventDefault();

  const searchQuery = searchInput.value;
  const apiKey = "fb9920be55e14572b69130147232506";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("An error has occurred: ", error);
  }
}

// Destructure the Promise object to access the data: https://www.youtube.com/watch?v=Mus_vwhTCq0 @3:30
