$(document).on('scroll', function() {
	$("#slide").css("letter-spacing", Math.max(180 - 0.2*window.scrollY, 0) + "px");

})
