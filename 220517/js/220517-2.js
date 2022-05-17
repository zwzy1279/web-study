/*
//创建一个对象
var obj = {
    name: "孙悟空",
    age: 18,
    gender: "男",
    sayName: function() {
        alert(this.name);
    }
};
obj.sayName(); //孙悟空

var obj2 = {
    name: "猪八戒",
    age: 28,
    gender: "男",
    sayName: function() {
        alert(this.name);
    }
};
obj2.sayName(); //猪八戒
*/
/*
//麻烦，需要大批复制，有大量重复性代码，提取出来放在函数方法里，想要就调用
//使用工厂方法创建对象，使用该方法可以大批量创建对象
function createPerson() {
    //创建一个新的对象
    var obj = new Object();

    //向对象中添加属性
    obj.name = "孙悟空";
    obj.age = 18;
    obj.sayName = function() {
        alert(this.name);
    };
    //obj.sayName();//孙悟空

    //将新的对象返回
    return obj;
}
var obj2 = createPerson();
console.log(obj2);//{name: '孙悟空', age: 18, sayName: ƒ}


function createPerson(name, age) {
    //创建一个新的对象
    var obj = new Object();

    //向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.sayName = function() {
        alert(this.name);
    };
    //obj.sayName();//孙悟空

    //将新的对象返回
    return obj;
}
var obj2 = createPerson("猪八戒", 28);
console.log(obj2); //{name: '猪八戒', age: 28, sayName: ƒ}*/

//创建一个狗对象
/*
function createDog(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function() {
        alert(this.name);
    };
    return obj;//别忘了
}
var obj2 = createDog("狗", 3);
console.log(obj2);//name: '狗', age: 3, sayName: ƒ}
/*使用工厂方法创建的对象，使用的构造函数都是Object
所以创建的对象都是Object这个类型
就导致我们无法区分出多种不同类型的对象*/


/*创建构造函数
构造函数就是一个普通的函数，创建方式和普通函数没有区别
不同的是构造函数习惯上首字母大写
构造函数和普通函数的区别就是调用函数方式的不同
普通函数是直接调用，而构造函数需要使用new关键字来调用

构建函数的执行流程
1.立刻创建一个新的对象
2.将新建的对象设置为函数中的this,在构造函数中可以使用this来引用新建的对象
3.逐行执行函数中的代码
4.将新建的对象做回返回值返回

使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一类

*/
/*又写死了
function Person() {
    //alert(this);//将新建的对象设置为函数中的this,就是per
    this.name = "孙悟空";
    this.sayName=function(){
        alert(this.name);
    }
}
var per = new Person(); //立刻创建一个新的对象
console.log(per);//Person {name: '孙悟空'}*/

/*
function Person(name) {
    //alert(this);//将新建的对象设置为函数中的this,就是per
    this.name = name;
    this.sayName = function() {
        alert(this.name);
    }
}
var per = new Person("玉兔精"); //立刻创建一个新的对象
console.log(per); //Person {name: '玉兔精'}

//使用instanceof可以检查一个对象是否是一个类的实例
//对象 instanceof 函数
console.log(per instanceof Person); //true*/

//创建一个Person函数
/*目前我们的方法是在构造函数内部创建的，也就是构造函数每执行一次就会创建一个新的sayName
 
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    //向对象中添加一个方法
    this.sayName = function() {
        alert("我是" + this.name);
    };
}
var per = new Person("孙悟空", 18, "男");
var per2 = new Person("猪八戒", 28, "男");
per.sayName(); //我是孙悟空
per2.sayName(); //我是猪八戒

//这两个是同一个吗
console.log(per.sayName == per2.sayName);//false,不是一个

//学校一万个人，给每个人建一个厕所浪费内存空间，方法一样，让他们共享一个，见两个一男一女即可
*/

//将sayName方法在全局作用域中定义
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    //向对象中添加一个方法
    this.sayName = fun;
}
//将sayName方法在全局作用域中定义,提高性能
function fun() {
    alert("我是" + this.name);
};
var per = new Person("孙悟空", 18, "男");
var per2 = new Person("猪八戒", 28, "男");
per.sayName(); //我是孙悟空
per2.sayName(); //我是猪八戒
//这两个是同一个吗
console.log(per.sayName == per2.sayName); //true