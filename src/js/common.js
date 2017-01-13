define([
	"bootstrap",
], function() {
	function scrollUp() {
		$(document).ready(function() {
			var prePosition = 0;
			$(window).on("scroll", function(event) {
				var initPosition = $(this).scrollTop();
				if(initPosition > prePosition) {
					$("#scroll-up-button").show();
				}
				else {
					$("#scroll-up-button").hide();
				}
			});
		});
		$("#scroll-up-button").click(function() {
			$("html, body").animate({
				scrollTop: 0,
			}, 400);
		});
	}

	scrollUp();
});
