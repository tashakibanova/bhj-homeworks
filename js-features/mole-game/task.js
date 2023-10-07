const dead = document.getElementById( "dead" ); //опадания
const lost = document.getElementById( "lost" ); //промах

//Сброс статистики
function resetStatistic() {
  dead.textContent = 0;
  lost.textContent = 0;
};

for(let i = 1; i <= 9; i++) {
  let hole = document.getElementById(`hole${i}`); 
  //игра
  hole.addEventListener('click', () => {
    console.log("Клик!");
    if(hole.classList.contains('hole_has-mole')) {  // проверяет попадание
      dead.textContent++;
    } else {
      lost.textContent++;
    };
    //результат 
    if(lost.textContent >= 5) {
      resetStatistic();
      return alert("Вы проиграли!");
    } else if (dead.textContent >= 10) {
      resetStatistic();
      return alert("Победа!");
    };
  });
};