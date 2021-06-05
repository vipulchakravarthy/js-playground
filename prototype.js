let arr = ["John", "snow"];

let object = {
    name: 'vipul',
    city: 'Hyd',
};

// console.log(object.__proto__);
// console.log(Object.prototype);
// console.log(arr.__proto__);
// console.log(Array.prototype)

//prototypal inheritance
let object2 = {
    name: "John"
}

//not a good practice
object2.__proto__ = object;