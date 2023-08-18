export { ui }

function ui(data) {
  const { current, location, forecast } = data

  const container = document.createElement('section')
  container.classList.add('display')

  const temp = document.createElement('div')
  temp.classList.add('display__component')
  temp.classList.add('display__component--temp')
  const tempText = document.createElement('h1')
  tempText.textContent = `It is currently ${current.temp_c}°C in ${location.name}`
  temp.appendChild(tempText)

  const feelsLike = document.createElement('div')
  feelsLike.classList.add('display__component')
  feelsLike.classList.add('display__component--feels-like')
  const feelsLikeText = document.createElement('p')
  feelsLikeText.textContent = `Feels like: ${current.feelslike_c}°`
  feelsLike.appendChild(feelsLikeText)

  const wind = document.createElement('div')
  wind.classList.add('display__component')
  wind.classList.add('display__component--wind')
  wind.textContent = `Wind: ${current.wind_kph}kph ${current.wind_dir}`

  const precip = document.createElement('div')
  precip.classList.add('display__component')
  precip.classList.add('display__component--precip')
  precip.textContent = `Precipitation: ${current.precip_mm}mm`

  const uv = document.createElement('div')
  uv.classList.add('display__component')
  uv.classList.add('display__component--uv')
  uv.textContent = `UV Index: ${current.uv}`

  const humidity = document.createElement('div')
  humidity.classList.add('display__component')
  humidity.classList.add('display__component--humidity')
  humidity.textContent = `Humidity: ${current.humidity}%`

  const dayForecast = document.createElement('div')
  dayForecast.classList.add('display__component')
  dayForecast.classList.add('display__component--forecast')
  dayForecast.textContent = `forecast: ${forecast.forecastday[0].day.maxtemp_c}°C`

  container.append(temp, feelsLike, wind, precip, uv, humidity, dayForecast)

  return container
}
