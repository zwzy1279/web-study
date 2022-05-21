//创建一个data对象
//如果直接构造函数创建一个Date对象，则会封装为当前代码的时间
var d = new Date();
//console.log(d); //Sat May 21 2022 10:50:06 GMT+0800 (中国标准时间)

//创建一个指定时间对象
//需要在构造函数中传递一个表示时间的字符串作为参数
//日期的格式 月份/日/年  时：分：秒
var d2 = new Date("05/21/2022 11:10:30");
console.log(d2); //Sat May 21 2022 11:10:30 GMT+0800 (中国标准时间)

//getDate()获取当前日期对象是几日
console.log(d2.getDate()); //21

//getDay()当前对象的星期几
//会返回一个0-6的值，0表示周日，1表示周一
console.log(d2.getDay()); //6

//getMonth()
//会返回0-11，0为1月，1为2月，11为12月
console.log(d2.getMonth()); //4

//get.Time()
//获取当前日期对象的时间戳
//1970年到当前日期的免费好秒数（1秒=1000毫秒）
console.log(d2.getTime()); //1653102630000
///1000/60/60/24/365

//利用时间戳来测试代码的执行性能
//获取当前的时间戳
var start = Date.now();

for (var i = 0; i < 100; i++) {
    console.log(i);
}

var end = Date.now();

console.log("执行了" + (end - start) + "毫秒"); //执行了20毫秒


/*Math
  Math和其他的对象不同，它不是一个构造函数
    它属于一个工具类不用创建对象，它里边封装了数学运算相关的属性方法
比如：Math.PI表示圆周率

abs()可以用来计算一个数的绝对值

Math.ceil()
可以对一个数进行向上取整，小数位只要有值就自动进一

Math.floor()
可以对一个数进行向下取整，小数部分都会被舍掉

Math.round()
可以对一个数进行四舍五入取整

Math.random()
可以用来生成0-1之间的随机数

Math.random()*10
可以用来生成0-10之间的随机数

Math.round(Math.random()*x)
可以用来生成0-x之间的随机数

Math.round(Math.random()*(y-x)+x)
生成一个x-y之间的随机数

max()可以获取多个数中的最大值
min()

Math.pow(x,y)返回x的y次幂

Math.sqrt()用于对一个数开方运算*/

console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-15)); //15
console.log(Math.ceil(1.4)); //2
console.log(Math.floor(1.99)); //1
console.log(Math.round(1.4)); //1
console.log(Math.round(1.5)); //2
console.log(Math.random()); //0.7109085030357247
console.log(Math.random() * 10); //9.200316207875908
console.log(Math.round(Math.random() * 9) + 1); //9
//console.log(Math.round(Math.random() * 9) + 1);
//console.log(Math.round(Math.random() * 9) + 1);
console.log(Math.max(10, 45, 20, 90, 30)); //90
console.log(Math.pow(2, 3)); //8
console.log(Math.sqrt(16)); //4


/*
在js中为我们提供了三个包装类，通过这三个包装可以基本将数据类型转换成对象
String()
 可以将基本的数据类型字符串转换成String对象
Number()
 可以将基本数据类型的数字转换成Number对象
Boolean()
 可以将基本数据类型的布尔值转化成Boolean对象
但是注意，我们实际应用中不会使用基本数据类型的对象
会出现不可预料的结果

方法和属性之间能添加对象，不能添加给基本数据类型
  我们对一些基本数据类型的值去调用属性和方法时，
浏览器会临时使用包装类将其准换成对象，然后再调用对象的属性和方法
调用完以后，再将其转换成基本的数据类型*/
var s = 123;
s = s.toString();
s.hello = "你好";
console.log(s); //123
console.log(typeof s); //string
console.log(s.hello); //undefined