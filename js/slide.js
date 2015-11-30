(function($) {
  $(function() {
    $(".image-slideshow-wrapper").each(function() {
      var $container = $(this);
      var $content = $container.children('div').first();

      (function animate() {
        var $image = $content.children('img').first();
        $content.animate({left: -$image.width()}, 2000, 'linear', function() {
          $content.append($image);
          $content.css({left: 0});
          animate();
        });
      })();
    });
  });
})(jQuery);
