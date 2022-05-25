window.onload = function() {
    //获取body标签
    //var body = document.getElementsByTagName("body");//HTMLCollection [body]
    //var body = document.getElementsByTagName("body")[0];//整一个body
    /*
    在document中有一个属性body，他保存的是body的引用
    */
    var body = document.body;
    console.log(body);




    /*
    document.documentElement保存的是html根标签
    */
    var html = document.documentElement;
    console.log(html);

    /*
    document.all代表页面中所有元素
    */
    var all = document.all;
    console.log(all); //8个[html, head, meta, meta, meta, title, body, script, viewport: meta]

    console.log(all.length); //8
    /*for (var i = 0; i < all.length; i++) {
        console.log(all[i]);
    }*/

    //或者
    all = document.getElementsByTagName("*"); //*表示所有





    /*
    根据元素的class属性查询一组元素节点对象，但该方法不支持ie8以下
    */
    var box1 = document.getElementsByClassName("box1");
    console.log(box1);


    //获取页面中所有div
    var divs = document.getElementsByTagName("div");
    console.log(divs.length); //2

    //获取class为box1中的所有div
    //.box1 div

    //需要一个选择器的字符串作为参数，可以根据一个css选择器来查询一个元素节点对象
    /*document.querySelector()
    使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个
    */
    var divs = document.querySelector(".box1 div");
    // console.log(divs);//<div></div>

    var box1 = document.querySelector(".box1");
    console.log(box1); //<div class="box1">…</div>

    /*
    document.querySelectorAll()
    该方法和querySelector()用法类似，不同的是他会将符合的元素封装到一个数组返回
    */
    var box1 = document.querySelectorAll(".box1");
    console.log(box1.length); //2
}