/**
 * Article TOC — progressive enhancement for [data-mrc-toc].
 *
 * If the list is empty, headings are read from [data-mrc-toc-source] (or .gh-content)
 * and turned into a nested outline (h2 sections, h3/h4 subsections). If the list
 * already has links (an authored TOC), those links are kept and nested to match
 * the heading levels they point at. In both cases the current heading is marked
 * with aria-current as you scroll. Missing pieces mean we do nothing, which is a
 * usable static list.
 */
(function () {
    'use strict';

    var HEADING_SELECTOR = 'h2, h3, h4';

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

    function headingLevel(node) {
        if (!node || !/^H[2-6]$/.test(node.tagName)) {
            return 2;
        }
        var level = parseInt(node.tagName.charAt(1), 10);
        return level > 4 ? 4 : level;
    }

    function headingsIn(source) {
        return Array.prototype.slice.call(source.querySelectorAll(HEADING_SELECTOR));
    }

    function ensureId(heading, used) {
        if (!heading.id) {
            heading.id = uniqueId(slugify(heading.textContent || ''), used);
        } else {
            used[heading.id] = true;
        }
        return heading.id;
    }

    function entriesFromHeadings(headings) {
        var used = {};
        return headings.map(function (heading) {
            var text = (heading.textContent || '').trim();
            if (!text) {
                return null;
            }
            return {
                id: ensureId(heading, used),
                text: text,
                level: headingLevel(heading)
            };
        }).filter(Boolean);
    }

    function entriesFromExistingLinks(list) {
        var links = Array.prototype.slice.call(list.querySelectorAll('a'));
        return links.map(function (link) {
            var href = link.getAttribute('href') || '';
            if (href.charAt(0) !== '#') {
                return null;
            }
            var id = href.slice(1);
            var text = (link.textContent || '').trim();
            if (!id || !text) {
                return null;
            }
            return {
                id: id,
                text: text,
                level: headingLevel(document.getElementById(id))
            };
        }).filter(Boolean);
    }

    function fillList(list, entries) {
        list.textContent = '';
        if (!entries.length) {
            return;
        }

        var stack = [{level: 1, ol: list}];

        entries.forEach(function (entry) {
            while (stack.length > 1 && stack[stack.length - 1].level >= entry.level) {
                stack.pop();
            }

            var li = document.createElement('li');
            li.className = 'mrc-toc__item mrc-toc__item--h' + entry.level;

            var a = document.createElement('a');
            a.href = '#' + entry.id;
            a.textContent = entry.text;
            a.setAttribute('data-heading-level', String(entry.level));
            li.appendChild(a);

            stack[stack.length - 1].ol.appendChild(li);

            var childOl = document.createElement('ol');
            childOl.className = 'mrc-toc__list mrc-toc__list--nested';
            childOl.setAttribute('aria-label', 'Subsections');
            li.appendChild(childOl);
            stack.push({level: entry.level, ol: childOl});
        });

        Array.prototype.forEach.call(list.querySelectorAll('ol'), function (ol) {
            if (!ol.children.length && ol.parentNode) {
                ol.parentNode.removeChild(ol);
            }
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
            fillList(list, entriesFromHeadings(headings));
        } else if (list.children.length) {
            fillList(list, entriesFromExistingLinks(list));
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
