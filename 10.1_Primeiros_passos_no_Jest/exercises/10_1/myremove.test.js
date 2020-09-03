//REFATORAR PARA JEST
const myRemove = require('./myremove.js')

describe('myRemove', () => {

    test('check if it is a function', () => {
        expect(typeof (myRemove)).toBe('function')
    });

    test('test if remove from inside and outside array repeated numbers', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('test if remove from outside and not removed from inside array repeated numbers', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('test if remove just from outside numbers that are not inside', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

})


// assert.strictEqual(typeof myRemove, 'function');
