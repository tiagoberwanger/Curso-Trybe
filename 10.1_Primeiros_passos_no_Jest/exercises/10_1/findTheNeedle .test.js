//REFATORAR PARA JEST
const findTheNeedle = require('./findTheNeedle.js')

describe('findTheNeedle', () => {

    test('finding the index of needle in array', () => {
        expect(indexOf (findTheNeedle (word))).toBe(3)
    })

    // test('', () => {
        
    // })

    // test('', () => {
        
    // })

})


// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);