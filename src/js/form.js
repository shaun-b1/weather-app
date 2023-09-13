import { askWeatherAPI } from './weatherAPI'
export { form }

function form() {
  const searchSection = document.createElement('section')
  searchSection.classList.add('search')

  const form = document.createElement('form')
  form.classList.add('search__form')

  const searchInput = document.createElement('input')
  searchInput.classList.add('search__bar')
  searchInput.setAttribute('type', 'search')
  searchInput.setAttribute('id', 'search__bar')
  searchInput.setAttribute('name', 'search')
  searchInput.setAttribute('placeholder', 'Search for a location')

  const button = document.createElement('button')
  button.classList.add('search__button', 'material-icons-outlined')
  button.textContent = 'search'
  button.setAttribute('type', 'submit')

  form.addEventListener('submit', askWeatherAPI)

  form.append(searchInput, button)
  searchSection.appendChild(form)

  return searchSection
}
