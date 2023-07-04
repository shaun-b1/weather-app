import { queryWeatherAPI } from "./weatherAPI";
export { form };

function form() {
  const form = document.createElement("form");

  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search");

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

  form.addEventListener("submit", queryWeatherAPI);

  searchDiv.append(searchLabel, searchInput);
  form.append(searchDiv, button);

  return form;
}
