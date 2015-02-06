/*global $, Modernizr, console */

function resizeNav(el, head, headPadding, minHeight) {
  'use strict';
  var okno = $(window).height(),
      hlavicka = $(head).height();

  if (okno >= minHeight) {
    $(el).height(okno - hlavicka - headPadding);
  }
}

function checkMq() {

  'use strict';

  var padding      = 64,
      minHeight      = 600,
      elem           = '.uvodka nav',
      headerElem     = '.header';

  if (Modernizr.mq('only screen and (min-width: 1140px)')) {
    resizeNav(elem, headerElem, padding, minHeight);
  } else {
    if (!$('html').hasClass('no-flexbox')) {
      $(elem).removeAttr( 'style' );
    }
  }
}

$(function () {

  'use strict';

  /*
   * Zjistíme si velikost okna a podle toho natáhneme sloupec s fotkou v navigaci
   */

  checkMq();

  $(window).resize(function () {
    checkMq();
  });

  console.log ('kokote');

  /*
  if (breakpoint === 1) {

    $(elem).height(okno - hlavicka - padding);

    $(window).on('resize', function () {
      okno = $(window).height();
      hlavicka = $(headerElem).height();

      if (okno >= minHeight) {
        $(elem).height(okno - hlavicka - padding);
      }
    });
  } else {
    // unset height
  }
*/
});

