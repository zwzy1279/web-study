//创建一个字符串
var str = "Hello world";

/*在底层字符串都是以字符数组的形式保存的
["H","e","l","l","o"]

length属性,一说属性就不用加()
可以来获取字符串长度

charAt()
可以返回字符串指定位置的字符
根据索引获取指定的字符
跟数组一样

charCodeAt()
获取指定字符的编码

String.fromCharCode()
可以根据编码去获取字符

concat()
可以用来连接两个或者多个字符串

indexOf()
该方法可以检索一个字符串中是否有指定内容
如果字符串中含有该内容，则会返回第一次出现的索引
  如果没有找到指定的索引，则会返回-1
可以指定一个第二个参数，指定开始查找的位置

lastIndexOf()
该方法和index()一样，不同的是lastIndexOf()是从后往前找

slice()
可以从字符串截取指定的内容
不会影响原字符串，而是将截取到的内容返回
参数：
第一个：开始位置的索引（包括开始位置）
第二个：结束位置的索引（不包括结束位置）
 如果省略第二个参数，就会截取到后边所有的
也可以传递一个负数作为参数，负数的话将会从后边开始算起

substring()
可以用来截取一个字符串，跟slice类似
第一个：开始位置的索引（包括开始位置）
第二个：结束位置的索引（不包括结束位置）
不同的是这个方法不能接收负值作为参数
而且会自动调整参数位置，如果第二个参数小于第一个，则会自动调换位置

substr()
可以用来截取字符串
参数：
 1.截取开始位置的索引
 2.截取的长度

 split()
 可以将一个字符串拆分成一个数组
 参数：
 需要一个字符串作为参数，根据字符串去拆分数组

 toUpperCase()
 将一个字符串转换成大写并返回

 toLowerCase()
 将一个字符串转换成小写并返回
*/
console.log(str[1]); //e
console.log(str[5]); //

console.log(str.length); //11

console.log(str.charAt(0)); //H
console.log(str.charAt(1)); //e
console.log(str.charCodeAt(1));


console.log(String.fromCharCode(101)); //e
console.log(String.fromCharCode(0x2673)); //♳

console.log(str.concat("你好", "世界")); //Hello world你好世界


console.log(str.indexOf("H")); //0
console.log(str.indexOf("o", 4)); //4
console.log(str.indexOf("o", 5)); //7

console.log(str.lastIndexOf("H", 0));

console.log(str.slice(0, 5)); //Hello

console.log(str.substring(0, 5)); //Hello

console.log(str.substr(0, 5)); //Hello

str = "abc,bcd,efg";
console.log(str.split(",")); //['abc', 'bcd', 'efg']
console.log(str.split("*")); //['abc,bcd,efg']

str = "ABCDEFG";
console.log(str.toLowerCase()); //abcdefg

/*正则表达式
邮件规则：
1.前边可以是xxx
2.跟着一个@
3.后面可以是xxx
4.com获取其他乱七八糟的

正则表达式用于定义一些字符的规则
  计算机可以根据正则表达式，来检查一个字符串是否符合规则
  获取字符串中符合规则的内容提取出来
*/

//创建真个表达式的对象
/*语法：
var reg=new RegExp("正则表达式"，“匹配模式”)；
检查类型会返回object
var reg = new RegExp("a");这个正则表达式可以检查一个字符串是否含有a

在构造函数中可以传递一个匹配模式作为第二个参数
 可以是
     i  忽略大小写
     g   全局匹配模式

正则表达式的方法：
test()
使用则个方法可以检查一个字符串是否符合正则表达式的规则
如果符合返回true，否则返回false

*/
var reg = new RegExp("a");
console.log(reg); ///a/
console.log(reg.test("a")); //true
console.log(reg.test("A")); //false

var reg = new RegExp("a", "i");
console.log(reg.test("A")); //true