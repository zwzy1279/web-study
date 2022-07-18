/*
数据类型：基本数据类型：字符串  数据类型:任意的数字 布尔类型：两个值 undefined：一个值 null：一个值，对象类型:object 函数：一种特别的对象 数组Array
对象用来存数据
函数用来执行代码

一般对象数据是无序的，而数组因为下标是有序的
判断数据类型
typeof一般返回的是数据类型的字符串
===判断全等
==转换成相同的数据类型然后再进行比较
instanceof 判断具体的数据类型

var obj={对象
    a:[1,"abc",consoleof];数组
    b:function(){
        console.log("hello");
    }函数
}
可以用new创建的都是构造函数  new obj();

obj instanceof Array;//false
obj.a instanceof Array;//true
obj.b  instanceof Function;//true
console.log(typeof obj.b==='Function');//true


obj.b instanceof Object;//true  因为函数也是一种特殊的对象
obj  instanceof Object;//true
*/
var obj={
    b:function(){
        console.log("hello");
        return function(){
            return 'shangguigu';
        }
    }
}
//obj.b()知道他是函数类型，可以在后面加上括号进行调用
console.log(obj.b());//console.log("hello");;function(){return 'shangguigu'}
console.log(obj.b()());// 'shangguigu';

/*
面试经常有：
var obj={对象
    a:[1,"abc",consoleof];数组
    b:function(){
        console.log("hello");
    }函数
}
console.log(typeof(obj.a))//obj

所以typeof不能判断object和array  object和null
对象 数组 函数typeof返回的都是object
*/

/*
实例：实例对象
类型：类型对象
*/
function Person(name,gender){//创建一个函数，这个函数名叫做Person,形参
    //是一个类型对象
    //这个函数属于对象类型，因为函数是一种特殊的对象
    this.name=name;
    this.gender=gender;

}
var p=new Person();//根据上面类型的一个实例对象

/*
面试常问：
1.undefined和null的区别
undefined表示定义了变量但是没给变量赋值，var a;console.log(a);//undefined
null表示定义了变量，也给变量赋值，但是福德值为null.var a=null;console.log(a);//null

2.什么时候给变量赋值为null
我们想一个变量赋值为null,这个变量是属于基本数据类型null,但是我们返回的却是对象object，那么是不是矛盾呢
其实呢，我们一开始就是想让他成为对象里面用来存放数据，但是还没想好里面存放什么数据，所以先将他赋值为空null
var c=null;//表明将要赋值为对象
console.log(c);//null
console.log(typeof c);//object
//确定对象就赋值
c=['shangguigu',1];

3.严格区别变量类型和数据类型
数据类型有：基本类型
          对象类型
变量类型有：基本类型：保存基本数据的类型
          引用类型：保存的是地址值，起到  对象
js本身是没有类型的，用var 变量，他这个变量存的是变量内存值的类型


var a={};
变量a存在栈内存中，a保存的是他的值的地址
{}存在堆内存中

var c=function(){}
函数作为一个引用对象赋值给变量，变量存的就是这个引用对象的地址值，变量通过这个地址值找到这个引用对象，从而判断他是函数类型


*/
var c=null;//表明将要赋值为对象
console.log(c);//null
console.log(typeof c);//object

//确定对象就赋值
c=['shangguigu',1];
console.log(c);//'shangguigu',1
console.log(typeof c);//object

//最后
c=null;//让这个对象成为垃圾对象，被垃圾回收器回收


/*
数据  变量  内存
1.什么是数据
存储在内存中的特定信息，本质上是二进制0101
var age=18;这个18就是一个数据，特定人的年龄
数据的特点：可传递性  可运算
var a=3;
var b=a;//实际上是把a的内容拷贝一份赋值给b

一切皆数据，操作数据
算术运算
逻辑运算
赋值
运行函数

2.什么是内存
内存是看不见的，内存条是硬件
指内存条通电后产生的存储数据的空间（临时的）
断电后，空间关闭，数据消失
一个内存都有两个数据，一个内部存储的数据，一个存放数据的地址值。一般数据是引用对象时才有用到地址

内存分类
栈：局部变量/全局变量
堆：对象
3.什么是变量
可变化的量，由变量名和变量值两部分组成
每个变量在内存中对应一块空间，变量名用来查找对应的内存，变量值是内存中保存的数据
4.数据 变量 内存三者之间的关系
内存是用来存储数据的空间
变量是内存的标识
*/
var obj2={name:"孙悟空"};
console.log(obj2.name);//首先先在内存中找到一个叫Obj2的变量，然后根据name给obj2赋值的地址，去找到内存中的name数据

