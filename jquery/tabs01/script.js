jQuery(function(){
	$('#productTabs li a').click(function(){
		$(this).parents().find('div#productTabs').attr('class', '').addClass( $(this).parent().attr('class') );
	});
});