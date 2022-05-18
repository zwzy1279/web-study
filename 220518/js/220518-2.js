/*//创建一个构造函数
function MyClass() {

}

//向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

var mc = new MyClass();
console.log(mc.name); //我是原型中的名字

//使用in检查对象中是否含有某一个属性时，如果对象中没有但是原型中有，也会返回true
console.log("name" in mc); //true


//可以使用对象hasOwnProperty()来检查自身中是否含有该属性
console.log(mc.hasOwnProperty("name")); //false
console.log(mc.hasOwnProperty("hasOwnProperty")); //false
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty")); //false

/*原型对象也是原型，所以他也有原型
当我们使用 一个对象的属性或者方法时，会先在自身中寻找
自身中如果有，则直接使用
如果没有则去原型对象中寻找，如果原型对象中有则使用
如果没有去原型的原型中寻找,直到找到object原型
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty")); //true*/

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
//创建一个Person实例
var per = new Person("孙悟空", 18, "男");
console.log(per); //Person {name: '孙悟空', age: 18, gender: '男'}

//当我们直接在页面中打印一个对象时，事实上是输出的对象的toString()方法的返回值
var result = per.toString();
console.log("result=" + result); //result=[object Object]
console.log(per.__proto__.__proto__.hasOwnProperty("toString")); //true


/*垃圾回收,垃圾过多会导致程序过慢，所以需要一个垃圾回收的机制，来处理产生的垃圾
当一个对象没有任何变量或者属性来对他进行引用，此时我们将永远无法操作该对象
此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行过慢
所以这种垃圾必须进行处理，如何处理
我们需要做的只是将不再使用的对象设置成null即可
*/