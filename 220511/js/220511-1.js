//方式一：
/*
document.write("*****</br>");
document.write("*****</br>");
document.write("*****</br>");
document.write("*****</br>");
document.write("*****</br>");
*/ //当要输出很多行时就有问题了

/*方式二：
for (var i = 1; i <= 5; i++) {
    document.write("*****</br>");
}//这个for循环执行几次，图形的高度就是多少，可以用来控制高度
//一个新的问题，高度灵活，宽度不灵活，如果宽度所需要的*太多了呢
*/


/*for (var i = 1; i <= 5; i++) {
    document.write("*");
    document.write("*");
    document.write("*");
    document.write("*");
    document.write("*");
    document.write("*");//也来一个for循环
    document.write("</br>");
}*/
//方式三：
/*
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        document.write("*");
    }
    document.write("</br>");
}
//外部循环执行一次，内循环执行五次，五次一换行
//内层循环决定图形的宽度
//空格用&nbsp
*/

/*
// 输出直角三角形
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < i+1; j++) {
        document.write("*");
    }
    document.write("</br>");
}
*      1个*   j<1   i=0
**      2      2     1
***     3      3    2
****    4      4     3
*****   5      5     4
*/

/*
//倒直角三角形
for (var i = 1; i <= 5; i++) {
    //for (var j = 5; j >= i; j--) 
    for (var j = 1; j <= 6 - i; j++) {
        document.write("*");
    }
    document.write("</br>");
}
//或者for (var j = 1; j <=6-i;j++)
*/


//打印九九乘法表,把他想象成一个图形
/*
1*1=1
1*2=2  2*2=4
1*3=3  2*3=6  3*3=9
....*/
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        var k = i * j;
        //document.write(j + "*" + i + "=" + k + "&nbsp" + "&nbsp");
        document.write("<span>" + j + "*" + i + "=" + k + "</span>");
    } //要注意的是，i是宽，j是高度
    document.write("</br>");
}




//打印1-100之间的所有质数
for (var i = 2; i <= 100; i++) {
    var flag = true;
    for (var a = 2; a < i; a++) {
        if (i % a == 0) {
            // alert("不是质数");
            flag = false;
        }
    }
    if (flag) {
        //alert("是质数");
        console.log(i);
    }

}


//找质数
/*
var flag = true;
var n = prompt("请输入一个数：");
if (n > 100 || n < 0 || isNaN(n)) {
    alert("输入错误");
} else {
    for (var a = 2; a < n; a++) {
        if (n % a == 0) {
            alert("不是质数");
            flag = false;
        }
    }
    if (flag) {
        alert("是质数");
    }
}*/