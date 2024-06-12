// Video Carousel

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    slides[currentSlide].classList.remove('fade');
    currentSlide = (currentSlide + 1) % totalSlides;
    setTimeout(() => {
        showSlide(currentSlide);
        slides[currentSlide].classList.add('fade');
    }, 500);
}

function startCarousel() {
    showSlide(currentSlide);
    slides[currentSlide].classList.add('fade');
    setInterval(nextSlide, 10500);
}

document.addEventListener('DOMContentLoaded', startCarousel);

// Featured car carousel
let currentGallerySlide = 0;
const gallerySlides = document.querySelectorAll('.gallery-slide');
const totalGallerySlides = gallerySlides.length;

function showGallerySlide(slideIndex) {
    gallerySlides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextGallerySlide() {
    gallerySlides[currentGallerySlide].classList.remove('fade');
    currentGallerySlide = (currentGallerySlide + 1) % totalGallerySlides;
    setTimeout(() => {
        showGallerySlide(currentGallerySlide);
        gallerySlides[currentGallerySlide].classList.add('fade');
    }, 500);
}

function startGalleryCarousel() {
    showGallerySlide(currentGallerySlide);
    gallerySlides[currentGallerySlide].classList.add('fade');
    setInterval(nextGallerySlide, 5000);
}

document.addEventListener('DOMContentLoaded', startGalleryCarousel);