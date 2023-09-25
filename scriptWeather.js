fetch('http://api.weatherapi.com/v1/current.json?key=73ddd15d7caf4324b9d164825232209&q=Pittsburgh&aqi=no')
.then((response) => response.json())
.then((data) => console.log(data))
  .catch(function(err) {
    console.log(err);
  });
