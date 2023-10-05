import { forecastDisplay } from './forecastDisplay'

export { ui }

function ui(data) {
  const { current, location, forecast } = data

  const container = document.createElement('section')
  container.classList.add('weather')

  const temp = document.createElement('div')
  temp.classList.add('weather__temp')
  const tempText = document.createElement('h1')
  tempText.textContent = `It is currently ${current.temp_c}°C in ${location.name}, ${location.country}`
  temp.appendChild(tempText)

  const feelsLike = document.createElement('div')
  feelsLike.classList.add('weather__feels-like')
  const feelsLikeTitle = document.createElement('h5')
  feelsLikeTitle.textContent = 'Feels Like'
  const feelsLikeText = document.createElement('p')
  feelsLikeText.textContent = `${current.feelslike_c}°C`
  feelsLike.append(feelsLikeTitle, feelsLikeText)

  const wind = document.createElement('div')
  wind.classList.add('weather__wind')
  const windTitle = document.createElement('h5')
  windTitle.textContent = 'Wind Speed'
  const windText = document.createElement('p')
  windText.textContent = `${current.wind_kph}kph ${current.wind_dir}`
  wind.append(windTitle, windText)

  const precip = document.createElement('div')
  precip.classList.add('weather__precip')
  const precipTitle = document.createElement('h5')
  precipTitle.textContent = 'Precipitation'
  const precipText = document.createElement('p')
  precipText.textContent = `${current.precip_mm}mm`
  precip.append(precipTitle, precipText)

  const uv = document.createElement('div')
  uv.classList.add('weather__uv')
  const uvTitle = document.createElement('h5')
  uvTitle.textContent = 'UV Index'
  const uvText = document.createElement('p')
  uvText.textContent = `${current.uv}`
  uv.append(uvTitle, uvText)

  const humidity = document.createElement('div')
  humidity.classList.add('weather__humidity')
  const humidityTitle = document.createElement('h5')
  humidityTitle.textContent = 'Humidity'
  const humidityText = document.createElement('p')
  humidityText.textContent = `${current.humidity}%`
  humidity.append(humidityTitle, humidityText)

  const vis = document.createElement('div')
  vis.classList.add('weather__vis')
  const visTitle = document.createElement('h5')
  visTitle.textContent = 'Visibility'
  const visText = document.createElement('p')
  visText.textContent = `${current.vis_km}km`
  vis.append(visTitle, visText)

  const dayForecast = document.createElement('div')
  dayForecast.classList.add('weather__forecast')
  const forecastTitle = document.createElement('h5')
  forecastTitle.textContent = 'Three Day Forecast'
  for (const day of forecast.forecastday) {
    const dayContainer = forecastDisplay(day)
    dayForecast.appendChild(dayContainer)
  }
  dayForecast.append(forecastTitle)

  container.append(
    temp,
    feelsLike,
    wind,
    precip,
    uv,
    humidity,
    vis,
    dayForecast,
  )

  return container
}
