$('.follow').mouseenter(
  function() {
      $('.basic-social').css('display', 'none');
      $('.social').css('display', 'block');
      subscribeTransition()
  }
)
    .mouseleave(
        function() {
            $('.basic-social').css('display', 'block');
            $('.social').css('display', 'none');
            subscribeTransition()
        }
    );

function subscribeTransition() {
    $('.follow').css('bottom', '240px');
    setTimeout(() => {
        $('.follow').css('bottom', '220px');
    }, 200);
}
