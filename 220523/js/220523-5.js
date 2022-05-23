window.onload = function() {
    /*点击按钮切换图片
     */

    //获取两个按钮
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    //要切换图片就是要修改img的src属性
    var img = document.getElementsByTagName("img")[0];


    //创建一个数组，用来保存图片的途径
    var imgArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", ]


    //创建一个变量，用来保存当前正在显示的图片的索引
    var index = 0;

    //设置提示文字
    //获取id为info的p元素
    var info = document.getElementById("info");
    //info.innerHTML = "一共" + imgArr.length + "张图片,当前是第" + index + 1 + "张";
    //info.innerHTML = "一共" + imgArr.length + "张图片,当前是第" + (index + 1) + "张"

    //分别为两个按钮绑定单击响应函数
    prev.onclick = function() {
        //alert("上一张");
        //img.src = "images/1.jpg";写死了
        //img.src = imgArr[0];依旧写死了

        /*切换到上一张，索引自减*/
        index--; //单纯自建无判断，索引数又被限制到

        //判断index是否小于0
        if (index < 0) {
            // index = 0;////但是当我们点到第1张或者第5张我们想让它循环呢
            //让他等于最后一张
            index = imgArr.length - 1;
        }
        img.src = imgArr[index];

        //当我点击按钮以后，重新设置信息
        info.innerHTML = "一共" + imgArr.length + "张图片,当前是第" + (index + 1) + "张";

    }
    next.onclick = function() {
        //alert("下一张");
        //切换图片就是修改img的src属性
        //要修改一个元素的属性，就是  元素.属性=属性值
        //img.src = "images/2.jpg";写死了
        //img.src = imgArr[1];依旧写死了

        /*切换到上一张，索引自增*/
        index++;
        //判断index是否大于于5
        if (index > 4) {
            //index = imgArr.length-1;
            index = 0;
        }
        img.src = imgArr[index];

        //当我点击按钮以后，重新设置信息
        info.innerHTML = "一共" + imgArr.length + "张图片,当前是第" + (index + 1) + "张";

    }
}