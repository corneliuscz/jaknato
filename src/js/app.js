// Place any jQuery/custom code in here.
$(function() {
  var okno = $( window ).height(),
      minHeight = 480;
  $( '.uvodka nav' ).height(okno);

  $(window).on('resize', function(){
      okno = $( window ).height();

      if (okno >= minHeight) {
        $( '.uvodka nav' ).height(okno);
      }
  });
});

