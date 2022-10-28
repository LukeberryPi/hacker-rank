const sampleInput = [3, 2, 1, 3, 2];

function birthdayCakeCandles(arr) {
  const tallestCandleHeight = Math.max(...arr);
  const numberOfTallestCandles = arr.filter(candle => candle === tallestCandleHeight).length;

  return numberOfTallestCandles;
}

console.log(birthdayCakeCandles(sampleInput));