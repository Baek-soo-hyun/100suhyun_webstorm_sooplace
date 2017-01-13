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


	function showLoginLayer() {
		$("#main-bar-login-button").on("click", function() {
			$("#main-login-layer").show();
		});
	}
	function hideLoginLayer() {
		$(".main-login-layer-close").on("click", function() {
			$("#main-login-layer").hide();
		});
	}


	function showMailLoginLayer() {
		$(".button-email").on("click", function() {
			$("#main-login-layer").hide();
			$("#mail-login-layer").show();
		});
	}
	function hideMailLoginLayer() {
		$(".mail-login-layer-close").on("click", function() {
			$("#mail-login-layer").hide();
			$("#main-login-layer").hide();
		});
	}


	function showFindPasswordLayer() {
		$(".mail-login-find-password").on("click", function() {
			$("#mail-login-layer").hide();
			$("#find-password-layer").show();
		});
	}
	function hideFindPasswordLayer() {
		$(".find-password-layer-close, .cancle-button").on("click", function() {
			$("#find-password-layer").hide();
			$("#main-login-layer").hide();
		});
	}


	function showSignUpLayer() {
		$(".mail-login-layer-signup-button").on("click", function() {
			$("#find-password-layer").hide();
			$("#email-signup-layer").show();
		});
	}
	function hideSignUpLayer() {
		$(".find-password-layer-close, .cancle-button, .email-signup-layer-close").on("click", function() {
			$("#email-signup-layer").hide();
			$("#main-login-layer").hide();
		});
	}


	function checkBox() {
		$(".remain-check-box").on("click", function() {
			$(".check-box-active").show();
		});
	}
	function unCheckBox() {
		$(".check-box-active").on("click", function() {
			$(".check-box-active").hide();
			$(".remain-check-box").show();
		});
	}


	scrollUp();
	showLoginLayer();
	hideLoginLayer();
	showMailLoginLayer();
	hideMailLoginLayer();
	showFindPasswordLayer();
	hideFindPasswordLayer();
	showSignUpLayer();

	hideSignUpLayer();
	checkBox();
	unCheckBox();
});
