jQuery(function($){
	/* 인기검색어 롤링 */
	$.keyword_rolling = function(){
		$('#top_keyword_rank ul').animate({
			marginTop: '-=16px'
		}, 'normal', function(){
			$('li:first', this).appendTo(this);

			/*if($.browser.msie && $.browser.version <= 7)
				$(this).css('margin-top', '0');
			else*/
				$(this).css('margin-top', '0');
		});
		setTimeout(function(){ $.keyword_rolling() }, 5000);
	}

	if( $('#top_keyword_rank ul') ) {
		setTimeout(function(){ $.keyword_rolling() }, 5000);
	}
});