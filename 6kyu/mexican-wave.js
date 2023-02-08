// // In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My solution

function wave(str){
    let strWave = []
    const strSplit = str.split('')
    for(let i = 0; i < str.length; i++) {
        console.log(strSplit[i].toUpperCase())
        console.log(strSplit.join(''))
    }
  }

  wave('hello')