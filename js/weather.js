const key = '';

if (key == '') {
	localStorage.removeItem('city');
	document.getElementById('remember').innerHTML = ('remember to add your api key!');
	document.querySelector('.weather_update_button').style.display = 'none';
} else {
	document.getElementById('remember').style.display = 'none';
}

if (localStorage.getItem('city') == null) {
	if (key == '') {
		document.querySelector('input[id="city"]').style.display = 'none';
	} else {
		document.querySelector('.weather_update_button').style.display = 'none';
		console.log(':(');
	}
} else {
	var city_name = localStorage.getItem('city');
	getWeatherInfo(city_name);
	document.getElementsByName('city_field')[0].placeholder = city_name;
	console.log(':)');
}

function city() {
	if (event.keyCode == 13) {
		let city_input = document.getElementById('city');
		let city_name = city_input.value;
		getWeatherInfo(city_name);

		localStorage.setItem('city', city_name);
		let city_ls = localStorage.getItem('city');
		console.log(city_ls);
		document.getElementsByName('city_field')[0].placeholder = city_ls;
		city_input.value = '';
		city_input.blur();
		document.querySelector('.weather_update_button').style.display = '';
	}
}

function update() {
	const element = document.getElementById('spin')
	element.classList.remove('spin');
	void element.offsetWidth;
	element.classList.add('spin');

	var city_name = localStorage.getItem('city');
	getWeatherInfo(city_name);
	console.log('upd:', city_name);
}

function getWeatherInfo(city_name) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		celcius = Math.round(parseFloat(data.main.temp)-273.15);
		fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
		description = data.weather[0].description; 
		main = data.weather[0].main;
		id = data.weather[0].id;
	})
	.then(function () {
		drawWeather();
	});
}

function drawWeather() {
	const today = new Date();
	const hr = today.getHours();
	if (hr >= 17 || hr < 6) {
		var time = 'night';
		document.querySelector(":root").style.cssText = '--weather-bg: #303c7a';
	} else {
		var time = 'day';
	}
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('icon').innerHTML = `<i id="icon" class="wi wi-owm-${time}-${id}"></i>`;

	let temp = document.getElementById('temp');

	if (localStorage.getItem('temp') === 'celcius') {
		temp.innerHTML = celcius + '°C';
	} else {
		temp.innerHTML = fahrenheit + '°F';
	}

	temp.onclick = function() {
		if (localStorage.getItem('temp') === 'celcius') {
			localStorage.setItem('temp', 'fahrenheit');
			temp.innerHTML = fahrenheit + '°F';	
		} else {
			localStorage.setItem('temp', 'celcius');
			temp.innerHTML = celcius + '°C';
		}
	}	
}
