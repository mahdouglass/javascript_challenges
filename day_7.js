// Number Factorial
// Return the factorial of the provided integer
// 5! = 1*2*3*4*5 = 120

function factorialNumber(num) {
    let j = 1;
    for (let i = 1; i <= num; i++) {
        j *= i;
    }
    return j;
}