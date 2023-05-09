function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}
runClock(); // run the function once to avoid delay

setInterval(runClock, 1000); // run the function every second (1000ms)
function runClock() {
  // declare variables for current date and time
  var thisDay = new Date();
  var thisDate = thisDay.toLocaleDateString();
  var thisDayNum = thisDay.getDay();
  var thisWeekday = getWeekday(thisDayNum);
  var thisTime = thisDay.toLocaleTimeString();

  // update the date, weekday, and time in the document
  document.getElementById("date").textContent = thisDate;
  document.getElementById("wday").textContent = thisWeekday;
  document.getElementById("time").textContent = thisTime;
runClock(); // run the function once to avoid delay

setInterval(runClock, 1000); // run the function every second (1000ms)
