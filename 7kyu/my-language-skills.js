// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// My solution

function myLanguages(results) {
    const answer = [];
    const result = Object.entries(results)
    console.log(Object.keys(results));
    const sorted = result.sort((a,b) => b[1] - a[1])
    sorted.map((test) => {
        if(test[1] >= 60){
            answer.push(test[0])
        }
    })
    return answer
}

// Best Practice

function myLanguages(results) {
    console.log(results['Hindi'])
    console.log(Object.keys(results))
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}
