window.onload=function(){
    //点击按钮，方块向右滑动
    var btn01=document.getElementById("btn01");
    var box=document.getElementById("box");
    /*btn01.onclick=function(){
        alert("hello");
    }*/
    var timer;


    btn01.onclick=function(){
        clearInterval(timer);
        //alert("hi");
        //box.style.left=box1.offsetLeft+10+"px";
       // box.style.left="200px";
        //box.style.left="200px";
       // box.backgroundColor="red";
       //box.width="1000px";
       
       
       //box.style.left="1000px";
       //调试了大半天，结果却是绝对定位没开

      // var oldValue=getStyle(box,"left");该方法报错未找到
      //var oldValue=box.offsetLeft;
      //var oldValue=getComputedStyle(box,"left");
      //var oldValue=parselnt(getComputedStyle(box,null),"left");
       //alert(oldValue);//0px;
       
       //然而这种点一下只能跳转到一下位置，不能直接滑到最后面去，要让他持续
timer=setInterval(function(){
    box.style.left=box.offsetLeft+10+"px";
    //获取盒子原来的距离
    //var a=box.offsetLeft;但是我们像在以后也能够改变这个值
    //用获取样式的方法getStyle()
    /*if(box.offsetLeft>800){
        box.offsetLeft==800;
    }*/

    //当元素移至800px;使其停止下来
if(box.offsetLeft===800){
    clearInterval(timer);
}
},20);
    }

    var btn02=document.getElementById("btn02");
    btn02.onclick=function(){
        clearInterval(timer);
        //alert("hello");
        timer=setInterval(function(){
            box.style.left=box.offsetLeft-10+"px";

            //当移至0像素的时候，方块停止
            if(box.offsetLeft==0){
                clearInterval(timer);
            }
        },20);
        
        //从800开始向左移动


}
}

//定时器重新学，用到的内容有函数，getStyle()报错