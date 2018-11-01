let targetDiv = $('.why');

let beginStyles = {
    transform: 'translateX(-50px)',
    opacity: '0',
    transition: 'opacity 1s,transform 1.2s cubic-bezier(.165,.84,.44,1)'
};

let changeStyles = {
    opacity: "1",
    transform: "translate(0)"
};

$(document).on('scroll', function() {
    if( $(this).scrollTop() >= targetDiv.position().top - 180
    && $(this).scrollTop() <= targetDiv.position().top - 160){
        targetDiv.find('.enter-x-r').css(beginStyles);
        setTimeout(() => {targetDiv.find('.enter-x-r').css(changeStyles)}, 500);
    }
});