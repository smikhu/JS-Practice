const monthsElement = document.querySelector('.date h1')
const fullDateElement = document.querySelector('.date p')
const daysElement = document.querySelector('.days')

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
console.log(lastDay)

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthsElement.innerText = months[monthIndex]
fullDateElement.innerText = new Date().toDateString()


let days = "";

for(let i = 1; i <= lastDay; i++) {
    days = days + `<div>${i}</div>`
}

daysElement.innerHTML = days