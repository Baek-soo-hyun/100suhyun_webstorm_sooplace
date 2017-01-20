require([
	"common",
], function() {
	function activeDeliveryFilter() {
		$(".delivery-filter>ul>li").on("click", function() {
			$(".delivery-filter>ul>li").removeClass("active");
			$(this).addClass("active");
		});
	}

	activeDeliveryFilter();
});
