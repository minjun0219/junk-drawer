jQuery(function(){
	/* 초기 설정 */
	var $thumbList = $("#productImg .thumbList");

	/* 박스 위치 초기 설정 */
	var $thumbFirstOffset = $("li:first", $thumbList).offset();
	$("div.imgSelected").css("left", ($thumbFirstOffset.left - 11) + "px");

	/* 박스 Hover */
	$("li", $thumbList).mouseover(function(){

		/* 박스 이동 애니메이션 */
		var offset = $(this).offset();
		$("div.imgSelected").stop().animate({"left": (offset.left - 11) + "px"}, 500);

		/* 큰 이미지 교체 */
		$("#bigImg").attr("src", "./imgs/" + $(this).attr("title") + ".jpg");
	});
});