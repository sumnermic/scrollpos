jQuery(window).bind('load', function () {

    var scrollPos = function (loc, delay) {

        // location: is the location.pathname
        if (loc === 'undefined') loc = location.pathname;

        // add a delay if unavailable
        if (delay === 'undefined') delay = 0;

        this.scroll = function () {

            // apply scrollPos
            if (+sessionStorage.getItem('giuliaScrollPos-' + loc)) {

                var giuliaInfiniteScrollPos = +sessionStorage.getItem('giuliaScrollPos-' + loc);

                setTimeout(function () {

                    jQuery(window).scrollTop(giuliaInfiniteScrollPos);

                }, delay);

            }

        }

        this.saveScroll = function () {

            // save new scrollPos
            if (window.pageYOffset > 1) {

                sessionStorage.setItem('giuliaScrollPos-' + loc, window.pageYOffset);

            }

        }

    }

    var scrolling = new scrollPos(location.pathname);

    window.onscroll = function () {

        scrolling.saveScroll();

    };

    scrolling.scroll();

});
