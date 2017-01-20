require([
	"common",
], function() {
	function activeThemeTagList() {
		$(".theme-list>li").mouseover(function() {
			$(".theme-tag-keyword").removeClass("active");
			$(this).find(".theme-tag-keyword").addClass("active");
		});
	}
	function inActiveThemeTagList() {
		$(".theme-list>li").mouseout(function() {
			$(".theme-tag-keyword").removeClass("active");
		});
	}

	activeThemeTagList();
	inActiveThemeTagList();
});
