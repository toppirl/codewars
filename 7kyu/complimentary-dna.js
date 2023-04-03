// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// My solution

function DNAStrand(dna){
    let newDna = ''
    for(let i = 0; i < dna.length; i++) {
        console.log(dna[i])
        switch (dna[i].toLowerCase()) {
            case 'a':
                newDna += 'T'
                break;
            case 't':
                newDna += 'A'
                break;
            case 'c':
                newDna += 'G'
                break;
            case 'g':
                newDna += 'C'
                break;
        }
    }
    return newDna;
  }

  // Best Practice

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    // Split the string into an array
    // Map over array and for each letter return the key value from the pairs object
    // Map creates a new array that we will join to return the completed assignment
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}