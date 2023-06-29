let windSpeed = document.getElementById("windspeed");
let windChill = document.getElementById("windchill");
let temperature = document.getElementById("temperature");
let weatherIcon = document.getElementById("weather-icon");
let captionDesc = document.querySelector("#description");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Bayelsa State&units=metric&limit=5&appid=47f0b5dd02ee9859c97b0f8f5e7c21c2";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
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
  const imagesrc = `https://openweathermap.org/img/wn/10d@2x.png`;
  const desc = weatherData.weather[0].description;
  desc.charAt(0).toUpperCase();
  weatherIcon.setAttribute("src", imagesrc);
  weatherIcon.setAttribute("alt", desc);
  weatherIcon.setAttribute("loading", "lazy");
  weatherIcon.setAttribute("width", "200");
  weatherIcon.setAttribute("height", "200");

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
