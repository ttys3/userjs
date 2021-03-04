// ==UserScript==
// @name         Golang Blog Doc Syntax Highlighter
// @namespace    https://ttys3.dev
// @version      v0.1.0
// @description  add Syntax highlighter for https://blog.golang.org
// @author       荒野無燈
// @updateURL    https://cdn.jsdelivr.net/gh/ttys3/userjs@main/golang-blog-doc-syntax-highlighter.user.js
// @match        https://blog.golang.org/*
// @match        https://pkg.go.dev/*
// @require      https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.0/static/js/prismjs/blog.golang.org/prism.js
// @resource     prismcss  https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.0/static/js/prismjs/blog.golang.org/prism.css
// @grant        GM_addStyle
// @grant        GM_getResourceText

// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText('prismcss'));
    if (/blog\.golang\.org$/.test(location.hostname)) {
        document.querySelectorAll('#content pre code').
            forEach(function(e) {
                e.classList.add('language-go');
            });
    }

    if (/.go\.dev$/.test(location.hostname)) {
        document.querySelectorAll('div.Site-content pre').
            forEach(function(e) {
                e.classList.add('language-go');
            });
    }
})();
