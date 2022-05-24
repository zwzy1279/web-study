/*定义一个函数，专门用来为指定元素绑定单机响应函数
一样的复制过来，不同的用参数传过来

  参数：
  idStr 要绑定单机响应函数的id属性值
  fun时间的回调函数，单机元素时，该函数会被触发
*/

function myClick(idStr, fun) { //所以首先为id为btn01绑定响应函数
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}

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



    //查找#city下所有li节点
    //获取id为btn04的按钮
    var btn04 = document.getElementById("btn04");
    btn04.onclick = function() {
        //获取Id为city的节点
        var city = document.getElementById("city");

        //查找#city下所有li节点
        var lis = city.getElementsByTagName("li");

        for (var i = 0; i < lis.length; i++) {
            alert(lis[i].innerHTML);
        }

    };


    //返回#city的所有子节点
    var btn05 = document.getElementById("btn05");
    btn05.onclick = function() {
        var city = document.getElementById("city");

        //返回#city的所有子节点
        var cns = city.childNodes;
        //alert(cns.length);//9
        /*
childNodes属性会获取包括文本节点的所有子节点
根据dom标签空白也会被当成节点
注意：在ie8及以下的浏览器中，不会讲空白文本当成子节点，
随意改属性在ie8中会返回4个子元素而其它浏览器9个
    */

        /*
        children属性可以获取当前元素的所有子元素
        */
        var cns2 = city.children;
        alert(cns2.length); //4
    }

    //查找#phone的第一个子节点
    var btn06 = document.getElementById("btn06");
    btn06.onclick = function() {
        var phone = document.getElementById("phone");
        var fir = phone.firstChild;
        //alert(fir);//[object Text]空白

        /*
        firstElementChild获取当前元素的第一个子元素
        但他不支持ie8及以下的浏览器
        尽量不要使用
        */
        fir = phone.firstElementChild;
        alert(fir.innerHTML);
    }


    //返回#bj的父节点
    //又要重新获取绑定函数，大量重复性代码，我们想着用一个函数提取出
    /*定义一个函数，专门用来为指定元素绑定单机响应函数
    一样的复制过来，不同的用参数传过来
    */
    //为btn07的按钮绑定一个单击响应函数
    myClick("btn07", function() {
        //alert("hello");
        //返回#bj的父节点

        //获取bj节点
        var bj = document.getElementById("bj");

        //返回#bj的父节点
        var pn = bj.parentNode;
        // alert(pn.innerHTML);
        /*
        innerText
        该属性可以获取到元素内部的文本内容
        它和innerHTML类似，不同的是它会自动将HTML去除
        */
        alert(pn.innerText);
    })

    //返回#android前一个兄弟节点
    myClick("btn08", function() {
        var and = document.getElementById("android");
        var ps = and.previousSibling;
        //previousElementSibling获取前一个兄弟元素，ie8下不支持
        var pe = and.previousElementSibling;
        alert(pe.innerHTML);
    })

    //读取#username的value属性值 

    //获取id为username的元素neir 
    myClick("btn09", function() {
        var um = document.getElementById("username");
        //读取um的value属性值
        //文本框的value属性值，就是文本框中填写的内容

        alert(um.value);
    });

    //设置#username的value属性值
    myClick("btn10", function() {
        var um = document.getElementById("username");
        um.value = "今天天气真不错";
    });

    //返回#bj的文本值
    myClick("btn11", function() {
        var bj = document.getElementById("bj");
        //alert(bj.innerHTML);
        //alert(bj.innerTEXT);

        //获取bj中的文本节点
        var fc = bj.firstChild;
        alert(fc.nodeValue);
    });
};