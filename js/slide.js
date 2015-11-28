(function($) {
  $(function() {
    $("#startslide").each(function() {
      var startslide = this;
      var slidecontent = $(this).children("#startslidecontent")[0];
      
      // interval function
      setInterval(function() {
	$(slidecontent).animate({left: -312}, 1500, function() {
	  // change order
	  var first = $(slidecontent).children("img")[0];
	  $(slidecontent).append(first);
	  
	  // reset position
	  $(slidecontent).css({left: 0});
	});
      }, 4000);
    });
  });
})(jQuery);

