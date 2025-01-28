// 1. Получите данные по адресу https://fakestoreapi.com/products.
// 2. Создайте файл data.js.
// 3. В файле data.js создайте переменную dataJSON, которая будет
// хранить эти данные в формате JSON.
// 4. Создайте вторую переменную data, в которой сохраните данные в
// формате массива на основе dataJSON.
// 5. Создайте файл index.html.
// 6. Подключите data.js в index.html.
// 7. Сформируйте контент из данных (картинка, заголовок, описание,
// цена и кнопка “Add to Cart”).
// 8. Добавьте данный контент в верстку в виде списка ul и li.
// 9. Добавьте стили при необходимости (по желанию).


const contentDiv = document.querySelector('.content__item');
const divElem = document.createElement('div');

divElem.classList = 'main-item';
contentDiv.appendChild(divElem);

const parsData = JSON.parse(dataJason);

parsData.forEach(element => {
	divElem.insertAdjacentHTML('beforeend', `
			<div class="product-list">
				<div class="product-list__imgbox">	
					<img class="product-list__img" src="${element.image}" alt="${element.title}">
				</div>
				<a href="#" class="product-list__title">${element.title}</a>
				<div class="product-list__descrbox">
					<p class="product-list__description">${element.description}</p>
				</div>
				<p class="product-list__category">${element.category}</p>
				<p class="product-list__price">${element.price}</p>
				<button class="product-list__button">Add to Cart</button>
			</div> 
		`);
});