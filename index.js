import refs from './refs.js'

class CountDown {
    constructor({onTick}, date) {
        this.onTick = onTick
        this.date = date
    }
    getCountDown() {
        const targetDate = new Date(this.date)

        setInterval(() => {
            const currentTime = Date.now();
            const time = targetDate - currentTime;
            const CountDown = this.getTimeComponents(time);
              
            this.onTick(CountDown)
        }, 1000)
    }

    startTime() {
         this.getCountDown()
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return ({ days, hours, mins, secs })
    }


    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const timer = new CountDown({
    onTick: upDateTimer
}, 'Jan 01, 2022')

function upDateTimer({days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}
 
timer.startTime();
 
  