// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solution

function removeUrlAnchor(url){
    return url.indexOf('#') === -1 ? url : url.slice(0,url.indexOf('#'))
  }

 console.log(removeUrlAnchor('www.codewars.com#about'))
 console.log(removeUrlAnchor('www.codewars.com?page=1'))