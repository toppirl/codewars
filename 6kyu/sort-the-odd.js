// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// My solution

function sortArray(array) {
    const oddIndex = []
    const oddArray = array.filter((char, i) => {
        if(char % 2 !== 0) {
            oddIndex.push(i)
            return char
        }}).sort((a,b) => a - b)
    for(let i = 0; i < oddArray.length; i++) {
        array[oddIndex[i]] = oddArray[i]
    }
    return array
}




sortArray([5,3,2,8,1,4]) // [1,3,2,8,5,4]

// Best Practice

function sortArray(array) {
    // 0 is falsy, so when numbers hit x % 2, the remainder operator returns 1 for odd, which is viewed as true, and returns 0 for even numbers which is false.
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    // Maps new array and if it is odd will return the first value from "odd" array, if it is even it will just map that value
    return array.map((x) => x % 2 ? odd.shift() : x);
  }