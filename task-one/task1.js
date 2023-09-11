const myTrack = "Front-end Developer";

document.getElementById("myTrack").innerHTML =myTrack;


const day= new Date();
const dayOFweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];


const currentDay = dayOFweek[day.getDay()];


document.getElementById("currentDayOfTheWeek").innerHTML = currentDay;






const currentDate = new Date();
const hours = currentDate.getUTCHours();
const minutes = currentDate.getUTCMinutes();

const seconds = currentDate.getUTCSeconds();

  let a = `${hours}: ${minutes}: ${seconds}`;

  document.getElementById('currentUTCTime').innerHTML = a;
  
