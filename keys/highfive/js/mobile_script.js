$(".menu_links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var  top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
});
$('.burger_menu-btn').on('click', function(e) {
	$(this).toggleClass('burger_menu-btn_active');
	$(".burger_menu").toggleClass("burger_menu_active");
});
    $(window).scroll(function() {
        if ($(document).scrollTop() > 118) {
            $('.burger_section').fadeIn(200);
        }
        else {
        	if ($('.burger_menu').hasClass('burger_menu_active')) {
        		$('.burger_section').fadeIn(200);
        	}
        	else{
        		$('.burger_section').fadeOut(200);
        	}
            
        }
    });