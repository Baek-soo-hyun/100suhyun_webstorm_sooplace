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


	/* ----------------main logo----------------*/
	$("#main-bar-logo, #header-bar-logo").on("click", function() {
		location.href = "/";
	});


	/* ----------------header----------------*/
	$(".menu-hotple").on("click", function() {
		location.href = "hotple.html";
	});

	/* ----------------main search box----------------*/
	function search() {
		location.href = "search.html";
	}
	function clearSearchKeywords() {
		$("#main-top-search-input").val("");
	}

	$("#main-top-search-input").on("keyup", function(event) {
		if (event.keyCode === 13) {
			search();
		}
		else if (event.keyCode === 27) {
			clearSearchKeywords();
		}
	});


	/* ----------------search box layer----------------*/
	function showSearchBoxLayer() {
		$("#main-top-search-input").on("click", function(event) {
			$("#search-box-layer").show();
		});
	}
	function activeSearchBoxLayerList() {
		$(".search-box-layer-list").mouseover(function() {
			$(".search-box-layer-list").removeClass("active");
			$(this).addClass("active");
		});
	}
	function hideSearchBoxLayer() {
		$(".sp-container").click(function(e) {
			if (!$("#main-top-search-box").has(e.target).length) {
				$("#search-box-layer").hide();
				$(".search-box-layer-list").removeClass("active");
			}
		});
	}


	/* ----------------search box clear btn----------------*/
	function showSearchClearBtn() {
		$("#main-top-search-input").on("keyup", function(event) {
			$(".search-box-clear-btn").show();
		});
	}
	function hideSearchClearBtn() {
		$(".search-box-clear-btn").on("click", function(event) {
			$("#search-box-layer").hide();
			$(".search-box-clear-btn").hide();
			$("#main-top-search-input").val("");
		});
	}


	/* ----------------login layers----------------*/
	function showLoginLayer() {
		$("#main-bar-login-button").on("click", function() {
			$("#main-login-layer").show();
		});
	}
	function hideLoginLayer() {
		$(".layer-close-button").on("click", function() {
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
		$(".layer-close-button").on("click", function() {
			$("#mail-login-layer").hide();
			$(".check-box-active").hide();
			$(".email-addr-inputbox").val("");
			$(".password-inputbox").val("");
		});
	}


	function showFindPasswordLayer() {
		$(".mail-login-find-password").on("click", function() {
			$("#mail-login-layer").hide();
			$("#find-password-layer").show();
		});
	}
	function hideFindPasswordLayer() {
		$(".layer-close-button, .cancle-button").on("click", function() {
			$("#find-password-layer").hide();
			$("#main-login-layer").hide();
			$(".email-addr-inputbox").val("");
		});
	}


	function showSignUpLayer() {
		$(".mail-login-layer-signup-button").on("click", function() {
			$("#mail-login-layer").hide();
			$("#email-signup-layer").show();
		});
	}
	function hideSignUpLayer() {
		$(".layer-close-button").on("click", function() {
			$("#find-password-layer").hide();
			$("#email-signup-layer").hide();
			$("#main-login-layer").hide();
			$(".check-box-active").hide();
			$(".all-check-box-active").hide();
			$(".email-addr-inputbox").val("");
			$(".password-inputbox").val("");
			$(".again-password-inputbox").val("");
		});
	}


	function singleCheckBox() {
		$(".single-check-box").on("click", function() {
			var select = $(this).parent("div");
			select.find("i").show();
		});
	}
	function singleUnCheckBox() {
		$(".check-box-active").on("click", function() {
			$(this).hide();
		});
	}


	function allCheckBox() {
		$(".all-check-box").on("click", function() {
			$(".check-box-active").show();
			$(".all-check-box-active").show();
		});
	}
	function allUnCheckBox() {
		$(".all-check-box-active").on("click", function() {
			$(".check-box-active").hide();
			$(this).hide();
		});
	}


	/* ----------------footer local category----------------*/
	function clickCategory() {
		$(".local-category>li").on("click", function() {
			var select = $(this).parent("ul");
			select.find("li").removeClass("active");
			$(this).addClass("active");
			activeCategory();
		});
	}
	function activeCategory() {
		$(".local-category>li").mouseover(function() {
			var select = $(this).parent("ul");
			select.find("li").removeClass("active");
			$(this).addClass("active");
		});
	}
	function inActiveCategory() {
		$(".local-category>li").mouseout(function() {
			$(".local-category>li").removeClass("active");
			$(".local-category>li.su").addClass("active");
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
	singleCheckBox();
	singleUnCheckBox();
	allCheckBox();
	allUnCheckBox();
	clickCategory();
	activeCategory();
	inActiveCategory();
	showSearchClearBtn();
	hideSearchClearBtn();
	showSearchBoxLayer();
	hideSearchBoxLayer();
	activeSearchBoxLayerList();
});
