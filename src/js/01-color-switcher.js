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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onStartChangeColor() {
  bodyREF.style.backgroundColor = getRandomHexColor();
}

const buttonStartREF = document.querySelector('button[data-start]');
const buttonStopREF = document.querySelector('button[data-stop]');
const bodyREF = document.querySelector('body');

buttonStartREF.addEventListener('click', () => {
  const intervalId = setInterval(onStartChangeColor, 1000);
  buttonStartREF.setAttribute('disabled', true);

  buttonStopREF.addEventListener('click', () => {
      clearInterval(intervalId);
      buttonStartREF.removeAttribute('disabled')
  });
});

// console.log(bodyREF);
// console.log(buttonStop);
// console.log(buttonStart);
// function onStopChangeColor(intervalId) {
//   clearInterval(intervalId);
// }
