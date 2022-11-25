const EXERCISE_LINK = "https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = {
  arrayA: [2, 4],
  arrayB: [16, 32, 96],
}

const { arrayA, arrayB } = sampleInput;

function getTotalX(a, b) {
  
  const productElementsA = a.reduce((acc, cur) => acc * cur);

  const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(e => e + startAt);
  }

  let candidateNumbers = range(Math.max(...b) - productElementsA, productElementsA);
  
  for (let i = 0; i < candidateNumbers.length; i++) {
    if (candidateNumbers[i] % 8 != 0) {
      candidateNumbers.splice(i, 1);
    };
  }

  return candidateNumbers;
}

// console.log(getTotalX(arrayA, arrayB));'

console.log(12 % 8);

function removeElements(arr, divisor) {
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % divisor > 0) {
      arr.splice(i, 1);
    }
  
  }

  return arr;
}

console.log(removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
