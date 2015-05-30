(function($) {
	$(document).ready(function(){
		var num = 1; //number of pixels before modifying styles
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
			var indexSlide = $(this).index() + 1;
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$.ajax({
				type: 'GET',
				url: 'static/html/sllder-content-'+indexSlide+'.html',
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


	});
})(jQuery);

