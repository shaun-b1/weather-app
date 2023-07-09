import { askWeatherAPI } from "./weatherAPI";
export { form };

function form() {
  const searchSection = document.createElement("section");
  searchSection.classList.add("search");

  const form = document.createElement("form");
  form.classList.add("search__form");

  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search__bar");

  const searchLabel = document.createElement("label");
  searchLabel.setAttribute("for", "search");
  searchLabel.textContent = "Search Here: ";

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("name", "search");

  const button = document.createElement("button");
  button.textContent = "Search";
  button.setAttribute("type", "submit");

  form.addEventListener("submit", askWeatherAPI);

  searchDiv.append(searchLabel, searchInput);
  form.append(searchDiv, button);
  searchSection.appendChild(form);

  return searchSection;
}
