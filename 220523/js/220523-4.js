window.onload = function() {
    //查找#bj节点
    //什么时候查找呀，就是单击按钮出现查找
    //所以首先为id为btn01绑定响应函数
    var btn01 = document.getElementById("btn01");
    btn01.onclick = function() {
        //alert("hello");
        //查找#bj节点
        var bj = document.getElementById("bj");
        //alert(bj);
        //打印bj
        //innerHTML  通过这个属性可以获取到元素内部的HTML代码
        alert(bj.innerHTML);
    }


    //查找所有li节点
    //为id为btn02的按钮绑定一个单机响应函数
    var btn02 = document.getElementById("btn02");
    btn02.onclick = function() {
        //查找所有li节点
        //getElementsByTagName()可以根据标签名来获取一组元素节点对象
        //这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中

        var lis = document.getElementsByTagName("li");
        //打印lis
        //alert(lis);//[object HTMLCollection]

        //变量lis
        //for (var i = 0; i < lis.length; i++) {
        //  alert(lis[i].innerHTML);
        //}
    }


    //查找所有name=gender节点
    //为id为btn03的按钮绑定一个单击相应函数
    var btn03 = document.getElementById("btn03");
    btn03.onclick = function() {
        //查找所有name=gender节点
        var inputs = document.getElementsByName("gender");
        //alert(inputs.length);//2

        for (var i = 0; i < inputs.length; i++) {
            //alert(inputs[i].innerHTML);//无显示
            //因为innerHTML用于获取元素内部的HTML代码的
            //对于自结束标签，这个属性是没有意义的

            //如果需要读取元素节点属性
            //直接使用  元素.属性名
            //例子：元素.id  元素.name  元素.value
            //注意：class属性不能采用这种方式
            //读取class属性时需要使用元素.className
            alert(inputs[i].value);
            //alert(inputs[i].className);
        }
    }



};




//查找#city下所有li节点
//返回#city的所有子节点</button></div>
//查找#phone的第一个子节点</button></div>
//返回#bj的父节点</button></div>
//返回#android前一个兄弟节点</button></div>
//读取#username的value属性值 
//设置#username的value属性值
//返回#bj的文本值