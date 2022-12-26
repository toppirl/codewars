// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// My solution

const digitize = (n) =>
  String(n)
    .split('')
    .reverse()
    .map((num) => Number(num));

// Best practice

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
