// ==UserScript==
// @name         ckeditor
// @namespace    xx
// @version      1.0
// @description  ckeditor
// @author       chenwei
// @include      *hnhbxww.com/adminVIP/*
// @license      MIT
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    //Set
    var toolbar;

    //Run
    setTimeout(function() {
        getToolbar();
        createBtn();
        Event();
    }, 1000);


    //Functions
    function getToolbar() {
        toolbar = document.getElementById('cke_62');
    }

    function createBtn() {
        var div = document.createElement("div");
        div.setAttribute("style", "font-size:16px !important");
        div.innerHTML = "✪";
        toolbar.appendChild(div);
        div.addEventListener('click', Event);
    }

    function Event() {
        //description
        var description = document.getElementById('description');
        description.innerHTML = description.innerHTML.replace(/[\s\S]*/,'');
        //arcrank
        var arcrank = document.getElementById('arcrank');
        //arcrank.removeChild( arcrank.childNodes[1] );
        var newopt=document.createElement('option');
        newopt.setAttribute('value','0');
        //newopt.text='开放';
        arcrank.replaceChild(newopt,arcrank.childNodes[1] );
        //iframe
        var iframe = document.getElementsByTagName('iframe')[0];
        var html = iframe.contentWindow.document;
        var body = html.body;
        body.innerHTML = body.innerHTML.replace(/<p>本文链接地址[\s\S]*/,'');
        //title
        //var ititle = html.getElementById('activity-name').innerHTML;
        //var title = document.getElementById('title');
        //title.setAttribute("value",ititle);
        //plist
        var plist = html.getElementsByTagName("p");
        for (var i = 0; i < plist.length; i++) {
            var s = plist[i].outerHTML;
            //console.log(s);
            var p1 = /(&nbsp;)/gi;
            var p2 = /(　)/gi;
            var p3 = /<p><br><\/p>/;
            var p4 = /align="center"/;
            var p5 = /<br.+>/;
            var p6 = /<p>本文链接地址[\s\S]*/;
            s = s.replace(p1, '').replace(p2, '').replace(p3, '').replace(p5, '').replace(p4,'').replace(p6,'');
            plist[i].outerHTML = s;
            //console.log(s);
        }
    }
})();
