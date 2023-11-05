document.addEventListener("DOMContentLoaded", function() {
    let fontControls = document.querySelectorAll('.font-size');
    for (let i = 0; i < fontControls.length; i++) {
      fontControls[i].addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        let size = target.getAttribute('data-size');
        let book = document.getElementById('book');
  
        for (let j = 0; j < fontControls.length; j++) {
          fontControls[j].classList.remove('font-size_active');
        }
  
        target.classList.add('font-size_active');
  
        book.classList.remove('book_fs-big', 'book_fs-small');
  
        if (size === 'big') {
          book.classList.add('book_fs-big');
        } else if (size === 'small') {
          book.classList.add('book_fs-small');
        }
      });
    }
  });