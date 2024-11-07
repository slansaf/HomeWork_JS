// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));

// (num1 <= num2 && num2 >= 3)? console.log('Условия выполнены')  : console.log('Условия не выполнены');


// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// (test === true)? console.log('+++') : console.log('---');;

// let day = Number(prompt('Введите число от 1 до 31'));

// if(day >= 1 && day <= 10){
// 	console.log('Первая декада месяца');
// } else if (day >= 11 && day <= 20) {
// 	console.log('Вторая декада месяца');
// } else if (day >= 21 && day <= 31){
// 	console.log('Третяя декада месяца');
// } else {
// 	console.log('Введено неверное значение числа');
// }

let num = Number(prompt('Введите число'));

console.log(`Вы ввели число: ${num}`);
console.log(`Единицы: ${num%10}`);
console.log(`Десятки: ${Math.floor(num%100/10)}`);
console.log(`Сотни: ${Math.floor(num%1000/100)}`);