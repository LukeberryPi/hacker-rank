const EXERCISE_LINK = "https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

// declarando os nossos inputs
const aliceTriplet = [1, 2, 3];
const bobTriplet = [3, 2, 1];

function compareTriplets(aliceArr, bobArr) {
  // inicializando nossas variáveis de resultado
  let aliceScore = 0;
  let bobScore = 0;

  // iterando sobre a lista e comparando cada nota.
  for (let i = 0; i < aliceArr.length; i++) {
    // se a nota da alice for maior, aliceScore = aliceScore + 1
    if (aliceArr[i] > bobArr[i]) aliceScore++;
    if (bobArr[i] > aliceArr[i]) bobScore++;
    // não precisa de else: se as notas forem idênticas, nada acontece.
  }

  // o retorno pede um array com alice primeiro, bob segundo
  return [aliceScore, bobScore];
}

console.log(compareTriplets(aliceTriplet, bobTriplet));