"use strict";
//生成器
 function* chef() {
    yield "aaaa";
    yield "bbbb";
}
//这种必须定义个变量 指向同一个对象才好使
let wanghao = chef();
console.log(wanghao.next());
console.log(wanghao.next());
console.log(wanghao.next());
function* chefB(foods) {
    for (let i = 0; i < foods.length; i++) {
        yield foods[i];
    };
}
let lufei=chefB(["aaa","bbb"]);
console.log(lufei.next());
console.log(lufei.next());
console.log(lufei.next());
