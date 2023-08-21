// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// My solution and Best Practice

String.prototype.camelCase = function () {
  return this.split(' ')
    .map((w) => {
      return `${w.charAt(0).toUpperCase()}${w.slice(1)}`
    })
    .join('')
}
