// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// My solution

function sumTwoSmallestNumbers(numbers) {  
    //First sort array from smallest to largest
    let sorted = numbers.sort((a,b) => a-b)
    // Return sum of two smallest numbers
    return sorted[0] + sorted[1]
  }

// Best Practice

function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };