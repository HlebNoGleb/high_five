setTimeout(function(){
    var preloader = document.getElementById('pade-preloader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 1000);
$(".menu_links, li, .logo").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var  top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 130}, 1500);
    });
$('.burger, .overlay, .main .menu_link a').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});
$("input[name=phone]").inputmask({"mask": "+7(999) 999-9999"});
$(".fa-times-circle").on("click", function() {
  $(".popup").fadeOut(200);
});
$(".mask").on('click', function (e) {
    $(".popup").fadeOut(200);
})
$(".btn_pop").on("click", function() {
  $(".popup").fadeIn(200);
});
function hide_popup() {
 $(".popup").fadeOut(200);
}

$(function() {
      $('.first_form').submit(function(e) {
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
           hide_popup();
      });
});
$(function() {
      $('.third_form').submit(function(e) {
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
           hide_popup();
      });
});
$(function() {
      $('.last_form').submit(function(e) {
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
           hide_popup();
      });
});
$(function() {
        $('.second_form').submit(function(e) {
          e.preventDefault();
          //var $form = $(this);
          var data = new FormData(this);
          console.log(data);
            $.ajax({
                type: 'POST',//$form.attr('method'),
                url: 'mail_file.php',//$form.attr('action'),
                data: data,//$form.serialize()
                processData: false,
                contentType: false
            }).done(function() {
              swal("Спасибо", "Ваша заявка принята, с вами свяжуться в ближайшее время", "success");
              $("form").trigger("reset");
            }).fail(function() {
                // $('#modal-6').addClass('md-show');
                swal("Плохо", "Что-то не сработало", "error");
            });
        });
    });

// $('.item').on("click", function() {
//   console.log("lol");
//         var clo = $(this).closest(".wrap").clone();
//         $(clo).prependTo(".slider_popup_img");        
//         $(".slider_popup").fadeIn(200);
// });
$('.slider_popup .six_mask').on("click", function() {
    // $('.slider_popup .slider_popup_img').find('img').remove();
    // $('.slider_popup').fadeOut(200);
    // console.log('keke');
});
$('.slider_popup .six_mask').on("click", function() {
    
});
