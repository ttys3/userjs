// ==UserScript==
// @name         Golang Blog Doc Syntax Highlighter
// @namespace    https://ttys3.dev
// @version      v0.1.2
// @description  add Syntax highlighter for https://blog.golang.org
// @author       荒野無燈
// @updateURL    https://cdn.jsdelivr.net/gh/ttys3/userjs@latest/golang-blog-doc-syntax-highlighter.user.js
// @match        https://blog.golang.org/*
// @match        https://golang.org/*
// @match        https://pkg.go.dev/*
// @require      https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.2/static/js/prismjs/blog.golang.org/prism.js
// @resource     prismcss  https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.2/static/js/prismjs/blog.golang.org/prism.css
// @grant        GM_addStyle
// @grant        GM_getResourceText

// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText('prismcss'));

    const classesToAdd = ['language-go', 'rainbow-braces', 'line-numbers'];
    if (/(.\.)?golang\.org$/.test(location.hostname)) {
        document.querySelectorAll('#content pre code').
            forEach(function(e) {
                // ES6 spread operator
                e.classList.add(...classesToAdd);
            });
    }

    if (/\.go\.dev$/.test(location.hostname)) {
        document.querySelectorAll('div.Site-content pre').
            forEach(function(e) {
                e.classList.add(...classesToAdd);
            });
    }
})();
