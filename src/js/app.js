/*global $, Modernizr, console */


/*****************************************************************
 * Flexbox fallback START
 */
/*
// http://stackoverflow.com/questions/11306736/jquery-check-if-element-has-a-specific-style-property-defined-inline
$.fn.inlineStyle = function (prop) {
  var styles = this.attr("style"),
      value;
  styles && styles.split(";").forEach(function (e) {
    var style = e.split(":");
    if ($.trim(style[0]) === prop) {
      value = style[1];
    }
  });
  return value;
};

function setWidth(){
  $('.no-flexbox .container--uvodka nav').not('.vertical').each(function(){
    var $el = $(this),
        widthPerBox = Math.ceil(100/$el.find('> nav div').length);

    $el.children('nav div').each(function(){
      if($(this).attr('data-width') !== undefined ){
        $(this).css('width', $(this).data('width')+'%');
      }
      // do not overwrite the actual width
      else if(!$(this).inlineStyle('width')){
        $(this).css('width', widthPerBox+'%');
      }
    });
  });
}

// there is a problem while setting width and height at same time
// so I'm setting width then height
function setHeight(){
  $('.no-flexbox .container--uvodka nav').not('.vertical').each(function(){
    var $el = $(this),
        maxHeight = 0;

    $el.children('nav div').each(function(){
      // set height auto to reset the height
      $(this).css('height', 'auto');
      if($(this).height() > maxHeight){
        maxHeight = $(this).outerHeight();
      }
    });
    // makes sure maxHeight is not equal to 0
    if(maxHeight){
      $el.find(' >nav div').css('height', maxHeight);
    }
  });
}

$(document).ready(function(){
  setWidth();
  setHeight();
});
$(window).resize(function(){
  setHeight();
});
*/
/*
 * Flexbox fallback END
 *******************************************************************/


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
    if (!$("html").hasClass("no-flexbox")) {
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

