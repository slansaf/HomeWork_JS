// Задание 1: "Получение данных о пользователе"

async function getUserData(userId) {
	try {
		const response = await
		fetch(`https://api.example.com/users/${userId}`);
		if (!response.ok) {
			throw new Error('User not found');
		}
	const userData = await response.json();
	return userData;
	} catch (error) {
		return Promise.reject(error.message);
	}
}

getUserData(1)
.then(user => console.log(user))
.catch(error => console.error(error));

// Задание 2: "Отправка данных на сервер"

async function saveUserData(user) {
	try {
		const response = await fetch('https://api.example.com/users', {
		method: 'POST',
		headers: {'Content-Type': 'application/json',},
		body: JSON.stringify(user),
	});
	if (!response.ok) {
		throw new Error('Failed to save user data');
	}
	} catch (error) {
		return Promise.reject(error.message);
	}
}


const user = {
	name: 'John Smith',
	age: 30,
	email: 'john@example.com'
};
	
saveUserData(user)
	.then(() => {
	console.log('User data saved successfully');
	})
	.catch(error => {
	console.error(error);
	});
	


// Задание 3: "Изменение стиля элемента через заданное время"

function changeStyleDelayed(elementId, delay) {
	setTimeout(() => {
		const element = document.querySelector('.element');
		if (element) {
			element.style.color = 'red'; 
	}
	}, delay);
}

changeStyleDelayed('myElement', 2000); 
	