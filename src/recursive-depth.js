const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let counter1 = 0;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        counter1 = Math.max(counter1, this.calculateDepth(element));
      }
    });
    counter += counter1;
    return counter;
  }
}

module.exports = {
  DepthCalculator,
};
