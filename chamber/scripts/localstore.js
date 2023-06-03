let datew = new Date();
const millPerDay = 1000 * 60 * 60 * 24;


localStorage.setItem("visitDate", datew.getTime());

const lastVisit = localStorage.getItem("visitDate");

const newDate = datew.getTime();
const oldDate = lastVisit;
const millDiff = newDate - oldDate;

const numberOfDays = millDiff / millPerDay;
console.log(numberOfDays)

document.getElementById("local").innerHTML = numberOfDays;