// Alternating Sums
// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers = the weights of the people. Return an array of two integers, where the first elements is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
// Example: For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105]

function alternatingSums(array) {
    //  write code here.
    let even = 0;
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i];
            console.log('even');
        }
        else {
            odd += array[i];
            console.log('odd');
        }
    }
    return [even, odd];
}
