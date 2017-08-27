(function($) {
	"use strict"; // Start of use strict

	// Closes responsive menu when a scroll trigger link is clicked
	$('.page-scroll').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 54
	});

})(jQuery); // End of use strict
