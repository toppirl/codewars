// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My solution


var isAnagram = function(test, original) {
    let anagram = true;
    const origArray = original.toLowerCase().split('')
    if(test.length !== original.length) {
        return false;
    }
    for(let i = 0; i < test.length; i++) {
        if(origArray.includes(test[i].toLowerCase())){
            origArray.splice(origArray.indexOf(test[i].toLowerCase()),1)
        } else {
            return false;
        }
    }
    return anagram;
};

// Best Practice

var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };