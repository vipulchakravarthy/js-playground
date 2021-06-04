//Function currying can be done in two ways using bind and other way is using closure
let multiply = function (x, y) {
    console.log(x * y);
}

//using the already written multiply function
//pre-setting some args
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4);

//using the already written multiply function
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);


//using closures

let add = function (x) {
    return function (y) {
        console.log("sum is ", x + y);
    }
}

let addTwo = add(2);
addTwo(5);