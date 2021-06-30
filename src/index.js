import './sass/main.scss';

const CountdownTimer = function ({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate;

  this.showTimer = function (dd, hh, mm, ss) {
    const refTimer = document.querySelector(this.selector);
    const daysRef = refTimer.querySelector('[data-value="days"]');
    const hoursRef = refTimer.querySelector('[data-value="hours"]');
    const minsRef = refTimer.querySelector('[data-value="mins"]');
    const secsRef = refTimer.querySelector('[data-value="secs"]');
    daysRef.textContent = dd;
    hoursRef.textContent = hh;
    minsRef.textContent = mm;
    secsRef.textContent = ss;
  };
};

const timerCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

setInterval(() => {
  const currentDate = new Date();
  const time = timerCountdown.targetDate - currentDate;

  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  timerCountdown.showTimer(days, hours, mins, secs);
}, 1000);
