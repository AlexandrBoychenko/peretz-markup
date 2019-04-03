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
        if (images[item].attributes && images[item].attributes.selected && !currentNumber) {
            currentNumber = item;
        }
    });

    if (~event.target.className.indexOf('shop-forward')) {
        if (currentNumber < images.length - 1) {
            returnVisibility();
            currentNumber++;
        } else {
            $('.shop-forward').addClass('visibility-hidden');
        }
    } else {
        if (currentNumber > 0) {
            returnVisibility();
            currentNumber--;
        } else {
            $('.shop-backward').addClass('visibility-hidden');
        }
    }
    setSrcAttr(images);
});

$('.plus').click((event) => {
    let numberText = getNumberText(event);
    let jarNumber = getJarNumber(numberText);
    jarNumber < 1000 ? setJarNumber(event, parseInt(jarNumber ) + 1, numberText) : null
});

$('.minus').click((event) => {
    let numberText = getNumberText(event);
    let jarNumber = getJarNumber(numberText);
    jarNumber > 0 ? setJarNumber(event, parseInt(jarNumber ) - 1, numberText) : null
});

function getNumberText(event) {
    return $(event.currentTarget).siblings('.jar-number')[0].innerText;
}

function getJarNumber(numberText) {
    let matchedObject = numberText.match(/\d+/g)[0];
    return parseInt(matchedObject);
}

function setJarNumber(event, number, numberText) {
    let textAfterNum = numberText.slice(numberText.search(/ [а-яё, А-ЯЁ]*./g));
    $(event.currentTarget).siblings('.jar-number')[0].innerText = number + textAfterNum;
}

function returnVisibility() {
    $('.shop-backward').removeClass('visibility-hidden');
    $('.shop-forward').removeClass('visibility-hidden');
}

function setSrcAttr(images) {
    let src = $(images[currentNumber]).find('img').attr('src');
    $(images[currentNumber]).css('background', '#a6b1c1')
        .siblings().css('background', 'transparent');
    $('.shop-photo > img').attr('src', src);
    
}
