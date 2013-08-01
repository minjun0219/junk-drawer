jQuery(function($){
	$('#respond input[type=text], #respond textarea').keydown(function(){
		$(this).parent().find('label').hide();
	}).blur(function(){
		if( !$(this).val() ){
			$(this).parent().find('label').fadeIn(250);
		}
	}).show(function(){
		if( $(this).val() ){
			$(this).parent().find('label').hide();
		}
	});
	$('#respond label').click(function(){
		$(this).parent().find('#respond input[type=text],#respond textarea').focus();
	});
});