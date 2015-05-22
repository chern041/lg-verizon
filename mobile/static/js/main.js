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
