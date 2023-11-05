// Получаем все элементы с классом "reveal"
const revealElements = document.querySelectorAll('.reveal');

// Функция, которая проверяет положение элемента относительно окна и добавляет класс "reveal_active"
const revealElementWhenVisible = () => {
  // Перебираем все элементы с классом "reveal"
  revealElements.forEach(element => {
    // Получаем расположение элемента относительно окна
    const bounding = element.getBoundingClientRect();
    
    // Проверяем, если элемент находится в поле зрения окна
    if ( 
      bounding.top >= 0 && 
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      // Добавляем класс "reveal_active" к элементу
      element.classList.add('reveal_active');
    }
  });
};

// Слушаем событие прокрутки окна
window.addEventListener('scroll', revealElementWhenVisible);

// Вызываем функцию для первоначальной проверки видимости элементов при загрузке страницы
revealElementWhenVisible();