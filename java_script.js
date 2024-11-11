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