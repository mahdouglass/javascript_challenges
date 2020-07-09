// Case Insensitive Palindrome
// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.
// For inputString = "AaBaa", the output should be isCaseInsensitivePalindrome(inputString) = true

function caseInsensitivePalindrome(str) {
    let lowerCase = str.toLowerCase();
    let splitStr = lowerCase.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    if (lowerCase === joinStr) {
        return true;
    } else {
        return false;
    }
}