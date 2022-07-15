window.onload=function(){
    var box1=document.getElementById("box1");
    /*box1.onclick=function(){
        //alert("hello");
    }*/
     //要做一个滚轮滑动时，盒子粗细发生变化的功能,滚轮向下滚，盒子变长。
     //为盒子绑定一个滚轮滑动事件，当滚轮发生滑动时，触发盒子粗细发生变化的函数
     //找到滚轮滑动的事件，找到元素长短发生变化的事件
//wheel当鼠标滚轮在元素向上或向下滚动时，发生此事件。
//当鼠标滚轮在元素上向上或向下滚动时，会发生 onwheel 事件。
//当用户使用触摸板滚动或放大或缩小元素时，也会发生 onwheel 事件。
box1.onwheel=function(event){
//alert("hello");
//滑动再分为往上滑和往下滑
//使用wheelDelta可以知道滚轮方向，当值大于零，说明滚轮是向下滚
//alert(event.wheelDelta);
  if(event.wheelDelta>0){
    box1.style.height=box1.clientHeight+10+"px";
  }
  else{
    box1.style.height=box1.clientHeight-10+"px";
  }
}

//加入滚动条之后我们发现滚轮滑动，滚动条也会随之滑动，这是浏览器的默认行为，return false可以取消默认行为
return false;
}