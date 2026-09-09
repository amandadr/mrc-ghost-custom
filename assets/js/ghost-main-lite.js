/**
 * Subset of @tryghost/shared-theme-assets `v1/main.js`: burger + nav dropdown only.
 * Keeps posts/pages on full `main.min.js` (lightbox, reframe, PhotoSwipe).
 * Sync when upgrading shared-theme-assets if burger/dropdown wiring changes.
 */
(function () {
    var burger = document.querySelector('.gh-burger');
    if (!burger) return;

    function syncExpanded() {
        var open = document.body.classList.contains('is-head-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    syncExpanded();

    burger.addEventListener('click', function () {
        if (!document.body.classList.contains('is-head-open')) {
            document.body.classList.add('is-head-open');
        } else {
            document.body.classList.remove('is-head-open');
        }
        syncExpanded();
    });
})();

(function () {
    dropdown();
})();
