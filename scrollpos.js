jQuery(function ($) {

    var scrollPos = function (loc, delay) {

        // location: is the location.pathname
        if (loc === 'undefined') loc = location.pathname;

        // add a delay if unavailable
        if (delay === 'undefined') delay = 0;

        this.scroll = function () {

            // apply scrollPos
            if (+sessionStorage.getItem('giuliaScrollPos-' + loc) !== window.pageYOffset) {

                let giuliaInfiniteScrollPos = +sessionStorage.getItem('giuliaScrollPos-' + loc);

                setTimeout(function () {

                    $(window).scrollTop(giuliaInfiniteScrollPos);

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

    var scrolling = new scrollPos(location.pathname, 1000);

    scrolling.scroll();

    window.onscroll = function () {

        scrolling.saveScroll();

    };

});
