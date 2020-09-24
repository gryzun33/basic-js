const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    // if (value === '') {
    //   this.arr.push(' ');
    //   return this;
    // }  
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position >= this.arr.length || position < 1) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }  
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },  
  finishChain() {
    let chain = this.arr.map(i => `( ${i} )`).join('~~'); 
    this.arr = []; 
    return chain;
  }
};

module.exports = chainMaker;