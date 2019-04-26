function foo() {
    let array = [1, 2, 3];
    return array;
}
function foo() {
    let array = [1, 2, 3];
    return array;
}
//在左边有赋值就相当于声明变量了
let [x, y, z] = foo();
console.log(x, y, z);
console.log([x, y, z]);
//let ary = [x,y,z]; ReferenceError: x is not defined



