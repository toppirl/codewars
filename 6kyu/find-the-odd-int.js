// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//My solution

function findOdd(a) {
    const nums = a.reduce((obj, num) => {
        if(!obj[num]){
            obj[num] = 1
        } else {
            obj[num]++
        }
        return obj;
    }, {})
    for(const num in nums) {
        if(nums[num] % 2 !== 0) {
            return Number(num)
        }
    }
  }

// Best Practice 

function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }