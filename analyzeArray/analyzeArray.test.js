const analyzeArray = require('./analyzeArray')

describe('analyze array', () => {
  test('works with simple arrays', () => {
    expect(analyzeArray([3, 1, 2]))
      .toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
      })
  })
  test('works with arrays with negative numbers', () => {
    expect(analyzeArray([5, -1, 2]))
      .toEqual({
        average: 2,
        min: -1,
        max: 5,
        length: 3
      })
  })
  test('works with empty arrays', () => {
    expect(analyzeArray([]))
      .toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
      })
  })
})
