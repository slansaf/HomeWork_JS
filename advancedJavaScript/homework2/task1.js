class Library {
	#books;

	constructor(initialBooks = []) {
		
		const uniqueBooks = [...new Set(initialBooks)];
		if (uniqueBooks.length !== initialBooks.length) {
			throw new Error('Начальный список книг не должен содержать дубликатов.');
		}
		this.#books = uniqueBooks;
	}

	get allBooks() {
	return this.#books;
	}

	addBook(title) {
		if (this.hasBook(title)) {
			throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
		}
		this.#books.push(title);
	}

	removeBook(title) {
		const bookIndex = this.#books.indexOf(title);
		if (bookIndex === -1) {
			throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
		}
		this.#books.splice(bookIndex, 1);
	}

	hasBook(title) {
		return this.#books.includes(title);
	}
}

try {
	const library = new Library(['1984', 'Мастер и Маргарита']);
	console.log(library.allBooks); // ['1984', 'Мастер и Маргарита']

	library.addBook('Убить пересмешника')
	console.log(library.allBooks); // ['1984', 'Мастер и Маргарита', 'Убить пересмешника']

	console.log(library.hasBook('1984')); // true
	console.log(library.hasBook('Война и мир')); // false

	library.removeBook('1984');
	console.log(library.allBooks); // ['Мастер и Маргарита', 'Убить пересмешника']

	library.removeBook('1984'); // Ошибка: Книга с названием "1984" не найдена в библиотеке.
} catch (error) {
	console.error(error.message);
}
