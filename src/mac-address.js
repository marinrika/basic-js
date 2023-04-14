const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '-',
  ];
  const arr = Array.from(n);
  let counter = 0;
  for (let i = 2; i < arr.length; i = i + 3) {
    if (arr[i] !== '-') return false;
  }
  arr.forEach((element) => {
    if (arrValues.includes(element)) counter += 1;
  });
  if (counter === 17) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isMAC48Address,
};
