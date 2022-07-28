/*
一般情况下，函数的内部的变量（局部函数）在外部函数执行完之后就释放掉了，不存在了。
但是在闭包中，也就是内部函数引用了外部函数的变量时，函数内部的变量在函数执行完之后依然存在（生命周期被延长了）

一般来说，函数外部是不能够看到函数内部的变量的，内部函数跟外部函数拥有一样的变量名是可以的，不冲突的，函数外部是不能够看到函数内部的变量
所以函数外部一般来说是不能访问到函数内部的
读写，写相当于等于号=赋值。读就是不能写的操作
但是在闭包中，函数外部可以操作（读写）函数内部的数据/变量


问题：函数执行完之后，函数内部的声明的局部变量是否还存在？一般不存在，存在闭包的变量才可能不存在
在函数外部能够直接访问函数内部的局部变量吗？不能，但我们能通过闭包让外部操作他



闭包的生命周期
闭包什么时候产生  当外部函数嵌套的内部函数对象已经创建（也就是定义执行完了）（不是函数调用执行完，定义执行！=函数执行）
闭包什么时候灭亡   当外部函数嵌套的内部函数成为垃圾对象时，为闭包死亡
*/
function fn(){
    var a=2;//闭包开始产生，这个时候变量提升，函数fn1()已经被创建好了
    function fn1(){
        a++;
        console.log(a);
    }
    return fn1();
}
var f=fn();
//f();
//f=null;//闭包死亡，c闭包的函数对象成为垃圾对象

/*
闭包的应用：定义js模块
具有特定功能的js文件
将功能和数据封装到函数里头去（成为私有的，也就是在函数外部看不见内部的）
向外只暴露一个包含任意个函数或者方法
只需要通过暴露的对象的调用方法来实现向对应的功能
*/

/*法一：
function model(){
    var msg='Holiday';
    function doSomething(){//将功能和数据封装到函数里头去（成为私有的，也就是在函数外部看不见内部的）
   
        console.log('doSomething:'+msg.toUpperCase());
        function doOtherthing(){//是一个闭包，外部的变量msg在这个内部中有被引用到
            console.log('doOtherthing:'+msg.toLocaleLowerCase());
        }
        //doOtherthing();//doOtherthing:holiday
    }
}

//doSomething();//doSomething:HOLIDAY

//向外只暴露一个包含任意个函数或者方法
/*return {
    doSomething:doSomething,
    doOtherthing:doOtherthing
}

//只需要通过暴露的对象的调用方法来实现向对应的功能
var a=model();
a.doOtherthing();
a.doSomething();
*/




/*法二*/
(function model(){
    var msg='Holiday';
    function doSomething(){//将功能和数据封装到函数里头去（成为私有的，也就是在函数外部看不见内部的）
        console.log('doSomething:'+msg.toUpperCase());}

        function doOtherthing(){//是一个闭包，外部的变量msg在这个内部中有被引用到
            console.log('doOtherthing:'+msg.toLocaleLowerCase());
        }
        //doOtherthing();//doOtherthing:holiday
        window.model={
            doSomething:doSomething,
            doOtherthing:doOtherthing
        }
    }
)();//自调用执行

//闭包优点：延长生命周期

//闭包的缺点及解决办法
/*
函数执行后，因为闭包函数内部的变量不会灭亡，内存没有被释放，占用内存
容易造成内存泄露

解决：能不用闭包就闭包
记得及时清理释放内存  用完闭包之后让内部函数或者方法成为垃圾对象    内部函数的变量记得也要定义成局部的，而不是用全局变量
eg1:function fn(){
    var a=2;//闭包开始产生，这个时候变量提升，函数fn1()已经被创建好了
    function fn1(){
        a++;
        console.log(a);
    }
    return fn1();
}
var f=fn();
//f();
//f=null;//闭包死亡，c闭包的函数对象成为垃圾对象


eg2:function fn(){
    a=3;
    console.log(a);
}//这样a就变成全局变量了，释放不掉内存，而应该是var a或者let a

*/

