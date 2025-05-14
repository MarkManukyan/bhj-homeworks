let score = 0;
let misses = 0;

const deadSpan = document.getElementById('dead');
const lostSpan = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function randomHole() {
    const index = Math.floor(Math.random() * 9) + 1;
    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.classList.remove('hole_has-mole');
    }
    getHole(index).classList.add('hole_has-mole');
}

function updateScore() {
    deadSpan.textContent = score;
    lostSpan.textContent = misses;
}

function resetGame() {
    score = 0;
    misses = 0;
    updateScore();
    randomHole();
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            score++;
            alert(`Убито кротов: ${score}`);
        } else {
            misses++;
            alert(`Промахи: ${misses}`);
        }

        updateScore();

        if (score === 10) {
            alert('Поздравляем! Вы победили!');
            resetGame();
        } else if (misses === 5) {
            alert('Вы проиграли! Попробуйте снова.');
            resetGame();
        } else {
            randomHole();
        }
    };
}

updateScore();
randomHole();