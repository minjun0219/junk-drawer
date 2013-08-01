$.fn.quickmenu = function( options ){
	this.each(function(){
		
		// this
		var _this = $(this)
		
		// options
		var settings = {
			header: 310,
			quickTop: 80
		}
		$.extend( settings, options )
		
		// fixed position
		var scrolling = function() {
			var scrollTop = $(window).scrollTop()

			if( ( settings.header - settings.quickTop ) > scrollTop ) {
				
				_this.css({
					position: 'absolute',
					top: settings.header
				})
				
			}
			else {

				_this.css({
					position: 'fixed',
					top: settings.quickTop
				})
				
			}
		}
		
		// bind
		scrolling()
		$(window).bind('scroll resize', scrolling)
	})
	return this
}