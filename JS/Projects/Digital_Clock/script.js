const clockHour = document.getElementById('clockHour');
const clockMinute = document.getElementById('clockMinute');
const clockSecond = document.getElementById('clockSecond');
const amPm = document.getElementById('amPm');

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;     // Stores Remainder
  hours = hours ? hours : 12; // the hour '0' should be '12'

  clockHour.innerHTML = String(hours).padStart(2, '0');
  clockMinute.innerHTML = String(minutes).padStart(2, '0');
  clockSecond.innerHTML = String(seconds).padStart(2, '0');
  amPm.innerHTML = ampm;
  requestAnimationFrame(updateClock);
}

updateClock();
