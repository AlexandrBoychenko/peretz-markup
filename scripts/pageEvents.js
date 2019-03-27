$('.arrow-down')
    .on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.why').offset().top
        }, 500);
    });