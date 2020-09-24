const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let counter = 0;

  for (let subArr of arr) {
    for (let elem of subArr) {
      if (elem === '^^') {
        counter++;
      }
    }
  }
  return counter;
};
