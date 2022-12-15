//Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution

function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((sum, val) => sum + val ) / array.length
  }

// Best Practice

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }