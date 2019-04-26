"use strict";

//剩余操作符 ...
/**
 * 在参数里面...args 代表数组
 * @param name
 * @param age
 * @param args
 */
function foo(name, age, ...args) {
    console.log(name, age, args);
    //...args这时候是展开效果spread
    console.log(name, age, ...args);
}

foo('xiaoming', 18, "aaa", "bbb", 123);