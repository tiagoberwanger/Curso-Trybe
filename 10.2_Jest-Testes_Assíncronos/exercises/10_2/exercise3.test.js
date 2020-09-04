var getUserName = require('./exercise2');

it('if user is found', async () => {
    expect.assertions(1);
    expect(await getUserName(4)).toEqual('Mark');
})

it('if user is not found', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
})