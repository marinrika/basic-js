const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const arr = [];
  matrix.forEach((column) => {
    column.forEach((line, i) => {
      if (line === 0) {
        arr.push(i);
      }
      if (!arr.includes(i)) {
        sum += line;
      }
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
