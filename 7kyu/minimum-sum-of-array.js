// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// My solution

function minSum(arr) {
    arr.sort((a,b) => b-a)
    let sum = 0;
    for(let i = 0; i < arr.length / 2; i++) {
      sum += arr[arr.length-(i+1)] * arr[i]
    }
    return sum
  }

// Best Practices

function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }

  const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);