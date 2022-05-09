var a = 5;
a = a + 5; //先运算a+5，然后结果10再赋值给a
console.log(a);
var b = 5 > 4;
console.log(b); //true
console.log(typeof b); //boolean
var c = true < 10;
console.log(c); //true 1<10
var c2 = "11" > "22";
console.log(c2); //false
var d = "a" > "b";
console.log(d); //false,a<b

var d2 = "abc" > "b";
console.log(d2); //false
var d3 = "bba" > "b";
console.log(d3); //true

var e = 12 == 12;
console.log(e); //true
console.log(1 == 1); //true

var e2 = "12" == 12;
console.log(e2); //true,会自动转化
var e3 = "12" === 12;
console.log("e3 =" + e3); //false

console.log(NaN == NaN); //false
var f = NaN;
console.log(isNaN(f)); //true
console.log(10 != 4); //true;
var a2 = 5;
var b2 = 6;
var max = a2 < b2 ? b2 : a2;
console.log(max);

var g = 1 || 2 && 3;
console.log(g); //1
/*当||优先级高于&&时
//1||2，1为真，返回1
//1&&3,1为真，与中返回第二个3
最终为3
*/
/*
当&&优先级高于||时
2&&3,2为真，与中返回第二个3
1||3，1为真，返回1
最终为3
*/