let counter = 0; // Счетчик кликов
let isDecreasing = false; // Флаг для определения текущего состояния печеньки

const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

cookieElement.addEventListener('click', () => {
    counter++; // Увеличиваем счетчик кликов
  
    if (isDecreasing) {
      cookieElement.style.width = '400px'; // Увеличиваем ширину печеньки
      isDecreasing = false; // Переключаем флаг состояния печеньки
    } else {
      cookieElement.style.width = '200px'; // Уменьшаем ширину печеньки
      isDecreasing = true; // Переключаем флаг состояния печеньки
    }

counterElement.textContent = counter; // Обновляем значение счетчика в HTML
});