// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My solution

function abbrevName(name){
    nameSplit = name.toUpperCase().split(' ')
    return(`${nameSplit[0][0]}.${nameSplit[1][0]}`)
}

// Best Practice

function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }