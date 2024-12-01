"use strict";

/* 1. Найдите элемент по id, используя getElementById, элемент с id равным
"super_link" и выведите этот элемент в консоль.*/

const super_link = document.getElementById('super_link');
console.log(super_link);

/* 2. Внутри всех элементов на странице, которые имеют класс card-link,
поменяйте текст внутри элемента на "ссылка".*/

const cardLink = document.querySelectorAll('.card-link');
console.log(cardLink);
cardLink.forEach(link => {
	console.log(link);
	link.textContent = '"ссылка"';
});

/* 3. Найдите все элементы на странице с классом card-link, которые лежат в
элементе с классом card-body, и выведите полученную коллекцию в консоль.*/

const cardBodyEl = document.querySelectorAll('.card-body .card-link');
console.log(cardBodyEl);

cardBodyEl.forEach(elem => {
	console.log(elem);
});

cardBodyEl[1].href =  'https://yandex.ru';

/* 4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50, и выведите его в консоль.*/

const dataNum = document.querySelector('[data-number="50"]');
console.log(dataNum);
/*5. Выведите содержимое тега title в консоль. */

const title = document.querySelector('title');
console.log(title.textContent);
/*6. Получите элемент с классом card-title и выведите его родительский узел в
консоль. */
const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

/*7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс card. */

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Привет';

const forNewCard = document.querySelector('.card');
forNewCard.insertBefore(newParagraph, forNewCard.firstChild);

/*8. Удалите тег h6 на странице. */

const tegh6 = document.querySelector('h6');
if(tegh6){
	tegh6.remove();
}

const content = document.querySelector('.content');
const button = document.querySelector('.butn');
const textNum = document.createElement('p');
content.appendChild(textNum);
let i = 0;

button.addEventListener('click', function(e){
	textNum.textContent = ++i;
	console.log(i);
	button.textContent = 'Нажми ешё раз!'
});