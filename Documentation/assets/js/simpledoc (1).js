
;(function( $, window, document, undefined ) {

	$(function() {

		if( $.fn.magnificPopup ) {

			$( 'a.mfp-zoom:not(.mfp-zoom-gallery)' ).magnificPopup({
				type: 'image'
			});

			$( '.mfp-gallery' ).magnificPopup({
				delegate: '.mfp-zoom-gallery', 
				type: 'image', 
				gallery: {
					enabled: true
				}
			});

		}

	});

})( jQuery, window, document );