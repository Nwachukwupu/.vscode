function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "d25df42b10f9cecb0836d249c9158e2b";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
