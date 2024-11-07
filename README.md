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