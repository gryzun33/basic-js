const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let arrAdditions = [];
  let additions = '';
  let result;
  
  if(options.addition !== undefined) {
    options.addition = String(options.addition);
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        arrAdditions.push(options.addition);
      }
      if(options.additionSeparator){
        additions = arrAdditions.join(options.additionSeparator);
      } else {
        additions = arrAdditions.join('|');
      }
      
    } else {
      additions = options.addition;
    }
  } 
  
  
  strWithAdd = str + additions;
  let strArr = [];

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strArr.push(strWithAdd);
    }
    if (options.separator) {
      result = strArr.join(options.separator);
    } else {
      result = strArr.join('+');
    }
  } else {
    result = strWithAdd;
  }

  return result;
};
  