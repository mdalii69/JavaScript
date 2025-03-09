const clockHour = document.getElementById('clockHour');
setInterval( () => {
    let date = new Date()
    hour = date.getHours();
    clockHour.innerHTML = hour <= 12 ? hour : (hour - 12);
}, 1000);

const clockMin = document.getElementById('clockMinute');
setInterval( () => {
    let date = new Date()
    clockMin.innerHTML = date.getMinutes();
}, 1000);

const clockSec = document.getElementById('clockSecond');
setInterval( () => {
    let date = new Date()
    clockSec.innerHTML = date.getSeconds();
}, 1000);

const amPm = document.getElementById('amPm');
setInterval( () => {
    let date = new Date()
    hour = date.getHours();
    amPm.innerHTML = hour >= 12 ? 'PM' : 'AM';
}, 1000);
