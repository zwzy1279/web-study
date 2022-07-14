window.onload=function(){
   //实现像电脑桌面能够拖拽图标的功能
   //当鼠标点击在上面不放的时候，盒子随着鼠标移动，当暂停按鼠标的时候，盒子固定住不动了
   var box01=document.getElementById("box01");
   /*当鼠标在被拖拽盒子摁下时，开始拖拽 onmousedown
   当鼠标在被拖拽盒子摁下时并且按移动时图标也跟着移动onmousemove
   当鼠标开始松开时，图标固定在当前位置onmouseup

   查找相关的属性和方法
   绑定事件
   触发事件
   */
  box01.onmousedown=function(event){
    var ol=event.clientX-box01.offsetLeft;
    var ot=event.clientY-box01.offsetTop;

    //如何将图标的状态选为开始拖拽
    document.onmousemove=function(event){
var left=event.clientX-ol;
var top=event.clientY-ot;
box01.style.left=left+"px";
box01.style.top=top+"px";
    }
   document.onmouseup=function(){
        document.onmousemove=null;

        //alert("鼠标松开了");
        document.onmouseup=null;
    }
  }
  //移动到盒子2时松开鼠标，但是图标并不会松开，因为上面松开的绑定的是box01,而当移动盒子2时，点击松开的是对2作用

}
//问题又来了，鼠标位置不能同我们任意点击的位置一样
//div偏移量 鼠标.clientX-元素.offsetLeft