
(function($) {
	$(document).ready(function(){
		var num = 75; //number of pixels before modifying styles
		var indexTab = 0;
		var sliderNavLength = $('.slider-nav ul li').length;
		var sliderNavParent = $('.slider-nav ul');
		var firstLoad = true;
		var autoPlay = setInterval(function(){
			$('.slider-nav li.active').timer();
		},3000);
		$(window).bind('scroll', function () {
			$(".secondary-nav ul a").css('display', 'none');
			$(".secondary-nav ul a.active").css('display', 'block');	
		    if ($(window).scrollTop() > num) {
		        $('.secondary-nav').addClass('sticky-nav');
		    } else {
		        $('.secondary-nav').removeClass('sticky-nav');
		    }
		});

		$(".secondary-nav ul .active").on('click', function(){
			$(".secondary-nav ul a").toggle(0, function(){
				$(".secondary-nav ul a.active").css('display', 'block');
			});
		});


		$('.slider-nav li').click(function(){
			var indexSlide = $(this).index();
			var $sliderNavElement = $(this);
			$( ".slider-content" ).animate({ "left": "-=751px" }, "slow", function(){
				$sliderNavElement.siblings().removeClass('active');
				$sliderNavElement.addClass('active');
				$.ajax({
					type: 'GET',
					url: 'static/html/slider-content-'+indexSlide+'.html',
					dataType: 'html',
					success: function(html, textStatus){
						$('.slider-content').remove();
						$('.slider-tab').append(html);
						$('.slider-content').css('display', 'none');
						$('.slider-content').fadeIn('slow');
					},
					error: function(xhr, textStatus, errorThrown){
						alert('An error occurred: ' + errorThrown)
					}
				});


			});
			
		});

		$('.slider-tab').on( 'swipeleft', swipeLeftHandler );
		
		function swipeLeftHandler( event ){
			var $sliderNavElement = $( event.target );
			sliderNavParent.find('li:eq('+indexTab+')').removeClass('active');		
			indexTab++;
			if(firstLoad == false && indexTab < sliderNavLength){

				$('.slider-content').animate({ "left": "-=751px" }, "slow", function(){
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else if(firstLoad == true){
				firstLoad = false;
				$('.slider-content').animate({ "left": "-=751px" }, "slow", function(){
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else{
				indexTab = 0;
				$('.slider-content').animate({ "left": "-=751px" }, "slow", function(){
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}	
		}

		$('.slider-tab').on( 'swiperight', swipeRightHandler );
		
		function swipeRightHandler( event ){
			var $sliderNavElement = $( event.target );
			sliderNavParent.find('li:eq('+indexTab+')').removeClass('active');		
			indexTab--;
			if(firstLoad == false && indexTab >= 0){
				$('.slider-content').animate({ "left": "+=751px" }, "slow", function(){
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else if(firstLoad == true){
				firstLoad = false;
				indexTab = sliderNavLength - 1;
				$('.slider-content').animate({ "left": "+=751px" }, "slow", function(){
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else{
				indexTab = sliderNavLength - 1;
				$('.slider-content').animate({ "left": "+=751px" }, "slow", function(){
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}	
		}

		jQuery.fn.timer = function(){
			if(firstLoad == false && indexTab < sliderNavLength){
				var $sliderNavElement = $(this);
				$( ".slider-content" ).animate({ "left": "-=751px" }, "slow", function(){
					$sliderNavElement.removeClass('active');
					$.ajax({
						type: 'GET',
						url: 'static/html/slider-content-'+indexTab+'.html',
						dataType: 'html',
						success: function(html, textStatus){
							$('.slider-content').remove();
							$('.slider-tab').append(html);
							$('.slider-content').css('display', 'none');
							$('.slider-content').fadeIn('slow');
							sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
							indexTab++;
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
				
			}
			else if(firstLoad == true){
				indexTab++;
				firstLoad = false;
			}
			else{
				indexTab = 0;
			}
		}

		function clearAutoPlay(){
			window.clearInterval(autoPlay);
		}

	});
})(jQuery);