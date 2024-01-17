// events is my objetct- parameter
function search(event) {
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("h1");

  if (searchInput.value) {
    event.preventDefault();
    h1.innerHTML = ` ${searchInput.value}... `;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}

let form = document.querySelector("#searchTab");

form.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let resetDay = days[day];

currentDate.innerHTML = `${resetDay}  ${hours}:  ${minutes} `;
