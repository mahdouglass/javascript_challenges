// Write a function that returns the sum of two numbers

function addTwoParams(a, b) {
    let added = parseInt(a) + parseInt(b);
    return added;
}

// Write a functions that returns the sum of all numbers regardless of the number of parameters.

function addAllNumbers(...nums) {
    return nums.reduce((a, b) => {
        return a + b;
    });
}

function addAllNumsWithForEach(...nums) {
    let sum = 0;
    nums.forEach((num) => sum += num);
    return sum;
}