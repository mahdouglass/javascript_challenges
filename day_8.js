// First digit
// Find the leftmost digit that occurs in a given string
// For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be firstDigit(inputString) = '2;

function firstDigit(str) {
    let splitStr = str.split('');
    let numStr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < splitStr.length; i++) {
        if (numStr.includes(splitStr[i])) {
            return splitStr[i];
        }
    }
}