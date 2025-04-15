document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        // Обработчик клика по значению dropdown
        valueElement.addEventListener('click', (event) => {
            event.stopPropagation(); // Предотвращаем всплытие события
            listElement.classList.toggle('dropdown__list_active');
        });

        // Обработчик клика по элементам списка
        const items = dropdown.querySelectorAll('.dropdown__item');

        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Запрещаем переход по ссылке
                const selectedValue = item.textContent; // Получаем текст выбранного элемента
                valueElement.textContent = selectedValue; // Устанавливаем новое значение
                listElement.classList.remove('dropdown__list_active'); // Закрываем список
            });
        });
    });

    // Закрытие всех dropdown при клике вне их области
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            const listElement = dropdown.querySelector('.dropdown__list');
            listElement.classList.remove('dropdown__list_active');
        });
    });
});