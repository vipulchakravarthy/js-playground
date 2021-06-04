//currying in js
let person = {
    firstName: 'sai',
    lastName: 'vipul',
    printFullname: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
person.printFullname()

let person2 = {
    firstName: 'John',
    lastName: 'Smith',
}

//if you want to use the same printFullname function which is in other object
//we can make use of function borrowing
//for function borrowing we use call method
person.printFullname.call(person2);

//we can use the same function outside the object
let printFullFunc = function (homeTown, state) {
    console.log(this.firstName + ' ' + this.lastName + " " + homeTown + ", " + state);
}

//inside the call the first argument refers to the "this" and rest of args can be as passed as is

printFullFunc.call(person2, "Hyderabad", "AP");

//apply method is also same as call but passing args will be in diff fashion
//we need the args as array
printFullFunc.apply(person2, ["Hyderabad", "TS"]);

//bind method- same as call but it will return the funtion
printFullFuncBind = printFullFunc.bind(person2, "Vizag", "AP");
console.log(printFullFuncBind);
printFullFuncBind();