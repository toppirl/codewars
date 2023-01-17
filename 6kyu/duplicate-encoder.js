// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// My solution

//PREP

//P: string, case insensitive

//R: string , if char appear once -> ( , if char appear more than once -> )

function duplicateEncode(word){
    let wordArray = word.split('')
    let encodeWord = ''
    for(let i = 0; i < wordArray.length; i++) {
        console.log(wordArray)
        for(let j = i + 1; j < wordArray.length; j++) {
            if(word[i] == word[j]) {
               doesExist = true
            } else {
                doesExist = false
            }
        }
        if(doesExist) {
            encodeWord += ')'
        } else {
            encodeWord += '('
        }
    }
    return encodeWord
}

// Best Practice

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }