// $('#menu-toggle').click(function(click) {
//     click.preventDefault();
//     $('#wrapper').toggleClass('toggled');
// });

// $('#menu-toggle').on('click', function() {
// 	if ($('#wrapper').hasClass('toggled')) {
// 		return $('#menu-toggle').html('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
// 	}
// 	else {
// 		return $('#menu-toggle').html('<i class="fa fa-bars fa-2x" aria-hidden="true"></i>');
// 	}
// });

// $(function() {
// 	$('#myWork').bind('click',function(event){
// 		var $anchor = $(this);

// 		$('html, body').stop().animate({
// 			scrollTop: $($anchor.attr('href')).offset().top
// 		}, 1500,'easeInOutExpo');
// 		/*
// 		if you don't want to use the easing effects:
// 		$('html, body').stop().animate({
// 			scrollTop: $($anchor.attr('href')).offset().top
// 		}, 1000);
// 		*/
// 		event.preventDefault();
// 	});
// });

allLineThrough = () => {
	document.getElementById('all').className += 'linethrough';
	document.getElementById('some').setAttribute("style", "display: initial;")	
}
someLineThrough = () => {
	document.getElementById('some').classList.add('linethrough');
	document.getElementById('one').setAttribute("style", "display: initial;")
}
oneLineThrough = () => {
	document.getElementById('one').classList.add('linethrough');
	document.getElementById('your').classList.add('linethrough');
	document.getElementById('ok').setAttribute("style", "display: initial;")
}

var functions = [allLineThrough, someLineThrough, oneLineThrough];
var i = 0;

callsFunctions = () => {
	functions[i++]();
	if (i < functions.length) 
	setTimeout(callsFunctions, 3000);	
} 

setTimeout(callsFunctions, 2500);


var mainText = document.querySelector(".main_text");
var aboutSection = document.querySelector(".about_section");
var showAbout = document.querySelector(".display_about");
var showMain = document.querySelector(".display_main");

displayAboutText = () => {
	mainText.classList.add('hidden')
	aboutSection.classList.remove('hidden')
}

displayMainText = () => {
	aboutSection.classList.add('hidden')
	mainText.classList.remove('hidden')
}

showAbout.addEventListener('click', displayAboutText)
showMain.addEventListener('click', displayMainText)
