"use strict";
let set1=new Set("1");
set1.add("2");
set1.add("3");
console.log(set1);
console.log(set1.size);
console.log(set1.has("2"));
set1.delete("2");
console.log(set1);
console.log(set1.has("2"));
set1.forEach(set1=>{
    console.log(set1);
})
set1.clear();
console.log(set1);
