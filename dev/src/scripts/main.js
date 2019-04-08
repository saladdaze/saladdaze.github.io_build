var config = require( './config.js' );


$(function(){
  const id_hero = $("#js-hero");
  let win_width;
  let win_height;
  let hero_height;

	$(window).on('load resize', function(){
    win_width = $(window).width();
    win_height = $(window).height();
    if( win_width > 980 ){
      hero_height = win_height;
    // } else if( win_width < 980 && win_width > 760 ){
      // hero_height = win_height/2;
    } else {
      hero_height = win_height/2;
    }
    id_hero.css({height: hero_height});
  });
});
