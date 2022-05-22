//使用字面量来创建正则表达式
//语法：var 变量= /正则表达式/匹配模式

//var reg = new RegExp("a", "i");
var reg = /a/i; //语法：var 变量= /正则表达式/匹配模式
console.log(reg.test("abc")); //true

//创建一个正则表达式，检查一个字符串是否有a或者b
//使用| 表示或者的意思
reg = /a|b/;
console.log(reg.test("bdac"));
/*因为
reg = /ab/;
console.log(reg.test("ba"));//false
*/

//创建一个正则表达式检查一个字符串中是否含有字母
//var reg=/a|b|c|d|e|f/;写到天荒地老
reg = /[ab]/;
console.log(reg.test("cde")); //false
console.log(reg.test("acde")); //true
console.log(reg.test("bcde")); //true
/*
/[ab]/也表示a或者b
/[a-z]/表示从a到z任意小写字母
/[A-Z]/表示从A到Z任意大写字母
/[A-z]/表示任意字母
*/
reg = /[A-Z]/;
console.log(reg.test("ed")); //false

//检查一个字符串中是否含有abc 或 adc 或 aec
//reg=/abc|adc|aec/;
//或者
reg = /a[bde]c/;
console.log(reg.test("adc")); //true

/*[^  ]除了*/
reg = /[^ab]/;
console.log(reg.test("ads")); //true
console.log(reg.test("fgh")); //true



//字符串与正则相关的方法
var str = "1a2b3c4d5e6f";
//split()可以将一个字符串拆分成一个数组
console.log(str.split("c")); //['1a2b3', '4d5e6f']
console.log(str.split(",")); //['1a2b3c4d5e6f']

//想根据任意字母来将字符串拆分
/*split()可以将一个字符串拆分成一个数组
方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串
这个方法即使不指定全局，也会全部拆分
*/
console.log(str.split(/[A-z]/)); //['1', '2', '3', '4', '5', '6', '']

/*search()
 可以搜索字符串中是否含有指定内容
 如果搜到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
 他可以接受一个正则表达式作为参数，然后根据正则表达式去检索字符串
 不能全局，也只能一个*/
str = "hello abc world aec aef";
console.log(str.search("hello")); //0
console.log(str.search("avc")); //-1
console.log(str.search("abcs")); //-1

//搜索字符串中是否含有abc aec 
console.log(str.search(/a[be]c/)); //6

/*match()
可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索
  我们可以设置正则表达式为全局匹配模式，这样会匹配到所有的内容
   i  忽略大小写
     g   全局匹配模式
     可以为一个正则表达式设置多个匹配模式，且顺序无所谓
-match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果
*/
str = "1a3c5e7g9i";
console.log(str.match(/[A-z]/)); //['a',
console.log(str.match(/[A-z]/gi)); //['a', 'c', 'e', 'g', 'i']

/*replace()
可以将字符串中指定内容替换成新的内容
参数：
   1.被替换的内容
   2.新的内容
默认只会替换第一个，使用全局
*/
console.log(str.replace("a", "@")); //1@3c5e7g9i

str = "1a3caa5ea7g9i";
console.log(str.replace("a", "@")); //1@3caa5ea7g9i只会替换一个
console.log(str.replace(/a/g, "@")); //1@3c@@5e@7g9i
console.log(str.replace(/[A-z]/gi, "")); //13579



//正则表达式
//创建一个正则表达式检查一个字符串是否含有aaa
var reg = /a/;
console.log(reg.test("aaa")); //true
reg = /aaa/;
console.log(reg.test("aaaaaa")); //true

/*量词
 通过量词可以设置一个内容出现的次数
 两次支队他前边最近的一个内容起作用
 {n}正好出现n次
 {m,n}出现m-n次
 {m,}chuxianm次或者以上
 + 至少一个，相当于{1,}
 * 0个或者多个，相当于{0,}
 ?  0个或者1个，相当于{0,1}
*/
var reg = /a{3}/;
console.log(reg.test("daaaa")); //true

var reg = /ab{3}/;
console.log(reg.test("ababab")); //false
console.log(reg.test("abaaa")); //false
console.log(reg.test("abbb")); //true

var reg = /(ab){3}/;
console.log(reg.test("ababab")); //true

var reg = /ab{3,5}/;
console.log(reg.test("abababbbb")); //true

reg = /ab+c/;
console.log(reg.test("abbc")); //true
reg = /ab*c/;
console.log(reg.test("abbc")); //true
reg = /ab?c/;
console.log(reg.test("abbc")); //false

//检查一个字符串是否含有a
reg = /a/;
console.log(reg.test("bva")); //true

/*检查一个字符串是否以a开头  //中文 shift+^键为省略号
^表示开头
$表示结尾
如果在正则表达式中同时使用^ $要求完全符合正则表达式
*/
reg = /^a/; //匹配开头的a
console.log(reg.test("bva")); //false
reg = /a$/; //匹配结尾的a
console.log(reg.test("bva")); //true
reg = /^a$/;
console.log(reg.test("a")); //true

/*练习:查找一个合法的手机号
手机号规则：13060583948

1.以1开头
2.第二位3-9任意数字
3.第三位及以上为任意数字  共9个
^1  [3-9]  [0-9]{9}

var phonenumber=15915634569;
var reg = /^1[3-9][0-9]{9}/;
console.log(reg.test(phonenumber)); 
*/
reg = /^1[3-9][0-9]{9}/;
console.log(reg.test("15915634569")); //true
console.log(reg.test("10915634569")); //false

/*检查一个字符串是否含有.
   .表示任意字符
   在正则表达式中使用\作为转义字符
   \.来表示

注意：使用构造函数时，由于他的参数是一个字符串，而\是字符串中转义字符
    如果要使用\则需要使用\\来代替
*/
var reg = /./;
console.log(reg.test("abc")); //true

var reg = /\./;
console.log(reg.test("abc")); //false

reg = new RegExp("\\.");
console.log(reg.test("abc")); //false

/*
\w
  -任意字母 数字 下划线_
\W
  -除了任意字母 数字 下划线_
\d
  -任意数字
\D
  -除了任意数字
\s
   -空格
\S
  -除了空格
\b
   -单词边界
\B
  -除了单词边界
*/
reg = /\w/;
console.log(reg.test("a2")); //true

/*创建一个正则表达式检查一个字符串是否含有单词child
 */
reg = /\bchild\b/;
console.log(reg.test("hello children")); //false

//接受一个用户输入
//var str = prompt("请输入你的用户名：");
var str = "   he  llo";
console.log(str);
//去除空格
//去除字符串中前后的空格
//去除空格就是使用""来替换空格
str = str.replace(/\s/g, "");
console.log(str); //hello

//去除开头的空格
str = str.replace(/^\s*/, "");
console.log(str); //hello
//去除结尾的空格
str = str.replace(/\s*$/, "");
console.log(str); //hello

str = str.replace(/^\s*|\s*$/g, "");
console.log(str); //hello

//邮件的正则
/*电子邮件
hello  .nihao @  abc   .com.cn
任意字母下划线  任意字母下划线  @  任意字母  .任意字母（2-5位）  .任意字母（2-5位）
\w{3,}  (\.\w+)*  @ [A-z0-9]+    (\.[A-z]{2,5}){1,2}

*/
var emailReg = /^\w{3,}(\.\w+)*@ [A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
var email = "abc.hello@163.com";
console.log(emailReg.test(email)); //false