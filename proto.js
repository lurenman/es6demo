"use strict";

let obj1 = {
    a: "a",
    foo1() {
        return "foo1"
    }
}
let obj2 = {
    b: "b",
    foo2() {
        return "foo2"
    }
}
let obj3 = {
    b: "b",
    foo3() {
        return "foo3"
    }
}
let obj4 = {
    //这个东西必须先定义了才能用
    __proto__: obj1,
    //__proto__:"",
    //__proto__: this,
    foo2() {
        //可以重写也可以访问super
        return super.foo2();
    }
}
// console.log(obj4.foo1());
// console.log(Object.getPrototypeOf(obj4)===obj1);
obj4.__proto__ = obj2;
console.log(obj4.foo2());
console.log(Object.getPrototypeOf(obj4) === obj2);
