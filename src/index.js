import './sass/main.scss';

const CountdownTimer = function ({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate;

  this.showTimer = function () {
    const refTimer = document.querySelector(this.selector);
    const daysRef = refTimer.querySelector('[data-value="days"]');
    const hoursRef = refTimer.querySelector('[data-value="hours"]');
    const minsRef = refTimer.querySelector('[data-value="mins"]');
    const secsRef = refTimer.querySelector('[data-value="secs"]');

    const time = this.targetDate - new Date();

    daysRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
    hoursRef.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minsRef.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    secsRef.textContent = Math.floor((time % (1000 * 60)) / 1000);
  };
};

const timerCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

setInterval(() => {
  timerCountdown.showTimer();
}, 1000);
