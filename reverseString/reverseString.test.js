const reverseString = require('./reverseString')

test('reverses the word', () => {
  expect(reverseString('America')).toBe('aciremA')
})
test('reverses the phrase', () => {
  expect(reverseString('I like dogs')).toBe('sgod ekil I')
})
