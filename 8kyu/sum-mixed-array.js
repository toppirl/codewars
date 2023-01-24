// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
    const intArr = x.map(e => parseInt(e))
    return intArr.reduce((acc,char) => {
        return acc + char
    }, 0)
}

console.log(sumMix([9, 3, '7', '3'])) // 22

// Best Practice

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }