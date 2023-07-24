// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My solution

function isPangram(string) {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  // split string in individual characters array
  const stringLetters = string.toLowerCase().split('')
  for (let i = 0; i < stringLetters.length; i++) {
    // for each character, check to see if the index is in the letters array
    if (letters.indexOf(stringLetters[i]) >= 0) {
      let index = letters.indexOf(stringLetters[i])
      //if it is, remove it from the array
      letters.splice(index, 1)
    }
  }
  return letters.length === 0 ? true : false
}

// Best Practice

function isPangram(string) {
  string = string.toLowerCase()
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1
  })
}

// Test Cases
console.log(isPangram('This is not a pangram.'), false)
console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true)
console.log(isPangram('abcdefghijklmopqrstuvwxyz'), false)
