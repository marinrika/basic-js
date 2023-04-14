const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = [];
  arr.forEach((element) => {
    if (element !== -1) arr1.push(element);
  });
  arr1.sort((a, b) => a - b);
  arr.forEach((element, i) => {
    if (element !== -1) {
      arr.splice(i, 1, arr1[0]);
      arr1.splice(0, 1);
    }
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
