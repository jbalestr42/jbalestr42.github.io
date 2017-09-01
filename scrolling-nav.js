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

var $contactForm = $('#contactForm');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/julien.balestrieri@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.find('.alert-empty').hide();
			$contactForm.find('.alert-info').show();
		},
		success: function(data) {
			$contactForm.find('.alert-info').hide();
			$contactForm.find('.alert-success').show();
			$contactForm.find('.btn-send').attr("disabled", true);
			setTimeout(clearSuccess, 5000);
		},
		error: function(err) {
			$contactForm.find('.alert-info').hide();
			$contactForm.find('.alert-danger').show();
			setTimeout(clearError, 10);
		}
	});
});

function clearError()
{
	$contactForm.find('.alert-info').hide();
	$contactForm.find('.alert-success').hide();
	$contactForm.find('.alert-error').hide();
	$contactForm.find('.alert-empty').show();
	$contactForm.find('.btn-send').attr("disabled", false);
}

function clearSuccess()
{
	$contactForm.find('.alert-info').hide();
	$contactForm.find('.alert-success').hide();
	$contactForm.find('.alert-error').hide();
	$contactForm.find('.alert-empty').show();
	$contactForm.find('.form-message').val("");
	$contactForm.find('.btn-send').attr("disabled", false);
}

