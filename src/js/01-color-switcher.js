// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body > на случайное значение используя инлайн стиль.
// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const buttonStartREF = document.querySelector('button[data-start]');
const buttonStopREF = document.querySelector('button[data-stop]');
const bodyREF = document.querySelector('body');
let intervalId = null;

buttonStartREF.addEventListener('click', onStart);
buttonStopREF.addEventListener('click', onStop);

function onStart() {
  intervalId = setInterval(ChangeColor, 1000);
  buttonStartREF.setAttribute('disabled', true);
}
function onStop() {
  clearInterval(intervalId);
  buttonStartREF.removeAttribute('disabled');
}
function ChangeColor() {
  bodyREF.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
