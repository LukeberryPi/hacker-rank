const EXERCISE_LINK = "https://www.hackerrank.com/challenges/time-conversion/problem";
// segure CTRL e clique no link para abrir esse desafio no seu navegador

const sampleInput = "11:05:45AM";

function timeConversion(s) {
  const timeCode = s.slice(-2);
  const [hours, minutes, seconds] = s.slice(0, -2).split(":");
  
  if (timeCode === "AM") return `${hours}:${minutes}:${seconds}`;
  if (timeCode === "PM" && hours === "12") return `00:${minutes}:${seconds}`;

  return `${Number(hours) + 12}:${minutes}:${seconds}`
};

console.log(timeConversion(sampleInput));