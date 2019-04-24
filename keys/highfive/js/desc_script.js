// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 1);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        // $('header').removeClass('nav-down').addClass('nav-up');
        $(".top_header").slideUp(200);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            // $('header').removeClass('nav-up').addClass('nav-down');
             $(".top_header").slideDown(200);
        }
    }
    
    lastScrollTop = st;
}
$(".bottom_header .menu_links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        var header = $('.bottom_header').height();
        $('body,html').animate({scrollTop: top-header}, 1500);
});