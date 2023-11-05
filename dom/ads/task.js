document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ротаторы на странице
    let rotators = document.querySelectorAll('.rotator');
  
    // Для каждого ротатора устанавливаем интервал
    rotators.forEach(function(rotator) {
      let cases = rotator.querySelectorAll('.rotator__case');
      let currentIndex = 0;
  
      setInterval(function() {
        // Скрываем текущий элемент
        cases[currentIndex].classList.remove('rotator__case_active');
  
        // Увеличиваем индекс
        currentIndex++;
        if (currentIndex >= cases.length) {
          currentIndex = 0;
        }
  
        // Показываем следующий элемент
        cases[currentIndex].classList.add('rotator__case_active');
      }, 1000);
    });
  });