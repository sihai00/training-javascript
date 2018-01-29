/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = (1 << 30) * 2 - 1
  var min =  - (1 << 30) * 2
  var result = x.toString().split('').reverse()
  
  if (x < 0) result.pop()
  result = x < 0 ? -result.join('') : +result.join('')

  if (result > max || result < min) return 0

  return result
};