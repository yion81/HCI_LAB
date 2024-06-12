// Brands carousel

let currentBrandSlide = 0;
const brandSlides = document.querySelectorAll('.brands-carousel .carousel-slide');
const totalBrandSlides = brandSlides.length;

function showBrandSlide(slideIndex) {
    brandSlides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextBrandSlide() {
    currentBrandSlide = (currentBrandSlide + 1) % totalBrandSlides;
    showBrandSlide(currentBrandSlide);
}

function startBrandCarousel() {
    showBrandSlide(currentBrandSlide);
    setInterval(nextBrandSlide, 7000);
}

document.addEventListener('DOMContentLoaded', startBrandCarousel);