/*
1.什么是对象
对象是用来存数据的，变量也是可以用来存数据的，但是变量只能存储一个数据，而对象能存储多个数据    
多个数据的封装体
用来保存多个数据的容器
一个对象代表现实中某个事物，像代表一个人的信息
2.为什么要用对象
统一管理多个数据
3.对象的组成
属性：由属性名（字符串）和属性值（任意类型）组成
方法：特殊的属性，什么样的属性称为方法；属性值是函数就可以
4.如何访问对象内部数据
对象.属性名=属性值  简单，不能通用
对象['属性名']  麻烦，能通用，什么时候需要用呢
5.什么时候要用对象['属性名']
属性名包括  空格  -
变量名不确定时  对象[变量名]
*/
var p= {
    name:'Tom',
    gender:'男',
    setName:function(name){
        this.name=name;
        console.log(this.name);
    }

}
//访问对象中的数据
console.log(p.name);
//console.log(p.setName);函数这么调根据对象.属性名没有错，然后我们知道p.setName是一个函数，根据函数的执行方式，最终我们可以为
p.setName('Jerry');
console.log(p['name']);


/*
1.什么是函数
实现特定功能的n条语句封装体
只有函数是可以执行的，其他数据类型不能执行
2.为什么要用函数
提高代码复用
便于交流
3.如何定义函数
函数声明
表达式
4.如何调用执行函数
直接调用  函数名（）
通过对象调用  对象名.函数名（）
new调用   new.函数名（）
函数名.call/apply(对象名)临时让函数成为对象的调用方法
*/

/*
做一个佛你功能
1.根据年龄输出信息
如果<18,输出：再等等
如果>60,输出：算了吧
其他，输出：刚好
*/
function fn(){//这种叫函数声明
    console.log("hello");
}
var fn2=function(){//这种叫表达式
console.log("hi");
}

//调用执行都是一样的，但本质上不一样
fn();
fn2();

/*
1.什么是回调函数
我们定义的
我们没有回调
它可以自动执行
2.什么是常见的回调函数
dom事件回调函数  定时器回调函数

生命周期回调开发
ajdx回调函数
*/
window.onload=function(){
    document.getElementById("btn01").onclick=function(){//dom事件回调函数
        alert(this.innerHTML);
    }
}

/*
定时器：
超时定时器
循环定时器
*/
setTimeout(function(){//定时器回调函数
    alert("到点了");
},1000);

/*
前端说白了就是
画图主要css
然后交互js
天天数据都在变化
*/


/*
IIFE
作用
隐藏实现
不会污染外部
*/
(function(){//匿名函数自调用
    var a=3;
    console.log(a+1);
})();//4

/*(function(){
    var a=1;
    function test(){
        console.log(++a);
    }
    window.$=function(){//向外暴露一个全局函数
        return {test:test}
    }
})
//我们想要获得console.log(++a);不能直接用test()调用
$().test();

$是一个函数，返回的是一个对象*/
