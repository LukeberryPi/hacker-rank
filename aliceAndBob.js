const aliceTriplet = [1, 2, 3];
const bobTriplet = [3, 2, 1];

function compareTriplets(aliceArr, bobArr) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < aliceArr.length; i++) {
    if (aliceArr[i] > bobArr[i]) aliceScore++;
    if (bobArr[i] > aliceArr[i]) bobScore++;
  }

  return [aliceScore, bobScore];
}

console.log(compareTriplets(aliceTriplet, bobTriplet));