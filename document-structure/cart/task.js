// Получаем все элементы с классом product
const products = document.querySelectorAll('.product');

// Добавляем обработчики событий для кнопок увеличения/уменьшения количества товаров
products.forEach(product => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const decButton = product.querySelector('.product__quantity-control_dec');
  const incButton = product.querySelector('.product__quantity-control_inc');

  decButton.addEventListener('click', () => {
    let quantity = parseInt(quantityValue.textContent);
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });

  incButton.addEventListener('click', () => {
    let quantity = parseInt(quantityValue.textContent);
    quantity++;
    quantityValue.textContent = quantity;
  });

  // Добавляем обработчик события для кнопки "Добавить в корзину"
  const addToCartButton = product.querySelector('.product__add');
  addToCartButton.addEventListener('click', () => {
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').getAttribute('src');
    const productQuantity = parseInt(quantityValue.textContent);
    
    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

    if (cartProduct) {
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      const currentQuantity = parseInt(cartProductCount.textContent);
      cartProductCount.textContent = currentQuantity + productQuantity;
    } else {
      const newCartProduct = document.createElement('div');
      newCartProduct.classList.add('cart__product');
      newCartProduct.dataset.id = productId;

      const productImageElement = document.createElement('img');
      productImageElement.classList.add('cart__product-image');
      productImageElement.src = productImage;
      newCartProduct.appendChild(productImageElement);

      const productCountElement = document.createElement('div');
      productCountElement.classList.add('cart__product-count');
      productCountElement.textContent = productQuantity;
      newCartProduct.appendChild(productCountElement);

      const cartProducts = document.querySelector('.cart__products');
      cartProducts.appendChild(newCartProduct);
    }
  });
});


