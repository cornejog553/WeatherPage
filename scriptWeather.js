var weatherDataResponse
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const weatherLocation = document.getElementById('location')
const weatherTemperature = document.getElementById('mainTemp')
const feelsLike = document.getElementById('feelsLikeSpan')
const humiditySpan = document.getElementById('humiditySpan')
const windDirectionSpan = document.getElementById('windDirectionSpan')
const windSpeedSpan = document.getElementById('windSpeedSpan')
const weatherStatus = document.getElementById('weatherStatus')

const forecastDay1MaxTemp = document.getElementById('forecastDay1MaxTemp')
const forecastDay1MinTemp = document.getElementById('forecastDay1MinTemp')

const forecastDay2MaxTemp = document.getElementById('forecastDay2MaxTemp')
const forecastDay2MinTemp = document.getElementById('forecastDay2MinTemp')

const forecastDay3MaxTemp = document.getElementById('forecastDay3MaxTemp')
const forecastDay3MinTemp = document.getElementById('forecastDay3MinTemp')

const forecastDay4MaxTemp = document.getElementById('forecastDay4MaxTemp')
const forecastDay4MinTemp = document.getElementById('forecastDay4MinTemp')

const forecastDay5MaxTemp = document.getElementById('forecastDay5MaxTemp')
const forecastDay5MinTemp = document.getElementById('forecastDay5MinTemp')


const weatherData = (city) => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=73ddd15d7caf4324b9d164825232209&q=${city}&aqi=no`)
  .then((response) => response.json())
  .then(data => {
    weatherDataResponse = data;
   })
  .then(() => {
    weatherLocation.textContent = weatherDataResponse.location.name
    weatherTemperature.textContent = weatherDataResponse.current.temp_f
    feelsLike.innerText = weatherDataResponse.current.feelslike_f
    humiditySpan.innerText = weatherDataResponse.current.humidity + "%"
    windDirectionSpan.innerText = weatherDataResponse.current.wind_dir
    windSpeedSpan.innerText = weatherDataResponse.current.wind_mph + " MPH"
    weatherStatus.textContent = weatherDataResponse.current.condition.text
   })
  .catch(function(err) {
      console.log(err);
    });
}

const weatherForecast = (city) => {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=73ddd15d7caf4324b9d164825232209&q=${city}&days=6&aqi=no&alerts=no`)
  .then((response) => response.json())
  .then(data => {
    weatherDataForecastResponse = data;
   })
   .then(()=> {
    var day1Date = new Date(weatherDataForecastResponse.forecast.forecastday[1].date.replace(/-/g, '\/'));
    let day1Day = weekday[day1Date.getDay()]
    forecastDay1.textContent = day1Day

    forecastDay1MaxTemp.innerText = weatherDataForecastResponse.forecast.forecastday[1].day.maxtemp_f;
    forecastDay1MinTemp.innerText = weatherDataForecastResponse.forecast.forecastday[1].day.mintemp_f;

    var day2Date = new Date(weatherDataForecastResponse.forecast.forecastday[2].date.replace(/-/g, '\/'));
    let day2Day = weekday[day2Date.getDay()]
    forecastDay2.textContent = day2Day

    forecastDay2MaxTemp.innerText = weatherDataForecastResponse.forecast.forecastday[2].day.maxtemp_f;
    forecastDay2MinTemp.innerText = weatherDataForecastResponse.forecast.forecastday[2].day.mintemp_f;
  })
   .catch(function(err) {
    console.log(err);
  });
}

var form = document.getElementById("myForm");
function handleForm(event) { 
  event.preventDefault();
  var searchText = document.getElementById('searchBox').value
  weatherData(searchText)
  weatherForecast(searchText)
} 
form.addEventListener('submit', handleForm);

const weatherSearch = (event) =>{
  
}

weatherData("Pittsburgh")
weatherForecast("Pittsburgh")