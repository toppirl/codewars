// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution

function solution(str) {
  let sol = []
  const split = str.split('')
  if (split.length % 2 !== 0) {
    split.push('_')
  }
  while (split.length !== 0) {
    let newWord = split[0] + split[1]
    sol.push(newWord)
    console.log(newWord)
    split.splice(0, 2)
  }
  return sol
}

// Best Practice

function solution(str) {
  var i = 0
  var result = new Array()
  if (str.length % 2 !== 0) {
    str = str + '_'
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1])
    i += 2
  }
  return result
}
