/*for (var i = 0; i < 5; i++) {
    console.log(i);//0-4
}*/


/*for (var i = 0; i < 5; i++) {
    console.log(i);
    break;
    //输出0然后跳出当前for循环，无在进行i++
}


for (var i = 0; i < 5; i++) {
    break;
    console.log(i);//无输出
}*/



/*for (var i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
        break; //0 1 2
        //break不对if起作用，对最近for循环起终止作用
    }
}


for (var i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
        continue; //0 1 2 3 4
        
    }
}


for (var i = 0; i < 5; i++) {

    if (i == 2) {
        continue;
    }
    console.log(i); //0 1 3 4
}


for (var i = 0; i < 5; i++) {
    console.log("外循环" + i); //0-4
    for (var j = 0; j < 5; j++) {
        break;//跳出当前最近的for循环
        console.log("内循环" + j);
    }
}



for (var i = 0; i < 5; i++) {
    console.log("外循环" + i); 
    for (var j = 0; j < 5; j++) {
        console.log("内循环" + j); 
        break;//跳出整一层内循环

    }
}*/
/*
0
0

1
0

2
0

3
0

4
0
*/



/*可以为循环语句创建一个语句，来标记当前的循环
使用break语句时，可以在break后面跟着一个label
  这样break将会结束指定循环，而不是最近的循环
label:循环语句   break label
outer:
    for (var i = 0; i < 5; i++) {
        console.log("外循环" + i);
        for (var j = 0; j < 5; j++) {
            console.log("内循环" + j);
            break outer; //跳出整一层外循环

        }
    }
    //0 0
*/

console.log("-----------------");
/*for (var i = 0; i < 5; i++) {

    if (i == 2) {
        continue;
    }
    console.log(i); //0 1 3 4
}*/

/*for (var i = 0; i < 5; i++) {
    console.log("外循环" + i);
    for (var j = 0; j < 5; j++) {
        console.log("内循环" + j);
        continue; //跳出整一层内循环

    }
}

0
0 1 2 3 4 

1
0 1 2 3 4

2
0 1 2 3 4
 
3
0 1 2 3 4

4
0 1 2 3 4
*/

/*for (var i = 0; i < 5; i++) {
    console.log("外循环" + i);
    for (var j = 0; j < 5; j++) {

        continue; //跳出整一层内循环
        console.log("内循环" + j);
    }
}

0
1
2
3
4*/

/*可以为循环语句创建一个语句，来标记当前的循环
使用break语句时，可以在break后面跟着一个label
  这样break将会结束指定循环，而不是最近的循环
label:循环语句   break label*/
/*outer:
    for (var i = 0; i < 5; i++) {
        console.log("外循环" + i);
        for (var j = 0; j < 5; j++) {
            console.log("内循环" + j);
            continue outer; //跳出整一层外循环

        }
    }
    
    0
    0

    1
    0

    2
    0

    3
    0

    4
    0*/

/*
//测试以下程序的性能
//在程序开始执行时，开始计时器
//console.time("计时器名字")
//他需要一个字符串来作为参数
//打印1-100之间的所有质数
console.time("test")
for (var i = 2; i <= 100; i++) {
    var flag = true;
    for (var a = 2; a < i; a++) {
        if (i % a == 0) {
            // alert("不是质数");
            flag = false;
            //一旦进入判断，则说明i不可能是质数了，此时循环再执行没有意义了
            //用break终止循环提速
            //break;
        }
    }
    if (flag) {
        //alert("是质数");
        console.log(i);
    }

}
//终止计时器
//console.timeEnd()用来停止一个计时器，需要一个计时器名字作为参数
console.timeEnd("test");

//有break  2ms
//没有break  5ms
*/

//求质数的改进
for (var i = 2; i <= 100; i++) {
    var flag = true;
    for (var a = 2; a <= Math.sqrt(i); a++) {
        if (i % a == 0) {
            // alert("不是质数");
            flag = false;
            //一旦进入判断，则说明i不可能是质数了，此时循环再执行没有意义了
            //用break终止循环提速
            //break;
        }
    }
    if (flag) {
        //alert("是质数");
        console.log(i);
    }

}
/*36
1 36
2 18
3 12
4 9
6 6
当根号36时，也就是6*6时6之后再不能找到36的因数了
所以判断输入的数去 整除 2到该数的开方即可

//可以通过Math.sqrt()对一个数进行开方
var result=Math.sqrt(数字);
*/