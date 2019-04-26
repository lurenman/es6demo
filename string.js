"use strict";
let name = "招摇";
let alias = "女魔头";

//let str = name + alias;
let str = `名字:${name}  别名:${alias}`;
//console.log(str);
let str1 = ketchen`名字:${name}  别名:${alias}`;

/**
 * 这个就相当于改变模板字符串一样，重新定义
 * @param strings
 * @param values
 * @returns {string}
 */
function ketchen(strings,...values) {
  //  values[0]="aaaa";
   // console.log(strings);
  //  console.log(values);
    return "vvvvv"
}
//console.log(str1);

let str2="my name is by"
console.log(str2.startsWith("my"));
console.log(str2.endsWith("y"));
console.log(str2.includes("is"));
