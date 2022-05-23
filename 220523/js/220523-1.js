//dom通过js 操作html 网页的
//1. 先通过获取对象，想干嘛就干嘛
//2.对象离不开模型
//浏览器已经给了一个对象了，就是文档
//浏览器已经为我们提供文档节点对象，这个对象就是window属性
//可以在页面中直接使用，文档节点代表整个网页
//把葫芦娃爷爷先抓住，那哥七个就都过来了

/*<script>标签写在了body里
 */
//console.log(document);确实有获取到document这个对象
/*浏览器已经为我们提供文档节点对象，这个对象就是window属性
可以在页面中直接使用，文档节点代表整个网页*/


//那我们想获取button对象呢
//我们看到button里有id属性
//获取button对象  document.getElmentById("btn");
var a = document.getElementById("btn");
console.log(a); //<button id="btn">我是一个按钮</button>
//console.log(document.getElementById("btn"));

//修改按钮里的文字：要么调方法，要么改属性
//console.log(btn.innerHTML);//我是一个按钮
btn.innerHTML = "I am a button"; //<button id="btn">I am a button</button>