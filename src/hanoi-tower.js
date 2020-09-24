const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  function turnsCount(x) {
    if (x === 1) return 1;
    return turnsCount( x - 1 ) * 2 + 1;
  } 
  
  let turns = turnsCount(disksNumber);
  
  let seconds = Math.floor(turns * 3600/ turnsSpeed);

  return {turns: turns, seconds: seconds};

};
