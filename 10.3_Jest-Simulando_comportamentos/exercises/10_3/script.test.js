const mocking = require('./script.js');
jest.mock('./script.js')

describe('exercise 1', () => {
    test('mocking test with a specific number', () => {
        mocking.randomNumber = jest.fn().mockReturnValue(10)
    
        expect(mocking.randomNumber()).toBe(10);
        expect(mocking.randomNumber).toHaveBeenCalled();
        expect(mocking.randomNumber).toHaveBeenCalledTimes(1);
    })
})


describe('exercise 2', () => {
    test('mocking test with two parameters and a division', () => {
        mocking.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
        expect(mocking.randomNumber(10, 2)).toBe(5);
        expect(mocking.randomNumber).toHaveBeenCalled();
        expect(mocking.randomNumber).toHaveBeenCalledTimes(1);
        expect(mocking.randomNumber).toHaveBeenCalledWith(10, 2);
    })
})


describe('exercise 3 - mocking two times', () => {
    test('mocking test with three parameters and a multiplication', () => {
        mocking.randomNumber = jest.fn().mockImplementationOnce((a, b, c ) => a * b * c);
    
        expect(mocking.randomNumber(2, 4, 6)).toBe(48);
        expect(mocking.randomNumber).toHaveBeenCalled();
        expect(mocking.randomNumber).toHaveBeenCalledTimes(1);
    });
    
    test('mocking test with one parameter and return double', () => {
        mocking.randomNumber.mockReset();
        expect(mocking.randomNumber).toHaveBeenCalledTimes(0);

        mocking.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
    
        expect(mocking.randomNumber(10)).toBe(20);
        expect(mocking.randomNumber).toHaveBeenCalled();
        expect(mocking.randomNumber).toHaveBeenCalledTimes(1);
    });
});

//NÃO FUNCIONOU PORQUE?
describe('exercise 4', () => {

    test('mocking test with uppercased changing to lowercase', () => {
        mocking.uppercased.mockImplementation((str => str.toLowerCase()))

        expect(mocking.uppercased('UPPERCASE')).toBe('uppercase')
        expect(mocking.uppercased).toHaveBeenCalled()
        expect(mocking.uppercased).toHaveBeenCalledTimes(1)
        expect(mocking.uppercased).toHaveBeenCalledWith('UPPERCASE')
    })

    test('mocking test with firstLetter changing to last letter', () => {
        mocking.firstLetter.mockImplementation((str0 => str0.slice(-1)))

        expect(mocking.firstLetter('lastletter')).toBe('r')
        expect(mocking.firstLetter).toHaveBeenCalled()
        expect(mocking.firstLetter).toHaveBeenCalledTimes(1)
        expect(mocking.firstLetter).toHaveBeenCalledWith('lastletter')
    })

    test('mocking test with concatenate with two par to three par', () => {
        mocking.concatenate.mockImplementation((str1, str2, str3) => str1 + str2 + str3)

        expect(mocking.concatenate('con', 'cate', 'nate')).toBe('concatenate')
        expect(mocking.concatenate).toHaveBeenCalled()
        expect(mocking.concatenate).toHaveBeenCalledTimes(1)
        expect(mocking.concatenate).toHaveBeenCalledWith('con', 'cate', 'nate')
    })
})
