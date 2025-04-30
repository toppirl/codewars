// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

// My solution

function moveZeros(arr) {
  const arrZero = []
  const arrNum = []
  arr.forEach((num, i) => {
    if (num === 0) {
      arrZero.push(num)
    } else {
      arrNum.push(num)
    }
  })
  const final = arrNum.concat(arrZero)
  return final
}

// Best practice

var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0
    })
    .concat(
      arr.filter(function (x) {
        return x === 0
      })
    )
}
