/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true
  var low = s.toLowerCase().replace(/[^0-9a-z]/g, ''), l = 0, r = low.length - 1
  
  while(l < r){
    if (low[l] !== low[r]) return false
    l += 1
    r -= 1
  }

  return true
};