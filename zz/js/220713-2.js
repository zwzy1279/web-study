window.onload=function(){
    /*
当鼠标移动时，div盒子随着到达鼠标所在的地方
    */
   var box1=document.getElementById("box1");
   document.onmousemove=function(documenta){
    //alert("hello");
    //如何让元素节点随着鼠标移动
    
    //鼠标的横纵坐标documenta.clientX,documenta.clientY
    //var left=documenta.clientX;
    //var top=documenta.clientY;

    var left=documenta.pageX;
    var top=documenta.pageY;
    //设置div的偏移量
    box1.style.left=left+"px";
    box1.style.top=top+"px";
    //没加px鼠标移动盒子不会动

    /*
鼠标移动是相对于可视窗口的，只是限制在可视窗口里移动
而div是相对于整个页面的，可以在整个页面上移动

pageX  pageY可以获取鼠标相对当前页面的坐标
    */
   }


   var box2=document.getElementById("box2");
   box2.onmousemove=function(event){
    event.cancelBubble=true;
   }
}