const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
 
if (!sampleActivity || (typeof(sampleActivity) !== 'string')) {
  return false;
}

sampleActivity = parseFloat(sampleActivity);

if (isNaN(sampleActivity) || (sampleActivity >= MODERN_ACTIVITY) || (sampleActivity <= 0)) {
  return false;
}

let k = 0.693 / HALF_LIFE_PERIOD;

let t = Math.log(MODERN_ACTIVITY / (+sampleActivity)) / k;

t = Math.ceil(t);

return t;

};