(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

jQuery(function ($) {
	console.log('Speedy started');
});

},{}],2:[function(require,module,exports){
'use strict';

var config = require('./config.js');

$(function () {
  var id_hero = $("#js-hero");
  var win_width = void 0;
  var win_height = void 0;
  var hero_height = void 0;

  $(window).on('load resize', function () {
    win_width = $(window).width();
    win_height = $(window).height();
    if (win_width > 980) {
      hero_height = win_height;
      // } else if( win_width < 980 && win_width > 760 ){
      // hero_height = win_height/2;
    } else {
      hero_height = win_height / 2;
    }
    id_hero.css({ height: hero_height });
  });
});

},{"./config.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc3JjL3NjcmlwdHMvY29uZmlnLmpzIiwiZGV2L3NyYy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQVEsVUFBVSxDQUFWLEVBQWM7QUFDckIsU0FBUSxHQUFSLENBQWEsZ0JBQWI7QUFDQSxDQUZEOzs7OztBQ0FBLElBQUksU0FBUyxRQUFTLGFBQVQsQ0FBYjs7QUFHQSxFQUFFLFlBQVU7QUFDVixNQUFNLFVBQVUsRUFBRSxVQUFGLENBQWhCO0FBQ0EsTUFBSSxrQkFBSjtBQUNBLE1BQUksbUJBQUo7QUFDQSxNQUFJLG9CQUFKOztBQUVELElBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxhQUFiLEVBQTRCLFlBQVU7QUFDbkMsZ0JBQVksRUFBRSxNQUFGLEVBQVUsS0FBVixFQUFaO0FBQ0EsaUJBQWEsRUFBRSxNQUFGLEVBQVUsTUFBVixFQUFiO0FBQ0EsUUFBSSxZQUFZLEdBQWhCLEVBQXFCO0FBQ25CLG9CQUFjLFVBQWQ7QUFDRjtBQUNFO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsb0JBQWMsYUFBVyxDQUF6QjtBQUNEO0FBQ0QsWUFBUSxHQUFSLENBQVksRUFBQyxRQUFRLFdBQVQsRUFBWjtBQUNELEdBWEY7QUFZQSxDQWxCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImpRdWVyeSggZnVuY3Rpb24oICQgKSB7XG5cdGNvbnNvbGUubG9nKCAnU3BlZWR5IHN0YXJ0ZWQnICk7XG59ICk7XG4iLCJ2YXIgY29uZmlnID0gcmVxdWlyZSggJy4vY29uZmlnLmpzJyApO1xuXG5cbiQoZnVuY3Rpb24oKXtcbiAgY29uc3QgaWRfaGVybyA9ICQoXCIjanMtaGVyb1wiKTtcbiAgbGV0IHdpbl93aWR0aDtcbiAgbGV0IHdpbl9oZWlnaHQ7XG4gIGxldCBoZXJvX2hlaWdodDtcblxuXHQkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKXtcbiAgICB3aW5fd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB3aW5faGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgIGlmKCB3aW5fd2lkdGggPiA5ODAgKXtcbiAgICAgIGhlcm9faGVpZ2h0ID0gd2luX2hlaWdodDtcbiAgICAvLyB9IGVsc2UgaWYoIHdpbl93aWR0aCA8IDk4MCAmJiB3aW5fd2lkdGggPiA3NjAgKXtcbiAgICAgIC8vIGhlcm9faGVpZ2h0ID0gd2luX2hlaWdodC8yO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZXJvX2hlaWdodCA9IHdpbl9oZWlnaHQvMjtcbiAgICB9XG4gICAgaWRfaGVyby5jc3Moe2hlaWdodDogaGVyb19oZWlnaHR9KTtcbiAgfSk7XG59KTtcbiJdfQ==