/*
内存溢出和内存泄露的区别
内存溢出是程序执行的一种错误
是当运行时内存的剩余空间不够来支撑这个程序导致的，也就是程序运行需要的内存超过了剩余的内存，就抛出内存溢出的错误
而内存泄露是程序顺利执行完后占用的内存没有及时被释放，当占用的内存多了，容易造成内存溢出，内存泄露就不是一种程序运行时出现的错误了
内存泄露积累多就会造成内存溢出

常见的内存泄露有：
意外的全局变量
用完想要的功能没有没有及时清除的定时器或者回调函数
闭包
*/

//面试题
var name="the window";
var obj={
    name:"my object",
    getNameFunc:function(){
        return function(){
            return this.name;
        };
    }
}
alert(obj.getNameFunc()());//return this.name
/*
那么这个this是谁的this呢
我们说谁调用，this就是谁的，那这里obj.getNameFunc()是这个

        return function(){
            return this.name;
        };
    函数
    而obj.getNameFunc()()是这个return this.name;
    调用他的是这个obj.getNameFunc()这个函数，也就是第二个function()，而函数调用用的是window,也就是全局变量，所以this.name=the window
    this在函数里指向window ,在方法里指向当前

    闭包问题：
    function(){
        return function(){
            return this.name;
        };
    }
    这里面没有闭包，因为函数外部没有跟内部一样的变量
*/

var name2="the window";
var obj2={
    name2:"my object",
    getNameFunc:function(){
        var that=this;
        return function(){
            return that.name2;
        };
    }

}
alert(obj2.getNameFunc()());
/*
那么这个this是谁的this呢
我们说谁调用，this就是谁的，那这里obj.getNameFunc()是这个
var that=this;
        return function(){
            return that.name2;
        };
   而obj.getNameFunc()()是这个  return that.name2;这里面要是没有that,而用this调用时，那么这个this就是window
   而此时是使用that，而这个that是   getNameFunc里的，是getNameFunc调用的，所以此时这个this是方法的，而这个getNameFunc是obj2的，obj2当前的this是my object,所以this.name=my object
   getNameFunc:function(){
        var that=this;
        return function(){
            return that.name2;
        };
    }
    */

    //面试题3//内部函数会保存外部函数的值
    function fun(n,o){
        console.loh(o);
        return {
            fun:function(m){//此时fun为一个方法，也就是属性名
                return fun(m,n);//接着又返回开头那一段
            }
        }
    }
    var a=fun(0);  a.fun(1); a.fun(2);  a.fun(3);
    var b=fun(0).fun(1).fun(2).fun(3);
    var c=fun(0).fun(1); c.fun(2); c.fun(3);
    //fun(0);//将0这个实际参数传给n,o没有传进去值，所以此时打印o的值为undefined,定义却未赋值

    /*
原型链继承
套路（按照顺序往下翻译代码）
1。定义父类型构造函数
2。给父类型的原型添加方法
3.定义子类型构造函数
4.创建父类型的对象赋值给子类型的原型
5.将子类型原型的构造都早属性设置为子类型
6.给子类型原型添加方法
7.创建子类型的对象：可以调用父类型的方法

关键
子类型的原型为父类型的一个实例对象
    */

/*
借用构造函数继承
套路
1.定义父类型构造函数
2.定义子类型构造函数
3.在子类型构造函数中调用父类型构造

关键：
在子类型构造函数中通用super()调用父类型构造函数
*/
/*
方式三：组合继承
原型链+构造函数的组合继承
1.利用原型链实现对父类型对象方法的继承
2.利用super()借用父类型构建函数初始化属性
*/
function person(name,age){
    this.name=name;
    this.age=age;
}
function Student(name,age,price){
    person.call(this,name,age);//相当于this.person(name,age).也就是this.name=name,this.age=age
    this.price=price;
}
