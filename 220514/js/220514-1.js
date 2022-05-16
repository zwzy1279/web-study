/*
//创建一个函数对象，参数可以是任意类型，返回值可以是任意类型
var fun = new Function("console.log('hello')");
//console.log(typeof fun);//function
fun();

function fun2() { //function为关键字，fun2为函数名
    console.log("第二种创建函数方法");
    alert("大部分用第二种创建函数方法");
}
fun2();

var fun3 = function() {
        console.log("第三种创建函数方法");
    };
    //如何调用呢
fun3();*/

/*function sum(a, b) {
    //形参a,b相当于var a;var b;但并不能赋值
    //而是在调用函数中里的实参才会赋值给函数中对应的形参
    console.log(a + b);

}
//在调用函数时，可以在（）中指定实参（实际参数）
//实参将会赋值给函数中对应的形参
sum(1, 2);
//但是调用函数不会检查实参的类型，所以要检查，多余的实参不会被赋值，如果
//实参的数量小于形参的数量，会返回undefined*/

/*function fun4(a, b, c) {
    //alert('hello');
    //alert(a + b + c);//不想让他弹出来，只想要直到一结果
    var d = a + b + c; //这样不会弹出来
    return d;
    //alert('hello');//return 后面的代码不会执行
}
var result = fun4(1, 2, 3); //6
//调用函数，变量result的值就是函数的执行结果，函数返回什么result就是什么
console.log(result);*/

/*定义一个函数，判断一个数字是否是偶数，如果是返回true，不是返回false
 */
function fun5(n) {
    /* if (n % 2 == 0) {
         return true;
     } else
         return false;*/
    //或者可以
    return n % 2 == 0;
}
var result = fun5(6);
console.log(result);
console.log("----------");

function fun6(r) {
    var s = 3.14 * r * r;
    return s;
}
var result2 = fun6(2);
console.log(result2);
console.log("----------");

/*创建一个函数，可以在控制台输出一个人的信息
可以输出入的name age gender address
*/
function fun7(name, age, gender, address) {
    console.log("你是" + name + ",今年" + age + ",是一个" + gender + ",住在" + address);
}
fun7("孙悟空", 18, "男", "花果山");


function fun8(o) { //传入形参
    console.log("你是" + o.name + ",今年" + o.age + ",是一个" + o.gender + ",住在" + o.address);
}

var obj = {
    name: "猪八戒",
    age: 28,
    gender: "男",
    address: "高老庄"
};
fun8(obj); //传入实参

//函数作为参数
function fun8(i) {
    console.log(i);

}
fun8(fun5);
/*fun5(n) {
    /* if (n % 2 == 0) {
         return true;
     } else
         return false;*/
//或者可以
//return n % 2 == 0*/

function fun9(j) {
    console.log(j);
}
//fun9(function() { alert("匿名函数作为参数"); })


//fun9(fun6);函数对象，直接使用函数对象
/*ƒ fun6(r) {
    var s = 3.14 * r * r;
    return s;
}*/

fun9(fun6(2)); //12.56，调用函数，相当于使用函数的返回值


//返回值可以是任意类型,可以是一个对象，也可以是一个函数
function fun10() {
    alert("-------------");
    for (var i = 0; i < 5; i++) {
        console.log(i);
        if (i == 2) {

            // break;0 1 2退出当前循环
            //continue;0 1 2 3 4进行新一轮循环
            //return;0 1 2 return后的语句都不会运行
            return;
        }
    }
    alert("++++++++++++++");
}
fun10();

function fun11() {
    // return 7;
    //return "hello";
    return null;
}
var a = fun11();
console.log(a);
//函数返回值可以是任意数据类型，也可以是一个对象
function fun12() {
    var obj = { name: "甲" };
    return obj;
}
var a2 = fun12();
console.log(a2); //{name: '甲'}

function fun13() {

    return { name: "乙" };
}
var a3 = fun13();
console.log(a3); //{name: '乙'}

//在函数内部在声明一个函数
function fun14() {
    function fun15() {
        alert("我是函数内部的一个函数");
    }
    //fun15();
    //return fun15();
    return fun15;
}
//fun14(); //"我是函数内部的一个函数
var result3 = fun14();
//console.log(result3);
//result3();
fun14()();

//匿名函数
//立即执行函数，只能执行一次
//函数对象()
/*(function() {
    alert("我是一个匿名函数");
})();*/
(function(a, b) {
    console.log(a);
    console.log(b);
})(123, 456);