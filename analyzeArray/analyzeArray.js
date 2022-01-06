function analyzeArray(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  return {
    average: (arr.reduce((prev, curr) => prev + curr, 0) / arr.length) || 0,
    min: sortedArr[0] || 0,
    max: sortedArr[arr.length - 1] || 0,
    length: arr.length
  }
}

module.exports = analyzeArray
