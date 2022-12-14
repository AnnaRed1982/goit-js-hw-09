// В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки, при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.
// Библиотека flatpickr
// Используй библиотеку flatpickr для того чтобы позволить пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса.
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.
// // Описан в документации
// import flatpickr from "flatpickr";
// // Дополнительный импорт стилей
// import "flatpickr/dist/flatpickr.min.css";
// Библиотека ожидает что её инициализируют на элементе input[type="text"], поэтому мы добавили в HTML документ поле input#datetime-picker.
// <input type="text" id="datetime-picker" />
// Вторым аргументом функции flatpickr(selector, options) можно передать необязательный объект параметров.
// Мы подготовили для тебя объект который нужен для выполнения задания.Разберись за что отвечает каждое свойство в документации «Options» и используй его в своем коде.

// Выбор даты
// Метод onClose() из обьекта параметров вызывается каждый раз при закрытии элемента интерфейса который создает flatpickr.
// Именно в нём стоит обрабатывать дату выбранную пользователем.Параметр selectedDates это массив выбранных дат, поэтому мы берем первый элемент.
// Если пользователь выбрал дату в прошлом, покажи window.alert() с текстом "Please choose a date in the future".
// Если пользователь выбрал валидную дату (в будущем), кнопка «Start» становится активной.
// Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
// При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.

// Отсчет времени
// При нажатии на кнопку «Start» скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс таймера,
// показывая четыре цифры: дни, часы, минуты и секунды в формате xx: xx: xx: xx.
// Количество дней может состоять из более чем двух цифр.
// Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// НЕ БУДЕМ УСЛОЖНЯТЬ
// Если таймер запущен, для того чтобы выбрать новую дату и перезапустить его - необходимо перезагрузить страницу.
// Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.

// Форматирование времени
// Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты.Обрати внимание,
// что она не форматирует результат.То есть, если осталось 4 минуты или любой другой составляющей времени,
// то функция вернет 4, а не 04.В интерфейсе таймера необходимо добавлять 0 если в числе меньше двух символов.Напиши функцию addLeadingZero(value),
// которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.

// Библиотека уведомлений
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.
// Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
 

  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
      buttonStartREF.setAttribute('disabled', 'true');
      return;
    }

    buttonStartREF.removeAttribute('disabled');

    console.log(selectedDates[0].getTime());
    return selectedDates[0].getTime();
  },
};

const fp = flatpickr('#datetime-picker', options);
// console.table(fp);
const buttonStartREF = document.querySelector('button[data-start]');
const secondsREF = document.querySelector('span[data-seconds]');
const minutesREF = document.querySelector('span[data-minutes]');
const hoursREF = document.querySelector('span[data-hours]');
const daysREF = document.querySelector('span[data-days]');

const COUNTER_DELAY = 1000;
let timeSeconds = 0;
let selectedDate = 0;

selectedDate = fp.selectedDates[0].getTime();

buttonStartREF.setAttribute('disabled', 'true');
buttonStartREF.addEventListener('click', onStart);

console.log(selectedDate);

function onStart() {
  const originalDate = Date.now();
  console.log(originalDate);

  console.log(selectedDate);

  timeSeconds = originalDate - selectedDate;
  console.log(timeSeconds);
  console.log(convertMs(timeSeconds));

  const { days, hours, minutes, seconds } = convertMs(timeSeconds);
  days < 2 ? (daysREF.textContent = pad(days)) : (daysREF.textContent = days);
  hoursREF.textContent = pad(hours);
  minutesREF.textContent = pad(minutes);
  secondsREF.textContent = pad(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
