class CountdownTimer{
    constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    }
    
    getRefs() {
        const timerId = document.querySelector(this.selector);
        return {
        days: timerId.querySelector('[data-value="days"]'),
        hours: timerId.querySelector('[data-value="hours"]'),
        mins: timerId.querySelector('[data-value="mins"]'),
        secs: timerId.querySelector('[data-value="secs"]'),
        timer: timerId.querySelector('#timer-1')
        }
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
        this.getRefs().days.textContent = days;
        this.getRefs().hours.textContent = hours;
        this.getRefs().mins.textContent = mins;
        this.getRefs().secs.textContent = secs;
    }

    pad (value) {
        return String(value).padStart(2,'0')
    }

    
  };

  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 25, 2021'),
  });

  
