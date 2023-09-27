export { ui }

function ui(data) {
  const { current, location, forecast } = data

  const container = document.createElement('section')
  container.classList.add('display')

  const temp = document.createElement('div')
  temp.classList.add('display__component')
  temp.classList.add('display__component--temp')
  const tempText = document.createElement('h1')
  tempText.textContent = `It is currently ${current.temp_c}°C in ${location.name}, ${location.country}`
  temp.appendChild(tempText)

  const feelsLike = document.createElement('div')
  feelsLike.classList.add('display__component')
  feelsLike.classList.add('display__component--feels-like')
  const feelsLikeTitle = document.createElement('h5')
  feelsLikeTitle.textContent = 'Feels Like'
  const feelsLikeText = document.createElement('p')
  feelsLikeText.textContent = `${current.feelslike_c}°C`
  feelsLike.append(feelsLikeTitle, feelsLikeText)

  const wind = document.createElement('div')
  wind.classList.add('display__component')
  wind.classList.add('display__component--wind')
  const windTitle = document.createElement('h5')
  windTitle.textContent = 'Wind Speed'
  const windText = document.createElement('p')
  windText.textContent = `${current.wind_kph}kph ${current.wind_dir}`
  wind.append(windTitle, windText)

  const precip = document.createElement('div')
  precip.classList.add('display__component')
  precip.classList.add('display__component--precip')
  const precipTitle = document.createElement('h5')
  precipTitle.textContent = 'Precipitation'
  const precipText = document.createElement('p')
  precipText.textContent = `${current.precip_mm}mm`
  precip.append(precipTitle, precipText)

  const uv = document.createElement('div')
  uv.classList.add('display__component')
  uv.classList.add('display__component--uv')
  const uvTitle = document.createElement('h5')
  uvTitle.textContent = 'UV Index'
  const uvText = document.createElement('p')
  uvText.textContent = `${current.uv}`
  uv.append(uvTitle, uvText)

  const humidity = document.createElement('div')
  humidity.classList.add('display__component')
  humidity.classList.add('display__component--humidity')
  const humidityTitle = document.createElement('h5')
  humidityTitle.textContent = 'Humidity'
  const humidityText = document.createElement('p')
  humidityText.textContent = `${current.humidity}%`
  humidity.append(humidityTitle, humidityText)

  const dayForecast = document.createElement('div')
  dayForecast.classList.add('display__component')
  dayForecast.classList.add('display__component--forecast')
  dayForecast.textContent = `Forecast: ${forecast.forecastday[0].day.maxtemp_c}°C`

  container.append(temp, feelsLike, wind, precip, uv, humidity, dayForecast)

  return container
}
