(function($) {
  $(function() {
    $('#leistungen-jqcloud').each(function() {
      var elem = this;
      $.getJSON("/leistungen.json", function(words) {
        $(elem).addClass('leistungen-jqcloud').jQCloud(words, {
          autoResize: true,
          steps: 5
        });
      });
    });
 });
})(jQuery);
