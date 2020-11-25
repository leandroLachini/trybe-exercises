// exercicio 1 - part 2
const assert = require('assert');
const myRemove = (arr, item) => {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
       if (item !== arr[index]) {
        newArr.push(arr[index]);    
       }
    }
    return newArr;
}
assert.strictEqual(typeof(myRemove), 'function', 'resultado esperado é uma função');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'array esperado é [1, 2, 4]');
console.log(myRemove([1, 2, 3, 4], 3));