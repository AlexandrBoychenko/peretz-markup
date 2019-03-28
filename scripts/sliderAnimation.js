$(function(){
    let currentIndex;
    let i = 0;

    let slides = $('.slide-control').children();
    $(`[data-id = ${i}]`).attr('data-selector', 'active-number');

    addEventsToNumbers(slides.length);
    setSlider();


    $('.slider').click(function(e) {
        removeActiveElement();
        checkCurrentIndex();

        if (searchClass(e, 'slick-prev')) {
            goBackward();
        }
        else if (searchClass(e, 'slick-next')) {
            goForward()
        }
    });

    function goBackward() {
        i === 0 ? i = 3: null;
        $(`[data-id = ${i - 1}]`).attr('data-selector', 'active-number');
        i--;
    }

    function goForward() {
        i++;
        i === slides.length ? i = 0: null;
        $(`[data-id = ${i}]`).attr('data-selector', 'active-number');

    }
        
    function checkCurrentIndex() {
        currentIndex !== undefined ? i = currentIndex : null;
        currentIndex = undefined;
    }
        
    function removeActiveElement() {
        let remElement = $("[data-selector='active-number']");
        remElement.removeAttr('data-selector');
    }
    
    function searchClass(e, className) {
        return ~e.target.className.indexOf(className)
    }

    function addEventsToNumbers(slidesLength) {
        for (let i = 0; i < slidesLength; i++) {
            $(`[data-id = ${i}]`).click((e) => {
                markClickedNumber(e, slidesLength, i);
            })
        }
    }

    function markClickedNumber(e, slidesLength, index) {
        e.preventDefault();
        $(`.slider`).slick('slickGoTo', index);
        $(`[data-id = ${index}]`).attr('data-selector', 'active-number');
        removeRedundantAttr(slidesLength, index);
        currentIndex = index;
    }

    function removeRedundantAttr(slidesLength, index) {
        for (let i = 0; i < slidesLength; i++) {
            if (i !== index) {
                $(`[data-id = ${i}]`).removeAttr('data-selector');
            }
        }
    }

    function setSlider() {
        $('.slider').slick({
            infinite: true,
            speed: 900,
            fade: true,
            autoplaySpeed: 3000,
            draggable: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        });
    }

});


