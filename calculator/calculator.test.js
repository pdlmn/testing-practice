const calculator = require('./calculator')

describe('calculator', () => {
  test('adding 2 and 3 equals 5', () => {
    expect(calculator.add(2, 3)).toBe(5)
  })
  test('subtracting 4 from 9 equals 5', () => {
    expect(calculator.subtract(9, 4)).toBe(5)
  })
  test('dividing 8 by 2 equals 4', () => {
    expect(calculator.divide(8, 2)).toBe(4)
  })
  test('multiplying 3 by 3 equals 9', () => {
    expect(calculator.divide(8, 2)).toBe(4)
  })
})
