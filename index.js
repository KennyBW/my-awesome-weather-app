function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    
    return `${day} ${hours}:${minutes}`;
  }
    
  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  }
  
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
  }
  
  // Feature #1
  let dateElement = document.querySelector("#timestamp");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  // Feature #2
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeCity);
  
  // Bonus Feature
  let fahrenheitLink = document.querySelector("#fahrenheit-Link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  let celsiusLink = document.querySelector("#celsius-Link");
 celsiusLink.addEventListener("click", convertToCelsius);

 function changeCity(event){
  event.preventDefault()
 let citySearch = document.querySelector("#city-input");

  let unit = "metric";
  let apiKey ="09a3de3130ba3df13002fa22a89a758d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
    let temperature= Math.round(response.data.main.temp);
    
    let heading = document.querySelector("h1");
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    cityElement.innerHTML = response.data.name
    temperatureElement.innerHTML = response.data.main.temp
  }

  function retrievePosition(position){
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let units = "metric";
  let apiKey ="09a3de3130ba3df13002fa22a89a758d";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather"
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

  navigator.geolocation.getCurrentPosition(retrievePosition);
  
  