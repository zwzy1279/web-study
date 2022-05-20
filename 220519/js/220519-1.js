/*
//创建一个数组
var arr = new Array();
arr[0] = 123;
//console.log(arr);
//读取
console.log(arr[0]); //123

//使用字面量来创建数组(常用)
//语法：[]   var arr=[];
//使用字面量来创建数组，可以在创建时就指定数组中的元素
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr); //[1, 2, 3, 4, 5, 6]
console.log("arr[3]=" + arr[3]); //arr[3]=4

//使用构造函数来创建数组时，也可以同时添加元素，将要添加的元素构造函数的参数传递
//函数之间是用逗号隔开（少用）
var arr2 = new Array(7, 8, 9, 10, 11, 12);
console.log("arr2[2]=" + arr2[2]); //arr2[2]=9

arr = [10]; //创建一个数组，数组中只有一个元素10
console.log(arr.length); //1

arr2 = new Array(10); //创建一个数组，长度为10，所以一般创建数组要采用字面量量，而不采用构造函数
console.log(arr2.length); //10

//数组中的元素可以时任意数据类型
arr = ["hello", 1, true, undefined, null];
console.log(arr); //['hello', 1, true, undefined, null
console.log("arr[4]=" + arr[4]); //arr[4]=null

//也可以是一个对象
//创建一个对象
var obj = { name: "孙悟空" };
//往数组中添加元素
arr[arr.length] = obj;
console.log(arr); //['hello', 1, true, undefined, null, {…}]
console.log(arr[arr.length - 1]); //name: '孙悟空'}

arr = ["hello", 1, true, undefined, null, { name: "猪八戒" }];
console.log(arr[arr.length - 1]); //{name: '猪八戒'}

//也可以是一个函数
arr = ["hello", 1, true, undefined, null, { name: "猪八戒" }, function() { alert("也可以是一个函数") }];
console.log(arr[arr.length - 1]); //{ alert("也可以是一个函数") }

//数组里面再放数组
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr); //[Array(3), Array(3), Array(3)]
console.log("arr[1]=" + arr[1]);//arr[1]=4,5,6
*/

/*
//数组的方法

//创建一个数组
var arr = ["孙悟空", "猪八戒", "沙和尚"];

//push()
//该方法可以向数组的末尾添加一个或者多个元素，并返回数组的新的长度
//可以将要添加的元素作为方法的参数传递
//这样这些元素将会自动添加到数组的末尾
//该方法会将数组新的长度做回返回值返回
var result = arr.push("唐僧");
console.log(arr[arr.length - 1]); //唐僧
console.log(arr); //['孙悟空', '猪八戒', '沙和尚', '唐僧']

console.log("result=" + result); //result=4,返回添加上唐僧后的长度

//pop()可以删除数组中最后一个元素，并将被删除的元素最为返回值返回
//调用一次删除一个

arr.pop();
console.log(arr); //['孙悟空', '猪八戒', '沙和尚']
arr.pop();
console.log(arr); //['孙悟空', '猪八戒']


result = arr.pop(); //又调用一次
console.log(arr); //['孙悟空']
console.log("result=" + result); //result=猪八戒，将被删除的元素返回


//unshift()
//向数组开头添加一个或多个元素，并返回新的数组长度
//向前面插入元素后，其他的元素索引会依次调整
console.log(arr); //['孙悟空']
result = arr.unshift("牛魔王");
console.log(arr); //'牛魔王', '孙悟空'
console.log(result); //2

//shift()
//可以删除数组的第一个元素，并将删除的元素作为返回值返回
console.log(arr);//['牛魔王', '孙悟空']
result = arr.shift();
console.log(arr);//['孙悟空']
console.log("result=" + result);//result=牛魔王
*/

/*
//数组的遍历
//创建一个数组
var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧"];
console.log(arr); //'孙悟空', '猪八戒', '沙和尚', '唐僧']

//所谓的遍历，就是数组中的所有元素都取出来
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

//练习
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
}
//修改Person原型的toString
Person.prototype.toString = function() {
    return "Person[name=" + this.name + ",age=" + this.age + "]";
};
//创建一个Person对象
var per = new Person("孙悟空", 18);
//console.log(per);//Person {name: '孙悟空', age: 18}
var per2 = new Person("猪八戒", 28);
var per3 = new Person("红孩儿", 8);
var per4 = new Person("蜘蛛精", 16);
var per5 = new Person("二郎神", 38);

//将这些per对象放入到一个数组中
var perArr = [per, per2, per3, per4, per5];
//console.log(perArr);//Person, Person, Person, Person, Person]

//创建一个函数，可以将perArr中的满18岁的person提取出来
//然后封装到一个新的数组中并返回
//arr 形参，要提取的数组
function getAdult(arr) {
    //创建一个新的数组
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        /*Person {name: '孙悟空', age: 18}age: 18name: "孙悟空"[[Prototype]]: Object
220519-1.js:144 Person {name: '猪八戒', age: 28}
220519-1.js:144 Person {name: '红孩儿', age: 8}
220519-1.js:144 Person {name: '蜘蛛精', age: 16}
220519-1.js:144 Person {name: '二郎神', age: 38}*/


        //遍历arr，获取arr中Person对象
        var p = arr[i];
        if (p.age >= 18) { //判断Person对象的age是否大于等于18
            newArr.push(p); //如果大于等于18，则将这个对象添加到newArr中
        }
    }

    //将新的数组返回
    return newArr;
}
var result = getAdult(perArr);
console.log(result);
/*Person {name: '孙悟空', age: 18}
1: Person {name: '猪八戒', age: 28}
2: Person {name: '二郎神', age: 38}*/

//除了用for语句作为遍历的工具，还可以用forEach()
//forEach()方法需要一个函数作为参数，像这种函数，由我们创建但是不由我们调用，我们成为回调函数
//数组中有几个函数我们就执行几次，每次执行时，浏览器会遍历到元素
//以实参的形式传递进来，我们可以定义形参，来读取这些内容
//它是由浏览器直接回调的，参数由浏览器直接传过来
/*var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
arr.forEach(function() {
   // console.log("hello");//5个 hello
   //但我们想要的不是执行几次，而是获得数组中的元素

})*/


/*
以实参的形式传递进来，我们可以定义形参，来读取这些内容
浏览器会在回调中穿第三个参数
第一个参数：就是当前正在遍历的元素
第二个参数：就是当前正在遍历的元素的索引
第三个参数：就是正在遍历的数组
var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];*/
arr.forEach(function(a, b, c) {
    console.log("a=" + a);

    console.log("b=" + b);
    console.log("c=" + c);
    /*
    a=孙悟空
    a=猪八戒
    a=沙和尚
    a=唐僧
    a=白骨精*/

})