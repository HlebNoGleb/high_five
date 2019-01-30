// document.body.onload = function(){
// 	setTimeout(function(){
// 		var preloader = document.getElementById('page-preloader');
// 		if(!preloader.classList.contains('done')){
// 			preloader.classList.add('done');
// 		}
// 		AOS.init();
// 	}, 2000);
// }
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

$(document).ready(function() {
  $('body').hScroll(60); // You can pass (optionally) scrolling amount
});
}




