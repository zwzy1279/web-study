/*
//获取id为btn的按钮
var btn = document.getElementById("btn");
console.log(btn);//null
//为按钮绑定一个单击响应函数
btn.onclick = function() {
    alert("hello");
}
*/

//onload事件会在整个页面加载完成之后才触发
//为window绑定一个onload事件
//该事件对应的响应函数将会在页面加载完成后执行
//这样可以确保我们的代码执行所有dom对象已经加载完毕了
window.onload = function() {
    //alert("hello");

    //获取id为btn的按钮
    var btn = document.getElementById("btn");
    console.log(btn); //null
    //为按钮绑定一个单击响应函数
    btn.onclick = function() {
        alert("hello");
    }
}