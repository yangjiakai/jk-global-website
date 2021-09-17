$(function() {
		// set opacity to nill on page load
		$("ul#navi a").css("opacity","0");
		// on mouse over
		$("ul#navi a").hover(function () {
			// animate opacity to full
			$(this).stop().animate({
				opacity: 1
			}, 'slow');
		},
		// on mouse out
		function () {
			// animate opacity to nill
			$(this).stop().animate({
				opacity: 0
			}, 'slow');
		});
	});