// 1. При изменении значения в <input> с id="from", значение, содержащееся
// в нем, должно моментально отображаться в <span>.
// 	○ Это значит, что при каждом изменении текста в инпуте, текст в <span>
// 	должен обновляться соответственно.

const inputOnSpan = document.querySelector('.inputOnSpan');
const textOnSpan = document.querySelector('.textOnSpan');

inputOnSpan.addEventListener('input', function (e) {
	if (inputOnSpan.value) {
		textOnSpan.textContent = inputOnSpan.value;
	}
});

// 2. При клике на кнопку с классом messageBtn необходимо выполнить
// следующие действия для элемента с классом message:
// 	○ Добавить два класса: animate_animated и animate_fadeInLeftBig.
//		○ Установить стиль visibility в значение 'visible'.

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');

messageBtn.addEventListener('click', function (e) {
	message.classList.add('animate_animated', 'animate_fadeInLeftBig');
	message.style.visibility = 'visible';
});

// 3. При отправке формы проверьте, заполнены ли все поля.
// 	○ Если какое-либо поле не заполнено, форма не должна отправляться.
// 	○ Незаполненные поля должны быть подсвечены (добавлен класс error).
// 	○ Как только пользователь начинает заполнять поле, выполните проверку:
// 		■ Если поле пустое, подсветите его (добавьте класс error).
// 		■ Если поле заполнено, уберите подсветку (удалите класс error).

const formControl = document.querySelectorAll('.form-control');
const buttonOnSub = document.querySelector('.buttonOnSub'); 

buttonOnSub.addEventListener('click', function (e) {
	formControl.forEach(element => {
		if (!element.value) {
			element.classList.add('error');
			e.preventDefault();
		}
	});
});

formControl.forEach(element => {
	element.addEventListener('input', function (e) {
		if (element.value.trim() === '') {
			element.classList.add('error');
		} else {
			element.classList.remove('error');
		}
	});
});