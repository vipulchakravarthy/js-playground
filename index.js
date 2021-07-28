//sum(1)(2)(3)(4)(5)....()

//IIFE 
// (function () {
//     var a = b = c = d = 3;
//     a = 5;
//     c = 10;
// })();

function fun() {
    var a, b, c;
    a = b = c = 1;
    console.log(a, b, c);
}

fun();

//const operation on arr
const arr = [1, 2, 3]

arr[0] = 10;

// console.log(arr);

const obj = {
    name: 'vipul'
}

obj.name = {};

// console.log(obj);







