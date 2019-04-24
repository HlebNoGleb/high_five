$(".buttons, .post__link").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var  top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
			$('.company_name_screen').css({'filter': 'drop-shadow( -5px 5px 5px rgba(255,255,255,1)) drop-shadow( -2px 2px 1px rgba(255,255,255,.7))'});
			// $('body').css({'overflow-y':'scroll'});
				setTimeout(function(){
						animate_this_shit();
							}, 4500);
		}
	}, 2500);
}
// setTimeout(function(){
//     var preloader = document.getElementById('pade-preloader');
//     if(!preloader.classList.contains('done')){
//       preloader.classList.add('done');
//     }
//   }, 3000);
function animate_this_shit() {
	$('.company_name').addClass('company_name_animation');
	
	window.setInterval(function(){
  var number = 1 + Math.floor(Math.random() * 10);
  console.log(number);
        if(number>=5){
     		 $('.company_name').addClass('company_name_animation');
      }  
      else{
     	 	$('.company_name').removeClass('company_name_animation');
  	  }
}, 400);
}

 
$('.carusel').slick({
	arrows: true,
	dots: false,
	dotsClass: "my-dots",
	nextArrow: '.slick-next',
	prevArrow: '.slick-prev',


});

function Length() {
	var path0 = document.querySelector('#logo0');
	var path1 = document.querySelector('#logo1');
	// var path2 = document.querySelector('#logo2');
	// var path3 = document.querySelector('#logo3');
	// var path4 = document.querySelector('#logo4');
	// var path5 = document.querySelector('#logo5');
	// var path6 = document.querySelector('#logo6');
	// var path7 = document.querySelector('#logo7');
	// var path8 = document.querySelector('#logo8');
	var len0 = Math.round(path0.getTotalLength());
	var len1 = Math.round(path1.getTotalLength());
	// var len2 = Math.round(path2.getTotalLength());
	// var len3 = Math.round(path3.getTotalLength());
	// var len4 = Math.round(path4.getTotalLength());
	// var len5 = Math.round(path5.getTotalLength());
	// var len6 = Math.round(path6.getTotalLength());
	// var len7 = Math.round(path7.getTotalLength());
	// var len8 = Math.round(path8.getTotalLength());
	alert("__" + len0 + "__ " + len1 );
};

		$(document).ready(function(){
			// Length();
		$(".et-hero-tabs-container").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		});
		});
$(document).ready(function(){


	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".js-trigger-video-modal").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
        
          // Grab the video ID from the element clicked
          var id = $(this).attr('data-youtube-id');

          // Autoplay when the modal appears
          // Note: this is intetnionally disabled on most mobile devices
          // If critical on mobile, then some alternate method is needed
          var autoplay = '?autoplay=1';

          // Don't show the 'Related Videos' view when the video ends
          var related_no = '&rel=0';

          // String the ID and param variables together
          var src = 'https://www.youtube.com/embed/'+id+autoplay+related_no;
          
          // Pass the YouTube video ID into the iframe template...
          // Set the source on the iframe to match the video ID
          $("#youtube").attr('src', src);
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        $("#youtube").attr('src', '');
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();



});