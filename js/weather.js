const key = '';

if (key == '') {
	localStorage.removeItem('city');
	document.querySelector("input[id='city']").style.display = 'none';
	document.getElementById('remember').innerHTML = ('remember to add your api key!');
} else {
	document.getElementById('remember').style.display = 'none';
	if (localStorage.getItem('city') == null) {
		console.log(':(');
	} else {
		var city_name = localStorage.getItem('city');
		getWeatherInfo(city_name);
		document.getElementsByName('city_field')[0].placeholder = city_name;
	}
}

var city_input = document.getElementById('city');

city_input.addEventListener('keydown', function(){
	if (event.keyCode == 13) {
		var city_name = city_input.value;
		localStorage.setItem('city', city_name);
		getWeatherInfo(city_name);

		document.getElementsByName('city_field')[0].placeholder = localStorage.getItem('city');
		city_input.value = '';
		city_input.blur();

		console.log(localStorage.getItem('city'));
	}
});

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
	})
	.catch(function (error) {
		console.log(error);
	});
	setTimeout(function() {
		getWeatherInfo(city_name)
	}, 1800000);
}

function drawWeather() {
	var today = new Date();
	var hour = today.getHours();

	if (hour >= 17 || hour < 6) {
		var time = 'night';
	} else {
		var time = 'day';
	}
	
	if (time == 'night') {
		document.querySelector(':root').style.cssText = '--weather-bg: #303c7a';
	}

	document.getElementById('description').innerHTML = `${description}`;
	document.getElementById('icon').innerHTML = `<i id='icon' class='wi wi-owm-${time}-${id}'></i>`;

	var temp = document.getElementById('temp');

	temp.onclick = function() {
		if (localStorage.getItem('temp') == 'celcius') {
			localStorage.setItem('temp', 'fahrenheit');
			temp.innerHTML = `${fahrenheit}°F`;	
		} else {
			localStorage.setItem('temp', 'celcius');
			temp.innerHTML = `${celcius}°C`;
		}
	}

	if (localStorage.getItem('temp') == 'celcius') {
		temp.innerHTML =` ${celcius}°C`;
	} else {
		temp.innerHTML = `${fahrenheit}°F`;
	}
}