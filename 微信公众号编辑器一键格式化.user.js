// ==UserScript==
// @name         微信公众号编辑器一键格式化
// @namespace    xx
// @version      1.0
// @description  在微信公众号编辑器中加入一个用于自动排版功能
// @author       chenwei
// @include      *mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit&action=edit*
// @include      *mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit_v2&action=edit*
// @license      MIT
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    //Set
    var toolbar;

    //Run
    setTimeout(function(){
        getToolbar();
        createBtn();
    },1000);


    //Functions
    function getToolbar(){
        toolbar = document.getElementsByClassName('edui-toolbar-primary');
    }
    function createBtn(){
        var wrap = document.createElement("div");
        wrap.setAttribute("class","edui-box edui-splitbutton edui-default");
        var div = document.createElement("div");
        div.setAttribute("class","edui-box edui-button-body edui-default");
        div.setAttribute("data-tooltip","陈伟专用格式化");
        var btn_name = document.createElement("div");
        btn_name.setAttribute("style","font-size:14px !important");
        btn_name.innerHTML = "✪";
        wrap.appendChild(div);
        div.appendChild(btn_name);
        toolbar[0].appendChild(wrap);
        div.addEventListener('click',Event);
    }
    function Event(){
        var iframe = document.getElementById("ueditor_0");
        var plist = iframe.contentDocument.getElementsByTagName("p");
        var bd=iframe.contentDocument.body;
        var header = '<p style="text-align: center;"><img data-type="gif" src="https://mmbiz.qpic.cn/mmbiz_gif/EawFKDoTn0XGLEIPcU1tyuwD1sjLwwvlkF85pE6GicPLBJianQPdFJ0om1aq6Jfy5WyM0zFdUzVGcdjZMZticLvLg/?wx_fmt=gif" data-copyright="0" style="" class="" data-ratio="0.26063829787234044" data-w="940"></p>';
        var footer='<p style="max-width: 100%;min-height: 1em;font-size: medium;line-height: 25.6px;text-align: right;box-sizing: border-box !important;word-wrap: break-word !important;" class=""><span style="max-width: 100%;color: rgb(178, 178, 178);font-size: 12px;box-sizing: border-box !important;word-wrap: break-word !important;">（</span>  <span style="color: rgb(178, 178, 178);font-size: 12px;">稿源：）</span></p><p style="margin-bottom: 15px;max-width: 100%;min-height: 1em;color: rgb(62, 62, 62);font-size: 16px;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;word-wrap: break-word !important;" class="">  <img data-type="xmt-style-img" class="__bg_gif" data-ratio="0.04375" data-w="640" style="line-height: 25.6px; text-indent: 0em; font-family: 微软雅黑, 宋体; box-sizing: border-box !important; word-wrap: break-word !important; visibility: visible !important; width: auto !important; height: auto !important;" width="auto" src="https://mmbiz.qpic.cn/mmbiz_gif/EawFKDoTn0Wzjlw0MW0fibKmPbcTPUrLQOanzibuGkbicZyrhNGWWwl8ib9dACibUjPlfia9iaDZyGxOXSICt4y5VajKQ/640?"></p><p style="margin-bottom: 15px;max-width: 100%;min-height: 1em;color: rgb(62, 62, 62);font-size: 16px;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;word-wrap: break-word !important;" class="">  <span style="max-width: 100%;line-height: 25.6px;text-indent: 0em;font-family: 微软雅黑, 宋体;color: rgb(136, 136, 136);box-sizing: border-box !important;word-wrap: break-word !important;">声明：本号对转载、分享、陈述、观点、图频保持中立，目的仅在于传递更多信息，版权归原作者。</span></p><p style="margin-top: 15px;margin-bottom: 15px;max-width: 100%;min-height: 1em;text-align: center;line-height: 1.75em;box-sizing: border-box !important;word-wrap: break-word !important;" class="">  <span style="max-width: 100%;font-size: 16px;line-height: 25.6px;text-indent: 2em;box-sizing: border-box !important;word-wrap: break-word !important;"><strong style="max-width: 100%;color: rgb(217, 33, 66);font-size: 14px;box-sizing: border-box !important;word-wrap: break-word !important;">长按图片·识别二维码关注》</strong></span><span style="max-width: 100%;line-height: 25.6px;font-size: 14px;text-indent: 2em;color: rgb(79, 97, 40);box-sizing: border-box !important;word-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;">湖南环保观察</strong></span></p><p style="margin-top: 15px; margin-bottom: 15px; max-width: 100%; min-height: 1em; text-align: center; line-height: 1.75em; box-sizing: border-box !important; word-wrap: break-word !important;" class="">  <span style="max-width: 100%;line-height: 25.6px;font-size: 14px;text-indent: 2em;color: rgb(79, 97, 40);box-sizing: border-box !important;word-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box !important;word-wrap: break-word !important;"><img data-type="gif" class="__bg_gif" data-ratio="0.7275641025641025" data-w="624" style="visibility: visible !important; width: auto !important; height: auto !important;" width="auto" src="https://mmbiz.qpic.cn/mmbiz_gif/EawFKDoTn0Wzjlw0MW0fibKmPbcTPUrLQ1rtsZnkmGficXne1hXtibibXz6XWtt9ib8yXHXTuMVVjo5fGiafp4CBeYqg/?wx_fmt=gif"></strong></span></p>';
        bd.innerHTML=header+bd.innerHTML;
        bd.innerHTML+=footer;
        for (var i=0;i<plist.length;i++){
            var s = plist[i].outerHTML;
            console.log(s);
            var p1=/(&nbsp;)/gi;
            var p2=/<p>/gi;
            s = s.replace(p1,'').replace(p2,'<p style="line-height: 1.75em; margin-bottom: 15px;">');
            plist[i].outerHTML = s;
            //console.log(s);
        }
    }
})();
