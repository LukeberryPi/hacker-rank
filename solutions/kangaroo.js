const EXERCISE_LINK = "https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = {
  aKangarooInitialPosition: 0,
  aKangarooSpeed: 3,
  bKangarooInitialPosition: 4,
  bKangarooSpeed: 2,
};

const { aKangarooInitialPosition, aKangarooSpeed, bKangarooInitialPosition, bKangarooSpeed } = sampleInput;

function kangaroo(x1, v1, x2, v2) {
  let isEncounterPossible = false;

  for (let i = 0; i < 10000; i++) {
    if (v1 * i + x1 === v2 * i + x2) isEncounterPossible = true;
  }

  return isEncounterPossible ? "YES" : "NO";
}

console.log(kangaroo(aKangarooInitialPosition, aKangarooSpeed, bKangarooInitialPosition, bKangarooSpeed))