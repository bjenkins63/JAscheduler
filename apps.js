const calendar = document.querySelector("#app-calendar");

const isWeekend = day => {
  //6 when it's sat, 0 when sun
  return day % 7 === 6 || day % 7 === 0;
}

for(let day = 1; day <= 31; day++) {
  
  const weekend = isWeekend(day)

  calendar.insertAdjacentHTML("beforeend" `<div 
  class="day ${weekend ? "weekend" : ""} weekend">${day}</div>`);
}