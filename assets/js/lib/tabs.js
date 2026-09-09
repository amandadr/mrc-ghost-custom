/**
 * Tab selector — progressive enhancement.
 *
 * The markup ships as a plain stack of headed sections so it works with no JS. This
 * builds an ARIA tablist from those panels' `data-tab-label` values and shows one at
 * a time. If anything is missing we leave the stack alone, which is a usable page.
 *
 * Deep links keep working: an initial `#hash` matching a panel selects that tab.
 */
(function () {
    'use strict';

    var KEYS = {
        left: 'ArrowLeft',
        right: 'ArrowRight',
        up: 'ArrowUp',
        down: 'ArrowDown',
        home: 'Home',
        end: 'End'
    };

    function initTabs(root) {
        var panelWrap = root.querySelector('.mrc-tabs__panels');
        if (!panelWrap) {
            return;
        }

        var panels = Array.prototype.slice.call(
            panelWrap.querySelectorAll('.mrc-tabs__panel')
        );
        // A single panel is just a section; tabs would add chrome for no choice.
        if (panels.length < 2) {
            return;
        }

        var list = document.createElement('div');
        list.className = 'mrc-tabs__list';
        list.setAttribute('role', 'tablist');
        var label = root.getAttribute('data-mrc-tabs-label');
        if (label) {
            list.setAttribute('aria-label', label);
        }

        var tabs = panels.map(function (panel, i) {
            var id = panel.id || 'mrc-tab-panel-' + i;
            panel.id = id;

            var tab = document.createElement('button');
            tab.type = 'button';
            tab.className = 'mrc-tabs__tab';
            tab.id = id + '-tab';
            tab.setAttribute('role', 'tab');
            tab.setAttribute('aria-controls', id);
            tab.textContent = panel.getAttribute('data-tab-label') || 'Option ' + (i + 1);

            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('aria-labelledby', tab.id);
            panel.setAttribute('tabindex', '0');

            list.appendChild(tab);
            return tab;
        });

        function select(index, focusTab) {
            tabs.forEach(function (tab, i) {
                var active = i === index;
                tab.setAttribute('aria-selected', active ? 'true' : 'false');
                tab.setAttribute('tabindex', active ? '0' : '-1');
                panels[i].hidden = !active;
            });
            if (focusTab) {
                tabs[index].focus();
            }
        }

        list.addEventListener('click', function (event) {
            var tab = event.target.closest('.mrc-tabs__tab');
            if (!tab) {
                return;
            }
            select(tabs.indexOf(tab), false);
        });

        list.addEventListener('keydown', function (event) {
            var current = tabs.indexOf(document.activeElement);
            if (current === -1) {
                return;
            }

            var next = null;
            if (event.key === KEYS.left || event.key === KEYS.up) {
                next = (current - 1 + tabs.length) % tabs.length;
            } else if (event.key === KEYS.right || event.key === KEYS.down) {
                next = (current + 1) % tabs.length;
            } else if (event.key === KEYS.home) {
                next = 0;
            } else if (event.key === KEYS.end) {
                next = tabs.length - 1;
            }

            if (next !== null) {
                event.preventDefault();
                select(next, true);
            }
        });

        panelWrap.parentNode.insertBefore(list, panelWrap);
        root.classList.add('mrc-tabs--enhanced');

        // Honour a deep link to a specific panel, otherwise open the first.
        var hash = window.location.hash.replace('#', '');
        var initial = 0;
        panels.forEach(function (panel, i) {
            if (panel.id === hash) {
                initial = i;
            }
        });
        select(initial, false);
    }

    function init() {
        var roots = document.querySelectorAll('[data-mrc-tabs]');
        Array.prototype.forEach.call(roots, initTabs);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
