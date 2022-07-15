window.onload=function(){
    var btn01=document.getElementById("btn01");
    btn01.onclick=function(){
        //alert(location);//file:///Users/lmwis/220715/220715-4.html
        //alert("hello");
       // location="http://www.baidu.com";//自动跳转到百度页面
        /*
assign()用来跳转到其他页面，作用和直接修改location
        */
location.assign("http://www.baidu.com");

//reload()用于重新加载页面，相当于刷新页面
location.reload();

//replace()可以使用一个新页面替换当前页面，调用完毕也会跳转页面
    }
}