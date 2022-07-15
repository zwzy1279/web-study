//做一个图片每隔一段时间切换到下一张的功能
//图片切换
//在图片切换前加入定时器判断切换

/*
window.onload=function(){
    var img=document.getElementById("img");
    var btn01=document.getElementById("btn01");
    var btn02=document.getElementById("btn02");


    //创建一个数组，用来保存所有图片路径
var Arrimg=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];

//创建一个变量，用来保存图片数组的索引
var index=0;



    btn02.onclick=function(){
        //alert("hello");
        //点击就切换到下一张
        //那就是改变照片的路径，还得找个变量存储照片
        //img.src="images/2.jpg";不能写死
index++;
if(index>Arrimg.length-1){
    index=0;
}
img.src=Arrimg[index];
    }

    btn01.onclick=function(){
        //alert("hello");
        //点击就切换到上一张
        //那就是改变照片的路径，还得找个变量存储照片
        //img.src="images/2.jpg";不能写死
index--;
if(index<0){
    index=Arrimg.length-1;
}
img.src=Arrimg[index];
    }
}
*/

window.onload=function(){
    var img=document.getElementById("img");
    var btn01=document.getElementById("btn01");
    var btn02=document.getElementById("btn02");


    //创建一个数组，用来保存所有图片路径
var Arrimg=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];

//创建一个变量，用来保存图片数组的索引
var index=0;

//var s=1;


var timer;//定义全局变量

var btn01=document.getElementById("btn01");
var btn02=document.getElementById("btn02");
btn01.onclick=function(){
    //在开启一个定时器之前，关闭掉之前的定时器
    clearInterval(timer);
//触动定时器
//var count=document.getElementById("count");
var timer=setInterval(function(){
   
    //自动切换到下一张
    index++;
    if(index>Arrimg.length-1){
        index=0;
    }
    img.src=Arrimg[index];
    //s++;//计秒
},1000);

//clearInterval(timer)
/*if(s=10){
    clearInterval(timer);
}*/


btn02.onclick=function(){
    //clearInterval(timer);
    clearInterval(timer);
}
}





/*我们每点击一次按钮，就会开启一个定时器，点击多次就会开启多个定时器，
这会导致图片切换速度过快，并且我们只能关闭最后一次开启的定时器*/
}