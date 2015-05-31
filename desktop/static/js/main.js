(function($) {
	$(document).ready(function(){
		var num = 122; //number of pixels before modifying styles
		var indexTab = 0;
		var sliderNavLength = $('.slider-nav ul li').length;
		var sliderNavParent = $('.slider-nav ul');
		var firstLoad = true;
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
			var indexSlide = $(this).index();

			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$.ajax({
				type: 'GET',
				url: 'static/html/slider-content-'+indexSlide+'.html',
				dataType: 'html',
				success: function(html, textStatus){
					$('.slider-content').remove();
					$('.slider-tab').append(html);
				},
				error: function(xhr, textStatus, errorThrown){
					alert('An error occurred: ' + errorThrown)
				}
			});
		});

		jQuery.fn.timer = function(){
			
			

			if(firstLoad == false && indexTab < sliderNavLength){
				$(this).removeClass('active');
				$.ajax({
					type: 'GET',
					url: 'static/html/slider-content-'+indexTab+'.html',
					dataType: 'html',
					success: function(html, textStatus){
						$('.slider-content').remove();
						$('.slider-tab').append(html);
						
						sliderNavParent.find('li:eq('+indexTab+')').addClass('active');
						indexTab++;
					},
					error: function(xhr, textStatus, errorThrown){
						alert('An error occurred: ' + errorThrown)
					}
				});
				
			}
			else if(firstLoad == true){
				indexTab++;
				firstLoad = false;
			}
			else{
				indexTab = 0;
			}

			console.log('actual position: ' + indexTab);
			
		}

		window.setInterval(function(){
			$('.slider-nav li.active').timer();
		},3000);


	});
})(jQuery);

