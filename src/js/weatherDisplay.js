export { ui };

function ui(data) {
  const { current } = data;

  const container = document.createElement("main");
  container.classList.add("display");

  const temp = document.createElement("div");
  temp.classList.add("display__component");
  temp.textContent = `${current.temp_c}°`;

  const feelsLike = document.createElement("div");
  feelsLike.classList.add("display__component");
  feelsLike.textContent = `Feels like: ${current.feelslike_c}°`;

  const wind = document.createElement("div");
  wind.classList.add("display__component");
  wind.textContent = `Wind: ${current.wind_kph} ${current.wind_dir}`;

  const precip = document.createElement("div");
  precip.classList.add("display__component");
  precip.textContent = `Precipitation: ${current.precip_mm}mm`;

  const uv = document.createElement("div");
  uv.classList.add("display__component");
  uv.textContent = `UV Index: ${current.uv}`;

  const humidity = document.createElement("div");
  humidity.classList.add("display__component");
  humidity.textContent = `Humidity: ${current.humidity}%`;

  container.append(temp, feelsLike, wind, precip, uv, humidity);

  return container;
}
