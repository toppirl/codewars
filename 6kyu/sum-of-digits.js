// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

//My solution

function digitalRoot(n) {
  let sum = 100
  // Convert number to string so we can loop through it and sum
  let num = n.toString().split('')
  while (sum >= 10) {
    sum = 0
    for (let i = 0; i < num.length; i++) {
      let newNum = Number(num[i])
      // Add numbers together to calculate sum
      sum += newNum
    }
    // if sum is single digit, return it, else do it again
    if (sum < 10) {
      return sum
    }
    // Convert number to string so we can loop through it and sum
    num = sum.toString().split('')
  }
}

// Best Practice
function digital_root(n) {
  return ((n - 1) % 9) + 1
}

//   There's a wikipedia article linked at the start of the description, in which there's this Congruence Formula: dr(b, n) = 1 + ((n - 1) * mod(b - 1))

//   The dr stands for digital root. The b stands for the base, which in this case is 10 since we want a result from 0 to 9.

//   If we replace b with our base we get: dr(10, n) = 1 + ((n - 1) * mod(10 - 1)) <=> dr(10, n) = 1 + ((n - 1) * mod(9))

//   If we replace the mod with the % operator: dr(10, n) = 1 + (n - 1) % 9

//   Reorder the values and we get to this: dr(10, n) = (n - 1) % 9 + 1
