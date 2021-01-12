// Theme switcher
let switcher = document.getElementById('switch_theme');

localStorage.getItem('theme') === 'dark' ? darkTheme() : lightTheme();

switcher.onclick = () => switcher.checked ? darkTheme() : lightTheme();

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('theme', 'dark');
	document.body.setAttribute('theme', 'dark');
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('theme', 'light');
	document.body.removeAttribute('theme');
}

// Automatic theme change depending on the time of day
/* let hour = new Date().getHours();
hour >= 17 || hour < 6 ? darkTheme() : lightTheme(); */


// Weather card
let chbWeather = document.getElementById('switch_weather');
let chbTodo = document.getElementById('switch_todo');
let weatherCard = document.querySelector('.weather-card');
let weatherCardColor = 'weather-card-color';
let todoCard = document.querySelector('.todo-card');
let todoCardColor = 'todo-card-color';

chbWeather.onclick = () => {
	if (chbWeather.checked) {
		localStorage.setItem('weatherCard', 'shown');
		chbTodo.checked = false;
		localStorage.setItem('todoCard', 'hidden');
		removeClasses(todoCard, todoCardColor);
		addClasses(weatherCard, weatherCardColor);
	} else {
		localStorage.setItem('weatherCard', 'hidden');
		removeClasses(weatherCard, weatherCardColor);
	}
}

if (localStorage.getItem('weatherCard') == 'shown') {
	chbWeather.setAttribute('checked', 'checked');
	addClasses(weatherCard, weatherCardColor);
}

// To-do list card
chbTodo.onclick = function () {
	if (chbTodo.checked) {
		localStorage.setItem('todoCard', 'shown');
		chbWeather.checked = false;
		localStorage.setItem('weatherCard', 'hidden');
		removeClasses(weatherCard, weatherCardColor);
		addClasses(todoCard, todoCardColor);
	} else {
		localStorage.setItem('todoCard', 'hidden');
		removeClasses(todoCard, todoCardColor);
	}
}

if (localStorage.getItem('todoCard') == 'shown') {
	chbTodo.setAttribute('checked', 'checked');
	addClasses(todoCard, todoCardColor);
}

function addClasses(cardName, cardColor) {
	let card = document.querySelector('.card');
	let content = document.querySelector('.content');
	cardName.style.cssText = `
		opacity: 1;
		z-index: 1;
	`;
	card.classList.add(cardColor);
	content.classList.add('hide');
}

function removeClasses(cardName, cardColor) {
	let card = document.querySelector('.card');
	let content = document.querySelector('.content');
	cardName.style.cssText = `
		opacity: 0;
		z-index: -1;
	`;
	card.classList.remove(cardColor);
	content.classList.remove('hide');
}