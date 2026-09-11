/**
 * Minimal imagesLoaded(el, cb) so Ghost dropdown.js does not throw.
 * Shared lightbox never used the full imagesloaded vendor (~5KB).
 */
function imagesLoaded(el, cb) {
    if (typeof cb !== 'function') {
        return;
    }
    if (!el) {
        return;
    }

    var images = [];
    if (el.tagName === 'IMG') {
        images = [el];
    } else if (el.querySelectorAll) {
        images = Array.prototype.slice.call(el.querySelectorAll('img'));
    }

    if (!images.length) {
        cb();
        return;
    }

    var remaining = images.length;
    function tick() {
        remaining -= 1;
        if (remaining <= 0) {
            cb();
        }
    }

    images.forEach(function (img) {
        if (img.complete) {
            tick();
            return;
        }
        img.addEventListener('load', tick);
        img.addEventListener('error', tick);
    });
}
