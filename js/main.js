class CountdownTimer{
    constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    }
    
    refs = {
        days: document.querySelector('[data-value="days"]'),
        hours: document.querySelector('[data-value="hours"]'),
        mins: document.querySelector('[data-value="mins"]'),
        secs: document.querySelector('[data-value="secs"]'),
        timer: document.querySelector('#timer-1')
    }

    start(){
        setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = this.targetDate - currentDate;
            this.updateClockface(deltaTime);
            }, 1000);
        }

    updateClockface (time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    pad (value) {
        return String(value).padStart(2,'0')
    }
  };

  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 25, 2021'),
  });

  timer.start();