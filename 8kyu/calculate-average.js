//Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution

const testScores = [87, 76, 99, 45, 98, 'this is albert', 'and his friend', 0]
console.log(testScores[5] + ' ', testScores[6])
// [0, 1, 2 ,3] // these are the indexes

// function findAverage(array) {
//     return array.length === 0 ? 0 : array.reduce((sum, val) => sum + val ) / array.length
//   }

// Best Practice

// var find_average = (array) => {
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }
