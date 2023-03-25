let now = new Date();

let h2 = document.querySelector("#time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[new Date().getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day}, ${hour}:${minutes}`;

let currentCity = document.querySelector("current-city");

function changeCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let cityInput = cityForm.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let cityForm = document.querySelector("form");
form.addEventListener("input", changeCity);
