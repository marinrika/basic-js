const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  const arrAddition = [];
  const arrString = [];
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrAddition.push(options.addition);
    }
  }
  if (options.additionSeparator !== undefined) {
    str = str + arrAddition.join(options.additionSeparator);
  } else {
    str = str + arrAddition.join('|');
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    arrString.push(str);
  }
  return arrString.join(options.separator || '+');
}

module.exports = {
  repeater,
};

console.log(
  repeater('STRING', {
    repeatTimes: 3,
    separator: '**',
    addition: 'PLUS',
    additionRepeatTimes: 3,
    additionSeparator: '00',
  })
);
