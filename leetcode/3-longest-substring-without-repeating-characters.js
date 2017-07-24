/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var res = ''
  var dif = ''

  for(var i = 0, len = s.length; i < len; i++){
    var now = s.charAt(i)
    var index = dif.indexOf(now)
    if (index === -1) {
      dif += now
    }else{
      if (dif.length > res.length) res = dif
      dif = dif.substring(index + 1) + now
    }
  }

  return Math.max(res.length, dif.length)
};