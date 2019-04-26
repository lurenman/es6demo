"use strict";

function f1() {
}

console.log("f1.name:" + f1.name);//f1
//这种直接输出ft2的变量名字
let ft2 = function () {

}
console.log("ft2.name:" + ft2.name);//ft2
//这种name就是foo3 了
let ft3 = function foo3() {
  return"aaaaa";
}
//console.log(ft3());
console.log("ft3.name:" + ft3.name);//foo3
//=>这种形式函数
let ft4=name=>"蛮王";
console.log(ft4());
//=>这种形式函数,多参数以（）=>后面是返回值
let ft5=(name,age)=>name+age;
console.log(ft5("姜武",20));


