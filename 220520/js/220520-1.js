var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
console.log(arr.slice(0, 1)); //['孙悟空']
console.log(arr.slice(0, 2)); //['孙悟空', '猪八戒']
console.log(arr.slice(1)); //['猪八戒', '沙和尚', '唐僧', '白骨精']
console.log(arr.slice(2, -2)); //['沙和尚']
console.log(arr.slice(1, 3)); //['猪八戒', '沙和尚']
//1.截取开始的位置的索引，包含开始索引
//2.截取结束的位置的索引，不包含结束索引


//console.log(arr.splice(0, 2)); //['孙悟空', '猪八戒']
//console.log(arr); //['沙和尚', '唐僧', '白骨精']

//console.log(arr.splice(1, 3));// ['猪八戒', '沙和尚', '唐僧']并将被删除的元素 作为返回值返回

//参数：
//第一个：表示位置的索引
//第二个：表示删除的数量
//第三个及以后：可以传递一些新的元素，这些元素会自动插入到开始位置索引前边

console.log(arr.splice(1, 1, "牛魔王", "铁扇公主")); //['猪八戒']
console.log(arr); // ['孙悟空', '牛魔王', '铁扇公主', '沙和尚', '唐僧', '白骨精']
//删除索引1开始一个元素，往删除后前面加入牛魔王，铁扇公主

/*
//创建一个数组
var arr2 = [1, 2, 3, 2, 1, 3, 4, 2, 5];

//去除数组中重复的数字
//获取数组中的每一个元素

for (var i = 0; i < arr2.length; i++) {
    for (var j = i + 1; j < arr2.length; j++) {//获取当前元素后的所有元素，不是1
    //判断两个元素是否相等
        if (arr2[j] == arr2[i]) {
            //如果想等则证明出现了重复的元素，则删除j对应的元素
            arr2.splice(j, 1);
            //console.log(arr2.slice(j, 1));
        }
    }
}
console.log(arr2);//[1, 2, 3, 4, 5]
*/

//但是，多了一个2就不行了
//创建一个数组
var arr2 = [1, 2, 3, 2, 2, 2, 1, 3, 4, 2, 5];

//去除数组中重复的数字
//获取数组中的每一个元素

for (var i = 0; i < arr2.length; i++) {
    for (var j = i + 1; j < arr2.length; j++) { //获取当前元素后的所有元素，不是1
        //判断两个元素是否相等
        if (arr2[j] == arr2[i]) {
            //如果想等则证明出现了重复的元素，则删除j对应的元素
            arr2.splice(j, 1);
            //当删除了当前j所在元素以后，后边的元素会自动补位
            //此时将不会在比较这个元素，我需要再比较一次j所在位置的元素

            //既然删除后j后面的会自动补位，那么我们就让j自减
            j--;
            /*if ((arr2[j] == arr2[i])) {
                arr2.splice(j, 1);
            }但是这样当出现2个以上相同的数字又不行了，既然删除后j后面的会自动补位，那么我们就让j自减*/
        }
    }
}
console.log(arr2); //[1, 2, 3, 4, 5]//后面的下一个2进行补替，出现漏网之鱼



var arr3 = ["孙悟空", "猪八戒", "沙和尚"];
var arr4 = ["白骨精", "玉兔精", "蜘蛛精"];
var arr5 = ["二郎神", "太上老君", "玉皇大帝"];
console.log(arr3.concat(arr4)); //['孙悟空', '猪八戒', '沙和尚', '白骨精', '玉兔精', '蜘蛛精']

console.log(arr3); //['孙悟空', '猪八戒', '沙和尚']
console.log(arr4); //'白骨精', '玉兔精', '蜘蛛精']
console.log(arr3.concat("白龙马")); //['孙悟空', '猪八戒', '沙和尚', '白龙马']

//join()可以将数组转为字符串
console.log(arr3.join()); //孙悟空,猪八戒,沙和尚
//该join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符
console.log(arr3.join("***")); //孙悟空***猪八戒***沙和尚

console.log(arr3.reverse()); // ['沙和尚', '猪八戒', '孙悟空']

var arr6 = ["c", "s", "d", "a", "z", "w"];
console.log(arr6.sort()); //['a', 'c', 'd', 's', 'w', 'z']
var arr7 = [1, 3, 2, 11, 5];
console.log(arr7.sort()); //[1, 11, 2, 3, 5]
//我们可以在sort()添加一个回调函数，来制定排序规则
//回调函数中需要定义两个形参
//浏览器将会分别使用数组中的元素作为实参去调回调函数
arr7.sort(function(a, b) {
    /*
    //前面的大
    if (a > b) {
        return 1;
    } //返回一个大于0的数，则结果位置会转换
    else if (a < b) {
        return -1;
    } //返回一个小于0的数，则结果位置不会调换
    else {
        return 0;
    } //返回一个等于0的数，则结果也不会调换
    但这样感觉太麻烦*/
    //直接
    return a - b; //升序排列
    //return b-a;//降序
})
console.log(arr7); //[1, 2, 3, 5, 11]

/*function fun() {
    alert(this.name);
}
var obj = { name: "孙悟空" };
fun.call(obj); //孙悟空*/

function fun() {
    console.log(arguments.length); //2,实参的个数
    console.log(arguments[1]); //true,第一个实参
    //console.log(arguements.callee == fun);
}
fun("hello", true);