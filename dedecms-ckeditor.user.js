// ==UserScript==
// @name         ckeditor
// @namespace    xx
// @version      1.0
// @description  ckeditor
// @author       chenwei
// @include      *hnhbxww.com/adminVIP/article_edit.php*
// @license      MIT
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    //Set
    var toolbar;

    //Run
    setTimeout(function() {
        window.onerror=function(){return true;};
        getToolbar();
        createBtn();
        createBtn2();
        Event();
    }, 1000);


    //Functions
    function getToolbar() {
        toolbar = document.getElementById('cke_62');
    }

    function createBtn() {
        window.onerror=function(){return true;};
        var div = document.createElement("div");
        div.setAttribute("style", "font-size:16px !important");
        div.setAttribute("id", "cw");
        div.innerHTML = "✪";
        toolbar.appendChild(div);
        div.addEventListener('click', Event);
    }

    function createBtn2(){
        var btn = '<span style="margin-left:10px;"><input name="imageField" type="image" src="images/button_ok.gif" width="60" height="22" class="np" border="0" style="cursor:pointer"></span>';
        var inp = document.getElementById('cw');
        inp.innerHTML+=btn;
    }

    function Event() {
        //description
        var description = document.getElementById('description');
        description.innerHTML = description.innerHTML.replace(/[\s\S]*/,'');
        //writer
        var author = ["秋风","晨光","宛青","成蹊"];
        var n = Math.floor(Math.random() * author.length + 1)-1;
        var writer = document.getElementById('writer');
        writer.setAttribute("value",author[n]);
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
        body.innerHTML = body.innerHTML.replace(/<p>本文链接地址[\s\S]*/,'').replace(/<p><strong>上一篇[\s\S]*/,'');
        body.innerHTML = body.innerHTML.replace(/<p><span>人民日报客户端下载[\s\S]*/,'').replace(/<p>【<strong>中国环保在线.+】/,'');
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
            var p4 = /align="center"/;
            var p5 = /<br.+>/;
            var p6 = /<p>原标题.*/
            s = s.replace(p1, '').replace(p2, '').replace(p5, '').replace(p4,'').replace(p6,'');
            plist[i].outerHTML = s;
            //console.log(s);
        }
    }

    if (isURL("http://hnhbxww.com/adminVIP/article_edit.php")) {
        if (window.find("管理文章")) {
            window.location.href = "/adminVIP/content_list.php?arcrank=-1";
            return;
        }
    }

    function isURL(x){
    return window.location.href.indexOf(x) != -1;
}

})();
