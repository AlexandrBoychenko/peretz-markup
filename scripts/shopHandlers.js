let tabIdentifier;

$('#tab1').attr('checked', 'checked');
tabIdentifier = $('.shop-btn').attr('data-check');

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
        });

    tabIdentifier = $(event.target).attr('data-check');

    console.log();
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
    console.log(tabIdentifier);

    let images = $('.items-block').find('.shop-item');
    let currentImage = $('.shop-photo > img').attr('src');
    let currentImgNumber = currentImage.match(/\d+/)[0];
    let currentNumber = parseInt(currentImgNumber);
    if (~event.target.className.indexOf('shop-forward')) {
        if (currentNumber < images.length - 1) {
            currentNumber++;
            $('.shop-photo > img').attr('src', `${currentImage.replace(/\d+/, '' + currentNumber)}`)
        }
    } else {
        if (currentNumber >= 0) {
            currentNumber--;
            $('.shop-photo > img').attr('src', `${currentImage.replace(/\d+/, '' + currentNumber)}`)
        }
    }
})
