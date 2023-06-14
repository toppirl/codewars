// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6

function adjacentElementsProduct(array) {
    let maxProd = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i]*array[i+1] > maxProd || maxProd === 0 && array[i+1] !== undefined) {
            console.log(array[i] * array[i+1]);
            maxProd = array[i] * array[i+1]
        }
    }
    return maxProd;
  }

// Best Practice

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }
    return Math.max(...newArr)
  }

  function adjacentElementsProduct(a) {
    return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
  }