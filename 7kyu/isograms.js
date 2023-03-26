// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// My solution

function isIsogram(str){
    let result = true;
    for (char of str) {
        if(str.toLowerCase().indexOf(char) !== str.toLowerCase().lastIndexOf(char)) {
            result = false;
        }
    }
    return result
  }

// Best Practice

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}