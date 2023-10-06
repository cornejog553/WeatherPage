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


const weatherData = () => {
  fetch('http://api.weatherapi.com/v1/current.json?key=73ddd15d7caf4324b9d164825232209&q=Pittsburgh&aqi=no')
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

    console.log(weatherDataResponse);
   })
  .catch(function(err) {
      console.log(err);
    });
}

const weatherForecast = () => {
  fetch('https://api.weatherapi.com/v1/forecast.json?key=73ddd15d7caf4324b9d164825232209&q=Pittsburgh&days=6&aqi=no&alerts=no')
  .then((response) => response.json())
  .then(data => {
    weatherDataForecastResponse = data;
   })
   .then(()=> {
    console.log(weatherDataForecastResponse);
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

    var day3Date = new Date(weatherDataForecastResponse.forecast.forecastday[3].date.replace(/-/g, '\/'));
    let day3Day = weekday[day3Date.getDay()]
    forecastDay3.textContent = day3Day

    forecastDay3MaxTemp.innerText = weatherDataForecastResponse.forecast.forecastday[3].day.maxtemp_f;
    forecastDay3MinTemp.innerText = weatherDataForecastResponse.forecast.forecastday[3].day.mintemp_f;

    var day4Date = new Date(weatherDataForecastResponse.forecast.forecastday[4].date.replace(/-/g, '\/'));
    let day4Day = weekday[day4Date.getDay()]
    forecastDay4.textContent = day4Day

    forecastDay4MaxTemp.innerText = weatherDataForecastResponse.forecast.forecastday[4].day.maxtemp_f;
    forecastDay4MinTemp.innerText = weatherDataForecastResponse.forecast.forecastday[4].day.mintemp_f;

    var day5Date = new Date(weatherDataForecastResponse.forecast.forecastday[5].date.replace(/-/g, '\/'));
    let day5Day = weekday[day5Date.getDay()]
    forecastDay5.textContent = day5Day

    forecastDay5MaxTemp.innerText = weatherDataForecastResponse.forecast.forecastday[5].day.maxtemp_f;
    forecastDay5MinTemp.innerText = weatherDataForecastResponse.forecast.forecastday[5].day.mintemp_f;
  })
   .catch(function(err) {
    console.log(err);
  });
}

weatherData()
weatherForecast()