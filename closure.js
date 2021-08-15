let name = "V!cky";

function printName() {
    console.log(name);
}

printName();

// closure --> function with its lexical environment
function outerFunction(outerVariable) {
    return function innerfunction(innerVariable) {
        console.log("Outer ", outerVariable);
        console.log("Inner ", innerVariable);
    }
}

let newFunction = outerFunction('out variable');
newFunction('inSide variable');
