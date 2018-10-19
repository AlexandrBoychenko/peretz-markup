$('.follow').mouseenter(
  function() {
      $('.basic-social').css('display', 'none');
      $('.social').css('display', 'block');
  }
)
    .mouseleave(
    function() {
        $('.basic-social').css('display', 'block');
        $('.social').css('display', 'none');
    }
);