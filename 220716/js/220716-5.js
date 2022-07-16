/*
jsonjs的对象只有js自己认识，其他的语言不认识，
json就是一个特殊的字符串，这个字符串可以被人以语言识别，
并且可以转换为任意语言中的对象，json在开发中主要用来数据的交互，
json,js格式一样，只不过json字符串的属性名必须家双引号


json分类：
对象{}
数组[]

json允许的值
字符串  数值 布尔值 null 对象 数组
*/
var obj='{"name":"孙悟空","gender":"男"}';//外面加上单引号，成为string
alert(typeof(obj));
var arr='[1,2,3,"hello",true]';//同样外面加上单引号，成为string，才能被任何语言识别
alert(typeof(arr));
/*
parse()可以将json字符串转换成js对象
他需要一个json字符串作为参数，会将该字符串转换成js对象并返回
*/
var change=JSON.parse(obj);
console.log(change);//object
console.log(typeof(change));

/*
json对象转js
JSON.stringify()
需要一个js对象作为参数，会返回一个json
*/
var rechange=JSON.stringify(change);
console.log(typeof(rechange));//string