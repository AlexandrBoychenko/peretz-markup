$(() => {
    $('.social').addClass('display-none');

    $('.follow').mouseenter(
        function() {
            $('.basic-social').addClass('display-none');
            $('.social').removeClass('display-none');
            subscribeTransition()
        }
    )
        .mouseleave(
            function() {
                $('.basic-social').removeClass('display-none');
                $('.social').addClass('display-none');
            }
        );

    function subscribeTransition() {
        $('.follow').css('top', '75%');
        setTimeout(() => {
            $('.follow').css('top', '80%');
        }, 200);
    }
});
