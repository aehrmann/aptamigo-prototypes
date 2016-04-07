;(function($) {
  var closed = true;

  $('.navicon').on('click', function(e) {
    if(closed) {
      $('.mobile-menu').slideDown(200);
    } else {
      $('.mobile-menu').slideUp(200);
    }
    closed = !closed;
  });
})(jQuery);

