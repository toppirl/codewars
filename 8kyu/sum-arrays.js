// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// My solution

const sum = (num) => num.reduce((acc,e) => acc + e, 0)

// Best Practice

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }