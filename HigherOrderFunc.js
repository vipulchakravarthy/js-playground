const radius = [3, 4, 5, 1]

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

//higher order function
//example of map function
//written a prototype of the function
Array.prototype.calcualte = function (logicFunction) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logicFunction(this[i]));
    }
    return output;
}

const areas = radius.calcualte(area);//area is a call back function
// const ccfrc = calcualte(radius, circumference);

console.log(areas);
// console.log(ccfrc);
