//REFATORAR PARA JEST
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

    describe('myRemoveWithoutCopy', () => {
    test('if number is repeated remove form inside and outside array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    test('if number is repeated not accept not to remove form inside and outside array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    test('if number is not repeated, remove just from outside array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});