window.onload=function(){
    /*
所谓的冒泡指的是时事件向上传导，当后代元素的事件被触发时，
其祖先元素的相同事件也会被触发，
在开发中大部分情况冒泡是有用的
    */

/*
如果想取消冒泡，可以用事件来取消
cancelBubble
*/

var box1=document.getElementById("box1");
var s1=document.getElementById("s1");
box1.onclick=function(document){
    alert("我是div大盒子");
    
    //取消冒泡
    //可以将事件对象的cancelBubble设置为true,即可取消冒泡
    document.cancelBubble=true;
}
s1.onclick=function(event){
    alert("我是大盒子里的span");
    event.cancelBubble=true;
}
document.body.onclick=function(){
    alert("我是大body");
}
}