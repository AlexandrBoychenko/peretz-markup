$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        accessibility: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        draggable: true,
        prevArrow: `<div class="arrow left"><img src="img/arrow-left.png" alt="Здравфарм"></div>`,
        nextArrow: `<div class="arrow right"><img src="img/arrow-right.png" alt="Здравфарм"></div>`
    });
});