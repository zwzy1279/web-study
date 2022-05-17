/*function fun(a, b) {
    //console.log("a=" + a + ",b=" + b);//a=123,b=456
    console.log(this); //window
}
fun(123, 456);*/
/*
function fun() {
    console.log(this.name);
}
var obj = {
    name: "孙悟空",
    sayName: fun
};
//sayName();
//console.log(obj.sayName);
//console.log(fun);
//console.log(obj.sayName==fun);//true
//obj.sayName();//{name: '孙悟空', age: 18, sayName: ƒ}object
//fun();//window
var name = "全局的name属性"; //全局
//用函数调用
//fun();//没有出现孙悟空，而是出现全局的"全局的name属性"


//方法调用
obj.sayName();//孙悟空
*/
var name = "全局";

function fun() {
    console.log(this.name); //全局
}
//fun();
var obj = {
    name: "孙悟空",
    sayName: fun
};
var obj2 = {
    name: "猪八戒",
    sayName: fun
};
//obj.sayName();//孙悟空
fun(); //全局
obj2.sayName(); //猪八戒