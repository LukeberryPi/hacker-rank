const sampleInput = "07:05:45PM";

function timeConversion(s) {
  let timeCode = s.slice(-2);
  const [hours, minutes, seconds] = s.slice(0, -2).split(":");
  
  if (timeCode === "AM") return `${hours}:${minutes}:${seconds}$`;
  if (timeCode === "PM") return `${Number(hours) + 12}:${minutes}:${seconds}`;

}

console.log(timeConversion(sampleInput));