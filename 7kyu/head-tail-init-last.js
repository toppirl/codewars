// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x

// My solution

const init = (arr) => {
    return arr.slice(0,arr.length-1)
}

const head = (arr) => {
    return arr[0]
}

const tail = arr => {
    return arr.slice(1)
}

const last = arr => {
    return arr[arr.length-1]
}

console.log(init(['hello', 'hi', 'how are you']))
console.log(head([5,1]))
console.log(tail(['hello', 'hi', 'how are you']))
console.log(last(['hello', 'hi', 'how are you']))