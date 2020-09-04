beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// console1: '1 - beforeEach'
// console2: '1 - test'
// console3: '1 - afterEach'
// console4: '1 - beforeEach'
// console5: '2 - beforeEach'
// console6: '2 - test'
// console7: '2 - afterEach'
// console8: '1 - afterEach'