/*
关于赋值和变量的问题
var a=xxx;请问a内存里保留的是什么
1.当xxx为基本数据类型时，则xxx保留的是这个数据var a=3;
若xxx是对象，则保留的是对象的地址值var a={}
若xxx是变量，那么保留的可能是对象的地址值，也可能是这个数据var b={} var a=b;或者var b=3;var a=b;


两个引用变量赋值问题
var obj1={name:"猪八戒"}；
var obj2=obj1;//obj保存的是obj1的内容，只不过obj1保存的是{}的地址值，所以这相当于也是将obj2的指针同样只向跟obj1一样的地址
obj1.name="Jack";
console.log(obj1.name);//Jack
console.log(obj2.name);//Jack
*/
var obj3={name:"猪八戒"};
var obj4=obj3;//obj保存的是obj1的内容，只不过obj1保存的是{}的地址值，所以这相当于也是将obj2的指针同样只向跟obj1一样的地址
obj3.name="Jack";
console.log(obj3.name);//Jack
console.log(obj4.name);//Jack
//n个引用变量值指向同一个对象，通过一个变量改变内部的数据，那么另一个引用变量看到的是修改后的数据


var obj5={name:"Tom"}
var obj6=obj5;
function fn(obj){
    obj.name="A";
}
fn(obj5);
console.log(obj6.name);//A


var obj7={gender:"男"};
var obj8=obj7;
obj8.gender="女";
console.log(obj7.gender);//女
console.log(obj8.gender);//女

/*
两个引用变量指向同一个变量，让其中一个变量指向一个新的对象，另一个变量依然指向前一个对象
大括号{}相当于new新对象，重新开一个内存
*/

var obj9={gender:"男"};
var obj10=obj9;
obj9={gender:"女"};
console.log(obj9.gender);//女
console.log(obj10.gender);//男

obj10.gender="女";
console.log(obj9.gender);//女
console.log(obj10.gender);//女

var a={name:"chelsea"};
function fn2(obj11){//因为这个时候将a传进obj11，将a的内容（不管是基本数据还是地址值）赋值给obj11,这个时候两个都指向同一个地址，都是name:chelsea
    obj11={name:"Amy"};//而在这里={}相当于又重新开一个内存空间，obj11指向name:Amy,而之前的指向chelsea的线就断开了
}
fn2(a);
console.log(a.name);//chelsea
//而name:Amy成为垃圾对象，局部变量释放

/*
面试常问：在js中，调用函数传传递变量参数时，传递的是值还是引用对象
答：法一：都是值传递，只不过区分是基本值还是地址值
法二：可能是值传递，也可能是引用传递，也就是传的是数据的地址值
*/
var esc=3;
function fn3(esc){//在这里因为fn3(esc),往这个形参里传的是实参的值，将实参的内容3拷贝一个给到形参esc,所以这里接受到的是3
esc=esc+1;//esc被3+1赋值，所以总的返回等于4
//形参的esc跟实际参数的esc是不同的
return;
}
fn3(esc);
console.log(esc);//3
//var d=fn3();
//console.log(d);


var obj12={name:"Tom"};
function fn4(obj12){
    console.log(obj12.name);//Tom
}
fn4(obj12);

/*
js引擎如何管理内存、
1。内存生命周期
分配小内存空间，得到他的使用权
存储数据可以反复操作
释放小内存空
2.释放内存
局部变量：函数执行完自动回收
对象：成为垃圾对象，被垃圾回收器回收
*/
var e={name:"abc"};
e=null;
//那么此时name:"abc"会作为一个垃圾对象被垃圾回收器回收

//而函数呢
function fn5(){
    var e3={};
}
fn5();//执行函数
//当还没开始执行函数时，此时内存空间并没有函数，当执行时才有局部变量e3，当执行完局部变量自动回收
