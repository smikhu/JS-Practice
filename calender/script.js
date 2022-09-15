const monthsElement = document.querySelector('.date h1')
const fullDateElement = document.querySelector('.date p')

const monthIndex = new Date().getMonth();

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
