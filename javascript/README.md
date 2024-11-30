# Итоговое домашнее задание

## Задание 1
__Описание задачи:__ Дан объект ```numbers ```. Необходимо вывести в консоль все значения,
которые больше или равны 3.

```javascript
const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
};

```
### решение:

```javascript
for (const key in numbers) {
	if (numbers[key] >= 3) {
		console.log(key + ": " + numbers[key]);
	}
```

## Задание 2
__Описание задачи:__ Из объекта post, который задан в константе, выведите значения с
комментариями в консоль.

```javascript
const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
	{
	userId: 10,
	userName: "Alex",
	text: "lorem ipsum",
	rating: {
	likes: 10,
	dislikes: 2, // вывести это число
	},
	},
{
	userId: 5, // вывести это число
	userName: "Jane",
	text: "lorem ipsum 2", // вывести этот текст
	rating: {
	likes: 3,
	dislikes: 1,
	},
	},
],
};

```

### решение:

```javascript
console.log(post);
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
```

## Задание 3
Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
использованием метода forEach.

```javascript
const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];
```

### решение:

```javascript
// products.forEach(element => {
// 	element.price *=  0.85;
// });

// console.log(products);

for (let i = 0; i < products.length; i++) {
	products[i].price *= 0.85;
}

console.log(products);
```

## Задание 4
__Описание задачи:__
1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
фотография, используя метод filter.
2. Отсортируйте массив products по цене в порядке возрастания и выведите
отсортированный массив в консоль.

```javascript
const products = [
{
id: 3,
price: 127,
photos: ["1.jpg", "2.jpg"],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: ["3.jpg"],
},
{
id: 8,
price: 78,
},
];

```

### решение:

```javascript
const isSomOneImg = products2.filter(product => product.photos &&	product.photos.length > 0);
console.log(isSomOneImg);

const isSortedProducts = products2.sort((item1, item2) => item1.price - item2.price);
console.log(isSortedProducts);
```

## Задание 5 Необязательное задание
Описание задачи: Есть два массива en и ru. Объедините их в объект, где значения из
первого массива будут ключами, а значения из второго массива — значениями.

```javascript
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

```

### решение:

```javascript
const ruEn = {};

if (en.length === ru.length) {
	for (let i = 0; i < en.length; i++) {
		ruEn[en[i]]= ru[i];
		
	}
} else {
	console.log(`Массивы не совместимы по длине ${en.length} не равно ${ru.length}`);
}

console.log(ruEn);
```

# Домашнее задание к урокам 1-2:

## Задание 1
```javascript
let degreesCelsius = 10;
let degreesFahrenheit = ((9/5) * degreesCelsius) + 32;

console.log(`Градусы Цельсия: ${degreesCelsius} градусов`);
console.log(`Градусы Фарингейта: ${degreesFahrenheit} градусов`);
```
## Задание 2
```javascript
let name = 'Ruslan';

let admin = name;

console.log(`Имя админа: ${admin}`);
```

# Домашнее задание к урокам 3-4:

## Задание 1

1. Создайте переменные num1 и num2, значения которых пользователь вводит с
клавиатуры.
2. Проверьте, что переменная num1 меньше или равна 1, а переменная num2
больше или равна 3.


```javascript
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

(num1 <= num2 && num2 >= 3)? console.log('Условия выполнены')  : console.log('Условия не выполнены');

```
## Задание 2

**Описание задачи** : Перепишите следующий код с использованием тернарного
оператора:

```javascript
let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}
```
**Решение:**

```javascript
let test = true;
(test === true)? console.log('+++') : console.log('---');
```

## Задание 3
**Описание задачи:** В переменной day хранится число от 1 до 31. Определите, в какую декаду месяца попадает это число (первая, вторая или третья декада).

```javascript
let day = Number(prompt('Введите число от 1 до 31'));

if(day >= 1 && day <= 10){
	console.log('Первая декада месяца');
} else if (day >= 11 && day <= 20) {
	console.log('Вторая декада месяца');
} else if (day >= 21 && day <= 31){
	console.log('Третяя декада месяца');
} else {
	console.log('Введено неверное значение числа');
}
```

## Задание 4
**Описание задачи:**
1. Получите от пользователя число.
2. Выведите разряды числа: количество сотен, десятков и единиц.

```javascript

let num = Number(prompt('Введите число'));

console.log(`Вы ввели число: ${num}`);
console.log(`Единицы: ${num%10}`);
console.log(`Десятки: ${Math.floor(num%100/10)}`);
console.log(`Сотни: ${Math.floor(num%1000/100)}`);

```

# Домашнее задание к урокам 5-6:

