// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

const ints = [2, 4, 0, 100, 4, 11, 2602, 36]

function findOutlier(i) {
  const outlier =
    i.filter((i) => i % 2 === 0).length === 1
      ? i.filter((i) => i % 2 === 0)
      : i.filter((i) => i % 2 !== 0)
  return outlier[0]
}
