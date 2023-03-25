let apikey = 'd25df42b10f9cecb0836d249c9158e2b';
let form = document.querySelector('form');
let input = document.querySelector('#city');
let output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let city_name = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // log the weather data to the console
      result.innerHTML = `
        <h2>${data.name}</h2>
        <p>Current temperature: ${data.main.temp}°C</p>
      `;
    })
    .catch(error => console.log(error)); 
});

let api_key = 'd25df42b10f9cecb0836d249c9158e2b'; 
let locationButton = document.querySelector('#location');
let result = document.querySelector('#result');

locationButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data); // log the weather data to the console
          result.innerHTML = `
            <h2>${data.name}</h2>
            <p>Current temperature: ${data.main.temp}°C</p>
          `;
        })
        .catch(error => console.log(error)); // log any errors to the console
    });
  } else {
    result.innerHTML = '<p>Geolocation is not supported by your browser</p>';
  }
});
