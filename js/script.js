$('.menu-btn').on('click', function(e) {
  // e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $(".menu").toggleClass("menu_active");
});
$('.hello_btn').on('click', function(e) {
  $(".hello").css({'transform':'scale(20)'});
});


