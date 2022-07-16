window.onload=function(){
    var btn01=document.getElementById("btn01");
    var box1=document.getElementById("box1");
    btn01.onclick=function(){
//修改box样式
//box1.style.width="500px";
//box1.style.backgroundColor="red";
/*通过style修改元素样式，每修改一个样式，
浏览器就需要重新渲染一次页面，这样执行是很麻烦的
*/


//修改box样式
//box1.className+=" b2";
//box1.className="b2";

add(box1,"b2");
    }



    function add(obj,cn){
        obj.className+=" "+cn;
    }

//判断obj中有没有b2,如果含有某个类，返回true，没有返回false
function haveClass(obj,cn){
var reg=/\bb2\b/;
return reg.text(obj.className);
//正则表达式，什么的，构造函数重修
}


}