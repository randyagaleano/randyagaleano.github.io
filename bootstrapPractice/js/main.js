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

