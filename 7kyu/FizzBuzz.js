// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

function fizzbuzz(n)
{
  let buzzArr = []
  for (let i = 1; i <= n; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        buzzArr.push('FizzBuzz')
    } else if (i % 5 === 0) {
        buzzArr.push('Buzz')
    } else if (i % 3 === 0) {
        buzzArr.push('Fizz')
    } else {
        buzzArr.push(i)
    }
  }
  return buzzArr;
}

console.log(fizzbuzz(13))

// Clever

// Return an array
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}
