const EXERCISE_LINK = "https://www.hackerrank.com/challenges/grading/problem";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = [73, 67, 38, 33];

function gradingStudents(grades) {
  
  const roundUpToMultiple = (number, multiple) => {
    
    const multiplesArray = (new Array(100 / multiple).fill(multiple)).map((e, index) => e * (index + 1));
    const indexOfNearestMultiple = Math.floor(number / multiple);
  
    if (number < 38) return number;
    else if (multiplesArray[indexOfNearestMultiple] - number < 3) return multiplesArray[indexOfNearestMultiple];
    else return number;
  
  }
  
  let finalGrades = [];

  for (let grade of grades) {
    finalGrades.push(roundUpToMultiple(grade, 5));
  }
  
  return finalGrades;
}

console.log(gradingStudents(sampleInput));
