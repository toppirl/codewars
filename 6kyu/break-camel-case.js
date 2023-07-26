// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution

function solution(string) {
  let strSplit = string.split('')
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === strSplit[i].toUpperCase()) {
      strSplit.splice(i, 1, ` ${strSplit[i]}`)
    }
  }
  return strSplit.join('')
}

// Best Practice

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
