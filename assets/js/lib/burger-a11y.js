/**
 * Keep burger aria-expanded in sync when the full main bundle toggles
 * body.is-head-open (shared-theme-assets burger handler).
 */
(function () {
    'use strict';

    function syncBurger() {
        var burger = document.querySelector('.gh-burger');
        if (!burger) {
            return;
        }
        var open = document.body.classList.contains('is-head-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function init() {
        syncBurger();
        var observer = new MutationObserver(syncBurger);
        observer.observe(document.body, {attributes: true, attributeFilter: ['class']});
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
