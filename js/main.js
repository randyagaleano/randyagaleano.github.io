$('#menu-toggle').click(function(click) {
    click.preventDefault();
    $('#wrapper').toggleClass('toggled');
});

$('#menu-toggle').on('click', function() {
	if ($('#wrapper').hasClass('toggled')) {
		return $('#menu-toggle').html('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
	}
	else {
		return $('#menu-toggle').html('<i class="fa fa-bars fa-2x" aria-hidden="true"></i>');
	}
});

$(function() {
	$('#myWork').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
});