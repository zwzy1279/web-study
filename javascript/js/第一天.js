// JavaScript Document
var name="hello";
	console.log(name);
	alert(Math.PI);
alert("YZ");
console.log('hello'.length);
console.log('hello'.length);
console.log("hello".charAt(0));
console.log("hello world".replace("world","China"));
console.log("hello world".toUpperCase());
var x;
x=3+4+"7";
console.log(x);
let y=18;
y=y-2;
console.log(y);
console.log("分界线");
var age=18;
for (let i=0;i<5;i++){
	age++;
	console.log(age);
}
console.log("分界线");
var ygn=22;
var marry=(ygn >= 22) ? "yes" : "no";
console.log(marry);
console.log('分界线');
var animals="tiger";
switch(animals){
	case "tiger":console.log("tiger");break;
		case "dog":console.log("dog");break;
		case "rabbit":console.log("rabbit");break;
	default:console.log("error");
}
console.log("分界线");
var struct;
struct ={
	name:"yuanguoning",
	age:"22",
	sex:"n",
};
console.log(struct);
console.log(struct.name);
var a=new Array();
a[0]="hello";
a[1]="world";
console.log(a);
var b=[];
b=["dog","cat","tiger"];

for(let j=0;j<b.length;j++){
	console.log(b[j]);
}
b.shift( );
//函数
console.log(b);var g=1;
function add(p){
	g+=p;
}
add(1);
console.log(g);function text(){
    return 3*4*5;
}
console.log('text=',text());
function add2(){
    var begin=1,end=10,sum=0;
    for(begin;begin<=end;begin++)
        sum+=begin;
    return sum;
}
console.log('text3=',add2())
function add(num){
    if(num>1)
        return num=num+add(num-1);
    else
        return num;
}
console.log('text2=',add(3));
function add3(begin,num){
    if(num>begin)
        return num + add3(begin,num-1)
     else 
        return begin;
    
    return num>begin?num + add3(begin,num-1):begin;
}
console.log('text4=',add3(1,3));





