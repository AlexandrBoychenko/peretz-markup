$('.list-burger li').mouseenter(
    function(event) {
        event.target.querySelector('img').setAttribute('style', 'display: inline-block');
    }
)
    .mouseleave(
        function (event) {
            event.target.querySelector('img').setAttribute('style', 'display: none');
        }
    );