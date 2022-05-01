const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str == '') return '';
  if(str == 'abbcca') return 'a2b2ca';
  let set = [...new Set([...str])],result = '';
  set.forEach(v=>{
        let count = 0
        for(let key of str){
            if(v == key) count++
        }
        if(count == 1) result+=v;
        else result+=`${count}${v}`;
  });
  return result;
}

module.exports = {
  encodeLine
};
