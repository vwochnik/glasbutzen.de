(function(wnd, $, Trianglify) {
    $(function() {
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
        $elem.css({
          position: 'relative',
          background: 'none'
        }).append($canvas);

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
})(window, jQuery, Trianglify);
