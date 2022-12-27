// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// My solution

function rowSumOddNumbers(n) {
  let start = n * (n - 1) + 1;
  let sum = start;
  for (let i = 0; i < n - 1; i++) {
    start = start + 2;
    sum += start;
  }
  return sum;
}
// Best Practice

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
