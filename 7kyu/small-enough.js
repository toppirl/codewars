// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My solution

function smallEnough(a, limit){
    let value = 0;
    a.forEach(num => num <= limit ? value += 0 : value += 1)    
    return value === 0 ? true : false
}

// Best Practice

function smallEnough(a, limit){
    return Math.max(...a) <= limit // spreads the array into the max function to grab largest value and if that isn't less than or equal to the limit it return false
  }