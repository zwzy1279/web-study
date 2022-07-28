/*
创建对象的方法
如何创建对象
*/



/*
方法一：Object 构造函数模式
套路：首先先创建一个空的Object对象，在动态添加属性/方法
使用场景：起初不确定对象内部数据
问题：语句太多
*/
var a=new Object();
a.name='Tom';
a.age=18;
a.setName=function(name){
   this.name=name
}
a.setName('Jerry');

console.log(a.name);//Jerry


/*
方法二：对象字面两模式
套路：使用{}创建对象，并同时指定上属性/方法
使用场景：起始时内部对象是确定的
问题：如果创建多个对象，有重复性代码，var b,c,d,e,……
*/
var b={
    name:"Amy",
    age:19,
    setName:function(name){
        this.name=name;
    }
}
b.setName("Bob");
console.log(b.name);//Bob


/*
方法三：工厂模式
套路：通过工厂函数动态创建对象并返回  重点：通过函数  要返回
使用场景：需要创建多个对象
问题：对象都是Object类型，没有具体的类型
*/
function bigFactory(name,price){
    var obj={
        name:name,
        price:price,
        setName:function(name){
            this.name=name;
        }
    }
    return obj;
}

//创建两个人
var p1=bigFactory('Duola',16);
var p2=bigFactory('Zip',19);
//p1();
//p2();

/*
方法四：自定义构造函数模式   重点：构造函数
套路：自定义构造函数，通过new创建函数对象
使用场景：需要创建能够确定具体类型的对象
问题：每个对象都有相同的数据，浪费内存
*/
function Person1(name,price){
    this.name=name,
    this.price=price,
    this.setName=function(name){
this.name=name;
    }

}
var p3=new Person1('Amy',20000);
var p4=new personalbar('Jack',12000);
console.log(p3.name,p4.name);