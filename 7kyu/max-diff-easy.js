// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

// MY SOLUTION
function maxDiff(lst) {
  if (lst.length <= 1) {
    return 0
  } else {
    const listSorted = lst.sort((a, b) => a - b)
    return listSorted[listSorted.length - 1] - listSorted[0]
  }
}

//Best Practice

function maxDiff(list) {
  if (!list.length) return 0
  console.log(Math.max(...list))
  return Math.max(...list) - Math.min(...list)
}
