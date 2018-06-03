var $ = jQuery.noConflict();

(function($) {
    "use strict";

    var width  =  $(window).width();
    
    try {
        //home isotope
        $('#home-menu a[href^="#contacts"]').on("click",function() {
            initialize();
        });
        var $homeContainer = $('.home-items'),
            $filtersContainer = $('#home-menu .filters'),
            $filters = $filtersContainer.find('a[href^="#"]').not('a[href="#"]'),
            isFilterClicked = false;

        $homeContainer.imagesLoaded( function() {
            $homeContainer.isotope({
                itemSelector : '.one-item',
                resizable: false,
                transitionDuration: '0.6s',
                layoutMode: 'packery'
            });
        });

        $filters.on('click', function () { 
            var ownThis = $(this),
                href = ownThis.attr('href');

            if ( ownThis.hasClass('is-checked') ) {
                return;
            } else {
                $filters.removeClass('is-checked');
                ownThis.addClass('is-checked');
            }

            jQuery.bbq.pushState( '#' + href );
            isFilterClicked = true;
            return false;
        });

        $(window).on( 'hashchange', function( event ){
            var theFilter = window.location.hash.replace( /^#/, '');

            if( theFilter == false )
                theFilter = 'home';

            $homeContainer.imagesLoaded( function() {
                $homeContainer.isotope({
                    filter: '.' + theFilter
                });
            });

            if ( isFilterClicked == false ){
                $filters.removeClass('is-checked');
                $filtersContainer.find('a[href="#'+ theFilter +'"]').addClass('is-checked');
            }

            isFilterClicked = false;
        }).trigger('hashchange');

    } catch(err) {

    }

})(jQuery);

$(document).ready(function($) {
    "use strict";
    
    /*-------------------------------------------------*/
    /* =  Simple Carousel index-onepage
    /*-------------------------------------------------*/
    try {
        setInterval(function(){$('.team-carousel').swapImages(); }, 3000);
        setInterval(function(){$('.partners-carousel').swapImages(); }, 3000);
    } catch(err) {

    }

});