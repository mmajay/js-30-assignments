const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".seconds-hand");

function updateClock() {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = currentTime.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = currentTime.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function startClock() {
  setInterval(updateClock, 1000);
}

startClock();
