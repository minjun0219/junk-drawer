jQuery(function(){
	$("#gallery ul li").hover(function(){
		$("div", this).slideDown();
		$("img", this).animate({marginTop: '-=30px'});
	},function(){
		$("div", this).slideUp();
		$("img", this).animate({marginTop: '0px'});
	});
});