// # Take Notes
// Write down notes as you repeat and clarify the question with the interviewer.
// Example: function word say is a palindrome = Create a function that takes in a word and will say wether or not that word is a palindrome

// # [P]arameters
// Ask a series of questions to make sure we understand the problem.
// We are taking in a word -> will it be a string, will it ever be empty, have special characters, will there be numbers
// word -> str, no empty, no !, no nums, no funny biz, no caps, 1 word
// return true || false

// [R]eturns
// racecar -> true
// bob -> true
// tacos -> false

// function isPalindrome(word) {
//     // word -> reverse that word - split reverse join
//     let reversedWord = word.split('').reverse().join('')
//     return word === reversedWord
// }

const isPalindrome = (word) => word === word.split('').reverse().join('')

// [E]xamples
console.log(isPalindrome('racecar'), 'true')
console.log(isPalindrome('bob'), 'true')
console.log(isPalindrome('tacos'), 'false')
