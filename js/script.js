$('.menu-btn').on('click', function(e) {
	$(this).toggleClass('menu-btn_active');
	$(".menu").toggleClass("menu_active");
});

$('.hello_btn').on('click', function(e) {
	$('.all, header').show();
	// $('html, body').css({'overflow-y':'auto'});
	$('.hello').hide(1000);
	

  	$('html, body').animate({scrollTop: $('#kek').position().top+'px'}, 800)
 		
});



