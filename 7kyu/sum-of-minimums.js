// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        
// , [ 5, 6, 7, 8, 9 ]       
// , [ 20, 21, 34, 56, 100 ] 
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

//My solution

function sumOfMinimums(arr) {
    return arr.reduce((sum,ints) => {
        return sum += Math.min(...ints)
    }, 0)
  }


// Best Practice

function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }
