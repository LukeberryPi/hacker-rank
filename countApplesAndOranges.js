const EXERCISE_LINK = "https://www.hackerrank.com/challenges/apple-and-orange/problem";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = {
  houseStartingPos: 7,
  houseEndPos: 11,
  appleTreePos: 5,
  orangeTreePos: 15,
  applesDistancesFromTree: [-2, 2, 1],
  orangesDistancesFromTree: [5, -6],
};

const { houseStartingPos, houseEndPos, appleTreePos, orangeTreePos, applesDistancesFromTree, orangesDistancesFromTree } = sampleInput;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const houseArea = [s, t];
  
  const isBetweenNodesInclusive = (pos, nodesArr) => {
    return pos >= Math.min(...nodesArr) && pos <= Math.max(...nodesArr);
  }
  
  let applesEndPos = apples.map(apple => apple + a);
  let orangesEndPos = oranges.map(orange => orange + b);
  
  let applesInHouseArea = 0;
  let orangesInHouseArea = 0;
  
  for (let applePos of applesEndPos) {
    if (isBetweenNodesInclusive(applePos, houseArea)) applesInHouseArea++;
  }
  
  for (let orangePos of orangesEndPos) {
    if (isBetweenNodesInclusive(orangePos, houseArea)) orangesInHouseArea++;
  }

  return [applesInHouseArea, orangesInHouseArea];
}

console.log(countApplesAndOranges(houseStartingPos, houseEndPos, appleTreePos, orangeTreePos, applesDistancesFromTree, orangesDistancesFromTree));
