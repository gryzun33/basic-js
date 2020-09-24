const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }

  let membersFiltered = members.filter(item => (typeof(item) === 'string'));
  // for (let i = 0; i < membersFiltered.length; i++) {
  //   members[i] = members[i].trim(); 
  // }

  let dreamTeam = membersFiltered.map(item => item.trim()).map(item => item[0].toUpperCase()).sort().join('');

  return dreamTeam;

};

