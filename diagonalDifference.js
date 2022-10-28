const EXERCISE_LINK = "https://www.hackerrank.com/challenges/diagonal-difference/problem";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [
  [11, 2, 4], 
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  const matrixSize = arr.length;
  
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < matrixSize; i++) {
    mainDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][matrixSize - (i + 1)];
  }

  return Math.abs(mainDiagonalSum - secondaryDiagonalSum);
};

console.log(diagonalDifference(sampleInput));