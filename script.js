let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const thumbnails = document.querySelectorAll('.thumbnail');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === currentIndex);
    });
}

function currentSlide(index) {
    showSlide(index);
}

// Navigation buttons
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Auto-slide
let slideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Pause on hover
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
