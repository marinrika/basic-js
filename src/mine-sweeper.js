const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  const res1 = [];
  const arr = [];
  const column = matrix.length;
  let str;
  for (let j = 0; j < column; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      str = matrix[j].length;
      if (matrix[j][i]) {
        arr.push(`${i - 1}, ${j - 1}`);
        arr.push(`${i - 1}, ${j}`);
        arr.push(`${i - 1}, ${j + 1}`);
        arr.push(`${i}, ${j - 1}`);
        arr.push(`${i}, ${j + 1}`);
        arr.push(`${i + 1}, ${j - 1}`);
        arr.push(`${i + 1}, ${j}`);
        arr.push(`${i + 1}, ${j + 1}`);
      }
    }
  }
  for (let i = 0; i < column; i++) {
    let res1 = [];
    for (let i = 0; i < str; i++) {
      res1.push(0);
    }
    res.push(res1);
  }
  for (let j = 0; j < column; j++) {
    for (let i = 0; i < str; i++) {
      arr.forEach((element) => {
        if (i === Number(element[0]) && j === Number(element[3])) {
          res[i][j] += 1;
        }
      });
    }
  }
  return res;
}

console.log(
  minesweeper([
    [false, false, false],
    [false, false, false],
  ])
);

module.exports = {
  minesweeper,
};
