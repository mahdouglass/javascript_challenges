// Array Replace
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
//For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function arrayReplace(array, elemToReplace, substitutionElem) {
    array.forEach(function(item, i) {
        if (item == elemToReplace) {
            array[i] = substitutionElem;
        }
    });
    return array;
}