// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My solution
let array = ['turns', 'out', 'random', 'test', 'cases']

function twoSort(s) {
    let sorted = s.sort()
    let sortedSplit = sorted[0].split('')
    let newString = ''
    for(let i = 0; i<sortedSplit.length;i++) {
        if(i < sortedSplit.length -1) {
            newString += sortedSplit[i] + '***'
        } else {
            newString += sortedSplit[i]
        }
    }
   return newString
}

// Best Practice

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }
