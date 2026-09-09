/**
 * Article TOC — progressive enhancement for [data-mrc-toc].
 *
 * If the list is empty, headings are read from [data-mrc-toc-source] (or .gh-content)
 * and turned into links. If the list already has links (an authored TOC), they are
 * left alone. In both cases the current heading is marked with aria-current as you
 * scroll. Missing pieces mean we do nothing, which is a usable static list.
 */
(function () {
    'use strict';

    function slugify(text) {
        return text
            .toLowerCase()
            .replace(/['’]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .slice(0, 60);
    }

    function uniqueId(base, used) {
        var id = base || 'section';
        var n = 2;
        var candidate = id;
        while (used[candidate] || document.getElementById(candidate)) {
            candidate = id + '-' + n;
            n += 1;
        }
        used[candidate] = true;
        return candidate;
    }

    function headingsIn(source) {
        return Array.prototype.slice.call(source.querySelectorAll('h2, h3'));
    }

    function buildList(list, headings) {
        var used = {};
        headings.forEach(function (heading) {
            if (!heading.id) {
                heading.id = uniqueId(slugify(heading.textContent || ''), used);
            } else {
                used[heading.id] = true;
            }
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + heading.id;
            a.textContent = (heading.textContent || '').trim();
            li.appendChild(a);
            list.appendChild(li);
        });
    }

    function watch(nav, headings) {
        if (!('IntersectionObserver' in window) || !headings.length) {
            return;
        }

        var links = Array.prototype.slice.call(nav.querySelectorAll('.mrc-toc__list a'));
        var byId = {};
        links.forEach(function (link) {
            var id = (link.getAttribute('href') || '').replace('#', '');
            if (id) {
                byId[id] = link;
            }
        });

        var current = null;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    current = entry.target.id;
                }
            });
            links.forEach(function (link) {
                var id = (link.getAttribute('href') || '').replace('#', '');
                if (id && id === current) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }, {rootMargin: '0px 0px -70% 0px', threshold: 0.1});

        headings.forEach(function (heading) {
            if (heading.id && byId[heading.id]) {
                observer.observe(heading);
            }
        });
    }

    function initToc(nav) {
        var list = nav.querySelector('.mrc-toc__list');
        if (!list) {
            return;
        }

        var selector = nav.getAttribute('data-mrc-toc-source') || '.gh-content';
        var source = document.querySelector(selector);
        var headings = source ? headingsIn(source) : [];

        if (!list.children.length && headings.length) {
            buildList(list, headings);
        }

        var linked = headings.filter(function (heading) {
            return !!heading.id;
        });
        watch(nav, linked.length ? linked : headings);
    }

    function init() {
        var roots = document.querySelectorAll('[data-mrc-toc]');
        Array.prototype.forEach.call(roots, initToc);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
