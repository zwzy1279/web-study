/*方法
var obj = new Object();
//向对象中添加属性
obj.name = "孙悟空";
obj.age = 18;
//对象的属性可以是任何数据类型，也可以是函数
obj.sayName = function() {
        console.log(obj.name);
    }
//console.log(obj.sayName);//ƒ () { console.log(obj.name);}，sayName是obj的方法
obj.sayName();//孙悟空
/*函数也可以作为对象的属性，
如果一个函数成为一个对象的属性进行保存，
那么我们称这个函数是这个对象的方法
调用函数就说明调用对象的方法
调方法和掉函数只是名称区别
*/


var obj = {
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山"
};
//枚举对象中的属性
//使用for...in语句
/*语法：
for(var 变量 in 对象){

}*/
//for...in语句 对象中有几个属性，循环体就执行几次
for (var i in obj) {
    //console.log(obj);//执行四次
    //console.log(i);//属性值的名称，每次执行，会将对象中一个属性名字赋值给变量

    //console.log(obj.i);//4个undefined
    console.log(obj[i]); //孙悟空 18 男 花果山

}

/*作用域：指一个变量的作用范围
function fun() {
    var a = 123;
}
fun();
console.log(a);//找不到的，所以变量a只作用在函数内
在js中一共有两种作用域：
1.全局作用域
  直接编写在script标签内的代码
  全局作用域在页面打开时创建，在页面关闭时销毁
  在全局作用域中有一个全局对象window，它代表浏览器的窗口，他由浏览器创建我们可以直接使用
  //在全局作用域，创建的变量都会作为window对象的属性保存
  var a = 10;
console.log(window.a);//10

//创建的函数都会作为window对象的属性保存
function fun() {
    console.log("我是fun函数");
}
window.fun(); //我是fun函数


console.log("a=" + a);
var a = 123; //a=undefined；
/*变量的声明提前，
使用var关键字声明的变量，都会在所有的代码执行执行之时被声明（但不会被赋值）
但如果声明变量时不使用var关键字，则变量不会被声明提前*/
/*console.log("a2=" + a2);
a2 = 124;error*/


fun4(); //我是一个fun4函数
function fun4() {
    console.log("我是一个fun4函数");
}
/*函数的声明提前
使用函数声明形式创建的函数function(){}
它会在所有的代码执行之前就被创建*/



/*fun5();
var fun5 = function() {
    console.log("我是fun5函数");
}//出现错误
使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用

*/

//2.函数作用域
/*调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
没调用一次就会创建一个新的函数作用域，他们之间是相互独立的
在函数作用域可以访问到全局作用域的变量，小的可以访问到大的，里边通过窗户可以看到外边
在全局作用域中无法访问到函数作用域的变量，大的不能访问到小的，外边窗户看不到里边

*/
var a = 10;

function fun6() {
    console.log("a=" + a); //在函数里访问
    // var b = 20; //在函数里声明
}
fun6(); //a=10
//console.log("b=" + b); //在全局作用域里访问，出现error

/*当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用
如果没有则向上一级作用域中寻找，直到找到全局作用域
如果全局作用域中依然没找到，则会报错*/
var a4 = 30;

function fun7() {
    //var a4 = 30;
    console.log("a4=" + a4); //a4=30
    /*function fun8() {
        console.log("a4=" + a4);
    }*/
}
fun7();

;

function fun9() {
    var a5 = 30;

    function fun8() {
        console.log("a5=" + a5);
    } //a5=30
    fun8();
}
fun9();


var a6 = 35;

function fun10() {
    //var a6 = 30;

    function fun11() {
        console.log("a6=" + a6);
    } //a6=35
    fun11();
}
fun10();

function fun12() {
    var a7 = 8;
    console.log("a7=" + a7); //a7=8
}
fun12();

function fun13() {

    console.log("a8=" + a8); //a8=undefined
    var a8 = 9;
}
fun13();

/*定义形参就相当于在函数作用域中声明了变量*/
var e = 23;

function fun14() {
    alert(e);
}
fun14(); //23