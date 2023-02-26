// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My Solution

function isSortedAndHow(array) {
    let sorted = ''
    for(let i = 1; i < array.length; i++) {
            if (array[i] < array[i-1]){
                sorted = 'yes, descending'
            } else if(array[i] > array[i-1]){
                sorted = 'yes, ascending'
            } else {
                return sorted = 'no'
            }
        }
        return sorted
    }


console.log(isSortedAndHow([1,4,5]))