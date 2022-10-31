const EXERCISE_LINK = "https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [3, 2, 1, 3, 2];

function birthdayCakeCandles(arr) {
  const tallestCandleHeight = Math.max(...arr);
  const numberOfTallestCandles = arr.filter(candle => candle === tallestCandleHeight).length;

  return numberOfTallestCandles;
}

console.log(birthdayCakeCandles(sampleInput));
