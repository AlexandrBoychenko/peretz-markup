$('.list-burger li').mouseenter(
    (event) => {
        $(event.target).find('img').css('display', 'inline-block');
    }
)
    .mouseleave(
        (event) => {
            $(event.target).find('img').css('display', 'none');
        }
    );