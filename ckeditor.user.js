// ==UserScript==
// @name         ckeditor
// @namespace    xx
// @version      1.0
// @description  ckeditor
// @author       chenwei
// @include      *hnhbxww.com/adminVIP/login.php*
// @include      *hnhbxww.com/adminVIP/article_edit.php*
// @include      *hnhbxww.com/adminVIP/content_list.php*
// @include      *hnhbxww.com/adminVIP/article_add.php*
// @license      MIT
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    //登陆
 if (isURL("http://hnhbxww.com/adminVIP/login.php")){
   $(function(){
   $('.loginuser').val("chenw");
   $('.loginpwd').val("chenw");
   $('.loginbtn').click();
});
   }
    //Set
    var toolbar;

    //Run
    setTimeout(function() {
        window.onerror=function(){return true;};
        getToolbar();
        createBtn();
        createBtn2();
        Event();
        fbt();
        //document.getElementById('cwinput').click();
    }, 1000);


    //Functions
    function getToolbar() {
        toolbar = document.getElementById('cke_62');
    }

    function createBtn() {
        window.onerror=function(){return true;};
        var div = document.createElement("div");
        div.setAttribute("style", "font-size:18px !important");
        div.setAttribute("id", "cw");
        div.innerHTML = "✪";
        toolbar.appendChild(div);
        div.addEventListener('click', Event);
    }

    function createBtn2(){
        var btn = '<span style="margin-left:100px;"><input id="cwinput" name="imageField" type="image" src="images/button_ok.gif" width="60" height="22" class="np" border="0" style="cursor:pointer"></span>';
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
        newopt.innerText='开放浏览';
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

    function fbt(){
        var zlmtitle=document.getElementById('title').value;
        if(zlmtitle.match(/岳麓区|芙蓉区|天心区|开福区|雨花区|浏阳|长沙|望城|宁乡/)!=null){
           document.getElementById('typeid2').setAttribute('value','12');
            return;
        };
        if(zlmtitle.match(/天元区|荷塘区|芦淞区|石峰区|醴陵|株洲|炎陵|茶陵|攸县/)!=null){
           document.getElementById('typeid2').setAttribute('value','13');
            return;
        };
        if(zlmtitle.match(/娄底|娄星区|冷水江|涟源|新化|双峰/)!=null){
           document.getElementById('typeid2').setAttribute('value','23');
            return;
        };
        if(zlmtitle.match(/雨湖区|岳塘区|湘乡|韶山|湘潭/)!=null){
           document.getElementById('typeid2').setAttribute('value','14');
            return;
        };
        if(zlmtitle.match(/石鼓区|雁峰区|珠晖区|蒸湘区|南岳区|耒阳|常宁|衡阳|衡东|衡山|衡南|祁东/)!=null){
           document.getElementById('typeid2').setAttribute('value','15');
            return;
        };
        if(zlmtitle.match(/益阳|赫山区|资阳区|沅江|桃江|南县|安化/)!=null){
           document.getElementById('typeid2').setAttribute('value','77');
            return;
        };
        if(zlmtitle.match(/张家界|永定区|武陵源区|慈利|桑植/)!=null){
           document.getElementById('typeid2').setAttribute('value','19');
            return;
        };
         if(zlmtitle.match(/常德|武陵区|鼎城区|津市|澧县|临澧|桃源|汉寿|安乡|石门/)!=null){
           document.getElementById('typeid2').setAttribute('value','17');
            return;
        };
        if(zlmtitle.match(/郴州|北湖区|苏仙区|资兴|宜章|汝城|安仁|嘉禾|临武|桂东|永兴|桂阳/)!=null){
           document.getElementById('typeid2').setAttribute('value','21');
            return;
        };
        if(zlmtitle.match(/岳阳|岳阳楼区|君山区|云溪区|临湘|汨罗|岳阳|湘阴|平江|华容/)!=null){
           document.getElementById('typeid2').setAttribute('value','16');
            return;
        };
        if(zlmtitle.match(/邵阳|双清区|大祥区|北塔区|武冈|邵东|洞口|新邵|绥宁|新宁|邵阳|隆回|城步/)!=null){
           document.getElementById('typeid2').setAttribute('value','20');
            return;
        };
        if(zlmtitle.match(/永州|冷水滩区|芝山区|祁阳|蓝山|宁远|新田|东安|江永|道县|双牌|江华/)!=null){
           document.getElementById('typeid2').setAttribute('value','22');
            return;
        };
        if(zlmtitle.match(/怀化|鹤城区|洪江|会同|沅陵|辰溪|溆浦|中方|新晃|芷江|通道|靖州|麻阳/)!=null){
           document.getElementById('typeid2').setAttribute('value','18');
            return;
        };
        if(zlmtitle.match(/吉首|古丈|龙山|永顺|凤凰|泸溪|保靖|花垣/)!=null){
           document.getElementById('typeid2').setAttribute('value','25');
            return;
        };

    }

    if (isURL("http://hnhbxww.com/adminVIP/article_edit.php")) {
        if (window.find("管理文章")) {
            window.location.href = "/adminVIP/content_list.php?arcrank=-1";
            return;
        }
    }

    function isURL(x){
    return window.location.href.indexOf(x)!= -1;
}
    //自动按顺序点击

  /**if (isURL("http://hnhbxww.com/adminVIP/content_list.php?arcrank=-1")) {
      document.getElementsByTagName("a")[0].click();
  }**/

    if (isURL("http://hnhbxww.com/adminVIP/article_add.php")) {
        //var tr=document.getElementById('typeid')
      //var tr = document.getElementsByClassName('cke_contents');
    //var tr = document.getElementsByClassName('cke_show_borders');
    //alert(tr);
        //return;
        }

})();
