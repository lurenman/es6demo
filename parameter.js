"use strict";

/**
 * 添加默认参数
 * @param name
 * @param age
 * @returns {string}
 */
function foo(name = "xiaoming", age = 22) {
    return `${name} ${age}`;
}

//console.log(foo());
//类型自动转换了
//console.log(foo(1111));

function foo1({name, age}) {
    console.log(name, age);//lufei 18
    console.log({name, age});//{ name: 'lufei', age: 18 }
}
//传对象形式
foo1({name: "lufei", age: 18});