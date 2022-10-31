const EXERCISE_LINK = "https://www.hackerrank.com/challenges/array-ds/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let reversedArray = [];

  for (let i = 1; i <= arr.length; i++) {
    reversedArray.push(arr[arr.length - i]);
  }

  return reversedArray;
}

console.log(reverseArray(sampleInput));