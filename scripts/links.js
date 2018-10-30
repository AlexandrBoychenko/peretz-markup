changeImage('.list-burger li');
changeImage('.social-bar li');

function changeImage(selector) {
    $(selector).mouseenter(
        (event) => {
            $(event.target).find('img').css('display', 'inline-block');
        }
    )
        .mouseleave(
            (event) => {
                $(event.target).find('img').css('display', 'none');
            }
        );
}

$('.toggle-cart').click(() => {
        $('.pop-up').css('display', 'flex')
});

$('.toggle-nav').click(() => {
        $('.wrapper-burger').css('display', 'block');
});

$('.phone').click(() => {
    $('.pop-up-call').css('display', 'flex')
});

$('.close-window').click(() => {
    $('.pop-up').css('display', 'none');
    $('.pop-up-call').css('display', 'none');
    $('.wrapper-burger').css('display', 'none');
});