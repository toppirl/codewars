// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My solution

function divCon(x){
    let s1 = 0;
    let s2 = 0
    let total = 0;
    x.forEach(e => {
        if( typeof e === 'string') {
            s1 += Number(e)
        } else {
            s2 += e
        }
    });
    return s2 - s1
}

// Best Practice

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }