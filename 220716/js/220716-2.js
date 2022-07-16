//做一个图片轮播功能
//那么就是让ul往左移动，div不动
window.onload=function(){

   /* //为了让小红点居中
    var navDiv=document.getElementById("navDiv");
    var outer=document.getElementById("outer");
    navDiv.style.left=(outer.offsetWidth-navDiv.offsetWidth)/2;
    */



    var allA=document.getElementsByTagName("a");
    //设置默认小红点的颜色为黑色，需要一个索引
    var index=0;
    allA[index].style.backgroundColor="black";



//滑动
/*
    var imgList=document.getElementById("imgList");
    var timer=setInterval(function(){
//ul每秒根据图片大小进行向左不间断移动
imgList.style.left=imgList.offsetLeft-310+"px";
//记得得给ul开启一个绝对定位
/*当画到最后一张，向右进行滑动
if(imgList.offsetLeft==0){
    imgList.style.left=imgList.offsetLeft+310+"px";
}
    },1000);*/
    
   


//超链接切换图片
for(var i=0;i<allA.length;i++){

    //为超链接添加一个属性，用来存放i
    allA[i].num=i;
    
    allA[i].onclick=function(){
        //将选中的a设置为黑色
allA[index].style.backgroundColor="black";
        //alert("hello");
        
        //怎么知道我点的是哪一张，这个时候需要一个为苹果装上标签
        //为超链接添加一个属性，用来存放i
        //allA[i].num=i;

        //alert(this.num);现在我已经知道我点的那一个超链接了

        //切换图片
        //切换图片，依旧是向左右移动

        index=this.num;

           imgList.style.left=-310*index+"px";
        
setA();

//使用move函数来切换图片
//move(imgList,"left",-310*index,10,function(){});

    }}
/*function move(object,targin,speed){
    var imgList=document.getElementById("imgList");
    timer=setInterval(function(){
 //ul每秒根据图片大小进行向左不间断移动
 imgList.style.left=imgList.offsetLeft-310+"px";
},10);}*/


//设置小红点
function setA(){
for(var i=0;i<allA.length;i++){
    allA[i].style.backgroundColor="";
}
}
}
    //把move函数学了在回来打,然后接着后续自动切换图片