/*var a = 1;
while (true) {
    document.write(a++ + "<br/>");
    if (a > 10) { break; } //1-10
}*/
/*var a = 1;
console.log("------------------");
do {
    document.write(a++ + "<br/>");
} while (a <= 10);//1-10*/

/*
//已知年利率为5%，问从1000元增长到5000元需要多少年
var money = 1000;
//计数器
var count = 0;
while (money < 5000) {
    money *= 1.05; //每执行一次，就是一年
    count++;
}
console.log(count);//33
*/

//当输入成绩不合法时，自动进入重新输入
/*var score = prompt("请输入分数：");
while (score > 100 || score < 0 || isNaN(score)) {
    alert("请输入有效信息");
    var score = prompt("请输入分数：");
}
console.log(score);*/
//或者
/*while (true) {
    var score = prompt("请输入分数：");
    if (score >= 0 && score <= 100) {
        break;
    }
}
console.log(score);*/


/*for (var a = 1; a <= 10; a++) {
    console.log(a);//1-10
}*/

/*
//打印1-100之间的奇数之和
var sum = 0;
//打印1-100的数
for (var i = 1; i <= 100; i++) {
    //判断i是不是为奇数
    if (i % 2 != 0) {
        //console.log(i);
        //将奇数相加起来
        sum += i;
    }

}
console.log(sum);//2500*/

/*
//打印1-100之间所有7的倍数的个数及总和
var sum = 0;
var count = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        count++;
        //console.log(i);
        sum += i;

    }
}
console.log(count);//14
console.log(sum); //735
*/

/*
//水仙花数是指一个三位数，它的每个位上的数字的数字的3次幂之和等于它本身
//例如：1^3+5^3+3^3=153，请打印所有水仙花数
for (var i = 100; i < 1000; i++) {
    var bai = parseInt(i / 100);
    var shi = parseInt((i - bai * 100) / 10);
    var ge = i % 10;
    if (bai * bai * bai + shi * shi * shi + ge * ge * ge == i) {
        console.log(i);
    }
}*/


//在页面中接收一个用户输入的数字，并判断该数是否是质数
//质数：只能被1和他本身整除的数，1不是质数也不是合数，指数必须是大于1的数
var num = prompt("请输入一个数");
//判断
if (num < 1) {
    alert("输入错误");
} else {
    //创建一个变量来保存当前的数的状态
    //默认当前值是num是质数
    var flag = true;

    //判断num是否是一个质数
    //获取2-num之间的数
    for (var i = 2; i < num; i++) {
        //console.log(i);
        //判断num是否能被i整除
        //逆向思维,正难则反
        if (num % i == 0) {
            //如果num能被i整除，说明num一定不是质数
            //设置flag为false
            flag = false;
        }
    }
    //如果num是质数进行输出
    if (flag) {
        alert(num + "是质数");
    } else {
        alert("不是质数");
    }
}