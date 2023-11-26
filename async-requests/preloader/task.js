// Получаем элементы
const loader = document.getElementById('loader');
const items = document.getElementById('items');

// Функция для отправки GET-запроса
function sendRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}

// Загружаем данные о курсе валют
sendRequest('https://students.netoservices.ru/nestjs-backend/slow-get-courses', function(response) {
  // Скрываем анимацию загрузки
  loader.classList.remove('loader_active');

  // Парсим данные и вставляем их в элементы
  const valute = response.response.Valute;
  Object.keys(valute).forEach(function(key) {
    const item = document.createElement('div');
    item.classList.add('item');

    const code = document.createElement('div');
    code.classList.add('item__code');
    code.textContent = valute[key].CharCode;

    const value = document.createElement('div');
    value.classList.add('item__value');
    value.textContent = valute[key].Value;

    const currency = document.createElement('div');
    currency.classList.add('item__currency');
    currency.textContent = 'руб.';

    item.appendChild(code);
    item.appendChild(value);
    item.appendChild(currency);

    items.appendChild(item);
  });
});