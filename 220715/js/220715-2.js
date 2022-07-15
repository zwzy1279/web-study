window.onload=function(){
    /*
        键盘事件只能用在鼠标按下有焦点的html标签上，例如input document,鼠标按下有出现光标闪动
    
    键盘按下的事件为keydown
    键盘松开的事件为keyup
        */
      // var text=document.getElementById("text");
      document.onkeydown=function(event){
        //alert("hello");


       console.log(event.key);
       //通过event.key可以知道我们摁下额是哪一个键
       

/*
       //做一个判断y是否被按下的功能
       if(event.key=="y"){
        alert("y被按下了");
       }
       else{
        alert("没有被按下");
       }
*/


/*
       //做一个判断是否同时按下y和ctrl键的功能
       if(event.key=="y"&&event.key=="Mata"){
        alert("同时被按下了");
       }
       else{alert("没有被同时按下");}

       }
       document.onkeyup=function(){
        //console.log("hi");
      

// ctrlKey 属性返回一个布尔值，指示在触发鼠标事件时是否按下了 "CTRL" 键。
//做一个判断是否同时按下y和ctrl键的功能
if(event.metaKey&&event.key=="y"){
    alert("同时被按下了");
}
else{
    alert("没有同时被按下");
}*/
}

var input=document.getElementsByTagName("input")[0];
input.onkeydown=function(event){
    console.log("键被按住了");

    //return false;//可以取消浏览器输入文本的默认行为

    //做一个文本框不能输入数字的功能
    //判断按住的是不是数字，当按住额是数字，则取消显示
    //alert(event.key);//0-9
    if(event.key>=0&&event.key<=9){return false;}
}


//做一个根据键盘按下上下左右键，盒子box1也随着向按下的键的方向移动的功能

var box1=document.getElementById("box1");
document.onkeydown=function(event){
    //做一个当按下ctrl键时，方块移动加速的功能
//定义一个变量，可以方便修改
var speed=10;
//做一个当按下ctrl键时，方块移动加速的功能
if(event.metaKey){
    speed=100;
}
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
}

//做一个当按下ctrl键时，方块移动加速的功能
//定义一个变量，可以方便修改



}