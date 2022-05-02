const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
    getLength() {
      return this.chain.length;
    },
    addLink(value){
      this.chain.push(value);
      return this;
    },
    removeLink(position){
        if(!(position > 0 && position < this.chain.length) || !Number.isInteger(position)) {
          this.chain = [];
          throw new Error('You can\'t remove incorrect link!')
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain(){
        this.chain = this.chain.reverse(); 
        return this;
    },
    finishChain() {
        let finish =  this.chain.map(v=> `( ${v} )`).join('~~');
        this.chain = [];
        return finish;
    }
};

module.exports = {
  chainMaker
};
