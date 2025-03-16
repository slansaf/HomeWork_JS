const initialData = [
	{
		product: "Apple iPhone 13",
		reviews: [
			{ id: "1", text: "Отличный телефон! Батарея держится долго." },
			{ id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
		],
	},
	{
		product: "Samsung Galaxy Z Fold 3",
		reviews: [
			{ id: "3", text: "Интересный дизайн, но дорогой." },
		],
	},
	{
		product: "Sony PlayStation 5",
		reviews: [
			{ id: "4", text: "Люблю играть на PS5, графика на высоте." },
		],
	},
];

const reviewContainer = document.getElementById('reviewContainer');
const reviewInput = document.getElementById('reviewInput');
const submitReviewButton = document.getElementById('submitReview');

// Функция для отображения отзывов
function displayReviews() {
	reviewContainer.innerHTML = ''; // Очищаем контейнер
	initialData.forEach(product => {
		product.reviews.forEach(review => {
			const reviewElement = document.createElement('div');
			reviewElement.className = 'review';
			reviewElement.textContent = review.text;
			reviewContainer.appendChild(reviewElement);
		});
	});
}

// Функция для добавления отзыва
function addReview(text) {
	if (text.length < 10 || text.length > 100) {
		throw new Error('Длина отзыва должна быть от 50 до 500 символов.');
	}

	const newReview = {
		id: (initialData.reduce((maxId, product) => {
			return Math.max(maxId, ...product.reviews.map(review => parseInt(review.id)));
		}, 0) + 1).toString(),
		text: text,
	};

	// Добавляем новый отзыв к первому продукту (можно изменить логику)
	initialData[0].reviews.push(newReview);
	displayReviews();
}

// Обработчик события для кнопки отправки отзыва
submitReviewButton.addEventListener('click', () => {
	const reviewText = reviewInput.value.trim();
	try {
		addReview(reviewText);
		 reviewInput.value = ''; // Очищаем текстовое поле
	} catch (error) {
		alert(error.message);
	}
});

// Инициализация отображения отзывов
displayReviews();
