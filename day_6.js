// Given a string, enclose it in round brackets (show it done in 3 ways).
// For inputString = "abacaba", the output should be encloseInBrackets(inputString) = "(abacaba)";

function encloseInBracketsConcat(str) {
    return "(" + str + ")";
}

function encloseInBrackets(str) {
    return `(${str})`;
}

function encloseInBracketsConcat(str) {
    return '('.concat(str, ')');
}