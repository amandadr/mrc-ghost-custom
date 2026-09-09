(function () {
    'use strict';

    function buildPdfJsViewerUrl(pdfUrl) {
        if (!pdfUrl) {
            return null;
        }
        // Hosted PDF.js viewer (CDN). The PDF URL must be publicly fetchable (CORS-compatible).
        // Using hash params keeps the viewer stable and avoids query encoding issues.
        // Use the officially hosted PDF.js viewer. Some npm CDNs don't ship `web/viewer.html`.
        var viewerBase = 'https://mozilla.github.io/pdf.js/web/viewer.html';
        return viewerBase + '?file=' + encodeURIComponent(pdfUrl);
    }

    function initPdfViewers() {
        var roots = document.querySelectorAll('[data-pdf-viewer]');
        if (!roots || !roots.length) {
            return;
        }

        roots.forEach(function (root) {
            // Convention: include a PDF link in the post body.
            // We’ll detect the first PDF link and upgrade it into a PDF.js viewer iframe,
            // leaving the rest of the post content intact.
            var pdfLink =
                root.querySelector('a[href$=".pdf"]') ||
                root.querySelector('a[href*=".pdf"]');

            var pdfUrl = pdfLink && pdfLink.getAttribute('href');
            if (!pdfUrl) {
                return;
            }

            var viewerUrl = buildPdfJsViewerUrl(pdfUrl);
            if (!viewerUrl) {
                return;
            }

            var iframeHtml = '<iframe class="mrc-pdf-viewer__iframe" title="PDF viewer" loading="lazy" referrerpolicy="no-referrer" src="' + viewerUrl + '"></iframe>';

            var wrapper = document.createElement('div');
            wrapper.className = 'mrc-pdf-viewer';
            wrapper.innerHTML = iframeHtml;

            // If the PDF link is on its own line/paragraph, replace that whole block.
            // Otherwise insert the viewer right after the link and hide the link.
            var p = pdfLink.closest && pdfLink.closest('p');
            if (p && p.textContent && pdfLink.textContent && p.textContent.trim() === pdfLink.textContent.trim()) {
                p.replaceWith(wrapper);
                return;
            }

            pdfLink.insertAdjacentElement('afterend', wrapper);
            pdfLink.style.display = 'none';
        });
    }

    function hasGtag() {
        return typeof window.gtag === 'function';
    }

    function track(eventName, params) {
        if (!hasGtag()) {
            return;
        }

        window.gtag('event', eventName, params || {});
    }

    function getAudienceFromUrl() {
        try {
            var params = new URLSearchParams(window.location.search);
            return params.get('audience') || '';
        } catch (e) {
            return '';
        }
    }

    function initAnalytics() {
        // GA4 base tag is injected via `partials/ga4.hbs` when configured.
        // Here we only wire up low-noise interaction events.

        document.addEventListener('click', function (event) {
            var el = event.target && event.target.closest ? event.target.closest('[data-ga-event]') : null;
            if (!el) {
                return;
            }

            var name = el.getAttribute('data-ga-event');
            if (!name) {
                return;
            }

            var category = el.getAttribute('data-ga-category') || 'engagement';
            var label = el.getAttribute('data-ga-label') || el.getAttribute('aria-label') || (el.textContent || '').trim().slice(0, 100);
            var audience = el.getAttribute('data-ga-audience') || getAudienceFromUrl() || undefined;
            var pageSection = el.getAttribute('data-ga-page-section') || undefined;

            var params = {
                event_category: category,
                event_label: label,
                page_path: window.location.pathname
            };

            if (audience) {
                params.audience = audience;
            }
            if (pageSection) {
                params.page_section = pageSection;
            }

            track(name, params);
        }, {capture: true});

        document.addEventListener('submit', function (event) {
            var form = event.target;
            if (!form || !form.matches) {
                return;
            }

            if (!form.matches('[data-ga-form="contact_form"], .mrc-contact-form')) {
                return;
            }

            var audienceInput = form.querySelector('[name="audience"]');
            var audience = (audienceInput && audienceInput.value) || getAudienceFromUrl() || undefined;

            var params = {
                method: 'contact_form',
                event_category: 'conversion',
                event_label: 'contact_form_submit'
            };

            if (audience) {
                params.audience = audience;
            }

            track('contact_form_submit', params);
            track('generate_lead', params);
        }, {capture: true});
    }

    function initServicesNav() {
        // Ghost shared dropdown.js resets nav.innerHTML on every resize, which
        // destroys node-bound listeners. Use live queries + delegation instead.

        function getParts() {
            var root = document.querySelector('.mrc-nav-services');
            if (!root) {
                return null;
            }
            var toggle = root.querySelector('.mrc-nav-services__toggle');
            var panel = root.querySelector('.mrc-nav-services__panel');
            if (!toggle || !panel) {
                return null;
            }
            return {root: root, toggle: toggle, panel: panel};
        }

        function setOpen(open) {
            var parts = getParts();
            if (!parts) {
                return;
            }
            parts.root.classList.toggle('is-open', open);
            parts.toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            if (open) {
                parts.panel.removeAttribute('hidden');
            } else {
                parts.panel.setAttribute('hidden', '');
            }
        }

        function markCurrent() {
            var parts = getParts();
            if (!parts) {
                return;
            }
            var path = window.location.pathname.replace(/\/$/, '') + '/';
            parts.panel.querySelectorAll('a').forEach(function (link) {
                try {
                    var linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') + '/';
                    if (linkPath === path) {
                        link.setAttribute('aria-current', 'page');
                        parts.root.classList.add('nav-current');
                    }
                } catch (e) {
                    // ignore bad hrefs
                }
            });
        }

        markCurrent();

        document.addEventListener('click', function (event) {
            var toggle = event.target && event.target.closest
                ? event.target.closest('.mrc-nav-services__toggle')
                : null;

            if (toggle) {
                event.preventDefault();
                event.stopPropagation();
                var parts = getParts();
                if (!parts) {
                    return;
                }
                setOpen(parts.toggle.getAttribute('aria-expanded') !== 'true');
                return;
            }

            var parts = getParts();
            if (parts && !parts.root.contains(event.target)) {
                setOpen(false);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key !== 'Escape') {
                return;
            }
            var parts = getParts();
            if (!parts) {
                return;
            }
            setOpen(false);
        });

        // After Ghost rebuilds nav HTML on resize, re-apply current markers.
        var resizeTimer;
        window.addEventListener('resize', function () {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(markCurrent, 50);
        });
    }

    function initContactAudience() {
        var form = document.querySelector('.mrc-contact-form');
        if (!form) {
            return;
        }

        var audience = getAudienceFromUrl();
        if (!audience) {
            return;
        }

        var hidden = form.querySelector('[name="audience"]');
        if (!hidden) {
            hidden = document.createElement('input');
            hidden.type = 'hidden';
            hidden.name = 'audience';
            form.appendChild(hidden);
        }
        hidden.value = audience;

        var note = document.getElementById('mrc-contact-audience-note');
        if (note) {
            var labels = {
                'small-business': 'Small & Medium Businesses',
                'tourism-hospitality': 'Tourism & Hospitality',
                'arts-culture-community': 'Arts, Culture & Community',
                'organizations-institutions': 'Organizations & Institutions',
                'agencies-development-teams': 'Agencies & Development Teams'
            };
            note.hidden = false;
            note.textContent = 'Inquiry context: ' + (labels[audience] || audience) + '.';
        }

        var help = document.getElementById('mrc-contact-help');
        if (help && !help.value) {
            var helpDefaults = {
                'small-business': 'Website or platform',
                'tourism-hospitality': 'Systems and automation',
                'arts-culture-community': 'Website or platform',
                'organizations-institutions': 'Accessibility or audit',
                'agencies-development-teams': 'Agency overflow'
            };
            if (helpDefaults[audience]) {
                help.value = helpDefaults[audience];
            }
        }

        track('contact_form_start', {
            event_category: 'conversion',
            event_label: 'contact_form_start',
            audience: audience,
            page_path: window.location.pathname
        });
    }

    function init() {
        initAnalytics();
        initServicesNav();
        initContactAudience();
        initPdfViewers();
        pagination(false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
