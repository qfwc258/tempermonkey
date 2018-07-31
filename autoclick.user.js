// ==UserScript==
// @name         auto click
// @namespace    xx
// @version      1.9
// @description  auto click pay button
// @match        https://baike.baidu.com/*
// @author       chenwei
// @grant        none
// ==/UserScript==
// window.onload=function(){
  setInterval(autoClick,1);
// }
function autoClick(){
  if(document.getElementsByClassName("video-play").length>0){
  document.getElementsByClassName("video-play")[0].click();
}
}
