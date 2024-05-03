// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// My solution

function getSum(a, b) {
  if (a === b) {
    return a
  } else {
    const big = a < b ? b : a
    const small = a > b ? b : a
    let sum = 0
    for (let i = small; i <= big; i++) {
      sum += i
    }
    return sum
  }
}

// Best Practice

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b)
  return ((max - min + 1) * (min + max)) / 2
}
