/*
1.this是什么
本质上是通过某个对象来调用，如果没有指定，就是window
函数外面全局是window
所有函数内部都有一个变量，叫this，他的值是调用函数当前对象
2.怎么判断this
test()  window
p.test()   p
p.call（obj)  obj
直接调用函数，函数中的this指向的是window.
通过函数的方法来调用的，函数中的this指向的是调用函数的对象。
通过构造函数形式调用函数，函数中的this值得是新建的对象  new test()  新创建的对象
使用call/apply调用时，this是指定对象。  
事件绑定中，事件绑定的对象是谁，this就指向谁。

*/

function Person(color){
    console.log(this);
    this.color=color;
    this.getColor=function(){
        console.log(this);
        return this.color;
    }
    this.setColor=function(color){
        console.log(this);
        this.color=color;
    }
}
Person("red");//this?  window  red

var p=new Person("yello");//this?  yello

p.getColor();//this?  yello

var obj={};
p.setColor.call(obj,"black");//this?  black

//谁调用，谁就是this
//Person(),调用第一个函数，只执行了console.log(this);   该this是window
//new Person()  调用第一个函数，this是p
//调用p.getColor()函数，执行了这一段，console.log(this);return this.color;，   p调用的，所以this是p
//加call，更换了对象，所以此时调用的是obj

/*
原型与原型链

函数的prototype属性
原型属性，每个函数都有这个属性prototype,他默认指向一个object空对象
原型对象有一个属性constructor,他指向函数对象
作用
函数的所有实例对象自动拥有原型的属性

console.log(Date.prototype.constructor===Date);
*/
console.log(Date.prototype.constructor===Date);//true

//给原型对象添加属性（一般是方法）-》实例对象可以访问
function Fun(){

}
//给原型添加方法
Fun.prototype.test=function(){
    console.log('test()');
}
var fun=new Fun();
fun.test();

/*
1.每一个函数都有一个prototype,即显示原型
2.每一个实例对象都有一个__proto__,可称为yin隐式原型
对象隐式原型的值为构造函数的显示原型的值

函数prototype属性：在定义函数时自动添加的，默认值是一个空对象。
对象__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值。
程序员能直接操作显示原型，但不能直接操作隐式原型
*/

//定义构造函数
function Fn3(){

}
console.log(Fn3.prototype);
var fn3=new Fn3();//创建一个实例化对象  内部语句：fn3.__proto__=Fn3.prototype
console.log(fn3.__proto__);
console.log(Fn3.prototype===fn3.__proto__);//true

/*原型链
访问对象属性时，现在自身属性中查找，找到返回。
如果没有，再沿着__proto__这条链向上查找，找到返回。
如果最终没找到，返回undefined

别名：隐式原型链
作用:查找对象的属性。
构造函数/原型/实体对象的关系
*/

/*
1.函数的显示原型指向的对象默认是空的object的实例对象（但object并不能满足）

2.所有的函数都是Function的实例（包括function）

3.object的原型对象是原型链的尽头,他的隐式原型对象为空
*/
function Fn(){};
console.log(Fn.prototype instanceof Object);//true
console.log(Object.prototype instanceof Object);//False
//console.log(Function instanceof Function);//true

console.log(Function.pototype===Function.__proto__);//false

console.log(Object.prototype.__proto__);//null

/*
原型链-属性问题
1.读取对象的属性值时，会自动在原型链找，而不是在对象上找

2.设置对象的属性值时，不会查找原型链，会在当前对象身上找，如果在自身对象没有找到此属性，那么直接添加起属性并设置值

3.方法一般定义在原型中，属性一般通过构造函数定义在对象本身
*/

/*
instanceof  左边的对象是不是右边的实例
那么 A instanceof B是怎么判断的？
如果B函数的显示原型对象在A的对象的原型链上，返回true，否则返回false
*/

//面试题1
function A(){

}
A.prototype.n=1;
var b=new A();
A.prototype={
    n:2,
    m:3
}
var c=new A();
console.log(b.n,b.m,c.n,c.m);//1 undefined 2 3

//面试2
var F=function(){

}//相当于function F(){}
Object.prototype.a=function(){
    console.log('a()');
}
Function.prototype.b=function(){
    console.log('b()');
}
var f=new F();
f.a();//a()
//f.b();报错
F.a();
F.b();


/*
变量声明与函数提升
1.变量声明提升
通过var声明的变量，在定义语句之前就可以访问到
值为undefined
例如：
console.log(b);//undefined
var b=3;


2.函数提升
通过函数function声明的函数，在声明代码之前就可以直接调用
值：函数定义（对象）

3.变量提升和函数提升是如何产生的？
*/
//面试题3
var a=3;
function fn(){
    console.log(a);
    var a=4;
}
fn();//输出为undefined
/*虽然我们是这么写的，但是实际上运行，函数执行前，在前面已经
function fn(){
    var a;
    console.log(a);
    a=4;
}
*/

console.log(age);//undefined  变量提升
var age=15;

fun1();
function fun1(){
    console.log('fun1()');//fun1()  函数提升
}



fn4();//报错，调不了，因为此时遵循的是变量提升，函数没有用声明的方式
var fn4=function(){
    console.log('fn4()');
}