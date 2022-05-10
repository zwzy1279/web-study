/*var a = prompt("请输入a的值：");
switch (a) {
    case "one":
        console.log("1");
        break;
    case "two":
        console.log("2");
        break;
        dafault: console.log("error");
        break;
}*/

/*var score = prompt("请输入score:");
switch (score / 10) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
        console.log("合格");
        break;
    default:
        console.log("不合格");
        break;
}*/
var score = prompt("请输入score:");

switch (true) {
    case score >= 60:
        console.log("合格");
        break;
    default:
        console.log("不合格");
        break;
}