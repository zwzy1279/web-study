/*
var a = true + false;
console.log(a); //1+0=1

var b = 1 + null;
console.log(b); //1+0=1

var c = 1 + NaN;
console.log(c); //NaN

var d = "123" + "world";
console.log(d); //123world
var d2 = 123 + "world";
console.log(d2); //123world
var d3 = "123" + 1 + 2;
console.log(d3); //12312
var d4 = 1 + 2 + "123";
console.log(d4); //3123
console.log("d4 =" + d4);
//"d4 =" + d4为两个相加，字符串和任意数据类型相加为字符串，d4=d4,d4=3123;

var d5 = 123 + " ";
console.log(typeof d5); //string
console.log(d5); //123

var e = 100 - 1;
console.log(e); //99
var e2 = 100 - "1";
console.log(e2); //99
var e3 = 100 - true;
console.log(e3); //99

var f = 2 * 8;
console.log(f);
var f2 = 2 * "8"; //16
console.log(f2);
var f3 = 2 * null;
console.log(f3); //0
var f4 = 2 * undefined;
console.log(f4); //NaN

var g = 3 / 2;
console.log("g=" + g); //g=1.5;

var h = "123";
console.log(typeof h);//string
h = h * 1;
console.log(typeof h);//number
console.log(h);//123
*/
var a = 123;
a = +123;
console.log("a=" + a); //a=123
a = -123;
console.log("a=" + a); //a=-123
var a2 = true;
//a2 = +a2;
a2 = -a2;
console.log(a2); //-1

var b = 10;
console.log(b++); //10
console.log(b); //11

var b2 = 10;
console.log(++b2); //11
console.log(b2); //11

var c = 10;
c = !c;
console.log(c); //false
console.log(typeof c); //boolean

var c2 = 10 && 0;
console.log(c2); //返回0
var c3 = 0 && 10;
console.log(c3); //返回0
var c4 = 11 && 10;
console.log(c4); //返回10