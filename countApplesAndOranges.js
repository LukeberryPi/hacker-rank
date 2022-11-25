const EXERCISE_LINK = "https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = {
  houseStart: 7,
  houseEnd: 11,
  appleTree: 5,
  orangeTree: 15,
  applesFallDistances: [-2, 2, 1],
  orangesFallDistances: [5, -6],
};

const { houseStart, houseEnd, appleTree, orangeTree, applesFallDistances, orangesFallDistances } = sampleInput;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const houseArea = [s, t];
  
  const isInside = (position, nodesArr) => {
    return position >= Math.min(...nodesArr) && position <= Math.max(...nodesArr);
  }
  
  const applesFinalPositions = apples.map(apple => apple + a);
  const orangesFinalPositions = oranges.map(orange => orange + b);
  
  let applesInHouseArea = 0, orangesInHouseArea = 0;
  
  applesFinalPositions.forEach(apple => {
    if (isInside(apple, houseArea)) applesInHouseArea++;
  });
  
  orangesFinalPositions.forEach(orange => {
    if (isInside(orange, houseArea)) orangesInHouseArea++;
  });

  return [applesInHouseArea, orangesInHouseArea];
}

console.log(countApplesAndOranges(houseStart, houseEnd, appleTree, orangeTree, applesFallDistances, orangesFallDistances));
