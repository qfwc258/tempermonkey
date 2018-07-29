// ==UserScript==
// @name         自动跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://hnhbxww.com/adminVIP/article_edit.php
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function(){
        cw();
    },1000)
    'use strict';
    function cw(){
      document.body.innerHTML=document.body.innerHTML.replace('<a href="/adminVIP/content_list.php?arcrank=-1">[<u>记忆的列表页</u>]</a>','<a href="/adminVIP/content_list.php?arcrank=-1" id="ab"><u>自动跳转</u></a>');
      document.getElementById("ab").click();
    };
})();
