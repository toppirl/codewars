// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// My solution

function evenNumbers(array, number) {
    const reversed = array.reverse()
    const newArray = []
    for(let i =0; i < array.length; i++) {
        if (reversed[i] % 2 === 0 && newArray.length < number) {
            newArray.push(reversed[i])
        }
    }
    return newArray.reverse();
  }

// Best Practice

const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);