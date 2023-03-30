// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// My Solution

function accum(s) {
    let lowerCase = s.toLowerCase()
    let mumble = []
	for(let i =0; i < s.length; i++) {
        mumble.push(`${lowerCase[i].toUpperCase()}${lowerCase[i].repeat(i)}`)
    }
    return mumble.join('-')
}

// Best Practice

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}