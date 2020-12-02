
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const oneArray = arrays
  .reduce((accumalator, currentValue) => accumalator.concat(currentValue), []);
  return oneArray;
  // escreva seu código aqui
}

console.log(flatten());

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);