const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  const result = {};
  let counter = 1;
  domains.forEach((element) => {
    if (element.indexOf('.') !== element.lastIndexOf('.')) {
      arr1.push(element.slice(element.lastIndexOf('.')));
      arr2.push(
        element.slice(element.lastIndexOf('.')) +
          element.slice(element.indexOf('.'), element.lastIndexOf('.'))
      );
      arr3.push(
        element.slice(element.lastIndexOf('.')) +
          element.slice(element.indexOf('.'), element.lastIndexOf('.')) +
          element.slice(element.indexOf('.'), element.indexOf('.') + 1) +
          element.slice(0, element.indexOf('.'))
      );
    } else {
      arr1.push(element.slice(element.indexOf('.')));
      arr2.push(
        element.slice(element.indexOf('.')) +
          element.slice(element.indexOf('.'), element.indexOf('.') + 1) +
          element.slice(0, element.indexOf('.'))
      );
    }
  });
  arr1.forEach((element) => {
    result[element] = counter;
    counter += 1;
  });
  counter = 1;
  arr2.forEach((element) => {
    result[element] = counter;
    counter += 1;
  });
  counter = 1;
  arr3.forEach((element) => {
    result[element] = counter;
  });
  return result;
}

module.exports = {
  getDNSStats,
};
