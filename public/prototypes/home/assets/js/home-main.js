;(function($) {
  //top rated neighborhoods: override script that place bg-image as inline style
  var $topNHContainers = $('body[data-controller="pages"][data-action="index"] .neighborhoods .neighborhood > div');
  var overlayGradient = 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))';

  $topNHContainers.each(function() {
    $(this).css('background-image', overlayGradient + ', url(' + $(this).data('bg-image')) + ')';
  });


  var $topAptContainers = $('body[data-controller="pages"][data-action="index"] .properties .property>div');
  var overlayGradient = 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))';

  $topAptContainers.each(function() {
    $(this).css('background-image', overlayGradient + ', url(' + $(this).data('bg-image')) + ')';
  });
})(window.jQuery);
