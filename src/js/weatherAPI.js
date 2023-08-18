import { ui } from './weatherDisplay'
export { askWeatherAPI, displayResults }

async function askWeatherAPI(e) {
  const searchInput = document.getElementById('search')

  e.preventDefault()

  const searchQuery = searchInput.value
  const apiKey = 'fb9920be55e14572b69130147232506'
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchQuery}&days=4`

  try {
    const response = await fetch(url)
    const data = await response.json()

    displayResults(data, searchQuery)
  } catch (error) {
    console.log('An error has occurred: ', error)
  }
}

function displayResults(data) {
  if (data.location && data.location.name) {
    if (document.querySelector('.display')) {
      document.querySelector('.display').remove()
    }
    console.log(data)
    document.body.appendChild(ui(data))
  } else {
    console.log('No results found')
  }
}

// check what console.log logs, so you can accurately figure out what is being returned in searchQuery

// build a GUI for returning the results. Don't worry about style, just return a box with  temp, feels like, wind, precip, UV, Humidity

// npm cities.json; how does it work, can we use that to input searchQueries?
