// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// My Solution

const a1 = ["live", "strong", "arp", "arp"]

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// function inArray(array1,array2){
//     let final = []
//     array1.sort().forEach(word => {
//         for(let i =0; i < array2.length; i++) {
//             if(array2[i].includes(word)) {
//                 return final.push(word)
//             }
//         }
//     })
//     console.log(final)
//     return final
// }


// Best Practice

function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}



console.log(inArray(a1,a2))



