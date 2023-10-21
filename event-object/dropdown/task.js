// Находим все кнопки на странице
const buttons = document.querySelectorAll('.dropdown__value');

// Проходимся по каждой кнопке
buttons.forEach(button => {
    const dropdownList = button.nextElementSibling; // Находим список, следующий после кнопки
  
    // Добавляем класс сворачивания списка
    dropdownList.classList.remove('dropdown__list_active');
  
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Запрещаем переход по ссылке
  
      // Переключаем класс активности списка
      dropdownList.classList.toggle('dropdown__list_active');
  
      // Если список открыт
      if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.addEventListener('click', (e) => {
          e.preventDefault(); // Запрещаем переход по ссылке
          const selectedItem = e.target.textContent; // Получаем текст выбранного пункта
          button.textContent = selectedItem; // Заменяем значение кнопки
          dropdownList.classList.remove('dropdown__list_active'); // Закрываем список
        });
      }
    });
  });