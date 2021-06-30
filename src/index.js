import './sass/main.scss';

//=============== Реализации на базе ООП - Классы ===================
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.days = this.selector.querySelector('[data-value="days"]');
    this.hours = this.selector.querySelector('[data-value="hours"]');
    this.mins = this.selector.querySelector('[data-value="mins"]');
    this.secs = this.selector.querySelector('[data-value="secs"]');
  }
  pageUpdate({ days, hours, mins, secs }) {
    this.days.textContent = this.addZerro(days);
    this.hours.textContent = this.addZerro(hours);
    this.mins.textContent = this.addZerro(mins);
    this.secs.textContent = this.addZerro(secs);
  }
  timeUpdate(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
  setEndTime() {
    const time = this.targetDate - Date.now();
    const data = this.timeUpdate(time);
    this.pageUpdate(data);
  }

  showTimer() {
    setInterval(() => {
      this.setEndTime();
    }, 1000);
    this.setEndTime();
  }
  addZerro(data) {
    return String(data).padStart(2, '0');
  }
}

const timerCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timerCountdown.showTimer();

//=============== Реализации на базе функционального программирования - Функции ===================

// const CountdownTimer = function ({ selector, targetDate }) {
//   this.selector = selector;
//   this.targetDate = targetDate;
//   this.selector = document.querySelector(this.selector);
//   this.days = this.selector.querySelector('[data-value="days"]');
//   this.hours = this.selector.querySelector('[data-value="hours"]');
//   this.mins = this.selector.querySelector('[data-value="mins"]');
//   this.secs = this.selector.querySelector('[data-value="secs"]');

//   this.pageUpdate = function ({ days, hours, mins, secs }) {
//     this.days.textContent = days;
//     this.hours.textContent = hours;
//     this.mins.textContent = mins;
//     this.secs.textContent = secs;
//   };

//   this.timeUpdate = function (time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     return { days, hours, mins, secs };
//   };

//   this.setEndTime = function () {
//     const time = this.targetDate - new Date();
//     const data = this.timeUpdate(time);
//     this.pageUpdate(data);
//   };

//   this.showTimer = function () {
//     setInterval(() => {
//       this.setEndTime();
//     }, 1000);
//     this.setEndTime();
//   };
// };

// const timerCountdown = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });

// timerCountdown.showTimer();
