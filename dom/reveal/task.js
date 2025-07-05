document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }

    function handleScroll() {
        reveals.forEach(reveal => {
            if (isElementInViewport(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }

    handleScroll();


    window.addEventListener('scroll', handleScroll);
});