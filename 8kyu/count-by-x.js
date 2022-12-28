// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// My solution

function countBy(x, n) {
  let z = [x];
  let init = x;
  for (let i = 1; i < n; i++) {
    init += x;
    z.push(init);
  }
  return z;
}

// Best Practice

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// Clever

const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

// The {length: n} creates an array with n-amount of undefined values.

// After that (v, k) => (k + 1) * x adds values in this array.

// const countBy = (x, n) => Array.from({
//   length: n // Create n indexes with undefined values
// },
// function(v, k) { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to n]
//   return (k + 1) * x; // Return k(ey) as value for this index
// }
// );
// console.log(countBy(1, 10));
