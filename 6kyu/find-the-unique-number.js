// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// My solution

function findUniq(arr) {
  const uniq = arr.filter((char) => arr.indexOf(char) == arr.lastIndexOf(char))
  return uniq[0]
}

// Best Practice

function findUniq(arr) {
  console.log(arr.sort((a,b)=>a-b))
  return arr[0]==arr[1]?arr.pop():arr[0]
}