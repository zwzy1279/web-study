window.onload=function(){


    /*
当鼠标在areaDiv移动时，在showMsg显示坐标

获取areaDiv对象，并对他绑定一个移动事件，当鼠标在这个盒子移动时触发这个函数
问题：绑定事件的方法是什么
当鼠标移至元素上用onmouseover
触发函数的代码为显示上盒子的坐标：坐标的表示如何用代码写出来

返回触发鼠标事件时，鼠标指针相对于当前窗口的水平坐标。
clientX
clientY
event事件
将方法属性封装到一个函数中去，知道什么方法可以获取X Y坐标
    */
   /*
当事件的相应函数被触发时，浏览器每次都会将一个事件对象作为一个实参传进响应函数，
在事件对象中封装了当前事件相关的一切信息，比如鼠标的坐标
   */
   var areaDiv=document.getElementById("areaDiv");
   var showMsg=document.getElementById("showMsg");
   areaDiv.onmouseover=function(document){
       //alert(document.clientX);
       
       showMsg.innerHTML="x="+document.clientX+",y="+document.clientY;
//alert("hello");

   }
}