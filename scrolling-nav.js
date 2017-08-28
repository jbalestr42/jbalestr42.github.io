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

	$(document).on("scroll", function() {
		if($(document).scrollTop()>100) {
			$("nav").removeClass("large").addClass("small");
		} else {
			$("nav").removeClass("small").addClass("large");
		}
		
	});

})(jQuery); // End of use strict
