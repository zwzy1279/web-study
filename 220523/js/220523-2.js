//获取按钮对象
var btn = document.getElementById("btn");
console.log(btn);

/*可以为按钮的对应事件绑定处理函数的形式来响应事件(绑定函数)
这样当事件被触发时，其对应的函数将会被调用
 */

// 绑定一个单击事件
//像这种当事件被触发时，其对应的函数将会被调用
btn.onclick = function() {
    alert("你还点");
}

//文档的加载