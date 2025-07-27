document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    function displayCurrencies(data) {
        itemsContainer.innerHTML = '';

        const valutes = data.response.Valute;
        for (const key in valutes) {
            if (valutes.hasOwnProperty(key)) {
                const valute = valutes[key];

                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';

                const codeDiv = document.createElement('div');
                codeDiv.className = 'item__code';
                codeDiv.textContent = valute.CharCode;

                const valueDiv = document.createElement('div');
                valueDiv.className = 'item__value';
                valueDiv.textContent = valute.Value.toFixed(2);

                const currencyDiv = document.createElement('div');
                currencyDiv.className = 'item__currency';
                currencyDiv.textContent = 'руб.';

                itemDiv.appendChild(codeDiv);
                itemDiv.appendChild(valueDiv);
                itemDiv.appendChild(currencyDiv);
                itemsContainer.appendChild(itemDiv);
            }
        }
    }

    function loadCurrencies() {
        loader.classList.add('loader_active');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        xhr.responseType = 'json';

        xhr.onload = function () {
            if (xhr.status === 200) {
                loader.classList.remove('loader_active');
                displayCurrencies(xhr.response);
                localStorage.setItem('currencyData', JSON.stringify(xhr.response));
                localStorage.setItem('currencyTimestamp', Date.now());
            }
        };

        xhr.onerror = function () {
            loader.classList.remove('loader_active');
            console.error('Ошибка при загрузке данных');
        };

        xhr.send();
    }

    const savedData = localStorage.getItem('currencyData');
    const savedTimestamp = localStorage.getItem('currencyTimestamp');
    const cacheTime = 5 * 60 * 1000;

    if (savedData && savedTimestamp && (Date.now() - savedTimestamp < cacheTime)) {
        displayCurrencies(JSON.parse(savedData));

        loadCurrencies();
    } else {
        loadCurrencies();
    }
});