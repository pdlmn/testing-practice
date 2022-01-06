const capitalize = require('./capitalize')

test('capitalizes the first letter', () => {
  expect(capitalize('heh')).toBe('Heh')
})