## Задание 1

Описание задачи: Создайте функцию, которая возводит переданное число в куб.
Необходимо использовать эту функцию для вычисления и вывода в консоль
результата $2^3$ + $3^3$

## Решение

```javascript
function cubeization(number) {
	return number ** 3;
}

let rezult = cubeization(2) + cubeization(3);

console.log(rezult);

```

## Задание 2
Описание задачи:
1. Пользователь вводит с клавиатуры число. Если введён текст, необходимо
вывести сообщение о неверном значении.
2. Создайте функцию, которая вычисляет 13% от данного числа и выводит в
консоль текст: "Размер заработной платы за вычетом налогов равен “значение”".

## Решение

```javascript
function salary(many) {
	return many * 0.87;
}

let number = parseFloat(prompt('Введите число, которое соответствует вашей зарплате'));

if (isNaN(number)) {
	console.log('Вы ввели неверное значение');
} else {

	let result = salary(number)
	console.log(`Размер заработной плтаты за вычетом налогов равен ${result} рублей`);
}
```

## Задание 3
Описание задачи: Пользователь вводит с клавиатуры 3 числа. Создайте функцию,
которая определяет максимальное значение среди этих чисел

## Решение

```javascript
function maximum(num1, num2, num3) {
	let max = 0;
	if (num1 > num2 && num1 > num3) {
		max = num1;
	} else if(num2 > num1 && num2 > num3){
		max = num2;
	} else{
		max = num3;
	}

	return max;
}

let number1 = parseInt(prompt('Введите число №1'));
let number2 = parseInt(prompt('Введите число №2'));
let number3 = parseInt(prompt('Введите число №3'));

console.log(`Максимальное число ${maximum(number1, number2, number3)}`);
```


## Задание 4
Описание задачи: Реализуйте четыре функции, каждая из которых выполняет одну из
следующих операций с двумя числами:
1. Сложение
2. Вычитание
3. Умножение
4. Деление

Функции должны возвращать результат операции.

## Решение

```javascript
function summation(num1, num2) {
	return num1 + num2;
}

function subtraction(num1, num2) {

	if (num1 > num2) {
		return num1 - num2;
	} else{
		return num2 - num1;
	}
	
}

function multiplication(num1, num2) {
	return num1 * num2;
}

function division(num1, num2) {
	if (num1 > num2 && num2 !== 0) {
		return num1 / num2;
	} else if (num2 > num1 && num1 !== 0) {
		return num2 / num1;
	} else {
		console.log('Введены неверные значения');
	}
}

let number1 = parseInt(prompt('Введите первое число'));
let number2 = parseInt(prompt('Введите второе число'));

console.log(`Сумма чисел равна ${summation(number1, number2)}`);
console.log(`Разность чисел равна ${subtraction(number1, number2)}`);
console.log(`Произведение чисел равна ${multiplication(number1, number2)}`);
console.log(`Деление чисел равна ${division(number1, number2)}`);
```

# Домашнее задание к урокам 7-8:

## Задание 1

__Описание задачи__: Используя цикл for, выведите в консоль 11 строк, где каждая
строка содержит индекс и описание числа (0 - это ноль, 1 - нечетное число, 2 - четное
число и т.д.).
### решение:

```javascript
	for (let index = 0; index <= 11; index++){
	if (index === 0) {
		console.log(`${index} - это ноль!`);
	} else if(index % 2 === 0){
		console.log(`${index} - четное число`);
	}
	else if(index % 2 === 1){
		console.log(`${index} - нечетное число`);
	}
	else {
		console.log('Что-то пошло не так!');
	}
}
```

## Задание 2

__Описание задачи__: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].

### решение:

```javascript
const array =  [1, 2, 3, 4, 5, 6, 7];
array.splice(array.indexOf(4), 2);
console.log(array);
```

## Задание 3

__Описание задачи__: 

1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
2. Рассчитайте сумму элементов массива.
3. Найдите минимальное число в массиве.
4. Определите, есть ли в массиве число 3.


### решение:

```javascript
const array = [];

for (let i = 0; i < 5; i++) {
	array.push(Math.floor(Math.random()*9));
}
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
	sum += array[i];
}

console.log(`Смма чисел: ${sum}`);
console.log(`Минимальное значение массива: ${Math.min(...array)}`);
console.log(`Есть ли в массиве цифра 3: ${array.includes(3)}`);
```

## Задание 4

__Описание задачи__: Используя цикл for, выведите в консоль "горку" из символов x с 20
рядами.


### решение:

```javascript

for (let i = 1; i <= 20; i++) {
	console.log('x'.repeat(i));
	}
```