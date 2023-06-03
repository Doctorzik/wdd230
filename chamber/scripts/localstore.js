let date = new Date();
const millPerDay = 1000 * 60 * 60 * 24;


localStorage.setItem("visitDate", date.getTime());

const lastVisit = localStorage.getItem("visitDate");

const newDate = date.getTime();
const oldDate = lastVisit;
const millDiff = newDate - oldDate;

const numberOfDays = millDiff / millPerDay;

document.querySelector("local").textContent = numberOfDays;