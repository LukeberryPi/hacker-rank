const sampleInput = [-4, 3, 9, 0, -4, 1];

function plusMinus(arr) {
  const totalElements = arr.length;
  let positivesCount = 0, negativesCount = 0, zeroesCount = 0;
  
  for (let i = 0; i < totalElements; i++) {
    if (arr[i] > 0) positivesCount++;
    if (arr[i] < 0) negativesCount++;
    if (arr[i] === 0) zeroesCount++;
  }

  const positivesToTotalRatio = (positivesCount/totalElements).toFixed(6);
  const negativesToTotalRatio = (negativesCount/totalElements).toFixed(6);
  const zeroesToTotalRatio = (zeroesCount/totalElements).toFixed(6);

  return `${positivesToTotalRatio}\n${negativesToTotalRatio}\n${zeroesToTotalRatio}`;
}

console.log(plusMinus(sampleInput));