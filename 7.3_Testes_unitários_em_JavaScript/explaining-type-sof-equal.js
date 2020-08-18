const assert = require('assert');

const arr1 = [1, 2, 3];
const arr2 = [1, 2, '3'];
const arr3 = arr1;

assert.equal(arr1, arr2);
//ERRO - Os arrays tem o mesmo valor, mas não são o mesmo array. Equal serve somente quando os arrays são IGUAIS.
assert.equal(arr1, arr3);
//OK - Nesse caso os arrays são IGUAIS

assert.deepEqual(arr1, arr2);
//OK - Os valores são iguais

assert.deepStrictEqual(arr1, arr2);
//ERRO - Os valores são iguais, mas os tipos são diferentes (possui uma string no número 3)


