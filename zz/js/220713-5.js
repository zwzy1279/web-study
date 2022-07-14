window.onload=function(){
var btn01=document.getElementById("btn01");

/*
//绑定第一个单击响应函数
btn01.onclick=function(){
    alert(1);
}

//绑定第二个单击响应函数
btn01.onclick=function(){
    alert(2);
}
//同时绑定两个单击响应函数，其后来的会覆盖掉原来的
*/

//实现一个同时为一个元素节点绑定多个响应函数
/*
addEventListener("事件字符串"，回调函数，布尔值)
事件的字符串不要on,
回调函数，当事件被触发时会被调用，
是否在捕获阶段触发事件，需要一个布尔值，一般都传false
*/

btn01.addEventListener("click",function(){
    alert(1);
},false);
btn01.addEventListener("click",function(){
    alert(2);
},false);
btn01.addEventListener("click",function(){
    alert(3);
},false);
}