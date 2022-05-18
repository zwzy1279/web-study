//创建数组对象
var arr = new Array();

//使用typeof检查会返回一个object
//console.log(typeof arr);

/*向数组中添加元素
语法:数组[索引]=值
*/
arr[0] = 10;
arr[1] = 20;
console.log(arr); //[10,20]

/*读取数组中的元素
语法：数组[索引]
如果读取不存在的索引，他不会报错而是返回undefined
*/
console.log(arr[1]); //20

/*获取数组中有几个元素（长度）
可以使用length
语法：数组.length
对于连续的数组，使用length可以获取到数组的最大长度（元素的个数）
对于非连续的数组，使用length会获取到数组的最大索引+1
  尽量不要创建非连续
*/
console.log(arr.length); //2
//arr[100] = 32;
//console.log(arr.length);//101

/*
arr.length = 10;
console.log(arr);//[10, 20, 空 ×8]

arr.length = 1;
console.log(arr);//[10]
修改length
如果修改的length大于原长度，则多出部分会空出来
如果修改的length小于原长度,则多出的元素会被删除*/

/*向数组的最后一个位置添加元素
语法：数组[数组.length]=值*/
arr[arr.length] = 20;
arr[arr.length] = 30;
console.log(arr); //[10, 20, 20, 30]