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

      // SEARCH BAR
      $(".input_show").click(function(){
          $(".search_field").show();
      });
      $(".input_hide").click(function(){
        $(".search_field").hide();
    });

    $('.hero_slider').carouselLineArrow({
        lineDur: 5000,
        heightIsProportional: false,
        linePosition: 'top',
        lineHeight: '5px',
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
      $('.view_img').owlCarousel({
        loop:true,
        margin:10,
        items:5,
        dots:false,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
    $('.view_img_2').owlCarousel({
      loop:true,
      margin:10,
      items:5,
      dots:false,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          576:{
              items:2,
              nav:false
          },
          1000:{
              items:4,
              nav:true,
              loop:false
          }
      }
  });
    $('.input_apand').on('click',function(){
      var $qty=$(this).closest('.product_quentyti').find('.qty');
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
    $('.input_prepand').on('click',function(){
      var $qty=$(this).closest('.product_quentyti').find('.qty');
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
      }
    });

    $(".share_btn").click(function(){
			$(".share_icon").toggle();
			});


      const form = document.getElementById('form');
      const username = document.getElementById('username');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const password2 = document.getElementById('password2');
      
      form.addEventListener('submit', e => {
        e.preventDefault();
        
        checkInputs();
      });
      
      function checkInputs() {
        // trim to remove the whitespaces
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        
        if(usernameValue === '') {
          setErrorFor(username, 'Username cannot be blank');
        } else {
          setSuccessFor(username);
        }
        
        if(emailValue === '') {
          setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
          setErrorFor(email, 'Not a valid email');
        } else {
          setSuccessFor(email);
        }
        
        if(passwordValue === '') {
          setErrorFor(password, 'Password cannot be blank');
        } else {
          setSuccessFor(password);
        }
        
        if(password2Value === '') {
          setErrorFor(password2, 'Password2 cannot be blank');
        } else if(passwordValue !== password2Value) {
          setErrorFor(password2, 'Passwords does not match');
        } else{
          setSuccessFor(password2);
        }
      }
      
      function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
      }
      
      function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
      }
        
      function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
})(jQuery);