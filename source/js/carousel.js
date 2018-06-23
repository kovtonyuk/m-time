var carousel = {
    slides: document.querySelectorAll('.carousel__slide'),
    currentSlide: 0,
    container: document.querySelector('.carousel'),
    next: null, // null until selected below
    prev: null
};
carousel.next = carousel.container.querySelector('.button--next');
carousel.prev = carousel.container.querySelector('.button--prev');

carousel.next.addEventListener('click', function(e) {
    nextSlide(carousel);
});
carousel.prev.addEventListener('click', function(e) {
    previousSlide(carousel);
});

function nextSlide(carousel) {
    carousel.slides[carousel.currentSlide].className = 'carousel__slide center-vertically';
    carousel.currentSlide = (carousel.currentSlide+1) % carousel.slides.length;
    carousel.slides[carousel.currentSlide].className = 'carousel__slide center-vertically active';
}

function previousSlide(carousel) {
    carousel.slides[carousel.currentSlide].className = 'carousel__slide center-vertically';

    if(carousel.currentSlide === 0)
        carousel.currentSlide = carousel.slides.length - 1;
    else
        carousel.currentSlide--;

    carousel.slides[carousel.currentSlide].className = 'carousel__slide center-vertically active';
}
