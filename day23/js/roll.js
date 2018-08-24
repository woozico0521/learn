window.onload=function(){
/* onload事件会在整个页面或图像加载完成后立即发生 */


(function(){//避免全局变量污染,原理通过立即调用函数将全局变量转为局部变量

var container=document.getElementById("container");
var oImgs=document.getElementById("imgs");
var oImg=oImgs.getElementsByTagName("img");
var oNav=document.getElementById("nav");
var oLi=oNav.getElementsByTagName("li");
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var now=0;
var j=0;
timer=null;

//鼠标经过按钮组切换图片
/* for(var n=0;n<oLi.length;n++){
    (function(index){
        oLi[index].onmouseover=function(){
            now=index;
            play();
        }
    })(n);
} */


for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onmouseover=function(){
        now=this.index;
        play();
    }
}

//图片轮播
function play(){
    show();
    now++;
    if(now==oImg.length){
        now=0;
    }
}

function show(){//实现图片功能
    for(var i=0;i<oImg.length;i++){
        oImg[i].className="";
        oLi[i].className="";
    }
    oImg[now].className="on";
    oLi[now].className="on";
}

function go(){//主函数
    timer=setInterval(play,1000);
}
go();


container.onmouseover=function(){
    clearInterval(timer);
}
container.onmouseout=function(){
    go();
}

//左右轮播图片
oLeft.onclick=oRight.onclick=function(){
    //console.log(this);
    if(this==oLeft){//数组下标递减
        now--;//3,2,1,0,-1
        if(now==-1){
            now=oLi.length-1;
        }
    }else{
        now++;//0,1,2,3,
        if(now==oImg.length){
            now=0;
        }
    }   
    show();
    
}
})();


}