/* 확산툴 */
jQuery(function($){
	var $util = $(".util");
	$("a", $util).hover(function(){
		$("span", $util).hide();
		$(".util_tooltip_" + $(this).attr("class")).show().animate({
			opacity: 1,
			top: "+=3"
		}, 300);
	},function(){
		$(".util_tooltip_" + $(this).attr("class")).animate({
			opacity: 0,
			top: "-=3"
		}, 80, function(){ $(this).hide(); });
	});
});