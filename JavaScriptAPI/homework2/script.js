const images = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const indicators = document.querySelectorAll('.indicator');

function updateSlider() {
    sliderImage.src = images[currentIndex];
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.dataset.index);
        updateSlider();
    });
});

// Инициализация слайдера
updateSlider();
