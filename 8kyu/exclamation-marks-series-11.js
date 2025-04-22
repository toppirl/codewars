// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

const vowels = 'aeiouAEIOU'.split('')

const replace = (s) => {
  return s
    .split('')
    .map((l) => ('aeiouAEIOU'.includes(l) ? '!' : l))
    .join('')
}
