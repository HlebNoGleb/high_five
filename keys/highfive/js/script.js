$('.beta').on('click', function(e) {
	 swal("Сожалею", "Страница находится в разработке. Если вы хотите узнать информацию по интересующему вас разделу - оставьте заявку или пишите на highfive@gmail.com (звоните +375 (29) 999-99-99)", "error");
});
$('.cross').on('click', function(e) {
	 $('.mask').fadeOut(300);
});
$('.popup_open').on('click', function(e) {
	 $('.mask').fadeIn(300);
});
$(function() {
      $('.form').submit(function(e) {
        var $form = $(this);
          $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize()
          }).done(function() {
            swal("Спасибо", "Ваша заявка принята, с вами свяжуться в ближайшее время", "success");
            $("form").trigger("reset");
          }).fail(function() {
              swal("Плохо", "Что-то не сработало", "error");
          });
          //отмена действия по умолчанию для кнопки submit
          e.preventDefault();
            $('.mask').fadeOut(300);
      });
  });
  $(function() {
      $('.popup_form').submit(function(e) {
        var $form = $(this);
          $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize()
          }).done(function() {
            swal("Спасибо", "Ваша заявка принята, с вами свяжуться в ближайшее время", "success");
            $("form").trigger("reset");
          }).fail(function() {
              swal("Плохо", "Что-то не сработало", "error");
          });
          //отмена действия по умолчанию для кнопки submit
          e.preventDefault();
            $('.mask').fadeOut(300);
      });
  });