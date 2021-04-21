// ==UserScript==
// @name         Packtpub Syntax Highlighter
// @namespace    https://ttys3.dev
// @version      v0.1.2
// @description  add Syntax highlighter for https://beta.packtpub.com/
// @author       荒野無燈
// @updateURL    https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.5/packtpub-syntax-highlighter.user.js
// @match        https://beta.packtpub.com/*
// @match        https://subscription.packtpub.com/book/*
// @require      https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.5/static/js/prismjs/packtpub.com/prism.js
// @resource     prismcss  https://cdn.jsdelivr.net/gh/ttys3/userjs@v0.1.5/static/js/prismjs/packtpub.com/prism.css
// @grant        GM_addStyle
// @grant        GM_getResourceText

// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText('prismcss'));




    const doHightLight = (e) => {
        if (!e.classList) {
            return;
        }
        if (!e.classList.contains('language-markup') || e.tagName != 'CODE') {
            return;
        }

        if (e.classList.contains('rainbow-braces')) {
            return;
        }

    let classesToAdd = ['rainbow-braces', 'line-numbers'];
        classesToAdd.push('language-rust');

        /*
    const bookName = top.document.querySelector('.book-title').innerText.toLowerCase();
    if (bookName.includes('rust')) {
        classesToAdd.push('language-rust');
    } else if (bookName.includes('go')) {
        classesToAdd.push('language-go');
    }
    */

                // ES6 spread operator
                e.classList.add(...classesToAdd);
        // Returns a highlighted HTML string
const html = Prism.highlight(e.innerText, Prism.languages.rust, 'rust');
                e.innerHTML = html;
            console.log(e.innerText);
            e.classList.remove("language-markup");

            };

    const handleEvent = (e) => {

    if (/beta\.packtpub\.com/.test(location.hostname)) {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        document.querySelectorAll('pre code').
            forEach(() => {});
    }
    };

    setTimeout( () => {

        document.addEventListener("click", (e) => {
            doHightLight(e.target);
        });

        // Select the node that will be observed for mutations
const targetNode = document.querySelector( 'body' );

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            //console.log('A child node has been added or removed. %o', mutation.target);
            doHightLight(mutation.target);
        }
        else if (mutation.type === 'attributes') {
            //console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();
    }, 5000);

})();

