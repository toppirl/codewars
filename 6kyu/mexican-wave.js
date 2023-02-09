// // In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My solution

function wave(str){
    let strWave = []
    for(let i = 0; i < str.length; i++) {
        let strSplit = str.split('')
        if(strSplit[i] === ' ') {
            
        } else {
            strSplit[i] = strSplit[i].toUpperCase()
            strWave.push(strSplit.join(''))
        }
    }
    console.log(strWave)
    return strWave
  }



// Best Practice

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}