jQuery(function($){/* raindrop@monocr.com */
	$('ul#nav > li > a').wrap('<span></span>');
	if($.browser.msie && $.browser.version.substr(0,1) <= 8){/*IE 구 버전 대응*/
		$('ul#nav > li ul').each(function(){
			var bg = $(this).css('background-image');
			$(this).css('background-image', bg.replace('bg.png','bg_ie.png') );
		});
	}
	$('ul#nav > li > span').mouseenter(function(){
		var $ul = $(this).parent().find('ul');
		var $other =  $(this).parents('ul').find('ul:visible');
		if( $ul.is(':hidden') ){
			$other.animate({'bottom':'-10px','opacity':'0'},'fast',function(){
				$(this).hide();
			});
			$other.hide();
			$ul.css({'bottom':'-5px','opacity':'0'}).show().animate({'bottom':'-13px','opacity':'1'});
		}
		$(this).parents('ul').find('span > a.on').removeClass('on');
		$('a',this).addClass('on');
	});
	$('ul#nav li.fix span a').addClass('on');
	$('ul#nav').mouseleave(function(){
		var _this = $(this);
		setTimeout(function(){
			$('ul#nav > li.fix > span').trigger('mouseenter');
		},8000);
	});
	$('ul#nav > li > span a').focus(function(){
		$(this).parent().trigger('mouseenter');
	});
});
