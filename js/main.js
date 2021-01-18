const timerRef = document.querySelector('#timer-1');
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
   
//   });
const targetDate = new Date('Feb 25, 2021');


const timer = {
    start(){
        setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = targetDate - currentDate;
            updateClockface(deltaTime);
        }, 1000);
    }
}

timer.start();


function updateClockface (time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

function pad (value) {
    return String(value).padStart(2,'0')
}