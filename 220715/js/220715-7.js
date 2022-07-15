/*window.onload=function(){
    //做一个根据键盘按下上下左右键，盒子box1也随着向按下的键的方向移动的功能

    //定义一个变量，可以方便修改
var speed=10;

var box1=document.getElementById("box1");
setInterval(function(event){
    if(event.key=="ArrowRight"){
        box1.style.left=box1.offsetLeft+speed+"px";
        }
        else if(event.key=="ArrowLeft"){
            box1.style.left=box1.offsetLeft-speed+"px";
        }
        else if(event.key=="ArrowDown"){
            box1.style.top=box1.offsetTop+speed+"px";
        }
        else if(event.key=="ArrowUp"){
            box1.style.top=box1.offsetTop-speed+"px";
        }
        },30);

document.onkeydown=function(event){
    //做一个当按下ctrl键时，方块移动加速的功能

//做一个当按下ctrl键时，方块移动加速的功能
if(event.metaKey){
    speed=100;
}
}
}*/


/*
定时调用会执行多次，延时调用会执行一次
延时调用setTimeout
*/

setTimeout(function(){
    console.log("三秒了");
},3000);//广告倒计时