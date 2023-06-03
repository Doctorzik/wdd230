let windSpeed = document.getElementById("windspeed").textContent;
let windChill = document.getElementById("windchill");
let temperature = document.getElementById("temperature").textContent;

if ((temperature <= 10) & (windSpeed > 4.9)) {
  windChillFactor(temperature, windSpeed);
} else {
  windChill.innerHTML = "N/A";
}


function windChillFactor(t,s) { 
let windChillFactor = 35.74 + 06215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
  
  windChill.innerHTML= windChillFactor.toFixed(0)
}

