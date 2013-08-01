/* 확산툴 */
jQuery(function($){
	var $util = $(".top_btn");
	$("a", $util).hover(function(){
		$("img.on", this).show();
		$("img.off", this).hide();
		$("span", $util).hide();
		$(".topbtn_tooltip_" + $(this).attr("class")).show().animate({
			opacity: 1,
			top: "+=3"
		}, 300);
	},function(){
		$("img.on", this).hide();
		$("img.off", this).show();
		$(".topbtn_tooltip_" + $(this).attr("class")).animate({
			opacity: 0,
			top: "-=3"
		}, 80, function(){ $(this).hide(); });
	});
});