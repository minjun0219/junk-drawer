jQuery(function(){
	$("#gallery ul li").hover(function(){
		$("div", this).slideDown();
	},function(){
		$("div", this).slideUp();
	});
});