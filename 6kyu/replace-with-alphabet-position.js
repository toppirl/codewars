// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// My solution

function alphabetPosition(text) {
    let newString = []
    for(let i = 0; i < text.length; i++) {
        if(text.toLowerCase().charCodeAt(i) - 96 <= 26 && text.toLowerCase().charCodeAt(i) - 96 > 0) {
            newString.push(text.toLowerCase().charCodeAt(i) - 96)
        }
        }
    return newString.join(' ')
  }

// Best Practice

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length-1);
  }

