// Given an array of strings, return another array containing all of its longest strings
// const exampleStrings = ["aba", "aa", "ad", "vcd", "aba", "a"];

function allLongestStrings(array) {
    //  write code here.
    let longestString = 0;
    
    // Find the longest string length
    array.forEach(function(arrayItem) {
        if (arrayItem.length > longestString) {
            longestString = arrayItem.length;
            console.log(longestString);
        }
    });
    
    // Loop through array to find strings that equals the longest string
    let longestStrings = array.filter(function(arrayItem) {
        return arrayItem.length == longestString;
    })
    
    return longestStrings;
}