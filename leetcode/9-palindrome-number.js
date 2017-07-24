/**
 * 回文
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true
  if (x < 100 && x % 11 === 0) return true  
  return x.toString() === x.toString().split('').reverse().join('')
};