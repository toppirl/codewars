// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const letters = str.toLowerCase().split('')
  const ans = letters.reduce(function (obj, char) {
    if (!obj[char]) {
      obj[char] = 0
    }
    obj[char]++
    return obj
  }, {})
  return ans.x === ans.o
}

// Best Practice

const XO = (str) => {
  str = str.toLowerCase().split('')
  return (
    str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
  )
}
