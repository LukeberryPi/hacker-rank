const EXERCISE_LINK = "https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = {
  arrayA: [2, 4],
  arrayB: [16, 32, 96],
}

const { arrayA, arrayB } = sampleInput;

function getTotalX(a, b) {
  
  const range = (start, end) => {
    return [...Array(end - 1).keys()].map(e => e + start);
  }

  let candidateNumbers = range(a.reduce((acc, cur) => acc * cur), Math.max(...b))

  return candidateNumbers;
}


console.log(getTotalX(arrayA, arrayB))
