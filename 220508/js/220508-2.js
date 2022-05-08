// JavaScript Document
var a=123;
console.log(typeof a);//返回number类型
a=a.toString();
console.log(typeof a);//返回String类型

var b=true;
console.log(typeof b);//返回boolean类型
b=b.toString();
console.log(typeof b);//返回string类型

var c=null;
console.log(typeof c);//返回object类型
//c=c.toString();
//console.log(typeof c);//错误，toString不能用在null和undefined上
c=String(c);
console.log(typeof c);//返回string类型


console.log("---------------------------");
var d="123";
console.log(typeof d);//返回string类型
console.log(d);//123
d=Number(d);
console.log(typeof d);//返回number类型
console.log(d);//123，所以字符串转为数字过程中，如果是单纯数字的字符串，则直接将其转换成数字

var e="abc";
console.log(typeof e);//返回string类型
console.log(e);//abc
e=Number(e);
console.log(typeof e);//返回number类型
console.log(e);//NaN不是一个数值，所以字符串转为数字过程中，如果不是单纯数字的字符串，则将其转换成NaN

var f="   ";
console.log(typeof f);//返回string类型
console.log(f);//空格
f=Number(f);
console.log(typeof f);//返回number类型
console.log(f);//0，所以字符串转为数字过程中，如果是空的字符串，则将其转换成0

var g=true;
console.log(typeof g);//boolean
console.log(g);//true
g=Number(g);
console.log(typeof g);//number
console.log(g);//1

var h=null;
console.log(h);//null
console.log(typeof h);//object
h=Number(h);
console.log(h);//0
console.log(typeof h);//number

var i="123px";
console.log(i);//123px
console.log(typeof i);//string
i=Number(i);
console.log(i);//NaN
console.log(typeof i);//number

var j="123px";
j=parseInt(j);
console.log(j);//123
console.log(typeof j);//number

var k=0x123;
console.log(k);//291
var l=0123;
console.log(l);//83
var m=123;
m=parseInt(m,16);
console.log(m);//291
console.log("---------------------------");

var n=123;
n=Boolean(n);
console.log(n);//true
console.log(typeof n);//boolean

var o="hello";
o=Boolean(o);
console.log(o);//true
console.log(typeof o);//boolean