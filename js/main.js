$(document).ready(function(){
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 200){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});