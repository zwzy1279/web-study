window.onload=function(){
    /*
    var alla=document.getElementsByTagName("a");
    //为每一个超链接绑定一个单机响应事件
    for(var i=0;i<alla.length;i++){
       // alert(alla[i].innerHTML);
       alla[i].onclick=function(){
        alert("hello");
        //alert(alla[i].innerHTML);
       }
    }
*/


    //添加超链接的功能
//获取到按钮
var btn01=document.getElementById("btn01");
btn01.onclick=function(){
    //创建一个元素节点
    var li=document.createElement("li");
    li.innerHTML="<a href='javascript:;' class='link'>新建的超链接</a>";
    var ul=document.getElementById("ul");
    ul.appendChild(li);

    /*
    var alla=document.getElementsByTagName("a");
    //为每一个超链接绑定一个单机响应事件
    for(var i=0;i<alla.length;i++){
       // alert(alla[i].innerHTML);
       alla[i].onclick=function(){
        alert("hello");
        //alert(alla[i].innerHTML);
       }
    }
    */
}

//为新建的超链接绑定单机响应函数

//我们希望只绑定一次，当我们点击超链接时，即使是后来添加上的，也能够实现单机响应函数被触发
//我们可以尝试给元素的共同祖先绑定上单机响应函数
var ul=document.getElementById("ul");
ul.onclick=function(event){
    //alert("hello");
    
    //事件的委派时利用了冒泡，减少绑定的次数，提高性能
    //但是，在这绑定祖先元素ul，出现一个问题，就是在这个区域内，除开a位置也能被触发
    
    //所以要解决一个问题，我们只要当触发到a标签时，我们才会被触发到函数
    //那我们就要判断什么时候是触发到a标签（就执行），什么时候不是
    //我们所知道的this,是绑定事件，为哪一个绑定，this就是那一个
    //而触发事件，触发是由读者来触发，我们只能通过某些方法来指替
    //alert(event.target);
    //event中的target表示事件触发的对象

    if(event.target.className=="link")
    {alert("hello");}
    
}
}