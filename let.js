/**
 * let 定义变量只能在自己定义的代码块中使用
 */
//console.log(name);//undefined
if (true){
    var name="索隆";
   // console.log(age);ReferenceError: age is not defined
    let age=20;
    console.log(age);
}
//console.log(age);
console.log(name);


