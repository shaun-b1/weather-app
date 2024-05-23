import { weatherDisplay } from './weatherDisplay'
import { setBackground } from './setBackground'

export async function askWeatherAPI(e) {
  const searchInput = document.getElementById('search__bar')

  e.preventDefault()

  const searchQuery = searchInput.value
  const apiKey = 'fb9920be55e14572b69130147232506'
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchQuery}&days=3`

  try {
    const response = await fetch(url)
    const data = await response.json()

    displayResults(data, searchQuery)
  } catch (error) {
    alert(`An error has occurred: ` + error)
  }
}

export function displayResults(data) {
  if (document.querySelector('.weather')) {
    document.querySelector('.weather').remove()
  }
  setBackground(data.current.condition.code)
  document.body.appendChild(weatherDisplay(data))
}
