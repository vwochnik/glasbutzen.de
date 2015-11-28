(function(wnd, $, Trianglify) {
    $(function() {
      $('.trianglify').each(function() {
        var $elem = $(this),
            id = (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1).toUpperCase(),
            xColors = ($elem.attr('data-x-colors') || "").split(/,\s*/),
            yColors = ($elem.attr('data-y-colors') || "").split(/,\s*/),
            cellSize = parseInt($elem.attr('data-cell-size') || '75');

        $(wnd).on('resize.trianglify-'+id, function() {
          var pattern = new Trianglify({
            cell_size: cellSize,
            width: $elem.width(),
            height: $elem.height(),
            x_colors: xColors,
            y_colors: yColors
          });
          $elem.css({backgroundImage: 'url("'+pattern.png()+'")'});
        }).trigger('resize.trianglify-'+id);
      });
    });
})(window, jQuery, Trianglify);
