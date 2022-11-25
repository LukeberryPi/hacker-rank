const EXERCISE_LINK = "https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [64, 75, 37, 91];

function gradingStudents(grades) {
  
  const roundUpToMultiple = (number, multiple, threshold) => {
    
    const multiplesArray = (new Array(100 / multiple).fill(multiple)).map((e, index) => e * (index + 1));
    const indexOfNearestMultiple = Math.floor(number / multiple);
  
    if (number < threshold) return number;
    else if (multiplesArray[indexOfNearestMultiple] - number < 3) return multiplesArray[indexOfNearestMultiple];
    else return number;
  
  }
  
  let finalGrades = [];

  for (let grade of grades) {
    finalGrades.push(roundUpToMultiple(grade, 5, 38));
  }
  
  return finalGrades;
}

console.log(gradingStudents(sampleInput));
