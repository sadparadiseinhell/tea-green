# :tea: Tea Green
### Startpage with Weather and To-Do List features

![Preview](https://github.com/sadparadiseinhell/tea-green/blob/main/assets/tea-green-preview.png)

## Table of contents
- [Features](#features)
- [Settings](#settings)
  - [Links](#links)
  - [Weather Setting](#weather-setting)

## Features
- **Dark/Light Theme** changes depending on the time of day, you can also switch it manually
- **Weather** displays current temperature, description of weather conditions and city name
- **To-Do List** allows you to add tasks, mark as completed and delete tasks that you add
- **Search** gives you the ability to search on any sites that you can add yourself

## Settings
### Links
To add your own link to your favorite site, you just need to add a line to the HTML code, for example:

```html
<a href="https://www.reddit.com/" target="_blank">
  <i class="fab fa-reddit"></i>
</a>
```

### Weather Setting
To display the weather you need to have a free API key, which can be obtained from the [OpenWeatherMap](https://openweathermap.org/api) website.

> If you generated a **new** API key and the weather doesn't work, then try to wait for a while until the key is activated.

As weather icons I used icons from [this project](https://github.com/erikflowers/weather-icons#readme).
