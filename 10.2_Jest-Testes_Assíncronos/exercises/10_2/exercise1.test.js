//Teste jest
const uppercase = require('./exercise1');

test('test if transform in uppercase', (done) => {
    uppercase('tiago', (str) => {
        expect(str).toBe('TIAGO');
        done();
    })
})