// given a string, sort the order of strings based on the number in each word
// each word will have single num, which is position it should have in return
// nums -> 1-9 , 1 is first (not 0), always consecutive
// string can be null => return ''

// My solution

function order(words) {
  if (words === '') {
    return ''
  }
  const wordsSplit = words.split(' ')
  const wordsOrder = []
  for (let i = 0; i < wordsSplit.length; i++) {
    const word = wordsSplit[i].split('')
    for (let i = 0; i < word.length; i++) {
      if (word[i] >= 0 && word[i] <= 9) {
        console.log(wordsSplit[i])
        let num = parseInt(word[i]) - 1
        wordsOrder[num] = word.join('')
        console.log(wordsOrder)
      }
    }
  }
  return wordsOrder.join(' ')
}

// Best Practice

function order(words) {
  var array = words.split(' ')
  var sortedArray = []
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j])
      }
    }
  }
  return sortedArray.join(' ')
}
