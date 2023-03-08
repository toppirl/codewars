// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My solution

function well(x){
    const results = x.reduce((obj, item) => {
        if(!obj[item]) {
          obj[item] = 1
        } else {
         obj[item]++
        }
        return obj
    }, {})
    if(results.good === 1 || results.good === 2){
        return 'Publish!'
    } else if(results.good > 2){
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))

// Best Practice 

const well = x => {
    // Filter the array to only have items that are equal to 'good'
    // Count the length of that array to get total #
    const good_count = x.filter(x => x == 'good').length;
    // If less than 1 'Fail, if less than 3 (1-2) then 'Publish else 'I smell'
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }