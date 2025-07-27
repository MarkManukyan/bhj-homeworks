document.addEventListener('DOMContentLoaded', function () {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    function loadPoll() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.responseType = 'json';

        xhr.onload = function () {
            if (xhr.status === 200) {
                const pollData = xhr.response.data;

                pollTitle.textContent = pollData.title;

                pollAnswers.innerHTML = '';
                pollData.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.className = 'poll__answer';
                    button.textContent = answer;
                    button.addEventListener('click', function () {
                        alert('Спасибо, ваш голос засчитан!');
                    });

                    pollAnswers.appendChild(button);
                });
            } else {
                console.error('Ошибка при загрузке опроса');
            }
        };

        xhr.onerror = function () {
            console.error('Ошибка сети при загрузке опроса');
        };

        xhr.send();
    }
    loadPoll();
});