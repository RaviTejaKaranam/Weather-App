// Declarations
const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "ab9c39c10a5f56de3182c22be7ffe35d";
const IMAGE_URL = "http://openweathermap.org/img/w/";
let inputCityEl = document.getElementById("city-name");
let cityName;

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  cityName = inputCityEl.value;
  cityName = cityName[0].toUpperCase() + cityName.slice(1);
  getCityData(inputCityEl.value);
});
// Get the data of the input city
async function getCityData(inputCity) {
  inputCityEl.value = "";
  try {
    const cityData = await fetch(API_URL + inputCity + "&appid=" + API_KEY);
    const jsonCityData = await cityData.json();
    // bad request handling
    if (jsonCityData.message === "city not found") {
      const display = document.getElementById("display");
      display.innerHTML = `
    <div class="bad-request">
      "${cityName}" not found
    </div>
    `;
      document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1555861496-0666c8981751?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`;
    } else {
      render(jsonCityData);
    }
  } catch (err) {
    console.log(err);
  }
}
// Rendering data
function render(jsonCityData) {
  const display = document.getElementById("display");
  let tempInKelvin = jsonCityData.main.temp;
  // converting kelvin to celcius
  let tempInCelcius = (tempInKelvin - 273.15).toFixed(2);
  let humidity = jsonCityData.main.humidity;
  let description = jsonCityData.weather[0].description.split();

  for (let i = 0; i < description.length; i++) {
    description[i] = description[i][0].toUpperCase() + description[i].slice(1);
  }
  // description of weather
  let main = jsonCityData.weather[0].main;
  // weather icon
  let icon = jsonCityData.weather[0].icon;

  displayBodyBackground(main);

  let weatherIconURL = IMAGE_URL + icon + ".png";
  // displaying weather details
  display.innerHTML = `
  <div class="city">${cityName}</div>
  <img id = "weather-icon" class = "weather-icon" src="${weatherIconURL}" alt="weather icon">
  <div class="temp" id="temp">
    ${tempInCelcius} &#xb0
  </div>
  <div class="climate" id="climate">
    ${description[0]}
  </div>
  <div class="humidity" id="humidity">
    Humidity : ${humidity}
  </div>
  `;
}
