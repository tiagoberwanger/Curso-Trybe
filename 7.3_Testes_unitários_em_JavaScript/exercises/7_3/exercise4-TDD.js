const assert = require('assert');


// escreva a função findTheNeedle aqui

const arrayOfWords = ['house', 'train', 'slide', 'needle', 'book'];
const word = 'needle'

function findTheNeedle (arrayOfWords, word) {
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (word === arrayOfWords[i]) {
        return(i);
        }
    }
    return (-1);
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);