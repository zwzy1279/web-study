window.onload = function() {
    //创建一个“广州”节点，添加到#city下
    myClick("btn01", function() {
        //alert("hello");

        //创建广州节点<li>广州</li>
        //<li>是元素节点，广州是文本节点


        //创建元素节点
        /*ducument.createElement();
        可以用于创建一个元素节点对象
        他需要一个标签名作为参数，将会跟根据该标签名创建元素节点对象
        并将创建好的对象作为返回值返回
        */
        var li = document.createElement("li");
        //alert(li);

        //创建广州文本节点
        /*document.createTextNode()
        可以用来创建一个文本节点对象
        需要将文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
        */
        var gzText = document.createTextNode("广州");
        alert(gzText);

        //将gzText添加到里，设置为li子节点
        /*
        appendChild()
        向一个父节点中添加一个新的子节点
        用法：父节点.appendChild(子节点)
        */
        li.appendChild(gzText);

        //将广州添加到city下
        //获取id为city的节点
        var city = document.getElementById("city");

        //将广州添加到city下
        city.appendChild(li);

    });





    //将“广州”节点插入到“#bj"前面
    myClick("btn02", function() {
        //创建一个元素节点
        var li = document.createElement("li");

        //创建一个文本节点
        var gzText = document.createTextNode("广州");

        //将广州文本节点添加到元素li节点
        li.appendChild(gzText);

        //获取id为bj节点，广州的兄弟节点
        var bj = document.getElementById("bj");
        //获取city节点，父节点
        var city = document.getElementById("city");
        ////将“广州”节点插入到“#bj"前面
        city.insertBefore(li, bj);

        /*
        insertBefore()
        可以在指定的子节点前插入新的子节点
        语法：
        父节点.insertBefore(新节点，旧节点);
        */

    });




    //使用“广州”节点替换#bj节点
    myClick("btn03", function() {
        //创建一个广州元素节点
        var li = document.createElement("li");
        var gzText = document.createTextNode("广州");
        li.appendChild(gzText);

        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        /*
        replaceChild()
        可以使用指定的子节点替换已有的子节点
        语法：父节点.replaceChild(新节点,旧节点)；
        */
        city.replaceChild(li, bj);

    })




    //删除#bj节点 
    myClick("btn04", function() {
        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        /*
        removeChild()
        可以删除一个子节点
        语法：父节点.removeChild(子节点)

              子节点.parentNode.removeChild(子节点)
        */
        //city.removeChild(bj);
        bj.parentNode.removeChild(bj);
    })





    //读取#city内的HTML代码
    myClick("btn05", function() {
        var city = document.getElementById("city");
        alert(city.innerHTML);
    })


    //设置#bj内的HTML代码
    myClick("btn06", function() {
        var city = document.getElementById("city");
        bj.innerHTML = "揭阳";
    })





    //创建一个“广州”节点，添加到#city下
    myClick("btn07", function() {
        var city = document.getElementById("city");
        /*
        使用innerHTML也可以完成DOM的增改删的相关操作
        一般我们会两种方式结合使用
        */
        //city.innerHTML += "<li>广州</li>";

        //结合的方式
        var li = document.createElement("li");
        //向li中设置文本
        li.innerHTML = "广州";
        city.appendChild(li);
    })


};

function myClick(idStr, fun) {
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}