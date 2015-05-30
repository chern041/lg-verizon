var num = 1; //number of pixels before modifying styles
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


