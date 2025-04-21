// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const s = 'this issnt a list of words you should know'

// Original solution

function findShort(s) {
  return s.split(' ').reduce((minLen, word) => {
    return word.length < minLen ? word.length : minLen
  }, Infinity)
}

// Refactored & Best practice

function findShort(s) {
  return Math.min(...s.split(' ').map((w) => w.length))
}
