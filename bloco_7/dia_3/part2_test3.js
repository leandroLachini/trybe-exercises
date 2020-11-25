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
const arr = [1, 2, 3, 4];
const item = 3;
myRemove(arr, item);
assert.strictEqual(typeof(myRemove), 'function', 'resultado esperado é uma função');
assert.deepStrictEqual(arr, [1, 2, 3, 4], 'array NÃO deve sofrer alteração');

console.log(arr);
console.log(myRemove(arr, item));