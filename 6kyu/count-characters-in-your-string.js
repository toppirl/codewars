// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution and best practice

function count(string) {
  return string.split('').reduce(function (obj, char) {
    if (!obj[char]) {
      obj[char] = 0
    }
    obj[char]++
    return obj
  }, {})
}
