let cityInput = document.getElementById('city');
let keyInput = document.getElementById('key');
let key = localStorage.getItem('key');
let weatherInfo = document.querySelector('.weather-card__info');
let description = document.getElementById('description');
let icon = document.getElementById('icon');

if (key === null) {
	localStorage.removeItem('city');
	cityInput.style.display = 'none';
	keyInput.focus();
} else {
	keyInput.style.display = 'none';
	if (localStorage.getItem('city') === null) {
		console.log(':(');
	} else {
		let cityName = localStorage.getItem('city');
		getWeatherInfo(cityName, key);
		cityInput.placeholder = cityName;
	}
}

keyInput.addEventListener('keyup', event => {
	if (event.code === 'Enter') {
		let key = keyInput.value;
		localStorage.setItem('key', key);
		keyInput.style.display = 'none';
		cityInput.style.display = '';
		cityInput.focus();
	}
});

cityInput.addEventListener('keyup', event => {
	if (event.code === 'Enter') {
		let key = localStorage.getItem('key');
		let cityName = cityInput.value;
		localStorage.setItem('city', cityName);
		getWeatherInfo(cityName, key);

		cityInput.placeholder = localStorage.getItem('city');
		cityInput.value = '';
		cityInput.blur();
	}
});

function getWeatherInfo(cityName, key) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
			celsius = Math.round(parseFloat(data.main.temp) - 273.15);
			desc = data.weather[0].description;
			main = data.weather[0].main;
			id = data.weather[0].id;
		})
		.then(function () {
			drawWeather();
		})
		.catch(function (error) {
			cityInput.placeholder = '¯\u005C_(ツ)_/¯';
			weatherInfo.style.display = 'none';
			console.log(error);
		});
}

function drawWeather() {
	let hour = new Date().getHours();
	hour >= 17 || hour < 6 ? time = 'night' : time = 'day';

	weatherInfo.style.display = '';
	description.innerHTML = `${desc}`;
	icon.innerHTML = `<i id='icon' class='wi wi-owm-${time}-${id}'></i>`;

	let temp = document.getElementById('temp');
	if (localStorage.getItem('temp') === 'fahrenheit') {
		temp.innerHTML = `${fahrenheit}°F`;
	} else {
		temp.innerHTML = ` ${celsius}°C`;
	}

	temp.onclick = () => {
		if (localStorage.getItem('temp') !== 'fahrenheit') {
			temp.innerHTML = `${fahrenheit}°F`;
			localStorage.setItem('temp', 'fahrenheit');
		} else {
			temp.innerHTML = `${celsius}°C`;
			localStorage.setItem('temp', 'celsius');
		}
	};
}