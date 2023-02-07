
// My solution

function rowWeights(array) {
    let newArray = [];
    let sum1 = 0
    let sum2 = 0
    for(let i =0; i < array.length; i++) {
        if(i % 2 === 0)
        sum1 += array[i]
    }
    for(let i =0; i < array.length; i++) {
        if(i % 2 !== 0)
        sum2 += array[i]
    }
    newArray.push(sum1)
    newArray.push(sum2)
    return newArray;
}

console.log(rowWeights([29,39,49,59]))

// Best Practice 

function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }