// 1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
// super-dropdown. Используйте методы forEach и querySelectorAll, а
// также свойство classList у элементов.

const dropdownItem = document.querySelectorAll('.dropdown-item');

dropdownItem.forEach(element => {
	element.classList.add('super-dropdown')
	console.log(element);
});

// 2. У элемента с классом btn необходимо убрать класс btn-secondary, если он
// присутствует у этого элемента, либо добавить, если такого класса у элемента
// не было.

const button = document.querySelector('.btn');

const butTrue = button.classList.contains('btn-secondary');
if (butTrue) {
	button.classList.remove ('btn-secondary');
} else {
	button.classList.add ('btn-secondary');
}

console.log(button);

// 3. Необходимо удалить класс dropdown-menu у элемента, у которого
// присутствует класс menu.

const menuEl = document.querySelectorAll('.menu');
menuEl.forEach(element => {
	element.classList.remove('dropdown-menu');
	console.log(element);
});

// 4. Используя метод insertAdjacentHTML, добавьте после div с классом
// dropdown следующую разметку: <a href="#">link</a>.

const divDropDown = document.querySelector('.dropdown');
console.log(divDropDown);
const link = document.createElement('a')
link.textContent = 'Link';
link.href = '#';
divDropDown.nextElementSibling.insertAdjacentElement('afterend', link);

// 5. У элемента с id="dropdownMenuButton" замените id на superDropdown.

const idElem = document.querySelector('#dropdownMenuButton');
idElem.id = 'superDropdown';
console.log(idElem);

// 6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует
// атрибут aria-labelledby, равный dropdownMenuButton, используя
// dataset.

const ariaElem = document.querySelector('[aria-labelledby="dropdownMenuButton"]');

if(ariaElem){
	ariaElem.dataset.dd = '3';
}

// 7. Удалите атрибут type у элемента с классом dropdown-toggle.

const dropdownToggle = document.querySelector('.dropdown-toggle');
console.log(dropdownToggle);
if(dropdownToggle){
	dropdownToggle.removeAttribute('type');
}
