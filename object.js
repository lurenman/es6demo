"use strict";

function foo() {
    return {x: 1, y: 2, z: 3};
}

let {x, y, z} = foo();
console.log({x, y, z});

function foo1() {
    return {name: "xiaoming", age: 19};
}

//复制给这个对象必须属性声明必须一致啊
let {name: name, age: age} = foo1();
console.log({name: name, age: age});
let apple = "apple", banana = "banana";
// let food = {
//     apple:apple, banana:banana,
// }
let food = {
    apple, banana,
}
console.log("food:" + food.apple);
food.orange = "orange";
//food.apple="aaaa";这就相当于set方法
let h_apple = "h apple";
//带空格里[] 这么搞
//food["h apple"]="h apple";
food[h_apple] = "h apple";
console.log(food);

//两个值比较Object.is比较
console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));
//把对象里的值赋值到另一个对象里,就是添加上去
let objtrc = {eat: "eat"};
let objsrc = {
    drink: "drink"
}
Object.assign(objtrc, objsrc);
console.log(objtrc);

let obj1 = {
    food: "food",
    getDrink() {
        return "aaaa";
    }
}
let obj2 = {
    getDrink() {
        return "bbbbb";
    },
    getEat() {
        return "ccccc"
    }
}
let drink = obj1.getDrink();
console.log(drink);
let obj3 = Object.create(obj1);
console.log(obj3.getDrink());
console.log(Object.getPrototypeOf(obj3) == obj1);
Object.setPrototypeOf(obj1, obj2);
console.log(obj2.food);


