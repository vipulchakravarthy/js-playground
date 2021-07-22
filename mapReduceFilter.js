const arr = [9, 5, 5, 5, 4, 1, 1]

//map 
function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(triple);
// const op = arr.map(function binary(x) {
//     return x.toString(2);
// })

//arrow function, which act as higher order function
const op = arr.map((x) => x.toString(2))

// console.log(op);


//function to filter even
const filteredOutput = arr.filter((x) => {
    if (x % 2 == 0) return x;
})

// console.log(filteredOutput);

//reduce function

const reducedOutput = arr.reduce((x, y) => {
    return x += y;
})

console.log(reducedOutput);

const findMax = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(findMax);

//frequency counter

const frequency = arr.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] = ++acc[curr];
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});

console.log(frequency);