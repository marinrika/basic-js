const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = Array.from(str);
  let arr0 = arr[0];
  let result = '';
  let counter = 0;
  arr.forEach((element, i) => {
    if (element === arr0) {
      counter += 1;
    }
    if (element !== arr0) {
      result = result + `${counter}${arr0}`;
      counter = 1;
      arr0 = arr[i];
    }
    if (i === arr.length - 1) {
      result += `${counter}${arr0}`;
    }
  });
  result = result.replace(/1/g, '');
  return result;
}

module.exports = {
  encodeLine,
};
