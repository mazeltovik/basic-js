const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
    // let lengthAddSep = options.additionSeparator.length;
    // let lengthSep = options.separator.toString().length;
    // let add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
    // let result = (str + add.slice(0,add.length - lengthAddSep) + options.separator).repeat(options.repeatTimes);
    // return result.slice(0, result.length - lengthSep);
}

module.exports = {
  repeater
};
