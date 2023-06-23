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
