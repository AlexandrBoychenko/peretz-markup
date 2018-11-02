$('#tab1').attr('checked', 'checked');

$('.shop-btn').click((event) => {
    $('.shop-btn').css({
        color: '#ffffff',
        background: '#4299ca',
        border: '1px solid #ffffff'
    });
    $(event.target).css({
        background: '#ffffff',
        border: 'none',
        color: '#444443'
    })
});

$('.shop-item').click((event) => {
    let image = $(event.target).attr('src');
    if (image) {
        $('.shop-photo > img').attr('src', `${image}`);

        $('.shop-item').css('background', 'transparent');
        $(event.target.parentNode).css('background', '#a6b1c1');
    }
});

