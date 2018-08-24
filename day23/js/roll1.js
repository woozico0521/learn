var oImgs=document.getElementById("imgs");
var oImg=oImgs.getElementsByTagName("img");
var oNav=document.getElementById("nav");
var oLi=oNav.getElementsByTagName("li");
var now=0;


function play(){
    for(var i=0;i<oImg.length;i++){
        oImg[i].className="";
        oLi[i].className="";
    }
    oImg[now].className="on";
    oLi[now].className="on";
    now++;
    if(now==oImg.length){
        now=0;
    }
}
setInterval(play,1000);
