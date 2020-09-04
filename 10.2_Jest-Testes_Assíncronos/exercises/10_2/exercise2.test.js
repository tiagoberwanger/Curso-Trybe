var getUserName = require('./exercise2');

test('if user is found', () => {
    expect.assertions(1);
    return getUserName(4).then(data => 
        expect(data).toEqual('Mark'));
})

test('if user is not found', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => 
        expect(error).toEqual({error: 'User with 6 not found.'}))
})