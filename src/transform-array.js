const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  let resArr = [];
    if (arr.length === 0) {
        return resArr;
    }

	arr.forEach((elem, i, arr) => {
		if (elem !== '--discard-next' && elem !== '--discard-prev' &&  elem !== '--double-next' && elem !== '--double-prev') {

			resArr.push(elem);

			if (arr[i - 1] === '--discard-next') {
				resArr.pop();
			} 
			if (arr[i - 1] === '--double-next') {
				resArr.push(elem);
			} 
			if ((arr[i + 1] === '--discard-prev') && (arr[i - 1] !== '--discard-next')) {
				resArr.pop();
			} 
			if ((arr[i + 1] === '--double-prev') && (arr[i - 1] !== '--discard-next')) {
				resArr.push(elem);
			}
	
		}
	});

  return resArr;

};
