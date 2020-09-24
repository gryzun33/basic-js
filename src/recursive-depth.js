const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let count = 0;
    arr.forEach(i => {
      if (Array.isArray(i)) {
          count = Math.max(this.calculateDepth(i), count);
      };
    });
    return count + 1;
  };


}

  