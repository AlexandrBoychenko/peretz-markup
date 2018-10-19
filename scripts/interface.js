(function() {
    let i = 1;
    let slides = $('.slide-control').children();
    $(`.b-slide-0${i}`).attr('data-selector', 'active-number');
    $(".slider").on("beforeChange", function (){
        let remElement = $("[data-selector='active-number']");
        remElement.removeAttr('data-selector');
        i === slides.length ? i = 0: null;
        $(`.b-slide-0${i+1}`).attr('data-selector', 'active-number');
        i++;
    });
}());

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 900,
        fade: true,
        /*autoplay: true,*/
        autoplaySpeed: 3000,
        draggable: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        prevArrow: `<div class="arrow left"><img src="img/arrow-left.png" alt="Здравфарм"></div>`,
        nextArrow: `<div class="arrow right"><img src="img/arrow-right.png" alt="Здравфарм"></div>`
    });
});
