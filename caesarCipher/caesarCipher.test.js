const caesarCipher = require('./caesarCipher')

describe('caesar cipher works correctly', () => {
  test('works with letters', () => {
    expect(caesarCipher('a', 1)).toBe('b')
  })
  test('works with words', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
  })
  test('works with phrases', () => {
    expect(caesarCipher('abc, abc', 1)).toBe('bcd, bcd')
  })
  test('wraps', () => {
    expect(caesarCipher('z', 1)).toBe('a')
  })
  test('works with big keys', () => {
    expect(caesarCipher('a', 80)).toBe('c')
  })
})
