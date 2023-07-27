// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// My solution

function towerBuilder(nFloors) {
  const arrFloor = []
  let floor = 1
  for (let i = 1; i <= nFloors; i++) {
    if (nFloors === 1) {
      arrFloor.push('*')
    } else {
      console.log(nFloors - i)
      arrFloor.push(
        ' '.repeat(nFloors - i) + '*'.repeat(floor) + ' '.repeat(nFloors - i)
      )
      floor += 2
    }
  }
  return arrFloor
}

// Best Practice

function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1)
    return spaces + '*'.repeat(k + k + 1) + spaces
  })
}
