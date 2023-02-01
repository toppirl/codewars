// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// My Solution

function twoSum(numbers, target) {
    let numRet = []
    for(let j=0; j < numbers.length; j++) {
        for(let i=0; i < numbers.length; i++) {
            console.log(j)
            if(numbers[i] + numbers[j] === target && numbers.indexOf(numbers[j]) !== numbers.lastIndexOf(numbers[i])) {
               return numRet = [numbers.indexOf(numbers[j]), numbers.lastIndexOf(numbers[i])]
            }
        }
    }
    return numRet
  }

// console.log(twoSum([1, 2, 3], 4))
// console.log(twoSum([1234,5678,9012], 14690))
console.log(twoSum([2, 2, 3], 4))

// Best Practice

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}