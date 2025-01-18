// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
// теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function (e) {
	console.log("Все теги прогрузились!");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
// ресурсы страницы будут загружены.

window.addEventListener("load", function (e) {
	console.log("Страница загрузилась!");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться
// сообщение следующего вида:
// ○ Класс "super_element" присутствует в элементе "div".
// ○ Сообщение должно определять присутствует ли класс "super_element" у
// элемента и выводить в нижнем регистре верный тег в данной строке, по
// которому был совершен клик.
// ○ Необходимо использовать делегирование.

document.body.addEventListener('click', (event) => {
	const target = event.target;
	const tagName = target.tagName.toLowerCase();
	const hasSuperClass = target.classList.contains('super_element');
	if (hasSuperClass) {
		console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
	} else {
		console.log(`Класс "super_element" отсутствует в 	элементе "${tagName}".`);
	}
	});
	

// 4. Сделайте так, чтобы при наведении на <textarea> в консоли появлялось
// сообщение: "Вы навели на textarea."

const textArea = document.querySelector(".textarea");
const funMouseOver = function () {
	console.log("Вы навели на textarea!");
	textArea.removeEventListener("mouseover", funMouseOver);
};

textArea.addEventListener("mouseover", funMouseOver);

// 5. Необходимо повесить событие клика на тег <ul>. В обработчике события в
// консоль выводите текст, который записан внутри элемента кнопки, по которой
// был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
// Необходимо использовать делегирование.

const ulElem = document.querySelector("ul");
const butn = document.querySelector("selector");

ulElem.addEventListener("click", function (event) {
	if (event.target.tagName === "BUTTON") {
		console.log(event.target.textContent);
	} 
});

// 6. Вопрос: Почему в console.log сначала пишется текст из 5 задания и только
// потом текст из 3 задания, если мы кликаем по кнопкам в <ul>? Ответ
// необходимо написать здесь же, под этим комментарием, своими словами.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега
// <li>.

const item = document.querySelectorAll('.item');
console.log(item);

item.forEach((element, index) => {
	if (index % 2 == 1) {
		element.style.backgroundColor = '#567';

	}
});

