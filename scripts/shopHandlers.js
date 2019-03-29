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
        $(event.target.parentNode.parentNode).css('background', '#a6b1c1');
    }
});

$('.shop-arrow').click((event) => {
    let images = $('.items-block').find('.capsules');
    let currentImage = $('.shop-photo > img').attr('src');
    let currentImgNumber = currentImage.match(/\d+/)[0];
    if (~event.target.className.indexOf('shop-forward')) {
        let currentNumber = parseInt(currentImgNumber) + 1;
        if (currentNumber < images.length - 1) {
            $('.shop-photo > img').attr('src', `${currentImage.replace(/\d+/, '' + currentNumber)}`)
        }
    } else {
        let currentNumber = parseInt(currentImgNumber) - 1;
        if (currentNumber >= 0) {
            $('.shop-photo > img').attr('src', `${currentImage.replace(/\d+/, '' + currentNumber)}`)
        }
    }
})
