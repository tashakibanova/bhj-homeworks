// Получаем все элементы с классом "has-tooltip"
const tooltips = document.querySelectorAll('.has-tooltip');

// Создаем функцию для добавления/удаления класса "tooltip_active"
const toggleTooltip = (tooltip) => {
  tooltip.classList.toggle('tooltip_active');
};

// Создаем функцию для позиционирования подсказки
const positionTooltip = (tooltip, element) => {
  const rect = element.getBoundingClientRect();
  
  tooltip.style.top = rect.top + window.scrollY + element.offsetHeight + 'px';
  tooltip.style.left = rect.left + 'px';
};

// Добавляем обработчик клика на каждый элемент с классом "has-tooltip"
tooltips.forEach((element) => {
  const tooltipText = element.getAttribute('title');
  
  // Создаем элемент подсказки
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = tooltipText;
  
  // Удаляем значение атрибута "title", чтобы избежать всплывающей подсказки браузера
  element.removeAttribute('title');
  
  // Добавляем обработчик клика на элемент
  element.addEventListener('click', (e) => {
    // Отменяем действие по умолчанию (например, переход по ссылке)
    e.preventDefault();
    
    // Переключаем класс "tooltip_active" для показа/скрытия подсказки
    toggleTooltip(tooltip);
    
    // Позиционируем подсказку относительно элемента
    positionTooltip(tooltip, element);
  });
  
  // Добавляем подсказку в документ
  document.body.appendChild(tooltip);
});