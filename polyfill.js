let person = {
    firstName: "John",
    lastName: "Snow",
}

let printName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName
        + " " + hometown + ' ' + state + ' ' + country);
}

let printNameBind = printName.bind(person, "Hyd");
printNameBind("TS", "India")

//polyfill is like creating your own bind function
// create a method which works same as bind
Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {

        obj.apply(args[0], [...params, ...args2]);
    }
}

let printNameBind2 = printName.myBind(person);
printNameBind2("VZG", "AP", "IND")