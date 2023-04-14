const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  let res;
  let res2;
  for (let i = 0; i < String(n).length; i++) {
    res =
      n -
      Number(String(n).slice(i, i + 1)) *
        Math.pow(10, Number(String(n).length - i - 1));
    res2 = Number(String(res).replace(/0/, ''));
    arr.push(res2);
    arr.sort((a, b) => b - a);
  }
  return arr[0];
}

module.exports = {
  deleteDigit,
};
