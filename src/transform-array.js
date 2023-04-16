const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const arr1 = [
    '--double-next',
    '--discard-prev',
    '--discard-next',
    '--double-prev',
  ];
  const result = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      if (arr[i] === '--double-next') {
        if (arr[i + 1]) result.push(arr[i + 1]);
      }
      if (arr[i] === '--discard-prev') {
        result.splice(i - 1, 1);
      }
      if (arr[i] === '--discard-next') {
        i = i + 2;
        continue;
      }
      if (arr[i] === '--double-prev') {
        if (arr[i - 1]) result.push(arr[i - 1]);
      }
    }
  }
  return result;
}

module.exports = {
  transform,
};
