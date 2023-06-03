 


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


let currentDate =  `${year}`
document.getElementById("year").textContent = currentDate;
document.getElementById("currentDate").textContent = document.lastModified;




function toggleMenu(){
  document.getElementById("orderlist").classList.toggle("open");
  document.getElementById("button").classList.toggle("open");
 
 
 }
 
 const x = document.getElementById("button")
 
 x.onclick = toggleMenu;

 let today = date.getDay();
 

if (today === 1 || today === 2 ){
  document.querySelector(".banner").style.display = "unset"
}

// This is the script for the local storage.

let getNow = new Date();
const millPerDay = 1000 * 60 * 60 * 24;


localStorage.setItem("visitDate", getNow.getTime());

const lastVisit = localStorage.getItem("visitDate");

const newDate = getNow.getTime();
const oldDate = lastVisit;
const millDiff = newDate - oldDate;

const numDays = millDiff / millPerDay;

document.querySelector("#local").textContent = numDays;