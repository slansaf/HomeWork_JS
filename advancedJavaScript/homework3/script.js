  // Функция для добавления отзыва
document.getElementById('add-review-button')?.addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const reviewText = document.getElementById('review-text').value;

    if (productName && reviewText) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (!reviews[productName]) {
            reviews[productName] = [];
        }
        reviews[productName].push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Очистка полей после добавления
        document.getElementById('product-name').value = '';
        document.getElementById('review-text').value = '';
        alert('Отзыв добавлен!');
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Функция для отображения отзывов
function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    for (const product in reviews) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product}</h3>`;

        // Создаем список отзывов для каждого продукта
        reviews[product].forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <p>${review}</p>
                <button onclick="deleteReview('${product}', ${index})">Удалить</button>
            `;
            productDiv.appendChild(reviewDiv);
        });

        productList.appendChild(productDiv);
    }
}

// Функция для удаления отзыва
function deleteReview(product, index) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (reviews[product]) {
        reviews[product].splice(index, 1); 
        if (reviews[product].length === 0) {
            delete reviews[product]; 
        }
        localStorage.setItem('reviews', JSON.stringify(reviews));
        displayReviews(); 
    }
}

// Инициализация страницы просмотра отзывов
if (document.getElementById('product-list')) {
    displayReviews();
}
