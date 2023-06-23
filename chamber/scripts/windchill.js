let windSpeed = document.getElementById("windspeed");
let windChill = document.getElementById("windchill");
let temperature = document.getElementById("temperature");
let weatherIcon = document.getElementById("weather-icon");
let captionDesc = document.querySelector("figcaption");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Bayelsa State&units=metric&limit=5&appid=77cee840d3e3382026a5dff368c396ce";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // this is for testing the call
      displayResults(data);
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  desc.charAt(0).toUpperCase();
  weatherIcon.setAttribute("src", imagesrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = desc;
  windSpeed.textContent = weatherData.wind.speed;
}
apiFetch();

if ((temperature <= 10) & (windSpeed > 4.8)) {
  windChillFactor(temperature, windSpeed);
} else {
  windChill.innerHTML = "N/A";
}

function windChillFactor(t, s) {
  let windChillFactor =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);

  windChill.innerHTML = windChillFactor.toFixed(0);
}
