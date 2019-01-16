$('.menu-btn').on('click', function(e) {
	$(this).toggleClass('menu-btn_active');
	$(".menu").toggleClass("menu_active");
});

 $('.hello_btn').on('click', function(e) {
// 	$('.all, header').show();
// 	// $('html, body').css({'overflow-y':'auto'});
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
	// $('.all').scrollDow(1000); 		
 });
// $(".hello").on("click","a", function (event) {
		// $('html').css({'overflow-y':'scroll'});
		// event.preventDefault();        
  //       var id  = $(this).attr('href');
  //       var  top = $(id).offset().top;
  //       $('body,html').animate({scrollTop: top}, 1500);
		// setTimeout(function(){
		// 		$('.hello').hide(0);
		// 	}, 1000);	

    // });
