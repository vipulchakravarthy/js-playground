
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generatorObject = simpleGenerator();
// console.log(generatorObject);

const value = generatorObject.next();
console.log(value);
console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

//iterate through the generator
// while (generatorObject.next().done !== false) {
// }

//pass values between yield and next statements, next(passvalue)


//.return()


