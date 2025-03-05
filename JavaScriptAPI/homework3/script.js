const apiKey = 'U6O5rh7H7-o34LnK4jnOdUFU8LbM6TdOKlYNSMR1VzU'; 
const photoElement = document.getElementById('photo');
const photographerNameElement = document.getElementById('photographer-name');
const likeButton = document.getElementById('like-button');
const likeCountElement = document.getElementById('like-count');

let likeCount = 0;

// Функция для получения случайного изображения из Unsplash
async function fetchRandomImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();
        photoElement.src = data.urls.regular;
        photographerNameElement.textContent = `Фото: ${data.user.name}`;
    } catch (error) {
        console.error('Ошибка при получении изображения:', error);
    }
}

// Обработчик события для кнопки "лайк"
likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountElement.textContent = `Лайков: ${likeCount}`;
});

// Загрузка случайного изображения при загрузке страницы
fetchRandomImage();
