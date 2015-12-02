(function($) {
  $(function() {
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
 });
})(jQuery);
