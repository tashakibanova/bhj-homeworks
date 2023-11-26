// Загрузка опроса
function loadPoll() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.onload = function() {
      if (xhr.status === 200) {
        const poll = JSON.parse(xhr.responseText);
        displayPoll(poll);
      }
    };
    xhr.send();
  }
  
  // Отображение вопроса и ответов
  function displayPoll(poll) {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
  
    pollTitle.textContent = poll.data.title;
  
    poll.data.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;
      button.addEventListener('click', function() {
        vote(poll.id, index);
        displayThankYouMessage();
      });
      pollAnswers.appendChild(button);
    });
  }
  
  // Отправка голоса
  function vote(pollId, answerIndex) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('vote=' + pollId + '&answer=' + answerIndex);
  }
  
  // Отображение сообщения "Спасибо, ваш голос засчитан!"
  function displayThankYouMessage() {
    alert('Спасибо, ваш голос засчитан!');
  }
  
  // Загрузка опроса при загрузке страницы
  window.onload = function() {
    loadPoll();
  };