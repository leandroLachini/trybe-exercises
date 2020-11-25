// exercicio 4 - part 1
const assert = require('assert');
const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error('parameters must be numbers');
      }
    return a + b;
}
assert.strictEqual(typeof(sum), 'function', 'resultado esperado é uma função');
// assert.strictEqual(sum(4, '5'), 9, 'resultado da soma esperado é 9');
assert.throws(() => {
    sum(4, '5');
});