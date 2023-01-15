// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// My solution

// function arrayDiff(a, b) {
//   // filter through each value inside of array "a"
//   return a.filter((num) => {
//     return b.indexOf(num) === -1 // check if value has index inside array "b" return if not present
//   })
// }

// Refactored code

const arrayDiff = ((a, b) => a.filter(num => b.indexOf(num) === -1))

console.log(arrayDiff([1,2,2,2,3],[2]))

// Best Practice

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }