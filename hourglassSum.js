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

// first sum you have to make
// is from this central node (1, 1) of value 1:

// 1 1 1                                            (0, 0) (0, 1) (0, 2)
//   1     which can be translated to coordinates          (1, 1)
// 1 1 1                                            (2, 0) (2, 1) (2, 2)

// in reality, this is the sum of all neighbor nodes minus right and left node.

function hourglassSum(arr) {

  const sumSpecificHourglass = (centralNodeX, centralNodeY) => {
    let resultingSum = 0;
    
    resultingSum += Math.sum(arr[centralNodeX - 1][centralNodeY - 1], )

    return resultingSum;
  }

  const hourglassSumsArr = [];
  
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      hourglassSumsArr.push(sumSpecificHourglass(i, j));
    }
  }
  
  return Math.max(...hourglassSumsArr);
}

console.log(hourglassSum(sampleInput));