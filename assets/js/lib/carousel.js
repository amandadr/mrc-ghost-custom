/**
 * Carousel — progressive enhancement for .mrc-carousel-wrap[data-mrc-carousel].
 *
 * The track is already a working overflow-x / scroll-snap scroller. This only unhides
 * prev/next buttons when the track actually overflows, and keeps them in sync with
 * scroll position. If it cannot find a track or the buttons, it leaves the scroller
 * alone.
 */
(function () {
    'use strict';

    function initCarousel(root) {
        var track = root.querySelector('.mrc-carousel');
        var prev = root.querySelector('[data-carousel-prev]');
        var next = root.querySelector('[data-carousel-next]');
        if (!track || !prev || !next) {
            return;
        }

        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function pageWidth() {
            return Math.max(track.clientWidth * 0.85, 1);
        }

        function update() {
            var max = track.scrollWidth - track.clientWidth;
            var overflows = max > 4;
            root.classList.toggle('is-scrollable', overflows);
            if (!overflows) {
                return;
            }
            prev.disabled = track.scrollLeft <= 4;
            next.disabled = track.scrollLeft >= max - 4;
        }

        prev.addEventListener('click', function () {
            track.scrollBy({left: -pageWidth(), behavior: reduceMotion ? 'auto' : 'smooth'});
        });
        next.addEventListener('click', function () {
            track.scrollBy({left: pageWidth(), behavior: reduceMotion ? 'auto' : 'smooth'});
        });
        track.addEventListener('scroll', update, {passive: true});
        window.addEventListener('resize', update);

        update();
    }

    function init() {
        var roots = document.querySelectorAll('[data-mrc-carousel]');
        Array.prototype.forEach.call(roots, initCarousel);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
