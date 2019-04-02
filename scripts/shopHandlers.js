let tabIdentifier;
let prevGrand;
let currentNumber = 0;

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
    currentNumber = 0;
});

$('.shop-item').click((event) => {
    let image = $(event.target).attr('src');
    let grandParent = event.target.parentNode.parentNode;
    $(prevGrand).removeAttr('selected');

    if (image) {
        $('.shop-photo > img').attr('src', `${image}`);
        $('.shop-item').css('background', 'transparent');
        $(grandParent).css('background', '#a6b1c1');
        $(grandParent).attr('selected', 'true');
    }

    prevGrand = grandParent;
    currentNumber = 0;
});

$('.shop-arrow').click((event) => {
    let images = $(`.${tabIdentifier}`).find('.shop-item');
    Object.keys(images).forEach(function(item) {
        console.log($(images[item]).find('[selected=selected]').length, parseInt(item));
        if (images[item].attributes && images[item].attributes.selected && !currentNumber) {
            currentNumber = item;
        }
    });

    if (~event.target.className.indexOf('shop-forward')) {
        if (currentNumber < images.length - 1) {
            currentNumber++;
        }
    } else {
        if (currentNumber >= 0) {
            currentNumber--;
        }
    }
    setSrcAttr(images);
});

function setSrcAttr(images) {
    let src = $(images[currentNumber]).find('img').attr('src');
    $('.shop-photo > img').attr('src', src);
}
