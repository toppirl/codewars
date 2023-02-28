// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My Solution

function isSortedAndHow(array) {
    let isDescending = true;
    let isAscending = true;
    // we are looking ahead so loop from the first element to one before the last element
    for(let i = 0; i < array.length-1; i++) {
            if(isDescending && array[i] >= array[i+1]){
            } else {
                isDescending = false;
            }
        }
        for(let i = 0; i < array.length-1; i++) {
                if(isAscending && array[i] <= array[i+1]){
                } else {
                    isAscending = false;
                }
            }
        if(isAscending){
            return 'yes, ascending'
        } else if(isDescending){
            return 'yes, descending'
        } else {
            return 'no'
        }
    }

// Best Practice

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }


