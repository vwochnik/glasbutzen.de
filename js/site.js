(function($, wnd) {
  function toggleOverlay($target) {
    if ($target.hasClass('visible'))
      $target.addClass('fade-out').removeClass('visible');
    else
      $target.removeClass('fade-out').addClass('visible');
  }

  $(function() {
    /* menu toggle */
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

    /* arrow down scroll */
    $('a.animated-scroll').each(function() {
      var $this = $(this)
          $root = $('html, body'),
          href = $this.attr('href');

        $this.click(function() {
          $root.animate({ scrollTop: $(href).offset().top }, 500,
            function() { wnd.location.hash = href; });
          return false;
        });
    });

    /* cover images rotation */
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

    /* leistungen tagcloud */
    $('#leistungen-jqcloud').each(function() {
      var elem = this;
      $.getJSON("/leistungen.json", function(words) {
        Math.seedrandom(elem.className);
        $(elem).addClass('leistungen-jqcloud').jQCloud(words, {
          autoResize: true,
          steps: 5
        });
      });
    });

    /* company slideshow */
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

    /* reference images gallery */
    $('.references-gallery > li > a').fluidbox();

    /* trianglify background */
    $('.trianglify').each(function() {
      var $elem = $(this), $canvas = $('<canvas/>'),
          id = (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1).toUpperCase(),
          xColors = ($elem.attr('data-x-colors') || "").split(/,\s*/),
          yColors = ($elem.attr('data-y-colors') || "").split(/,\s*/),
          cellSize = parseInt($elem.attr('data-cell-size') || '75');

      $canvas.css({
        position: 'absolute',
        left: 0, top: 0,
        right: 0, bottom: 0,
        zIndex: -1
      });
      $elem.css({ background: 'none' }).append($canvas);
      if (!/^(relative|absolute|fixed)$/.test($elem.css('position'))) {
        $elem.css({ position: 'relative' });
      }

      $(wnd).on('resize.trianglify-'+id, function() {
        var pattern = new Trianglify({
          cell_size: cellSize,
          width: $elem.outerWidth(),
          height: $elem.outerHeight(),
          x_colors: xColors,
          y_colors: yColors
        });
        pattern.canvas($canvas.get(0));
      }).trigger('resize.trianglify-'+id);
    });
  });
})(jQuery, window);
