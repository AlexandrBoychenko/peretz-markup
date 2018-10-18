$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        /*cssEase: 'linear',
        accessibility: true,
        adaptiveHeight: true,
        autoplay: true,*/
        autoplaySpeed: 3000,
        arrows: true,
        draggable: true,
        prevArrow: `<div class="arrow left"><img src="img/arrow-left.png" alt="Здравфарм"></div>`,
        nextArrow: `<div class="arrow right"><img src="img/arrow-right.png" alt="Здравфарм"></div>`,
        //dotsClass: 'b-slide',
        customPaging : function(slider, i) {
            let thumb = $(slider.$slides[i]).data();
            if ($('.b-slide').attr('#data-id') === i) {
                $('#data-id').color = 'red';
            }
            return '<a>'+ '0' + (i+1) + '</a>';
        },
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
});