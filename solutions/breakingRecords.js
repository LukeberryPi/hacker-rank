const EXERCISE_LINK = "https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [12, 24, 10, 24];

function breakingRecords(scores) {
  let firstScore = scores[0];
  let highRecord = [firstScore], lowRecord = [firstScore];
  
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > Math.max(...highRecord)) highRecord.push(scores[i]);
    if (scores[i] < Math.min(...lowRecord)) lowRecord.push(scores[i]);
  }

  return [highRecord.length - 1, lowRecord.length - 1];
}

console.log(breakingRecords(sampleInput));
