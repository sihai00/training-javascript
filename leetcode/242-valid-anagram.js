/**
 * 给定两个字符串，判断包含的字母是否相等
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var obj = {}

  if (s.length !== t.length) return false

  for (var i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
  }

  for (var i = 0; i < t.length; i++) {
    obj[t[i]] = obj[t[i]] ? obj[t[i]] - 1 : -1
  }

  for(var i in obj){
    if (obj[i] !== 0) return false
  }

  return true
};