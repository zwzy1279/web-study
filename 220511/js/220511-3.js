/*var obj = new Object();
console.log(obj);//Object 空
*/

/*
var obj = new Object();
obj.name = "孙悟空";
obj.sex = "男";
obj.age = 18;
//console.log(obj); //{name:"孙悟空"}

//读取
console.log(obj.name); //孙悟空
obj.name = "猪八戒";
console.log(obj.name); //猪八戒

//delete obj.name;
//console.log(obj.name); //undefined
//错误obj.123=456;
obj["123"] = 789;
console.log(obj["123"]);
var n = "123";
console.log(obj["n"]); //789

var obj2 = new Object();
obj2.name = "唐僧";
obj.a = obj2;
console.log(obj.a); //{name:"唐僧"}所以可以无限装
console.log(obj.a.name) //唐僧
    //检查对象中是否有某属性
console.log("a" in obj);//true
*/

/*
//基本数据类型和引用数据类型的区别
var a =2;
var b=a;
a++;//a++=2,a=3
console.log("a="+a);//a=3
console.log("b="+b);//b=2

var obj = new Object();
obj.name = "孙悟空";
var obj2=obj;
//修改obj的name属性
obj.name="猪八戒";
console.log(obj.name);//猪八戒
console.log(obj2.name);//猪八戒
*/

/*var obj3=new Object();
var obj4=new Object();
obj3.name="沙和尚";
obj4.name="沙和尚";
console.log(obj3==obj4)//false
当比较两个基本数据类型时，就是比较值
而比较两个引用数据类型时，它是比较对象的内存地址
 如果两个对象是一模一样的，但是地址不同，他也会返回false
 */


var obj = {
    name: "孙悟空",
    age: 18,
    sex: "男"
};
console.log(obj); //{name:"孙悟"}