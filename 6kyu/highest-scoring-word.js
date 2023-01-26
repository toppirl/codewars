// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    // Split string into array of words
    let wordSplit = x.split(' ')
    // Loop through each word in array and create array with the sum of it char values
    const sums = wordSplit.map(word => {
        // create sum
        let wordSum = 0
        // loop over each word by character to get individual values
        for(let i = 0; i < word.length; i++) {
            // add value to sum for the word
           wordSum += word.charCodeAt(i) - 96
        }
        // return the sum totaled for the new array
        return wordSum
    })
    // find the index of the highest value in the new array
    let highValue = sums.indexOf(Math.max(...sums))
    // return the corresponding word to the index that was found
    return wordSplit[highValue] 
}

// Best Practice

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }