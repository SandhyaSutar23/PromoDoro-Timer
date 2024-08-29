const startEL = document.getElementById("start");
const stopEL = document.getElementById("stop");
const resetEl = document.getElementById("restart");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;
function updateTimer() {
  let Minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${Minutes.toString().padStart(2, "0")}: ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formattedTime;
}

function starttimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft == 0) {
      clearInterval(interval);
      alert("Times up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startEL.addEventListener("click", starttimer);
stopEL.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
timerEl.addEventListener("click", updateTimer);
