const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let [result] = email.match(/@\w+-?\w+\d?\.(com|ru)/gi);
  return result.slice(1);
}

module.exports = {
  getEmailDomain
};
