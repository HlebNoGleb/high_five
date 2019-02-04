document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
		AOS.init();
	}, 2000);
}
$('.menu-btn').on('click', function(e) {
	$(this).toggleClass('menu-btn_active');
	$(".menu").toggleClass("menu_active");
});
 $('.hello_btn').on('click', function(e) {
	$('.hello').fadeOut(1000);
	setTimeout(function(){
		 		$(".load").fadeIn(200);
		 	}, 1000);
	setTimeout(function(){
		 		$('.all').fadeIn(1000); 
		 		$('header').slideDown(1000); 
		 		$('.beta').fadeIn(1000);
		 		$('html, body').css({'overflow-y':'auto'});
		 		$(".load").fadeOut(200);
		 	}, 3000);		
 });
 $('.experimental').on('click', function(e) {
 	$(this).removeClass('experimental');
 });
 function colsWidth() {
 	var colCount;
 	var colsW;
  	colCount = $('.cols .col').length;
  	colsW = colCount * 33;
   $('.cols').css('width', ''+colsW+'vw');
   $('.cols').css({'flex-wrap':'nowrap'});
   $('.cols').css({'flex-direction':'row'});
   $('body').css({'overflow-x':'scroll'});
   $('body').css({'overflow-y':'hidden'});
   $('html').css({'overflow':'hidden'});

   jQuery(function($) {
  $.fn.hScroll = function(amount) {
    amount = amount || 120;
    $(this).bind("DOMMouseScroll mousewheel", function(event) {
      var oEvent = event.originalEvent,
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
        position = $(this).scrollLeft();
      position += direction > 0 ? -amount : amount;
      $(this).scrollLeft(position);
      event.preventDefault();
    })
  };
});
   
Swal.fire({
  type: 'success',
  title: 'Nice ',
  text: 'Now u have horizontal scroll'
})
$(document).ready(function(colsW) {
	console.log(colsW);
  $('body').hScroll(100); // You can pass (optionally) scrolling amount
});
}
function nightMode() {
     $('.front, .back, body, .cols').css({'background-color':'#1e1e1e'});
     $('.front, .back').css({'color':'rgb(244,220,49)'});
     $('.line').css({'background-color':'rgb(244,220,49)'})
   };


var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.3)';

  $('.hello_bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 80; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 80;

});

moveBackground();




