(function() {
    let direction;
    let currentIndex;
    let i = 1;
    let slides = $('.slide-control').children();
    $(`.b-slide-0${i}`).attr('data-selector', 'active-number');
    $(".slider").on("beforeChange", function (){


    });

    addEventsToNumbers(slides.length);

    function addEventsToNumbers(slidesLength) {
        for (let i = 0; i < slidesLength; i++) {
            $(`[data-id = ${i}]`).click((e) => {
                e.preventDefault();
                $(`.slider`).slick('slickGoTo', i);
                $(`[data-id = ${i}]`).attr('data-selector', 'active-number');
                removeRedundantAttr(slidesLength, i);
                currentIndex = i;
            })
        }
    }

        $('.slider').click(function(e) {
            if (~e.target.className.indexOf('slick-prev')) {
                direction = 'backward';
            }
            if (~e.target.className.indexOf('slick-next')) {
                direction = 'forward';
            }

            currentIndex ? i = currentIndex + 1 : null;
            currentIndex = 0;

            let remElement = $("[data-selector='active-number']");
            remElement.removeAttr('data-selector');

            if (direction === 'forward') {
                i === slides.length ? i = 0: null;
                $(`.b-slide-0${i + 1}`).attr('data-selector', 'active-number');
                i++;
            } else {
                i === 1 ? i = 4: null;
                $(`.b-slide-0${i - 1}`).attr('data-selector', 'active-number');
                i--;
            }
        })
}());



function removeRedundantAttr(slidesLength, index) {
    for (let i = 0; i < slidesLength; i++) {
        if (i !== index) {
            $(`[data-id = ${i}]`).removeAttr('data-selector');
        }

    }
}

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 900,
        fade: true,
        /*autoplay: true,*/
        autoplaySpeed: 3000,
        draggable: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    });
});
