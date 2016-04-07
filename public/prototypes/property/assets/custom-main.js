;(function($) {
  $(document).ready(function() {
    var closed = true;

    $('.navicon').on('click', function() {
      console.log('clicked: ' + closed);
      if(closed) {
        $('.mobile-menu').slideDown(200);
      } else {
        $('.mobile-menu').slideUp(200);
      }
      closed = !closed;
    });
  });
})(window.jQuery);
