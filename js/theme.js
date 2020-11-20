// theme switcher

let switcher = document.getElementById('switch_theme');
switcher.onclick = function() {
	if (switcher.checked) {
		localStorage.setItem('switch_theme', "true");
		document.body.setAttribute("theme","dark");
	} else {
		localStorage.setItem('switch_theme', "false");
		document.body.removeAttribute("theme");
	}
}

if (localStorage.getItem('switch_theme') == "true") {
	switcher.setAttribute('checked','checked');
	document.body.setAttribute("theme","dark");
}

/*const today = new Date();
const hr = today.getHours();
if (hr >= 17 || hr < 5) {
	switcher.setAttribute('checked','checked');
	localStorage.setItem('switch_theme', "true");
	document.body.setAttribute("theme","dark");
} else {
	switcher.removeAttribute('checked');
	localStorage.setItem('switch_theme', "false");
	document.body.removeAttribute("theme");
}*/

// set width and height of the container on start

function setWidthHeight() {
	let block = document.querySelector('.container');

	/*block.style.minWidth = block.offsetWidth + 1 + 'px';
	block.style.minHeight = block.offsetHeight + 1 + 'px';*/
	block.style.width = block.offsetWidth + 1 + 'px';
	block.style.height = block.offsetHeight + 1 + 'px';
}

setWidthHeight();

// remember weather checkbox value

var checkbox = document.getElementById("switch_weather");

checkbox.onclick = function() {
	if (checkbox.checked) {
		localStorage.setItem('switch_weather', "true");
		document.getElementById('switch_todo').checked = false;
		localStorage.setItem('switch_todo', "false");
	} else {
		localStorage.setItem('switch_weather', "false");
	}
}

if (localStorage.getItem('switch_weather') == "true") {
  checkbox.setAttribute('checked','checked');
}

// remember to-do list checkbox value

var tdcheckbox = document.getElementById("switch_todo");

tdcheckbox.onclick = function() {
	if (tdcheckbox.checked) {
		localStorage.setItem('switch_todo', "true");
		document.getElementById("switch_weather").checked = false;
		localStorage.setItem('switch_weather', "false");
	} else {
		localStorage.setItem('switch_todo', "false");
	}
}

if (localStorage.getItem('switch_todo') == "true") {
	tdcheckbox.setAttribute('checked','checked');
}
