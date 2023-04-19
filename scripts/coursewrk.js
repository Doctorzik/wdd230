


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate =  `${year}`
document.getElementById("year").textContent = currentDate;
document.getElementById("currentDate").textContent = document.lastModified;