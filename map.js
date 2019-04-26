"use strict";
let food=new Map();
let obj={};
console.log(food);
food.set("1","apple");
food.set(obj,"banana");
food.set("key","orange");
console.log(food)//Map { '1' => 'apple', {} => 'banana', 'key' => 'orange' }
console.log(food.size);
console.log(food.has("key"));

food.delete(obj);
console.log(food);
food.forEach((value, key) => {
    console.log(`${key}=${value}`);
})
food.clear();