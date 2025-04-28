// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// My solution

var uniqueInOrder = function (i) {
  let item
  const uniques = []
  if (typeof i === 'string') {
    item = i.split('')
  } else {
    item = i
  }
  if (item.length === 1) return item
  for (let i = 0; i < item.length - 1; i++) {
    if (uniques.length < 1) uniques.push(item[i])
    if (item[i] !== item[i + 1]) {
      uniques.push(item[i + 1])
    }
  }
  return uniques
}

// Best practice

var uniqueInOrder = function (iterable) {
  const arr = [...iterable]
  return arr.filter((item, index) => item !== arr[index - 1])
}
