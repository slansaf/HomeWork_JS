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