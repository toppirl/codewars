// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// My solution

function expandedForm(num) {
  const numString = num.toString().split('')
  let arrRet = ''
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === '0') {
    } else {
      arrRet.length <= 0
        ? (arrRet += `${numString[i] + '0'.repeat(numString.length - (i + 1))}`)
        : (arrRet += ` + ${
            numString[i] + '0'.repeat(numString.length - (i + 1))
          }`)
    }
  }
  return arrRet
}

// Best Practice

const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ')
