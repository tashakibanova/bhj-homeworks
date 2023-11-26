document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const fileInput = document.getElementById('file');
    const fileNameLabel = document.getElementById('fileName');
    const form = document.getElementById('form');
  
    fileInput.addEventListener('change', function () {
      // Обновляем текст метки с именем файла
      fileNameLabel.textContent = fileInput.files[0].name;
    });
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const file = fileInput.files[0];
  
      if (file) {
        const xhr = new XMLHttpRequest();
        const url = form.action;
  
        xhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            progress.value = percentComplete;
          }
        });
  
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              console.log('Upload complete');
            } else {
              console.error('Upload failed with status:', xhr.status);
            }
          }
        };
  
        const formData = new FormData(form);
        xhr.open('POST', url, true);
        xhr.send(formData);
      }
    });
  });