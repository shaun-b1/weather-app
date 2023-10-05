export { forecastDisplay }

import { format, parseISO } from 'date-fns'

function forecastDisplay(day) {
  const dayContainer = document.createElement('div')
  dayContainer.classList.add('forecast')
  const dayTitle = document.createElement('h6')
  dayTitle.textContent = format(parseISO(day.date), 'eeee')

  const high = document.createElement('div')
  const highTitle = document.createElement('h6')
  highTitle.textContent = 'Max: '
  const highText = document.createElement('p')
  highText.textContent = ` ${day.day.maxtemp_c}°C`
  high.append(highTitle, highText)

  const low = document.createElement('div')
  const lowTitle = document.createElement('h6')
  lowTitle.textContent = 'Min: '
  const lowText = document.createElement('p')
  lowText.textContent = ` ${day.day.mintemp_c}°C`
  low.append(lowTitle, lowText)

  const rain = document.createElement('div')
  const rainTitle = document.createElement('h6')
  rainTitle.textContent = 'Rainfall: '
  const rainText = document.createElement('p')
  rainText.textContent = ` ${day.day.totalprecip_mm}mm`
  rain.append(rainTitle, rainText)

  dayContainer.append(dayTitle, high, low, rain)

  return dayContainer
}
