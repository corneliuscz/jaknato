// Place any jQuery/custom code in here.
$(function() {
  /*
   * Yjist9me si velikost okna a podle toho natáhneme sloupec s fotkou v navigaci
   */
  var okno = $( window ).height(),
      hlavicka = $( '.header' ).height(),
      padding =  64; // Padding v hlavičce
      minHeight = 480;
  $( '.uvodka nav' ).height(okno - hlavicka - padding);

  $(window).on('resize', function(){
      okno = $( window ).height();
      hlavicka = $( '.header' ).height();

      if (okno >= minHeight) {
        $( '.uvodka nav' ).height(okno - hlavicka - padding);
      }
  });
});

