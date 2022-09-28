const currentDate = document.querySelector(".current-date");
(daysTag = document.querySelector(".days")),
  (prevNextIcon = document.querySelectorAll(".icons span"));

// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

console.log(date, currYear, currMonth);

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

const renderCalendar = () => {
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();

  let liTag = "";

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    renderCalendar();
  });
});