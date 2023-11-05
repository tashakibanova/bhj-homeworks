const form = document.getElementById("tasks__form");
const input = document.getElementById("task__input");
const list = document.getElementById("tasks__list");

// Обработчик события отправки формы
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Отмена действия по умолчанию (отправки формы)

  // Создание нового элемента задачи
  const task = document.createElement("div");
  task.className = "task"; // Установка класса элемента задачи

  // Создание элемента заголовка задачи
  const title = document.createElement("div");
  title.className = "task__title"; // Установка класса элемента заголовка задачи
  title.innerText = input.value; // Установка текста заголовка задачи

  // Создание элемента удаления задачи
  const removeBtn = document.createElement("a");
  removeBtn.className = "task__remove"; // Установка класса элемента удаления задачи
  removeBtn.href = "#"; // Установка ссылки для элемента удаления задачи
  removeBtn.innerText = "×"; // Установка текста для элемента удаления задачи

  // Добавление заголовка и кнопки удаления в элемент задачи
  task.appendChild(title);
  task.appendChild(removeBtn);

  // Добавление элемента задачи в список задач
  list.appendChild(task);

  // Очистка поля ввода
  input.value = "";
});

// Обработчик события клика на элементе удаления задачи
list.addEventListener("click", function(event) {
  // Проверка, что кликнули по элементу удаления задачи
  if (event.target.classList.contains("task__remove")) {
    const task = event.target.parentElement; // Получение родительского элемента задачи
    list.removeChild(task); // Удаление элемента задачи из списка задач
  }
});