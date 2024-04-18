

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebace3ae3cmsh8b31b8a2d211b21p1a21aajsn7c750eda3f9b',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
.then(response=>response.json())
.then(data=>data)
.catch(err => console.log(err))
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data)

}

const showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
}

