document.addEventListener('DOMContentLoaded', function () {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;
        let timeoutId = null;

        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');

            currentIndex = (currentIndex + 1) % cases.length;

            const nextCase = cases[currentIndex];
            const speed = nextCase.dataset.speed || 1000;
            const color = nextCase.dataset.color || 'black';

            nextCase.style.color = color;
            nextCase.classList.add('rotator__case_active');
            clearTimeout(timeoutId);
            timeoutId = setTimeout(rotate, speed);
        }

        const firstCase = rotator.querySelector('.rotator__case_active');
        const initialSpeed = firstCase.dataset.speed || 1000;
        timeoutId = setTimeout(rotate, initialSpeed);
    });
});