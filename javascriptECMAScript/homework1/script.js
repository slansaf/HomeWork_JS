// Задание №1
// Нахождение минимального числа в массиве
// Дан массив const arr = [1, 5, 7, 9]. Используя метод Math.min и оператор
// распространения (spread operator), найдите минимальное число в массиве. Решение
// должно быть написано в одной строке.

const arr = [12, 5, 7, 9];
console.log(Math.min(...arr));

// Задание №2
// Создание счетчика
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с
// тремя методами: increment, decrement и getValue. Метод increment должен
// увеличивать значение счетчика на 1, метод decrement должен уменьшать значение
// счетчика на 1, а метод getValue должен возвращать текущее значение счетчика.
// Значение счетчика должно быть доступно только через методы объекта, а не
// напрямую.

function createCounter() {
	let count = 0; // Приватное свойство
	return {
	increment() {
	count++;
	return count;
	},
	decrement() {
	count--;
	return count;
	},
	getValue() {
	return count; // Для получения текущего значения счетчика
	}
	};
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());

// Задание №3
// Рекурсивный поиск элемента по классу
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
	if (root.classList.contains(className)) {
		return root;
	}
	for (let i = 0; i < root.children.length; i++) {
		const found = findElementByClass(root.children[i], className);
		if (found) {
			return found;
		}
	}
	return null; 
}

const rootElement = document.querySelector('.root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); 