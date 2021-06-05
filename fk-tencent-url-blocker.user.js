// ==UserScript==
// @name         腾讯URL拦截自动跳转
// @namespace    https://tampermonkey.net/
// @version      0.1.0
// @description  腾讯URL拦截自动跳转
// @author       ttyS3
// @match        https://c.pc.qq.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try {
        const tips = document.querySelector('p.ui-title');
        if (tips) {
            tips.innerHTML = '<span style="color:green;">此页面明显是绿色的！页面正在跳转中，请稍后 ...</span>';
        }
        document.querySelector('#url').childNodes.forEach((ele, idx, _arr) => {
            if (ele.nodeType === document.TEXT_NODE && (/http(s?):\/\/(.+)(\..)+/i.test(ele.nodeValue))) {
                window.location.href = ele.nodeValue;
            }
        });
    } catch (e) {
        console.log(e);
    }
})();