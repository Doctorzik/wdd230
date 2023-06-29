const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}`;
document.getElementById("year").textContent = currentDate;
document.getElementById("currentDate").textContent = document.lastModified;
let timestampField = document.getElementById("timestamp");
// timestampField.value = date;

document.querySelector(".tt").textContent = `${day} - ${month}- ${year}`;

function toggleMenu() {
  document.getElementById("orderlist").classList.toggle("open");
  document.getElementById("button").classList.toggle("open");
}

const x = document.getElementById("button");

x.onclick = toggleMenu;

let today = date.getDay();

if (today === 1 || today === 2) {
  document.querySelector(".banner").style.display = "unset";
}
async function GetDirectories() {
  const response = await fetch("jsonfiles/data.json");
  const data = await response.json();
  console.log(data);
  DisplaySportlight(data);
}
function DisplaySportlight(directories) {
  const display = document.querySelector("div.sportlight");
}
// function getRandomItemsFromObject(obj) {
//   // Get all keys from the object
//   const keys = Object.keys(obj);

//   // Shuffle the keys randomly
//   const shuffledKeys = keys.sort(() => Math.random() - 0.5);

//   // Get the first three keys from the shuffled array
//   const randomKeys = shuffledKeys.slice(0, 3);

//   // Create a new object with the random keys and their corresponding values
//   const randomItems = {};
//   randomKeys.forEach((key) => {
//     randomItems[key] = obj[key];
//   });

//   return randomItems;
// }

GetDirectories();
