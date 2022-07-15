//要做一个让h1标签里的数字一次增加轮播的功能
//如何让数字增加，如果是写一个for循环，会因js程序的执行速度过快而不能看到数字隔一段时间数字变化的过程
window.onload=function(){
    var count=document.getElementById("count");
    /*for(var i=0;i<100;i++){
        count.innerHTML=i;
    }*/
    /*setInterval()
定时调用，可以让函数每隔一段时间在调用
参数：
回调的函数
间隔调用函数的时间，以毫秒为单位
    */
   var i=1;
   /*（setInterval(function(){
count.innerHTML=i++;
   },1000);*/

   //问题来了，怎么关闭呢
   //做一个闹钟功能
   /*
setInterval()会返回一个数字类型的数据
这个数据可以用作定时器的标识
   */
  var timer=setInterval(function(){
    count.innerHTML=i++;

    //问题来了，怎么关闭呢
   //做一个闹钟功能
   if(i===5){
    clearInterval(timer);//关闭定时器，标识作为参数
}


       },1000);
  //console.log(timer);//2

       
   }
   