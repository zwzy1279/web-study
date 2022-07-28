/*
定时器不能真正保证定时，可能会延迟一会（可以接受），可能会延迟很长时间（不能接受）
那么定时器到底是怎样运行的呢，时间循环模块
我们说所有的js代码都在主线程执行，定时器在分线程执行
*/
/*window.onload=function(){
    var btn=document.getElementById("btn");
btn.onclick=function(){
    var start=Date.now();
    console.log("启动定时器前");
    setTimeout(function(){
        console.log('定时器启动了',Date.now()-start);
    },200);
    console.log("启动定时器后");
}
}*/
//Uncaught TypeError: Cannot set properties of null (setting ‘onclick‘)  解决：文档加载

setTimeout(function(){
    console.log('setTime out 2222');
},20000);
setTimeout(function(){
    console.log('setTime out 1111');
},10000);
function fn(){
    console.log('fn()');
}
fn();

console.log('alert执行前');
alert('------');//暂停当前主线程的执行，同时暂停计时，点击确定后，回复程序执行和计时
console.log('alert执行后');
/*
先执行fn()
在执行alert前

接着跳出弹窗-----，这个时候定时器被暂停了
当我们按下确定时，定时器启动
alert执行后
1111
2222

*/
/*
先执行初始化代码，后面某一时刻才执行回调代码
*/