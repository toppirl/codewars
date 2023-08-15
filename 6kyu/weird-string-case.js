// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// My Solution

function toWeirdCase(string) {
  let multiWord = string.split(' ')
  const newString = []
  console.log(multiWord)
  for (let i = 0; i < multiWord.length; i++) {
    let singleWord = multiWord[i].split('')
    let newWord = ''
    for (let i = 0; i < singleWord.length; i++) {
      if (i === 0 || i % 2 === 0) {
        newWord += singleWord[i].toUpperCase()
      } else {
        newWord += singleWord[i].toLowerCase()
      }
    }
    newString.push(newWord)
  }
  return newString.join(' ')
}

// Best Practice

function toWeirdCase(string) {
  return string
    .split(' ')
    .map(function (word) {
      return word
        .split('')
        .map(function (letter, index) {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        })
        .join('')
    })
    .join(' ')
}
