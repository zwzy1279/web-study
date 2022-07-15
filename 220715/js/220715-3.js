//dom为文档对象模型
//bom为浏览器对象模型
/*
bom可以使我们通过js来操作浏览器，
他为我们提供一组对象，用来完成对浏览器的操作，
Window 
代表整个浏览器窗口，同时也是网页中的全局对象。

Navigator 
代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

Location 
代表当前浏览器的住址信息，可以获取地址栏信息，或者操作浏览器跳转页面

History
代表浏览器额历史记录，可以通过该对象来操作浏览器的历史记录。

Screen
代表用户的屏幕信息，通过该对象可以获取到用户的显示器的相关信息

console.log(window);
console.log(navigator);
console.log(location);
console.log(history);
console.log(screen);
alert(navigator.userAgent);//Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36
*/
window.onload=function(){
    var btn01=document.getElementById("btn01");
    btn01.onclick=function(){
       // alert(history.length);//history能够在你点击超链接直接识别出跳转到不同窗口的个数，记录访问链接的数量

        //back()可以用来回退到上一个页面，跟浏览器点击会退按钮一样
        //history.back();
        /*
forword()可以跳转到下一页面，和浏览器的前进按钮一样。
go()可以跳转到指定页面，数字作为参数
        */
       history.go(1);//向前跳换一个页面
    }
}