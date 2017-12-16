/**
 * 寻找给定字符串中不重复子字符串的最大值
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  var l = 0, r = -1, res = 0, obj = {}

  while(l < s.length){
    if (r + 1 < s.length && !obj[s[r+1]]) {
      obj[s[++r]] = 1
    }else{
      obj[s[l++]] = 0
    }

    res = Math.max(res, r - l + 1)
  }

  return res
};

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


