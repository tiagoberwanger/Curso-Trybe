//REFATORAR PARA JEST
const findTheNeedle = require('./findTheNeedle.js')

describe('findTheNeedle', () => {

    test('finding the index of needle in array', () => {
        expect(findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'needle')).toBe(3)
    })

    test('finding the index of plant in array', () => {
        expect(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'plant')).toBe(0)
    })

    test('finding the index of plat in array', () => {
        expect(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'plat')).toBe(-1)
    })

})
