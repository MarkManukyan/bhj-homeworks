document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');
    const fileInput = document.getElementById('file');
    const fileNameSpan = document.querySelector('.input__wrapper-desc');

    fileInput.addEventListener('change', function () {
        if (this.files.length > 0) {
            fileNameSpan.textContent = this.files[0].name;
        } else {
            fileNameSpan.textContent = 'Имя файла...';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!fileInput.files.length) {
            alert('Пожалуйста, выберите файл для загрузки');
            return;
        }

        const xhr = new XMLHttpRequest();
        const formData = new FormData(form);

        xhr.open('POST', this.action);
        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progress.value = percentComplete;
            }
        };

        xhr.onload = function () {
            if (xhr.status === 201) {
                alert('Файл успешно загружен!');
                progress.value = 0;
                fileNameSpan.textContent = 'Имя файла...';
                form.reset();
            } else {
                alert('Ошибка при загрузке файла: ' + xhr.statusText);
            }
        };

        xhr.onerror = function () {
            alert('Произошла ошибка сети');
        };

        xhr.send(formData);
    });
});