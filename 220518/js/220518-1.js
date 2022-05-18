/*放全局作用域中容易被污染，一个项目不止一个人开发，万一有人命名的函数同你的函数名一样，那么我的就被覆盖掉了
那怎么办呢
我们所创建的每一个函数，解析器都会像函数最中添加一个属性prototype
这个prototype属性对应着一个对象，这个对象就是我们所谓的原型对象prototype
如果函数作为普通函数调用prototype没有任何作用
当函数通过构造函数调用时，它所创建的对象mc中都会出现一个隐含的属性
  指向构造函数的原型对象，我们可以通过__pro__来访问该属性
*/
function MyClass() { //MyClass为函数对象

}

/*function YouClass() {

}
console.log(MyClass.prototype == YouClass.prototype); //false*/


var mc = new MyClass(); //mc为通过MyClass创建的对象
var mc2 = new MyClass();

//var yc = new YouClass();
console.log(mc.__proto__ == MyClass.prototype); //true
/*原型对象就相当于一个公共的区域，所有同一类的实例都可以访问到这个原型对象MyClass.prototype
我们可以将对象中共有的内容，统一设置到原型对象中*/
//向MyClass原型对象中添加属性a*/
MyClass.prototype.a = 123; //换句话说，mc没有添加a，但是console.log(mc.a)有123，它跑去原型对象里去找了
console.log(mc.a); //123
/*当我们访问对象里的一个属性或者方法时，它会先在对象自身中寻找，如果有则直接使用
如果没有则会去原型对象中寻找，如果找到则直接使用*/
mc.a = "我是mc里的a";
console.log(mc.a); //我是mc里的a
console.log(mc2.a); //123

//向MyClass中添加方法
MyClass.prototype.sayHello = function() {
    alert("Hello");
}
mc.sayHello(); //say.Hello只有一个但是所有对象：mc，mc2都可以绑定到，不会污染到全局作用域

console.log(mc.sayHello); //ƒ () {alert("Hello");}





//将sayName方法在全局作用域中定义
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    //向对象中添加一个方法
    //this.sayName = fun;
}
/*//将sayName方法在全局作用域中定义,提高性能
function fun() {
    alert("我是" + this.name);
};*/
Person.prototype.sayName = function() {
    alert("我是" + this.name);
}
var per = new Person("孙悟空", 18, "男");
var per2 = new Person("猪八戒", 28, "男");
per.sayName(); //我是孙悟空
per2.sayName(); //我是猪八戒
//这两个是同一个吗
console.log(per.sayName == per2.sayName); //true
/*以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中
这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了
*/