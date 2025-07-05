document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelector('.book__control_font-size');
    const colorControls = document.querySelector('.book__control_color');
    const bgControls = document.querySelector('.book__control_background');

    if (fontSizeControls) {
        fontSizeControls.addEventListener('click', function (e) {
            e.preventDefault();
            const target = e.target.closest('.font-size');

            if (!target) return;

            document.querySelectorAll('.font-size').forEach(el => {
                el.classList.remove('font-size_active');
            });

            target.classList.add('font-size_active');

            book.classList.remove('book_fs-small', 'book_fs-big');

            const size = target.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    }

    if (colorControls) {
        colorControls.addEventListener('click', function (e) {
            e.preventDefault();
            const target = e.target.closest('.color');

            if (!target || !target.dataset.textColor) return;

            colorControls.querySelectorAll('.color').forEach(el => {
                el.classList.remove('color_active');
            });

            target.classList.add('color_active');

            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            book.classList.add(`book_color-${target.dataset.textColor}`);
        });
    }

    if (bgControls) {
        bgControls.addEventListener('click', function (e) {
            e.preventDefault();
            const target = e.target.closest('.color');

            if (!target || !target.dataset.bgColor) return;

            bgControls.querySelectorAll('.color').forEach(el => {
                el.classList.remove('color_active');
            });

            target.classList.add('color_active');

            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            book.classList.add(`book_bg-${target.dataset.bgColor}`);
        });
    }
});