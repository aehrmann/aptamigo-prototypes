  $(document).ready(function() {
    var closed = true;

    console.log('custom loaded');
    $('.navicon').on('click', function(e) {
      e.preventDefault();
      alert('hello');
      $('.mobile-menu').slideDown(200);
    });
  });

