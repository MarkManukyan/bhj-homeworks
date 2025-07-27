document.addEventListener('DOMContentLoaded', function () {
    const cartProducts = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const decBtn = product.querySelector('.product__quantity-control_dec');
        const incBtn = product.querySelector('.product__quantity-control_inc');
        const quantityValue = product.querySelector('.product__quantity-value');

        decBtn.addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            if (value > 1) {
                quantityValue.textContent = --value;
            }
        });

        incBtn.addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            quantityValue.textContent = ++value;
        });
    });

    products.forEach(product => {
        const addBtn = product.querySelector('.product__add');

        addBtn.addEventListener('click', () => {
            const id = product.dataset.id;
            const image = product.querySelector('.product__image').src;
            const count = parseInt(product.querySelector('.product__quantity-value').textContent);

            const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

            if (existingProduct) {
                const currentCount = parseInt(existingProduct.querySelector('.cart__product-count').textContent);
                existingProduct.querySelector('.cart__product-count').textContent = currentCount + count;
            } else {
                const cartProduct = document.createElement('div');
                cartProduct.className = 'cart__product';
                cartProduct.dataset.id = id;

                cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${count}</div>
                `;

                cartProducts.appendChild(cartProduct);
            }

            animateAddToCart(product, cartProducts);
        });
    });

    function animateAddToCart(product, cart) {
        const productImage = product.querySelector('.product__image');
        const imageClone = productImage.cloneNode();
        imageClone.classList.add('product-shadow');

        const productRect = productImage.getBoundingClientRect();
        const cartRect = cart.getBoundingClientRect();

        imageClone.style.position = 'absolute';
        imageClone.style.left = `${productRect.left}px`;
        imageClone.style.top = `${productRect.top}px`;
        imageClone.style.width = `${productRect.width}px`;
        imageClone.style.height = `${productRect.height}px`;
        imageClone.style.transition = 'all 0.5s ease-out';

        document.body.appendChild(imageClone);

        setTimeout(() => {
            imageClone.style.left = `${cartRect.left}px`;
            imageClone.style.top = `${cartRect.top}px`;
            imageClone.style.width = '50px';
            imageClone.style.height = '50px';
            imageClone.style.opacity = '0.5';
        }, 0);

        setTimeout(() => {
            imageClone.remove();
        }, 500);
    }
});