let sampleInput = 10;

function staircase(n) {
  const space = ' ';
  const hashtag = '#';
  let resultingString = '';

  for (let i = 1; i <= n; i++) {
    resultingString += `${space.repeat(n - i)}${hashtag.repeat(i)}\n`
  }

  return resultingString;
}

console.log(staircase(sampleInput));
