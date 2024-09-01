"use strict";
function secondLargest(array) {
    let largest = array[0];
    let secondLargest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i <= array.length; i++) {
        if (array[i + 1] > largest) {
            secondLargest = largest;
            largest = array[i + 1];
        }
        else if (array[i + 1] < largest && array[i + 1] > secondLargest) {
            secondLargest = array[i + 1];
        }
    }
    return secondLargest;
}
const secondLargestNumber = secondLargest([2, 4, 2, 6, 6]);
console.log(secondLargestNumber);
// time complexity is o(n)
