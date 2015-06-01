(function($) {
	$(document).ready(function(){
		var num = 85; //number of pixels before modifying styles
		var indexTab = 0;
		var sliderNavLength = $('.slider-nav ul li').length;
		var sliderNavParent = $('.slider-nav ul');
		var firstLoad = true;
		var autoPlay = setInterval(function(){
			$('.slider-nav li.active').timer();
		},3000);


		$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > num) {
		        $('.secondary-nav').addClass('sticky-nav');
		        $('.main-wrapper').addClass('sticky-nav');
		    } else {
		        $('.secondary-nav').removeClass('sticky-nav');
		        $('.main-wrapper').addClass('sticky-nav');
		    }
		});

		$('.slider-nav li').click(function(){
			clearAutoPlay();
			var indexSlide = $(this).index();
			var $sliderNavElement = $(this);
			$( ".slider-content" ).animate({ "left": "-=1000px" }, "slow", function(){
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
			clearAutoPlay();
			var $sliderNavElement = $( event.target );	
			indexTab++;
			if(firstLoad == false && indexTab < sliderNavLength){

				$('.slider-content').animate({ "left": "-=1000px" }, "slow", function(){
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
							sliderNavParent.find('li:eq('+indexTab+')').siblings().removeClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else if(firstLoad == true){
				firstLoad = false;
				$('.slider-content').animate({ "left": "-=1000px" }, "slow", function(){
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
							sliderNavParent.find('li:eq('+indexTab+')').siblings().removeClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else{
				sliderNavParent.find('li:eq('+indexTab+')').removeClass('active');	
				indexTab = 0;
				$('.slider-content').animate({ "left": "-=1000px" }, "slow", function(){
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
							sliderNavParent.find('li:eq('+indexTab+')').siblings().removeClass('active');
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
			clearAutoPlay();
			var $sliderNavElement = $( event.target );	
			indexTab--;
			if(firstLoad == false && indexTab >= 0){
				$('.slider-content').animate({ "left": "+=1000px" }, "slow", function(){
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
							sliderNavParent.find('li:eq('+indexTab+')').siblings().removeClass('active');
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
				$('.slider-content').animate({ "left": "+=1000px" }, "slow", function(){
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
							sliderNavParent.find('li:eq('+indexTab+')').siblings().removeClass('active');
							
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}
			else{
				indexTab = sliderNavLength - 1;
				$('.slider-content').animate({ "left": "+=1000px" }, "slow", function(){
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
							sliderNavParent.find('li:eq('+indexTab+')').siblings().removeClass('active');
						},
						error: function(xhr, textStatus, errorThrown){
							alert('An error occurred: ' + errorThrown)
						}
					});
				});
			}	
			console.log(indexTab);
		}

		jQuery.fn.timer = function(){
			if(firstLoad == false && indexTab < sliderNavLength){
				var $sliderNavElement = $(this);
				$( ".slider-content" ).animate({ "left": "-=1000px" }, "slow", function(){
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