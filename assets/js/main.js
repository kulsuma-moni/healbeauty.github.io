(function($){
    "use strict";
    	// Sticky Menu
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 100){
        $('.header_area').addClass('menu-shrink animated slideInDown');
        } else {
        $('.header_area').removeClass('menu-shrink animated slideInUp');
        }
    });
    	  // data-background
          $("[data-background]").each(function(){
            $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
          });
    $('.your-slider').carouselLineArrow({

        // duration in ms
        lineDur: 5000,
        heightIsProportional: false,
        // or 'top'
        linePosition: 'top',
      
        // height
        lineHeight: '5px',
      
        // background color
        lineColor: '#dee365'
        
      });
    	//   TO-TOP
	$('.to-top').toTop({
		//options with default values
		autohide: true,  //boolean 'true' or 'false'
		offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
		speed: 400,      //numeric value (as mili-seconds) for duration
		position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
		left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
		bottom: 30       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
	});

})(jQuery);