// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// My solution & Best Practice

function removeEveryOther(arr){ 
    return arr.filter((ele,i) => i % 2 === 0)
  }

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))