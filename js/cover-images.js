(function(wnd, $) {
  $(function() {
    $('.cover-images').each(function() {
      var $this = $(this);

      (function cycle() {
         setTimeout(function() {
           var $current = $this.children('.cover-image.visible').first();
           var $next = $current.next('.cover-image');
           if ($next.length === 0) {
             $next = $current.siblings('.cover-image').first();
           }
           $current.addClass('end-visible').removeClass('visible');
           $next.removeClass('end-visible').addClass('visible');
           cycle();
         }, 5000);
      })();
    });
  });
})(window, jQuery);
