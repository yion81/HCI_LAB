// Showroom Carousel
let showroomSlideIndex = 0;
const showroomSlides = document.querySelectorAll('.showroom-carousel .carousel-slide');
const totalShowroomSlides = showroomSlides.length;

function showShowroomSlide(slideIndex) {
    showroomSlides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextShowroomSlide() {
    showroomSlides[showroomSlideIndex].classList.remove('fade');
    showroomSlideIndex = (showroomSlideIndex + 1) % totalShowroomSlides;
    setTimeout(() => {
        showShowroomSlide(showroomSlideIndex);
        showroomSlides[showroomSlideIndex].classList.add('fade');
    }, 500);
}

function startShowroomCarousel() {
    showShowroomSlide(showroomSlideIndex);
    showroomSlides[showroomSlideIndex].classList.add('fade');
    setInterval(nextShowroomSlide, 5000);
}

document.addEventListener('DOMContentLoaded', startShowroomCarousel);
