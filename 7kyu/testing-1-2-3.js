// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// My solution

var number=function(array){
    let newArray = []
    array.forEach((item, index) => newArray.push(`${index + 1}: ${item}`))
    return newArray
  }

// Best practice

var number = function(array) {
    return array.map(function (line, index) { // using MAP instead of forEach will allow me to return a new array without initializing one and pushing to it
      return (index + 1) + ": " + line;
    });
  }