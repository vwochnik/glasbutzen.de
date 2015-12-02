(function($) {
  function toggleOverlay($target) {
    if ($target.hasClass('visible'))
      $target.addClass('fade-out').removeClass('visible');
    else
      $target.removeClass('fade-out').addClass('visible');
  }

  $(function() {
    $('#menu-toggle, #menu-close').click(function() {
      toggleOverlay($('#menu'));
      return false;
    });

    $('#menu').click(function(e) {
      if (e.target.nodeName !== 'A') {
        toggleOverlay($(this));
        return false;
      }
    });
  });
})(jQuery);
