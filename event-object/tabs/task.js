// Получаем элементы переключателей вкладок
const tabsNav = document.querySelectorAll("#tabs1 .tab");

// Обработчик события клика на переключателе вкладки
const tabClickHandler = function() {
    // Получаем номер вкладки, на которую кликнули
    const tabIndex = Array.from(tabsNav).indexOf(this);
    
    // Получаем контейнер содержимого вкладок
    const tabContents = document.querySelector("#tabs1 .tab__contents");
    
    // Удаляем классы активности у всех вкладок и контента
    tabsNav.forEach(tab => tab.classList.remove("tab_active"));
    tabContents.querySelectorAll(".tab__content").forEach(content => content.classList.remove("tab__content_active"));
    
    // Добавляем класс активности для выбранной вкладки и соответствующего контента
    this.classList.add("tab_active");
    tabContents.querySelectorAll(".tab__content")[tabIndex].classList.add("tab__content_active");
};

// Регистрируем обработчик события клика на каждом переключателе вкладки
tabsNav.forEach(tab => tab.addEventListener("click", tabClickHandler));