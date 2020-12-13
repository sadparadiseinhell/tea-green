// Theme switcher
var switcher = document.getElementById('switch_theme');

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('switch', 'on');
	document.body.setAttribute('theme', 'dark');	
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('switch', 'off');
	document.body.removeAttribute('theme');	
}

switcher.onclick = function() {
	if (switcher.checked) {
		darkTheme();
	} else {
		lightTheme();
	}
}

if (localStorage.getItem('switch') == 'on') {
	darkTheme();
}

// Automatic theme change depending on the time of day
var today = new Date();
var hour = today.getHours();

if (hour >= 17 || hour < 6) {
	darkTheme();
} else {
	lightTheme();
}

// Remember weather checkbox value
var chbWeather = document.getElementById('switch_weather');

chbWeather.onclick = function() {
	if (chbWeather.checked) {
		localStorage.setItem('switch_weather', 'true');
		document.getElementById('switch_todo').checked = false;
		localStorage.setItem('switch_todo', 'false');
	} else {
		localStorage.setItem('switch_weather', 'false');
	}
}

if (localStorage.getItem('switch_weather') == 'true') {
  chbWeather.setAttribute('checked','checked');
}

// Remember to-do list checkbox value
var chbTodo = document.getElementById('switch_todo');

chbTodo.onclick = function() {
	if (chbTodo.checked) {
		localStorage.setItem('switch_todo', 'true');
		document.getElementById('switch_weather').checked = false;
		localStorage.setItem('switch_weather', 'false');
	} else {
		localStorage.setItem('switch_todo', 'false');
	}
}

if (localStorage.getItem('switch_todo') == 'true') {
	chbTodo.setAttribute('checked','checked');
}