const EXERCISE_LINK = "https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// the first sum you have to make
// is from this central node with coordinates (1, 1) of value 1:

// 1 1 1                                            (0, 0) (1, 0) (2, 0)
//   1     which can be translated to coordinates          (1, 1)
// 1 1 1                                            (0, 2) (1, 2) (2, 2)

// this should result in sum 7

// be mindful that, in math, the coordinates
// are given as (x, y) analog to (horizontal, vertical) orientation
// when iterating through a 2D array with arr[i][j]
//   i stands for which list you're selecting (vertically/up down)
//   j stands for which number on a list you're selecting (horizontally/left right)

function hourglassSum(arr) {

  const singleHourglassSum = (xCoordinate, yCoordinate) => {
    return arr[yCoordinate - 1][xCoordinate - 1]
        + arr[yCoordinate - 1][xCoordinate]
        + arr[yCoordinate - 1][xCoordinate + 1]
        + arr[yCoordinate][xCoordinate]
        + arr[yCoordinate + 1][xCoordinate - 1]
        + arr[yCoordinate + 1][xCoordinate]
        + arr[yCoordinate + 1][xCoordinate + 1];
  }
    
  const hourglassSumsArr = [];

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      hourglassSumsArr.push(singleHourglassSum(i, j));
    }
  }
  
  return Math.max(...hourglassSumsArr);
}

console.log(hourglassSum(sampleInput));
