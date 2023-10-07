let timerValue = 59; //стартовое значение таймера
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
  timerValue--; // Уменьшаем значение таймера на 1
  timerElement.textContent = timerValue; // Обновляем значение элемента на странице
  if (timerValue === 0) {
    clearInterval(countdown); // Останавливаем таймер
    alert("Вы победили в конкурсе!"); // Выводим сообщение об победе
  }
}, 1000);