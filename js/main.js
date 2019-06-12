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

function1 = () => {
	document.getElementById('all').className += 'linethrough';
	document.getElementById('some').setAttribute("style", "display: initial;")	
}
function2 = () => {
	document.getElementById('some').classList.add('linethrough');
	document.getElementById('one').setAttribute("style", "display: initial;")
}
function3 = () => {
	document.getElementById('one').classList.add('linethrough');
	document.getElementById('your').classList.add('linethrough');
	document.getElementById('ok').setAttribute("style", "display: initial;")
}

var functions = [function1, function2, function3];
var i = 0;

callsFunctions = () => {
	functions[i++]();
	if (i < functions.length) 
	setTimeout(callsFunctions, 2000);	
} 

setTimeout(callsFunctions, 1000);
